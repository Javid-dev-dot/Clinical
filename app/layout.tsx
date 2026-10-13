import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.conejovalleycounseling.com"),
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  keywords: [
    "therapy Newbury Park",
    "couples counseling",
    "EMDR therapy",
    "trauma counseling",
    "child therapist",
    "Conejo Valley Family Counseling",
  ],
  authors: [{ name: "Conejo Valley Family Counseling" }],
  openGraph: {
    siteName: "Conejo Valley Family Counseling",
    type: "website",
    url: "https://www.conejovalleycounseling.com",
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
    description:
      "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
    description:
      "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Muli (body copy) — headings use the self-hosted Beaufort Pro */}
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
