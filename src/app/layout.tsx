import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { playfairDisplay, dmSans, dancingScript } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://chaibar.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chai Bar — Chai, Chill & City Stories",
    template: "%s | Chai Bar",
  },
  description:
    "Your corner of Indiranagar. Come for the chai. Stay for the stories. Crafted chai, warm vibes, and the soul of Bangalore.",
  keywords: [
    "chai bar",
    "indiranagar cafe",
    "bangalore cafe",
    "chai cafe",
    "city stories",
    "indiranagar bangalore",
    "best chai in bangalore",
    "CMH Road cafe",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Chai Bar",
    title: "Chai Bar — Chai, Chill & City Stories",
    description:
      "Your corner of Indiranagar. Come for the chai. Stay for the stories. Crafted chai, warm vibes, and the soul of Bangalore.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Chai Bar — Chai, Chill & City Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chai Bar — Chai, Chill & City Stories",
    description:
      "Your corner of Indiranagar. Come for the chai. Stay for the stories.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-screen bg-warm-white font-body text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />

        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
