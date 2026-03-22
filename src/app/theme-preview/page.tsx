/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme Preview",
  robots: { index: false, follow: false },
};

const THEMES = {
  A: {
    label: "Theme A — Warm & Earthy",
    tag: "Your existing site colours. Logo added without any changes.",
    navbar: {
      bg: "#FAF6EF",
      text: "#2A2A2A",
      border: "rgba(92,51,23,0.1)",
    },
    overlay: "rgba(30,18,8,0.55)",
    headline: "#F5ECD7",
    sub: "rgba(245,236,215,0.82)",
    eyebrow: "#C9A84C",
    ctaBg: "#C9A84C",
    ctaTxt: "#2A2A2A",
    ghost: "rgba(245,236,215,0.55)",
    section: "#FAF6EF",
    sHead: "#2A2A2A",
    cardName: "#2A2A2A",
    cardDesc: "#8B6B52",
    cardPrice: "#5C3317",
    badge: "#C9A84C",
    badgeTxt: "#2A2A2A",
    footer: "#2A2A2A",
    ftText: "#F5ECD7",
    ftSub: "rgba(245,236,215,0.55)",
  },
  B: {
    label: "Theme B — Forest Green",
    tag: "Colours pulled from the logo. Matches the brand identity card.",
    navbar: {
      bg: "#E5EACB",
      text: "#1B5532",
      border: "rgba(27,85,50,0.12)",
    },
    overlay: "rgba(15,45,25,0.58)",
    headline: "#E5EACB",
    sub: "rgba(229,234,203,0.82)",
    eyebrow: "#7CAE68",
    ctaBg: "#1B5532",
    ctaTxt: "#E5EACB",
    ghost: "rgba(229,234,203,0.55)",
    section: "#F2F5E8",
    sHead: "#1B5532",
    cardName: "#1B5532",
    cardDesc: "#4A7058",
    cardPrice: "#1B5532",
    badge: "#7CAE68",
    badgeTxt: "#fff",
    footer: "#1B5532",
    ftText: "#E5EACB",
    ftSub: "rgba(229,234,203,0.55)",
  },
} as const;

type ThemeConfig = (typeof THEMES)[keyof typeof THEMES];

function ThemeColumn({ t }: { t: ThemeConfig }) {
  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 32px rgba(0,0,0,0.12)",
        background: "#fff",
      }}
    >
      {/* Label bar */}
      <div style={{ padding: "14px 20px", background: "#111", color: "#fff" }}>
        <div style={{ fontWeight: 700, fontSize: "1rem" }}>{t.label}</div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.55)",
            marginTop: "3px",
          }}
        >
          {t.tag}
        </div>
      </div>

      {/* NAVBAR */}
      <div
        style={{
          background: t.navbar.bg,
          borderBottom: `1px solid ${t.navbar.border}`,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/images/logo.jpg"
          height={30}
          style={{ objectFit: "contain" }}
          alt="logo"
        />
        <div style={{ display: "flex", gap: "18px" }}>
          {["Menu", "Stories", "About", "Visit"].map((l) => (
            <span
              key={l}
              style={{
                fontSize: "0.78rem",
                color: t.navbar.text,
                fontWeight: 500,
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img
          src="/images/interior2.jpeg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
          alt="hero"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, ${t.overlay} 0%, rgba(0,0,0,0.08) 50%, ${t.overlay} 100%)`,
          }}
        />
        <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
          <div
            style={{
              fontSize: "0.58rem",
              color: t.eyebrow,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "5px",
            }}
          >
            Indiranagar&apos;s favourite chai stop
          </div>
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: t.headline,
              lineHeight: 1.2,
            }}
          >
            One cup away from happiness.
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: t.sub,
              marginTop: "5px",
            }}
          >
            Chai Bar, Indiranagar. Come find your corner.
          </div>
          <div
            style={{ display: "flex", gap: "8px", marginTop: "12px" }}
          >
            <div
              style={{
                background: t.ctaBg,
                color: t.ctaTxt,
                padding: "6px 14px",
                borderRadius: "4px",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              SEE WHAT&apos;S BREWING &rarr;
            </div>
            <div
              style={{
                border: `1.5px solid ${t.ghost}`,
                color: t.headline,
                padding: "6px 14px",
                borderRadius: "4px",
                fontSize: "0.65rem",
              }}
            >
              Find Us
            </div>
          </div>
        </div>
      </div>

      {/* MENU CARD SAMPLE */}
      <div style={{ background: t.section, padding: "18px" }}>
        <div
          style={{
            fontSize: "0.65rem",
            color: t.sHead,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Menu Card
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            maxWidth: "220px",
          }}
        >
          <div
            style={{
              height: "90px",
              background: "#e4ddd4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#aaa",
              fontSize: "0.65rem",
            }}
          >
            Food Photo
          </div>
          <div style={{ padding: "10px 12px" }}>
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <span
                style={{
                  background: "#22c55e",
                  borderRadius: "2px",
                  width: "9px",
                  height: "9px",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  background: t.badge,
                  color: t.badgeTxt,
                  fontSize: "0.55rem",
                  padding: "2px 6px",
                  borderRadius: "20px",
                  fontWeight: 700,
                }}
              >
                BESTSELLER
              </span>
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.88rem",
                color: t.cardName,
              }}
            >
              Masala Chai
            </div>
            <div
              style={{
                fontSize: "0.68rem",
                color: t.cardDesc,
                fontStyle: "italic",
                marginTop: "2px",
                lineHeight: 1.4,
              }}
            >
              Ginger, cardamom, and a Tuesday that feels like Friday.
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                color: t.cardPrice,
                marginTop: "7px",
              }}
            >
              ₹79
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: t.footer,
          padding: "18px",
          textAlign: "center" as const,
        }}
      >
        <img
          src="/images/logo.jpg"
          height={32}
          alt="logo"
          style={{
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
            opacity: 0.88,
          }}
        />
        <div
          style={{
            color: t.ftText,
            fontSize: "0.75rem",
            marginTop: "7px",
          }}
        >
          Chai, Chill &amp; City Stories
        </div>
        <div
          style={{
            color: t.ftSub,
            fontSize: "0.65rem",
            marginTop: "3px",
          }}
        >
          Indiranagar, Bangalore &middot; &copy; 2026 Chai Bar
        </div>
      </div>
    </div>
  );
}

export default function ThemePreview() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "40px 24px",
        background: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#111",
            margin: 0,
          }}
        >
          Theme Comparison — Chai Bar
        </h1>
        <p
          style={{
            color: "#555",
            marginTop: "10px",
            fontSize: "0.9rem",
            maxWidth: "560px",
            margin: "10px auto 0",
          }}
        >
          Both themes use the real logo, real caf&eacute; photos, and real copy.
          Review both and reply <strong>&ldquo;Theme A&rdquo;</strong> or{" "}
          <strong>&ldquo;Theme B&rdquo;</strong> to apply it everywhere.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "28px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <ThemeColumn t={THEMES.A} />
        <ThemeColumn t={THEMES.B} />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "48px",
          padding: "24px",
          background: "#fff",
          borderRadius: "12px",
          maxWidth: "480px",
          margin: "48px auto 0",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        }}
      >
        <div
          style={{ fontWeight: 600, color: "#111", fontSize: "0.95rem" }}
        >
          How to decide
        </div>
        <p
          style={{
            color: "#555",
            fontSize: "0.82rem",
            marginTop: "8px",
            lineHeight: 1.6,
          }}
        >
          Theme A keeps the warm cozy feeling of the caf&eacute; interiors.
          <br />
          Theme B matches the logo&apos;s own colour system exactly.
          <br />
          <br />
          Tell Claude Code:{" "}
          <em>&ldquo;Go with Theme A&rdquo;</em> or{" "}
          <em>&ldquo;Go with Theme B&rdquo;</em>
        </p>
      </div>
    </div>
  );
}
