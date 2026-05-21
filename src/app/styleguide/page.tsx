import Image from "next/image";

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* Header */}
        <section>
          <h1 className="text-h1 mb-4">Nexphoria Design System</h1>
          <p className="text-muted-foreground text-body">
            Internal reference for brand colors, typography, spacing, and visual
            elements.
          </p>
        </section>

        {/* Logos */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Logos</h2>
            <p className="text-muted-foreground text-small mb-8">
              Available in three color variations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <Image
                src="/brand/logo-primary.svg"
                alt="Nexphoria Logo - Primary"
                width={240}
                height={80}
                className="mx-auto mb-4"
              />
              <p className="text-caption text-muted-foreground">
                Primary (Yellow-Green)
              </p>
            </div>

            <div className="rounded-lg bg-stone p-8 text-center shadow-md">
              <Image
                src="/brand/logo-black.svg"
                alt="Nexphoria Logo - Black"
                width={240}
                height={80}
                className="mx-auto mb-4"
              />
              <p className="text-caption text-muted-foreground">Black</p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <Image
                src="/brand/logo-olive.svg"
                alt="Nexphoria Logo - Olive"
                width={240}
                height={80}
                className="mx-auto mb-4"
              />
              <p className="text-caption text-muted-foreground">
                Secondary (Olive)
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Color Palette</h2>
            <p className="text-muted-foreground text-small mb-8">
              Brand colors with hex codes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Primary */}
            <div className="space-y-3">
              <div
                className="h-32 rounded-lg shadow-md"
                style={{ backgroundColor: "#C9DD69" }}
              />
              <div>
                <p className="text-body font-medium">Primary Yellow-Green</p>
                <p className="text-small text-muted-foreground">#C9DD69</p>
                <p className="text-caption text-muted-foreground">
                  oklch(0.87 0.13 120)
                </p>
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-3">
              <div
                className="h-32 rounded-lg shadow-md"
                style={{ backgroundColor: "#A4B08A" }}
              />
              <div>
                <p className="text-body font-medium">Secondary Olive</p>
                <p className="text-small text-muted-foreground">#A4B08A</p>
                <p className="text-caption text-muted-foreground">
                  oklch(0.70 0.06 120)
                </p>
              </div>
            </div>

            {/* Near Black */}
            <div className="space-y-3">
              <div
                className="h-32 rounded-lg border shadow-md"
                style={{ backgroundColor: "#010101" }}
              />
              <div>
                <p className="text-body font-medium">Near Black</p>
                <p className="text-small text-muted-foreground">#010101</p>
                <p className="text-caption text-muted-foreground">
                  oklch(0.04 0 0)
                </p>
              </div>
            </div>

            {/* Cream */}
            <div className="space-y-3">
              <div
                className="h-32 rounded-lg border shadow-md"
                style={{ backgroundColor: "oklch(0.96 0.01 85)" }}
              />
              <div>
                <p className="text-body font-medium">Cream</p>
                <p className="text-small text-muted-foreground">
                  oklch(0.96 0.01 85)
                </p>
                <p className="text-caption text-muted-foreground">
                  Background
                </p>
              </div>
            </div>

            {/* Stone */}
            <div className="space-y-3">
              <div
                className="h-32 rounded-lg shadow-md"
                style={{ backgroundColor: "oklch(0.70 0.01 85)" }}
              />
              <div>
                <p className="text-body font-medium">Stone</p>
                <p className="text-small text-muted-foreground">
                  oklch(0.70 0.01 85)
                </p>
                <p className="text-caption text-muted-foreground">
                  Neutral
                </p>
              </div>
            </div>

            {/* Charcoal */}
            <div className="space-y-3">
              <div
                className="h-32 rounded-lg shadow-md"
                style={{ backgroundColor: "oklch(0.25 0.01 85)" }}
              />
              <div>
                <p className="text-body font-medium">Charcoal</p>
                <p className="text-small text-muted-foreground">
                  oklch(0.25 0.01 85)
                </p>
                <p className="text-caption text-muted-foreground">
                  Dark Neutral
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Typography</h2>
            <p className="text-muted-foreground text-small mb-2">
              Type scale with current fallback fonts
            </p>
            <p className="text-caption rounded bg-yellow-50 p-3 text-yellow-900">
              ⚠️ Using system font fallbacks. Adobe Fonts (Roc Grotesk for
              display, Neue Haas Grotesk for body) need to be integrated.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">
                DISPLAY / 80PX
              </p>
              <p className="text-display">Transform, Transcend, Triumph</p>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">H1 / 60PX</p>
              <h1>Unleash Your Full Potential</h1>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">H2 / 48PX</p>
              <h2>Beyond Boundaries, Beyond Limits</h2>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">H3 / 36PX</p>
              <h3>Peak Potential, Pinnacle Performance</h3>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">H4 / 30PX</p>
              <h4>Clarity Unlocks Power</h4>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">H5 / 24PX</p>
              <h5>Find Your Focus</h5>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">
                BODY / 17PX
              </p>
              <p className="text-body">
                Designed for those who dare to transcend the ordinary, our
                premium supplements support your journey towards extraordinary
                achievements. Every product is backed by cutting-edge science
                and pure ingredients.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">
                SMALL / 15PX
              </p>
              <p className="text-small text-muted-foreground">
                Technical specifications and detailed information are presented
                in this size for optimal readability.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-caption text-muted-foreground">
                CAPTION / 13PX
              </p>
              <p className="text-caption text-muted-foreground">
                Metadata • Labels • Product Codes
              </p>
            </div>
          </div>
        </section>

        {/* Spacing Scale */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Spacing Scale</h2>
            <p className="text-muted-foreground text-small mb-8">
              Consistent spacing system
            </p>
          </div>

          <div className="space-y-4">
            {[
              { name: "space-1", size: "4px", var: "--space-1" },
              { name: "space-2", size: "8px", var: "--space-2" },
              { name: "space-3", size: "12px", var: "--space-3" },
              { name: "space-4", size: "16px", var: "--space-4" },
              { name: "space-6", size: "24px", var: "--space-6" },
              { name: "space-8", size: "32px", var: "--space-8" },
              { name: "space-12", size: "48px", var: "--space-12" },
              { name: "space-16", size: "64px", var: "--space-16" },
              { name: "space-24", size: "96px", var: "--space-24" },
            ].map(({ name, size, var: cssVar }) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-32 text-small font-medium">{name}</div>
                <div className="w-24 text-small text-muted-foreground">
                  {size}
                </div>
                <div
                  className="h-8 bg-brand-primary rounded"
                  style={{ width: `var(${cssVar})` }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Border Radius</h2>
            <p className="text-muted-foreground text-small mb-8">
              Subtle, precise corners for luxury aesthetic
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "sm", size: "4px" },
              { name: "md", size: "8px" },
              { name: "lg", size: "12px" },
              { name: "xl", size: "16px" },
              { name: "2xl", size: "24px" },
              { name: "full", size: "999px" },
            ].map(({ name, size }) => (
              <div key={name} className="space-y-3 text-center">
                <div
                  className="mx-auto h-24 w-24 bg-brand-secondary shadow-md"
                  style={{ borderRadius: `var(--radius-${name})` }}
                />
                <div>
                  <p className="text-small font-medium">{name}</p>
                  <p className="text-caption text-muted-foreground">{size}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Shadows</h2>
            <p className="text-muted-foreground text-small mb-8">
              Minimal, precise shadows for depth
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "sm", label: "Small" },
              { name: "md", label: "Medium" },
              { name: "lg", label: "Large" },
              { name: "xl", label: "Extra Large" },
            ].map(({ name, label }) => (
              <div key={name} className="space-y-3">
                <div
                  className="h-32 rounded-lg bg-white"
                  style={{ boxShadow: `var(--shadow-${name})` }}
                />
                <div>
                  <p className="text-small font-medium">{label}</p>
                  <p className="text-caption text-muted-foreground">
                    shadow-{name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div
              className="h-32 rounded-lg bg-white"
              style={{ boxShadow: "var(--shadow-brand)" }}
            />
            <div>
              <p className="text-small font-medium">Brand Accent Shadow</p>
              <p className="text-caption text-muted-foreground">shadow-brand</p>
            </div>
          </div>
        </section>

        {/* Chemical Pattern */}
        <section className="space-y-8">
          <div>
            <h2 className="text-h2 mb-2">Chemical Pattern</h2>
            <p className="text-muted-foreground text-small mb-8">
              Molecular motif for brand identity (use sparingly)
            </p>
          </div>

          <div className="rounded-lg bg-white p-12 text-center shadow-md">
            <Image
              src="/brand/chemical-pattern.svg"
              alt="Nexphoria Chemical Pattern"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Footer */}
        <section className="border-t pt-8 text-center">
          <p className="text-small text-muted-foreground">
            Nexphoria Design System • Internal Reference • 2024
          </p>
        </section>
      </div>
    </div>
  );
}
