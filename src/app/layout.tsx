import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { LOCALES } from "./lib/constantes";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emancipa.xyz"),
  title: "Emancipa",
  description:
    "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
  twitter: {
    card: "summary_large_image",
    title: "Emancipa",
    description:
      "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
    creator: "@emmajane1313",
  },
  alternates: {
    canonical: `https://emancipa.xyz/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://emancipa.xyz/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  openGraph: {
    title: "Emancipa",
    description:
      "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "www.digitalax.xyz",
    "www.f3manifesto.xyz",
    "Women",
    "Life",
    "Freedom",
  ],
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://www.emmajanemackinnonlee.com",
              sameAs: [
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
                "https://www.digitalax.xyz",
                "https://www.f3manifesto.xyz",
                "https://www.syntheticfutures.xyz",
                "https://www.chromadin.xyz",
                "https://triplea.agentmeme.xyz/",
                "https://www.web3fashion.xyz",
                "https://www.emancipa.xyz",
                "https://dhawu.emancipa.xyz",
                "https://highlangu.emancipa.xyz",
              ],
            }),
          }}
        />
      </head>
      <Providers>{children}</Providers>
    </html>
  );
}
