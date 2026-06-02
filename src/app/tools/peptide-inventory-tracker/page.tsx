'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

type VialStatus = 'active' | 'used';
type DisplayStatus = 'active' | 'expiring' | 'expired' | 'used';
type FilterStatus = 'all' | DisplayStatus;

interface VialEntry {
  id: string;
  compound: string;
  vialSizeMg: number;
  concentration?: number;
  concentrationUnit: 'mcg/mL' | 'mg/mL';
  lotNumber: string;
  reconstitutionDate: string;
  expiryDate: string;
  storageLocation: string;
  quantity: number;
  notes: string;
  status: VialStatus;
  addedAt: string;
}

const COMPOUNDS = [
  'BPC-157',
  'Semaglutide',
  'Tirzepatide',
  'Retatrutide',
  'MK-677',
  'Ipamorelin',
  'CJC-1295 No DAC',
  'CJC-1295/Ipamorelin',
  'TB-500',
  'NAD+',
  'GHK-Cu',
  'Epitalon',
  'SS-31',
  'Sermorelin',
  'Tesamorelin',
  'PT-141',
  'Oxytocin',
  'Kisspeptin',
  'Selank',
  'Semax',
  'DSIP',
  'AOD-9604',
  'Melanotan II',
  'KPV',
  'LL-37',
  'Thymosin Alpha-1',
  'MOTS-c',
  'Wolverine Blend',
  'GLOW Blend',
  'KLW Blend',
  'Snap-8',
  'Follistatin 344',
  'Sterile Water 3mL',
  'Sterile Water 10mL',
];

const STORAGE_PRESETS = [
  '-20°C Freezer A',
  '-20°C Freezer B',
  '-80°C Ultra-Freezer',
  '4°C Fridge',
  'Cool & Dark (Room Temp)',
];

const GOLD = '#d4af37';
const GOLD_DIM = '#9c7d23';

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function addMonths(months: number): string {
  const d = new Date();
  d.setMonth(d.getMonth() + months);
  return d.toISOString().split('T')[0];
}

function daysDiff(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.floor((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function getDisplayStatus(vial: VialEntry): DisplayStatus {
  if (vial.status === 'used') return 'used';
  const diff = daysDiff(vial.expiryDate);
  if (diff < 0) return 'expired';
  if (diff <= 7) return 'expiring';
  return 'active';
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function exportCSV(inventory: VialEntry[]) {
  const headers = [
    'Compound', 'Vial Size (mg)', 'Concentration', 'Concentration Unit',
    'Lot Number', 'Reconstitution Date', 'Expiry Date', 'Storage Location',
    'Quantity', 'Status', 'Notes', 'Added At'
  ];
  const rows = inventory.map(v => [
    v.compound,
    v.vialSizeMg,
    v.concentration ?? '',
    v.concentrationUnit,
    v.lotNumber,
    v.reconstitutionDate,
    v.expiryDate,
    v.storageLocation,
    v.quantity,
    getDisplayStatus(v),
    v.notes,
    v.addedAt,
  ]);
  const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `nexphoria-inventory-${getToday()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const LS_KEY = 'nexphoria_inventory';

function loadInventory(): VialEntry[] {
  try {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as VialEntry[]) : [];
  } catch {
    return [];
  }
}

function saveInventory(inv: VialEntry[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(inv));
  } catch {}
}

const defaultForm = () => ({
  compound: 'BPC-157',
  vialSizeMg: 5,
  concentration: '' as string | number,
  concentrationUnit: 'mcg/mL' as 'mcg/mL' | 'mg/mL',
  lotNumber: '',
  reconstitutionDate: '',
  expiryDate: addMonths(24),
  storageLocation: '',
  quantity: 1,
  notes: '',
});

const STATUS_COLORS: Record<DisplayStatus, string> = {
  active: '#22c55e',
  expiring: '#f59e0b',
  expired: '#ef4444',
  used: '#6b7280',
};

const STATUS_LABELS: Record<DisplayStatus, string> = {
  active: 'Active',
  expiring: 'Expiring Soon',
  expired: 'Expired',
  used: 'Used',
};

export default function PeptideInventoryTracker() {
  const [inventory, setInventory] = useState<VialEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(defaultForm());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const inv = loadInventory();
    setInventory(inv);
    setShowForm(inv.length === 0);
    setMounted(true);
  }, []);

  const persistInventory = useCallback((inv: VialEntry[]) => {
    setInventory(inv);
    saveInventory(inv);
  }, []);

  const handleFormChange = (field: string, value: string | number) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      // Auto-calculate expiry when reconstitution date changes
      if (field === 'reconstitutionDate' && value) {
        updated.expiryDate = addDays(value as string, 30);
      }
      if (field === 'reconstitutionDate' && !value) {
        updated.expiryDate = addMonths(24);
      }
      return updated;
    });
  };

  const handleAddVial = () => {
    if (!form.compound || !form.vialSizeMg || !form.expiryDate) return;
    const newVial: VialEntry = {
      id: crypto.randomUUID(),
      compound: form.compound,
      vialSizeMg: Number(form.vialSizeMg),
      concentration: form.concentration !== '' ? Number(form.concentration) : undefined,
      concentrationUnit: form.concentrationUnit,
      lotNumber: form.lotNumber,
      reconstitutionDate: form.reconstitutionDate,
      expiryDate: form.expiryDate,
      storageLocation: form.storageLocation,
      quantity: Number(form.quantity) || 1,
      notes: form.notes,
      status: 'active',
      addedAt: new Date().toISOString(),
    };
    if (editId) {
      const updated = inventory.map(v => v.id === editId ? { ...newVial, id: editId } : v);
      persistInventory(updated);
      setEditId(null);
    } else {
      persistInventory([...inventory, newVial]);
    }
    setForm(defaultForm());
    setShowForm(false);
  };

  const handleMarkUsed = (id: string) => {
    persistInventory(inventory.map(v => v.id === id ? { ...v, status: 'used' } : v));
  };

  const handleDelete = (id: string) => {
    persistInventory(inventory.filter(v => v.id !== id));
  };

  const handleClearUsed = () => {
    persistInventory(inventory.filter(v => v.status !== 'used'));
  };

  const handleEdit = (vial: VialEntry) => {
    setForm({
      compound: vial.compound,
      vialSizeMg: vial.vialSizeMg,
      concentration: vial.concentration ?? '',
      concentrationUnit: vial.concentrationUnit,
      lotNumber: vial.lotNumber,
      reconstitutionDate: vial.reconstitutionDate,
      expiryDate: vial.expiryDate,
      storageLocation: vial.storageLocation,
      quantity: vial.quantity,
      notes: vial.notes,
    });
    setEditId(vial.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Computed stats
  const statuses = inventory.map(getDisplayStatus);
  const totalVials = inventory.reduce((s, v) => s + v.quantity, 0);
  const uniqueCompounds = new Set(inventory.filter(v => v.status !== 'used').map(v => v.compound)).size;
  const expiringSoon = statuses.filter(s => s === 'expiring').length;
  const expired = statuses.filter(s => s === 'expired').length;

  // Filtered inventory
  const filtered = inventory.filter(v => {
    const ds = getDisplayStatus(v);
    const matchesStatus = filterStatus === 'all' || ds === filterStatus;
    const matchesSearch = !searchQuery || v.compound.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '6px',
    color: '#fff',
    padding: '8px 12px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '6px',
  };

  if (!mounted) {
    return (
      <div style={{ background: '#09090b', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>Loading inventory...</div>
      </div>
    );
  }

  return (
    <div style={{ background: '#09090b', minHeight: '100vh', color: '#f4f4f5' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg,#0f0f11 0%,#09090b 100%)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '48px 24px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Research Tools', href: '/tools' },
              { label: 'Peptide Inventory Tracker' },
            ]}
            variant="dark"
          />
          <div style={{ marginTop: '24px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, fontWeight: 600 }}>
              Research Tool
            </span>
            <h1 style={{ fontSize: 'clamp(28px,5vw,42px)', fontWeight: 300, letterSpacing: '-0.02em', color: '#fff', marginTop: '8px', marginBottom: '12px' }}>
              Peptide Vial Inventory Tracker
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', lineHeight: 1.6 }}>
              Track your research vials, monitor expiry dates, and manage your peptide inventory — all stored locally in your browser.
            </p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Stats Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '32px' }}>
          {[
            { label: 'Total Vials', value: totalVials, color: '#fff' },
            { label: 'Compounds', value: uniqueCompounds, color: '#fff' },
            { label: 'Expiring Soon', value: expiringSoon, color: expiringSoon > 0 ? '#f59e0b' : 'rgba(255,255,255,0.4)' },
            { label: 'Expired', value: expired, color: expired > 0 ? '#ef4444' : 'rgba(255,255,255,0.4)' },
          ].map(stat => (
            <div key={stat.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 300, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Header actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <button
            onClick={() => { setShowForm(!showForm); if (editId) { setEditId(null); setForm(defaultForm()); } }}
            style={{ background: GOLD, color: '#000', border: 'none', borderRadius: '6px', padding: '10px 20px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
          >
            {showForm && !editId ? '— Close Form' : '+ Add Vial'}
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            {inventory.some(v => v.status === 'used') && (
              <button
                onClick={handleClearUsed}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', cursor: 'pointer' }}
              >
                Clear Used
              </button>
            )}
            <button
              onClick={() => exportCSV(inventory)}
              disabled={inventory.length === 0}
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: inventory.length ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', cursor: inventory.length ? 'pointer' : 'default' }}
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Add/Edit Vial Form */}
        {showForm && (
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '28px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>
              {editId ? 'Edit Vial' : 'Add New Vial'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {/* Compound */}
              <div>
                <label style={labelStyle}>Compound *</label>
                <select value={form.compound} onChange={e => handleFormChange('compound', e.target.value)} style={inputStyle}>
                  {COMPOUNDS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              {/* Vial Size */}
              <div>
                <label style={labelStyle}>Vial Size (mg) *</label>
                <input type="number" min="0.1" step="0.1" value={form.vialSizeMg} onChange={e => handleFormChange('vialSizeMg', e.target.value)} style={inputStyle} />
              </div>
              {/* Concentration */}
              <div>
                <label style={labelStyle}>Concentration (optional)</label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input type="number" min="0" step="0.1" placeholder="e.g. 500" value={form.concentration} onChange={e => handleFormChange('concentration', e.target.value)} style={{ ...inputStyle, flex: 1 }} />
                  <select value={form.concentrationUnit} onChange={e => handleFormChange('concentrationUnit', e.target.value)} style={{ ...inputStyle, width: 'auto', flexShrink: 0 }}>
                    <option value="mcg/mL">mcg/mL</option>
                    <option value="mg/mL">mg/mL</option>
                  </select>
                </div>
              </div>
              {/* Lot Number */}
              <div>
                <label style={labelStyle}>Lot Number</label>
                <input type="text" placeholder="e.g. NXP-BPC-2405-0012" value={form.lotNumber} onChange={e => handleFormChange('lotNumber', e.target.value)} style={inputStyle} />
              </div>
              {/* Reconstitution Date */}
              <div>
                <label style={labelStyle}>Reconstitution Date</label>
                <input type="date" value={form.reconstitutionDate} onChange={e => handleFormChange('reconstitutionDate', e.target.value)} style={inputStyle} />
              </div>
              {/* Expiry Date */}
              <div>
                <label style={labelStyle}>Expiry Date *</label>
                <input type="date" value={form.expiryDate} onChange={e => handleFormChange('expiryDate', e.target.value)} style={inputStyle} />
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
                  Auto: lyophilized +24mo · reconstituted +30d
                </div>
              </div>
              {/* Storage Location */}
              <div>
                <label style={labelStyle}>Storage Location</label>
                <input
                  type="text"
                  list="storage-presets"
                  placeholder="e.g. -20°C Freezer A"
                  value={form.storageLocation}
                  onChange={e => handleFormChange('storageLocation', e.target.value)}
                  style={inputStyle}
                />
                <datalist id="storage-presets">
                  {STORAGE_PRESETS.map(p => <option key={p} value={p} />)}
                </datalist>
              </div>
              {/* Quantity */}
              <div>
                <label style={labelStyle}>Quantity (vials)</label>
                <input type="number" min="1" value={form.quantity} onChange={e => handleFormChange('quantity', e.target.value)} style={inputStyle} />
              </div>
              {/* Notes */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Notes</label>
                <input type="text" placeholder="Optional notes..." value={form.notes} onChange={e => handleFormChange('notes', e.target.value)} style={inputStyle} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={handleAddVial}
                disabled={!form.compound || !form.vialSizeMg || !form.expiryDate}
                style={{ background: GOLD, color: '#000', border: 'none', borderRadius: '6px', padding: '10px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', opacity: (!form.compound || !form.vialSizeMg || !form.expiryDate) ? 0.5 : 1 }}
              >
                {editId ? 'Update Vial' : 'Add Vial'}
              </button>
              {editId && (
                <button
                  onClick={() => { setEditId(null); setForm(defaultForm()); setShowForm(false); }}
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', borderRadius: '6px', padding: '10px 16px', fontSize: '13px', cursor: 'pointer' }}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}

        {/* Filter Bar */}
        {inventory.length > 0 && (
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search compounds..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ ...inputStyle, width: 'auto', flex: 1, minWidth: '180px' }}
            />
            {(['all', 'active', 'expiring', 'expired', 'used'] as FilterStatus[]).map(s => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  border: filterStatus === s ? `1px solid ${GOLD}` : '1px solid rgba(255,255,255,0.12)',
                  background: filterStatus === s ? `${GOLD}22` : 'transparent',
                  color: filterStatus === s ? GOLD : 'rgba(255,255,255,0.6)',
                  transition: 'all 0.15s',
                }}
              >
                {s === 'all' ? 'All' : STATUS_LABELS[s as DisplayStatus]}
              </button>
            ))}
          </div>
        )}

        {/* Empty State */}
        {inventory.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px', border: '1px dashed rgba(255,255,255,0.12)', borderRadius: '12px' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 16px' }}>
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="1" ry="1"/>
              <line x1="9" y1="12" x2="15" y2="12"/>
              <line x1="9" y1="16" x2="12" y2="16"/>
            </svg>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', marginBottom: '8px' }}>No vials in inventory</p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', marginBottom: '24px' }}>Add your first vial to start tracking</p>
            <button
              onClick={() => setShowForm(true)}
              style={{ background: GOLD, color: '#000', border: 'none', borderRadius: '6px', padding: '10px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}
            >
              + Add First Vial
            </button>
          </div>
        )}

        {/* No results */}
        {inventory.length > 0 && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px', color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
            No vials match your filter.{' '}
            <button onClick={() => { setFilterStatus('all'); setSearchQuery(''); }} style={{ color: GOLD, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' }}>Clear filters</button>
          </div>
        )}

        {/* Vial Cards */}
        {filtered.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {filtered.map(vial => {
              const ds = getDisplayStatus(vial);
              const statusColor = STATUS_COLORS[ds];
              const diff = daysDiff(vial.expiryDate);
              const expiryColor = ds === 'expired' ? '#ef4444' : ds === 'expiring' ? '#f59e0b' : '#22c55e';

              return (
                <div
                  key={vial.id}
                  style={{
                    background: ds === 'used' ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${ds === 'expired' ? 'rgba(239,68,68,0.3)' : ds === 'expiring' ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '12px',
                    padding: '20px',
                    opacity: ds === 'used' ? 0.6 : 1,
                  }}
                >
                  {/* Card Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: statusColor,
                          background: `${statusColor}18`,
                          border: `1px solid ${statusColor}44`,
                          borderRadius: '4px',
                          padding: '2px 8px',
                        }}
                      >
                        {STATUS_LABELS[ds]}
                      </span>
                      {vial.quantity > 1 && (
                        <span style={{ marginLeft: '8px', fontSize: '11px', color: GOLD, background: `${GOLD}18`, border: `1px solid ${GOLD}44`, borderRadius: '4px', padding: '2px 8px', fontWeight: 600 }}>
                          ×{vial.quantity}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Compound & Size */}
                  <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: ds === 'used' ? 'rgba(255,255,255,0.4)' : '#fff', margin: 0, textDecoration: ds === 'used' ? 'line-through' : 'none' }}>
                      {vial.compound}
                    </h3>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
                      {vial.vialSizeMg}mg
                      {vial.concentration && ` · ${vial.concentration} ${vial.concentrationUnit}`}
                    </div>
                  </div>

                  {/* Details grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                    {vial.lotNumber && (
                      <div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>Lot</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>{vial.lotNumber}</div>
                      </div>
                    )}
                    {vial.reconstitutionDate && (
                      <div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>Reconstituted</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                          {formatDate(vial.reconstitutionDate)}
                          <span style={{ color: 'rgba(255,255,255,0.35)', marginLeft: '4px' }}>
                            ({Math.abs(daysDiff(vial.reconstitutionDate))}d ago)
                          </span>
                        </div>
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>Expires</div>
                      <div style={{ fontSize: '12px', color: expiryColor, fontWeight: ds !== 'active' ? 600 : 400 }}>
                        {formatDate(vial.expiryDate)}
                        {ds === 'expiring' && <span style={{ marginLeft: '4px' }}>({diff}d)</span>}
                        {ds === 'expired' && <span style={{ marginLeft: '4px' }}>({Math.abs(diff)}d ago)</span>}
                      </div>
                    </div>
                    {vial.storageLocation && (
                      <div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>Storage</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{vial.storageLocation}</div>
                      </div>
                    )}
                  </div>

                  {vial.notes && (
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginBottom: '14px', padding: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                      {vial.notes}
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
                    {vial.status !== 'used' && (
                      <button
                        onClick={() => handleMarkUsed(vial.id)}
                        style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', borderRadius: '6px', padding: '7px', fontSize: '12px', cursor: 'pointer', fontWeight: 500 }}
                      >
                        Mark Used
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(vial)}
                      style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', borderRadius: '6px', padding: '7px', fontSize: '12px', cursor: 'pointer', fontWeight: 500 }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(vial.id)}
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444', borderRadius: '6px', padding: '7px 12px', fontSize: '12px', cursor: 'pointer' }}
                      title="Delete vial"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                        <path d="M10 11v6M14 11v6"/>
                        <path d="M9 6V4h6v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tips */}
        {inventory.length > 0 && (
          <div style={{ marginTop: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: GOLD_DIM, marginBottom: '12px', fontWeight: 600 }}>Inventory Tips</div>
            <ul style={{ margin: 0, padding: '0 0 0 16px', listStyle: 'disc', color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7 }}>
              <li>Lyophilized peptides stored at -20°C: 18–24 months typical shelf life</li>
              <li>Reconstituted with BAC water at 4°C: 28–30 days maximum</li>
              <li>Reconstituted with sterile saline: use within 24–48 hours</li>
              <li>NAD+ and oxytocin: light-sensitive — store in amber vials, away from fluorescent light</li>
              <li>GHK-Cu: blue-violet color confirms integrity; colorless = degraded</li>
            </ul>
          </div>
        )}

        {/* Related Tools */}
        <div style={{ marginTop: '32px' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>Related Tools</div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { href: '/tools/peptide-label-generator', label: 'Vial Label Generator' },
              { href: '/tools/peptide-stability-checker', label: 'Stability Checker' },
              { href: '/tools/reconstitution-calculator', label: 'Reconstitution Calculator' },
              { href: '/guides/storage', label: 'Storage Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '8px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* RUO Disclaimer */}
        <div style={{ marginTop: '40px', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
          For Research Use Only. Not for human consumption. All inventory data is stored locally in your browser and never transmitted to Nexphoria servers.
          <br />
          <Link href="/products" style={{ color: GOLD_DIM, textDecoration: 'none', marginLeft: '8px' }}>Browse Catalog →</Link>
        </div>
      </div>
    </div>
  );
}
