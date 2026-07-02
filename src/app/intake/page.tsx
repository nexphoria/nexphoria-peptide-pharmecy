'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ──────────────────────────────────────────────────────────────────

type Answers = {
  goal?: string
  health?: string
  age?: string
  medications?: string
  medicationsDetail?: string
  bloodwork?: string
  email?: string
  firstName?: string
  lastName?: string
}

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

// ─── Goal Icons (inline SVG) ─────────────────────────────────────────────────

function IconRecovery() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconSkin() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M14 5C9.03 5 5 9.03 5 14c0 2.76 1.12 5.26 2.93 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 5c4.97 0 9 4.03 9 9 0 2.76-1.12 5.26-2.93 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 8v3M14 17v3M8 14h3M17 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconLongevity() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M14 5v4M14 19v4M5 14h4M19 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 14l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconMental() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M10 6C7.24 6 5 8.24 5 11c0 1.5.63 2.85 1.64 3.8L14 22l7.36-7.2A5.96 5.96 0 0023 11c0-2.76-2.24-5-5-5-1.5 0-2.85.63-3.8 1.64A5.96 5.96 0 0010 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconBody() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 13h8M14 11v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 16l-2 6M19 16l2 6M12 16l-.5 6M16 16l.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconSleep() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M20.5 14.5A8.5 8.5 0 0113.5 7a8.5 8.5 0 100 15 8.5 8.5 0 007-7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 6l1.5 1.5M19 9h3M21.5 6v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

// ─── Animated Checkmark ───────────────────────────────────────────────────────

function AnimatedCheckmark() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.circle
        cx="40"
        cy="40"
        r="36"
        stroke="#B8A44C"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      />
      <motion.path
        d="M26 40l10 10 18-20"
        stroke="#B8A44C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
      />
    </motion.svg>
  )
}

// ─── Slide Variants ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
}

const slideTransition = {
  duration: 0.38,
  ease: 'easeInOut' as const,
}

// ─── Question tile ────────────────────────────────────────────────────────────

interface TileProps {
  label: string
  icon?: React.ReactNode
  selected: boolean
  onClick: () => void
  description?: string
}

function Tile({ label, icon, selected, onClick, description }: TileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full text-left rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A44C] focus-visible:ring-offset-2"
      style={{
        borderColor: selected ? '#B8A44C' : '#E8E3DB',
        backgroundColor: selected ? '#FDF9F0' : '#FFFFFF',
        boxShadow: selected
          ? '0 0 0 1px #B8A44C20, 0 4px 20px #B8A44C15'
          : '0 1px 4px rgba(0,0,0,0.04)',
      }}
      aria-pressed={selected}
    >
      <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
        {icon && (
          <span
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
            style={{
              backgroundColor: selected ? '#B8A44C18' : '#F4F1EC',
              color: selected ? '#B8A44C' : '#6B6560',
            }}
          >
            {icon}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <span
            className="block font-sans text-[15px] sm:text-base font-medium leading-tight transition-colors duration-200"
            style={{ color: selected ? '#1A1A18' : '#2C2A27' }}
          >
            {label}
          </span>
          {description && (
            <span className="block font-sans text-xs sm:text-sm mt-0.5" style={{ color: '#9B9690' }}>
              {description}
            </span>
          )}
        </div>
        <span
          className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
          style={{
            borderColor: selected ? '#B8A44C' : '#D4CEC5',
            backgroundColor: selected ? '#B8A44C' : 'transparent',
          }}
        >
          {selected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </div>
    </button>
  )
}

// ─── Goal Tile (bigger, 2-col grid) ──────────────────────────────────────────

function GoalTile({ label, icon, selected, onClick }: Omit<TileProps, 'description'>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full text-left rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A44C] focus-visible:ring-offset-2"
      style={{
        borderColor: selected ? '#B8A44C' : '#E8E3DB',
        backgroundColor: selected ? '#FDF9F0' : '#FFFFFF',
        boxShadow: selected
          ? '0 0 0 1px #B8A44C20, 0 6px 24px #B8A44C18'
          : '0 1px 4px rgba(0,0,0,0.04)',
      }}
      aria-pressed={selected}
    >
      <div className="flex flex-col items-center text-center gap-3 px-4 py-6 sm:py-7">
        <span
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: selected ? '#B8A44C18' : '#F4F1EC',
            color: selected ? '#B8A44C' : '#6B6560',
          }}
        >
          {icon}
        </span>
        <span
          className="font-sans text-[13px] sm:text-sm font-medium leading-tight"
          style={{ color: selected ? '#1A1A18' : '#2C2A27' }}
        >
          {label}
        </span>
      </div>
      {selected && (
        <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8A44C' }}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </button>
  )
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100)
  return (
    <div className="w-full h-[3px] bg-[#EDE8E1] rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: '#B8A44C' }}
        initial={{ width: `${Math.round(((step - 1) / total) * 100)}%` }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const TOTAL_STEPS = 7 // questions only (not completion)

export default function IntakePage() {
  const [step, setStep] = useState<Step>(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Answers>({})
  const [emailError, setEmailError] = useState('')
  const [medicationsText, setMedicationsText] = useState('')
  const [showMedInput, setShowMedInput] = useState(false)

  // Sync medication text detail when typing
  useEffect(() => {
    if (answers.medications === 'Yes') {
      setShowMedInput(true)
    } else {
      setShowMedInput(false)
    }
  }, [answers.medications])

  const goNext = useCallback(() => {
    setDirection(1)
    setStep((s) => (s < 7 ? ((s + 1) as Step) : s))
  }, [])

  const goBack = useCallback(() => {
    setDirection(-1)
    setStep((s) => (s > 0 ? ((s - 1) as Step) : s))
  }, [])

  const canAdvance = useCallback((): boolean => {
    switch (step) {
      case 0: return !!answers.goal
      case 1: return !!answers.health
      case 2: return !!answers.age
      case 3: return !!answers.medications
      case 4: return !!answers.bloodwork
      case 5: {
        const email = answers.email || ''
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }
      case 6: return !!(answers.firstName?.trim() && answers.lastName?.trim())
      default: return false
    }
  }, [step, answers])

  const handleEmailChange = (val: string) => {
    setAnswers((a) => ({ ...a, email: val }))
    if (emailError) setEmailError('')
  }

  const handleNext = () => {
    if (step === 5) {
      const email = answers.email || ''
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError('Please enter a valid email address.')
        return
      }
    }
    if (canAdvance()) goNext()
  }

  // ── Completion Screen ─────���────────────────────────────────────────────────
  if (step === 7) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ backgroundColor: '#0F0F0E' }}
      >
        <motion.div
          className="flex flex-col items-center text-center max-w-sm mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8">
            <AnimatedCheckmark />
          </div>

          <motion.span
            className="block text-xs font-sans tracking-[0.2em] uppercase mb-4"
            style={{ color: '#B8A44C' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Intake Received
          </motion.span>

          <motion.h1
            className="font-display text-4xl sm:text-5xl font-light leading-tight mb-5"
            style={{ color: '#FAF7F2' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.55 }}
          >
            Your protocol is
            <br />
            being reviewed.
          </motion.h1>

          <motion.p
            className="font-sans text-sm sm:text-base leading-relaxed mb-10"
            style={{ color: '#9B9690' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            A board-certified physician will review your intake and contact you within{' '}
            <span style={{ color: '#B8A44C' }}>24–48 hours</span>.
          </motion.p>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.45 }}
          >
            <a
              href="/protocols"
              className="block w-full text-center rounded-full py-4 font-sans text-sm font-medium tracking-wide transition-all duration-200"
              style={{ backgroundColor: '#B8A44C', color: '#0F0F0E' }}
            >
              Explore Your Recommended Protocol
            </a>
            <a
              href="/"
              className="block w-full text-center mt-3 py-4 font-sans text-sm"
              style={{ color: '#6B6560' }}
            >
              Return home
            </a>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // ── Quiz Shell ─────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Top bar */}
      <header className="flex-shrink-0 px-6 pt-6 pb-4 sm:px-10 sm:pt-8">
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-between mb-5">
            <a href="/" className="font-display text-xl tracking-wide" style={{ color: '#1A1A18' }}>
              Nexphoria
            </a>
            <span className="font-sans text-xs" style={{ color: '#9B9690' }}>
              Step {step + 1} of {TOTAL_STEPS}
            </span>
          </div>
          {/* Progress bar */}
          <ProgressBar step={step + 1} total={TOTAL_STEPS} />
        </div>
      </header>

      {/* Question area */}
      <main className="flex-1 flex flex-col px-6 pb-6 sm:px-10 sm:pb-10 overflow-hidden">
        <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="flex-1 flex flex-col"
            >
              {/* ── Step 0: Goal ── */}
              {step === 0 && (
                <StepGoal answers={answers} setAnswers={setAnswers} />
              )}

              {/* ── Step 1: Health ── */}
              {step === 1 && (
                <StepHealth answers={answers} setAnswers={setAnswers} />
              )}

              {/* ── Step 2: Age ── */}
              {step === 2 && (
                <StepAge answers={answers} setAnswers={setAnswers} />
              )}

              {/* ── Step 3: Medications ── */}
              {step === 3 && (
                <StepMedications
                  answers={answers}
                  setAnswers={setAnswers}
                  medicationsText={medicationsText}
                  setMedicationsText={setMedicationsText}
                  showMedInput={showMedInput}
                />
              )}

              {/* ── Step 4: Bloodwork ── */}
              {step === 4 && (
                <StepBloodwork answers={answers} setAnswers={setAnswers} />
              )}

              {/* ── Step 5: Email ── */}
              {step === 5 && (
                <StepEmail
                  answers={answers}
                  onEmailChange={handleEmailChange}
                  emailError={emailError}
                />
              )}

              {/* ── Step 6: Name ── */}
              {step === 6 && (
                <StepName answers={answers} setAnswers={setAnswers} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex-shrink-0 flex items-center justify-between gap-4 pt-6">
            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1.5 font-sans text-sm transition-colors duration-150 focus:outline-none focus-visible:underline"
                style={{ color: '#6B6560' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={!canAdvance()}
              className="rounded-full px-8 py-3.5 font-sans text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A44C] focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              style={{
                backgroundColor: canAdvance() ? '#0F0F0E' : '#D4CEC5',
                color: canAdvance() ? '#FAF7F2' : '#9B9690',
              }}
            >
              {step === 6 ? 'Submit' : 'Continue'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── Step Sub-Components ──────────────────────────────────────────────────────

interface StepProps {
  answers: Answers
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
}

function QuestionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display text-3xl sm:text-4xl font-light leading-tight mb-2"
      style={{ color: '#1A1A18' }}
    >
      {children}
    </h2>
  )
}

function QuestionSubtext({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-sm mb-7 sm:mb-8" style={{ color: '#9B9690' }}>
      {children}
    </p>
  )
}

// ── Step 0: Goal ─────────────────────────────────────────────��────────────────

function StepGoal({ answers, setAnswers }: StepProps) {
  const goals = [
    { label: 'Recovery & Repair', icon: <IconRecovery /> },
    { label: 'Skin & Beauty', icon: <IconSkin /> },
    { label: 'Longevity', icon: <IconLongevity /> },
    { label: 'Mental Clarity', icon: <IconMental /> },
    { label: 'Body Composition', icon: <IconBody /> },
    { label: 'Sleep & Growth', icon: <IconSleep /> },
  ]

  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>What&apos;s your primary goal?</QuestionHeading>
      <QuestionSubtext>Select the area you most want to optimize.</QuestionSubtext>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {goals.map((g) => (
          <GoalTile
            key={g.label}
            label={g.label}
            icon={g.icon}
            selected={answers.goal === g.label}
            onClick={() => setAnswers((a) => ({ ...a, goal: g.label }))}
          />
        ))}
      </div>
    </div>
  )
}

// ── Step 1: Health ────────────────────────────────────────────────────────────

function StepHealth({ answers, setAnswers }: StepProps) {
  const options = [
    { label: 'Very healthy', description: 'I exercise regularly and feel great' },
    { label: 'Generally healthy', description: 'Minor issues here and there' },
    { label: 'Some health challenges', description: 'I manage a few ongoing concerns' },
    { label: 'Managing a condition', description: 'Under physician care for a specific condition' },
  ]

  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>How would you describe your current health?</QuestionHeading>
      <QuestionSubtext>This helps us personalize your protocol safely.</QuestionSubtext>
      <div className="flex flex-col gap-3">
        {options.map((o) => (
          <Tile
            key={o.label}
            label={o.label}
            description={o.description}
            selected={answers.health === o.label}
            onClick={() => setAnswers((a) => ({ ...a, health: o.label }))}
          />
        ))}
      </div>
    </div>
  )
}

// ── Step 2: Age ───────────────────────────────────────────────────────────────

function StepAge({ answers, setAnswers }: StepProps) {
  const ranges = ['25–34', '35–44', '45–54', '55+']

  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>What&apos;s your age range?</QuestionHeading>
      <QuestionSubtext>Peptide protocols are tailored to your life stage.</QuestionSubtext>
      <div className="flex flex-col gap-3">
        {ranges.map((r) => (
          <Tile
            key={r}
            label={r}
            selected={answers.age === r}
            onClick={() => setAnswers((a) => ({ ...a, age: r }))}
          />
        ))}
      </div>
    </div>
  )
}

// ── Step 3: Medications ───────────────────────────────────────────────────────

interface StepMedsProps extends StepProps {
  medicationsText: string
  setMedicationsText: React.Dispatch<React.SetStateAction<string>>
  showMedInput: boolean
}

function StepMedications({ answers, setAnswers, medicationsText, setMedicationsText, showMedInput }: StepMedsProps) {
  const options = [
    { label: 'Yes', description: 'I take prescription or OTC medications' },
    { label: 'No', description: 'I am not currently on any medications' },
    { label: 'Not sure', description: 'I would like to discuss with a physician' },
  ]

  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>Are you currently taking any medications?</QuestionHeading>
      <QuestionSubtext>Our physicians review all interactions before prescribing.</QuestionSubtext>
      <div className="flex flex-col gap-3">
        {options.map((o) => (
          <Tile
            key={o.label}
            label={o.label}
            description={o.description}
            selected={answers.medications === o.label}
            onClick={() => setAnswers((a) => ({ ...a, medications: o.label }))}
          />
        ))}
      </div>

      <AnimatePresence>
        {showMedInput && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <label className="block font-sans text-xs mb-2" style={{ color: '#6B6560' }}>
              Please list your medications (optional)
            </label>
            <textarea
              rows={3}
              value={medicationsText}
              onChange={(e) => {
                setMedicationsText(e.target.value)
                setAnswers((a) => ({ ...a, medicationsDetail: e.target.value }))
              }}
              placeholder="e.g. Metformin 500mg, Vitamin D3..."
              className="w-full rounded-xl border px-4 py-3 font-sans text-sm resize-none focus:outline-none transition-colors duration-150"
              style={{
                borderColor: '#E8E3DB',
                backgroundColor: '#FFFFFF',
                color: '#1A1A18',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#B8A44C' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E3DB' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Step 4: Bloodwork ─────────────────────────────────────────────────────────

function StepBloodwork({ answers, setAnswers }: StepProps) {
  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>Have you had bloodwork done in the last 12 months?</QuestionHeading>
      <QuestionSubtext>Recent labs help us calibrate your baseline and recommend the right peptides.</QuestionSubtext>
      <div className="flex flex-col gap-3">
        {['Yes', 'No'].map((opt) => (
          <Tile
            key={opt}
            label={opt}
            description={
              opt === 'Yes'
                ? 'I have recent lab results available'
                : "I haven't had recent bloodwork — that's okay"
            }
            selected={answers.bloodwork === opt}
            onClick={() => setAnswers((a) => ({ ...a, bloodwork: opt }))}
          />
        ))}
      </div>
    </div>
  )
}

// ── Step 5: Email ─────────────────────────────────────────────────────────────

interface StepEmailProps {
  answers: Answers
  onEmailChange: (val: string) => void
  emailError: string
}

function StepEmail({ answers, onEmailChange, emailError }: StepEmailProps) {
  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>What&apos;s your email?</QuestionHeading>
      <QuestionSubtext>
        Your physician will use this to send your protocol and any follow-up questions. We never sell your data.
      </QuestionSubtext>

      <div className="flex flex-col gap-2">
        <label htmlFor="email-input" className="sr-only">Email address</label>
        <input
          id="email-input"
          type="email"
          autoComplete="email"
          autoFocus
          value={answers.email || ''}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-2xl border-2 px-5 py-4 font-sans text-base transition-colors duration-150 focus:outline-none"
          style={{
            borderColor: emailError ? '#E05252' : (answers.email ? '#B8A44C' : '#E8E3DB'),
            backgroundColor: '#FFFFFF',
            color: '#1A1A18',
          }}
          onFocus={(e) => { if (!emailError) e.currentTarget.style.borderColor = '#B8A44C' }}
          onBlur={(e) => { if (!emailError && !answers.email) e.currentTarget.style.borderColor = '#E8E3DB' }}
          onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur() }}
        />
        {emailError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs px-1"
            style={{ color: '#E05252' }}
          >
            {emailError}
          </motion.p>
        )}
      </div>

      <p className="mt-5 font-sans text-xs" style={{ color: '#B4AFA8' }}>
        🔒 HIPAA-compliant. Your information is encrypted and never shared.
      </p>
    </div>
  )
}

// ── Step 6: Name ──────────────────────────────────────────────────────────────

function StepName({ answers, setAnswers }: StepProps) {
  return (
    <div className="flex flex-col pt-8 sm:pt-10">
      <QuestionHeading>What&apos;s your name?</QuestionHeading>
      <QuestionSubtext>So your physician can address you personally.</QuestionSubtext>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="first-name" className="block font-sans text-xs mb-2" style={{ color: '#6B6560' }}>
            First name
          </label>
          <input
            id="first-name"
            type="text"
            autoComplete="given-name"
            autoFocus
            value={answers.firstName || ''}
            onChange={(e) => setAnswers((a) => ({ ...a, firstName: e.target.value }))}
            placeholder="Jane"
            className="w-full rounded-2xl border-2 px-5 py-4 font-sans text-base transition-colors duration-150 focus:outline-none"
            style={{
              borderColor: answers.firstName ? '#B8A44C' : '#E8E3DB',
              backgroundColor: '#FFFFFF',
              color: '#1A1A18',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#B8A44C' }}
            onBlur={(e) => { if (!answers.firstName) e.currentTarget.style.borderColor = '#E8E3DB' }}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="last-name" className="block font-sans text-xs mb-2" style={{ color: '#6B6560' }}>
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            autoComplete="family-name"
            value={answers.lastName || ''}
            onChange={(e) => setAnswers((a) => ({ ...a, lastName: e.target.value }))}
            placeholder="Smith"
            className="w-full rounded-2xl border-2 px-5 py-4 font-sans text-base transition-colors duration-150 focus:outline-none"
            style={{
              borderColor: answers.lastName ? '#B8A44C' : '#E8E3DB',
              backgroundColor: '#FFFFFF',
              color: '#1A1A18',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#B8A44C' }}
            onBlur={(e) => { if (!answers.lastName) e.currentTarget.style.borderColor = '#E8E3DB' }}
          />
        </div>
      </div>
    </div>
  )
}


