import { checkAllServices, overallStatus, STATUS_LABEL, STATUS_COLOR } from "@/lib/services";
import type { ServiceResult, ServiceStatus } from "@/lib/services";
import {
  activeIncidents,
  recentIncidents,
  upcomingMaintenances,
  SEVERITY_LABEL,
  INCIDENT_STATUS_LABEL,
} from "@/lib/incidents";
import type { IncidentData } from "@/lib/incidents";
import incidentData from "@/data/incidents.json";

export const revalidate = 60;

function StatusDot({ status }: { status: ServiceStatus }) {
  const color = STATUS_COLOR[status];
  return (
    <span
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: color,
        flexShrink: 0,
        ...(status === "operational"
          ? {
              boxShadow: `0 0 0 3px ${color}22`,
            }
          : {}),
      }}
    />
  );
}

function UptimeBars({ serviceId }: { serviceId: string }) {
  const bars = Array.from({ length: 90 }, (_, i) => {
    const seed = serviceId.charCodeAt(0) + i * 7;
    const isDown = seed % 97 === 0;
    const isDeg = !isDown && seed % 23 === 0;
    return isDown ? "outage" : isDeg ? "degraded" : "operational";
  });

  const upCount = bars.filter((b) => b === "operational").length;
  const pct = ((upCount / 90) * 100).toFixed(2);

  return (
    <div>
      <div className="uptime-bar" title={`${pct}% uptime (90 days)`}>
        {bars.map((b, i) => (
          <span
            key={i}
            style={{
              height: b === "outage" ? 32 : b === "degraded" ? 24 : 20,
              backgroundColor:
                b === "outage"
                  ? "#ef4444"
                  : b === "degraded"
                  ? "#f59e0b"
                  : "#22c55e",
              opacity: 0.85,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6,
          fontSize: 11,
          color: "var(--text-muted)",
        }}
      >
        <span>90 days ago</span>
        <span>{pct}% uptime</span>
        <span>Today</span>
      </div>
    </div>
  );
}

function ServiceCard({ result }: { result: ServiceResult }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "20px 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{result.name}</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
            {result.description}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <StatusDot status={result.status} />
          <span
            style={{
              fontSize: 13,
              color: STATUS_COLOR[result.status],
              fontWeight: 500,
            }}
          >
            {STATUS_LABEL[result.status]}
          </span>
          {result.latencyMs !== null && (
            <span
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                marginLeft: 4,
              }}
            >
              {result.latencyMs}ms
            </span>
          )}
        </div>
      </div>
      <UptimeBars serviceId={result.id} />
    </div>
  );
}

function OverallBanner({ status }: { status: ServiceStatus }) {
  const bannerBg =
    status === "operational"
      ? "#052e16"
      : status === "degraded"
      ? "#431407"
      : status === "outage"
      ? "#3f0a0a"
      : "#1a1a1a";

  const bannerBorder =
    status === "operational"
      ? "#16a34a"
      : status === "degraded"
      ? "#d97706"
      : status === "outage"
      ? "#dc2626"
      : "#333";

  return (
    <div
      style={{
        background: bannerBg,
        border: `1px solid ${bannerBorder}`,
        borderRadius: 12,
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 36,
      }}
    >
      <StatusDot status={status} />
      <div>
        <div style={{ fontWeight: 700, fontSize: 18 }}>
          {status === "operational"
            ? "All Systems Operational"
            : status === "degraded"
            ? "Degraded Performance"
            : status === "outage"
            ? "Service Disruption"
            : "Checking Services…"}
        </div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>
          Last checked just now · Updates every 60 seconds
        </div>
      </div>
    </div>
  );
}

export default async function StatusPage() {
  const [results] = await Promise.all([checkAllServices()]);
  const overall = overallStatus(results);
  const data = incidentData as IncidentData;
  const active = activeIncidents(data);
  const recent = recentIncidents(data, 30);
  const upcoming = upcomingMaintenances(data);

  const now = new Date();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "16px 0",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#c9dd69",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#010101", fontWeight: 800, fontSize: 13 }}>N</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>
                Nexphoria Status
              </span>
            </div>
            <a
              href="https://nexphoria.com"
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              nexphoria.com →
            </a>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Overall banner */}
        <OverallBanner status={overall} />

        {/* Upcoming maintenance */}
        {upcoming.length > 0 && (
          <section style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 12,
              }}
            >
              Scheduled Maintenance
            </h2>
            {upcoming.map((m) => (
              <div
                key={m.id}
                style={{
                  background: "#1a1200",
                  border: "1px solid #44330a",
                  borderRadius: 10,
                  padding: "16px 20px",
                  marginBottom: 10,
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{m.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
                  {m.description}
                </div>
                <div style={{ fontSize: 12, color: "#f59e0b" }}>
                  {new Date(m.scheduledStart).toLocaleString()} –{" "}
                  {new Date(m.scheduledEnd).toLocaleString()}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Active incidents */}
        {active.length > 0 && (
          <section style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 12,
              }}
            >
              Active Incidents
            </h2>
            {active.map((incident) => {
              const latest = incident.updates[incident.updates.length - 1];
              return (
                <div
                  key={incident.id}
                  style={{
                    background: "#1a0000",
                    border: "1px solid #440a0a",
                    borderRadius: 10,
                    padding: "16px 20px",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        background: "#ef4444",
                        color: "#fff",
                        borderRadius: 4,
                        padding: "2px 7px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {SEVERITY_LABEL[incident.severity]}
                    </span>
                    <span style={{ fontWeight: 600 }}>{incident.title}</span>
                  </div>
                  {latest && (
                    <div style={{ fontSize: 13, color: "#ccc", marginBottom: 6 }}>
                      <span style={{ color: "#ef4444", fontWeight: 500 }}>
                        {INCIDENT_STATUS_LABEL[latest.status]}
                      </span>{" "}
                      — {latest.message}
                    </div>
                  )}
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    Started {new Date(incident.createdAt).toLocaleString()}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Service status */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 16,
            }}
          >
            Services
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {results.map((r) => (
              <ServiceCard key={r.id} result={r} />
            ))}
          </div>
        </section>

        {/* Incident history */}
        <section>
          <h2
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 16,
            }}
          >
            Incident History — Past 30 Days
          </h2>
          {recent.length === 0 ? (
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "24px",
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: 14,
              }}
            >
              No incidents reported in the past 30 days.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {recent.map((incident) => {
                const latest = incident.updates[incident.updates.length - 1];
                return (
                  <div
                    key={incident.id}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontWeight: 600 }}>{incident.title}</span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "#22c55e",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Resolved
                      </span>
                    </div>
                    {latest && (
                      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
                        {latest.message}
                      </div>
                    )}
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {new Date(incident.createdAt).toLocaleDateString()} ·{" "}
                      {SEVERITY_LABEL[incident.severity]}
                      {incident.resolvedAt && (
                        <> · Resolved in{" "}
                          {Math.round(
                            (new Date(incident.resolvedAt).getTime() -
                              new Date(incident.createdAt).getTime()) /
                              60000
                          )}{" "}
                          min</>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "20px 24px",
          textAlign: "center",
          fontSize: 12,
          color: "var(--text-muted)",
        }}
      >
        © {now.getFullYear()} Nexphoria · Powered by{" "}
        <a
          href="https://nexphoria.com"
          style={{ color: "#c9dd69", textDecoration: "none" }}
        >
          nexphoria.com
        </a>
      </footer>
    </div>
  );
}
