import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://emancipa.xyz/"),
  title: "Emancipa by Emma-Jane MacKinnon-Lee",
  description:
    "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
  twitter: {
    card: "summary_large_image",
    title: "Emancipa by Emma-Jane MacKinnon-Lee",
    description:
      "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
    creator: "@emmajane1313",
  },
  openGraph: {
    title: "Emancipa by Emma-Jane MacKinnon-Lee",
    description:
      "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
    images: "https://emancipa.xyz/api/infura/QmQsHgkxP37LAk8S6QQBcZhK9CQe3Z6cU4FxZhv5aZF7GX",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Emma-Jane MacKinnon-Lee",
    "Emma Jane MacKinnon Lee",
    "DIGITALAX",
    "Web3 Fashion",
    "Digital Fashion",
    "Web3 Fashion Designer",
    "DIGITALAX Fashion",
    "Emancipa",
    "Web3",
    "Moda Web3",
    "Open Source Fashion",
    "CC0",
    "CC0 Fashion",
    "Open Source LLMs",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "Women",
    "Life",
    "Freedom",
    "Crypto Fashion",
    "NFT Fashion",
    "Digital Art",
    "Web3 Art",
    "Fashion Artist",
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
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://emancipa.xyz/#person",
                  name: "Emma-Jane MacKinnon-Lee",
                  alternateName: "Emma Jane MacKinnon Lee",
                  url: "https://emmajanemackinnonlee.com/",
                  jobTitle: "Web3 Fashion Designer",
                  description: "Web3 fashion designer, digital artist, and founder of DIGITALAX and Emancipa. Creator of open-source fashion and CC0 digital art.",
                  knowsAbout: ["Web3 Fashion", "Digital Fashion", "DIGITALAX", "Crypto Fashion", "NFT Fashion", "Open Source Fashion", "CC0", "Digital Art", "Web3 Art"],
                  sameAs: [
                    "https://emmajanemackinnonlee.com/",
                    "https://syntheticfutures.xyz/",
                    "https://web3fashion.xyz/",
                    "https://emancipa.xyz/",
                    "https://highlangu.com/",
                    "https://digitalax.xyz/",
                    "https://cc0web3fashion.com/",
                    "https://cc0web3.com/",
                    "https://cuntism.net/",
                    "https://dhawu.com/",
                    "https://casadeespejos.com/",
                    "https://emancipa.net/",
                    "https://dhawu.emancipa.xyz/",
                    "https://highlangu.emancipa.xyz/",
                    "https://twitter.com/emmajane1313",
                    "https://medium.com/@casadeespejos",
                    "https://www.flickr.com/photos/emmajanemackinnonlee/",
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://emancipa.xyz/#organization",
                  name: "Emancipa",
                  alternateName: "DIGITALAX",
                  url: "https://emancipa.xyz/",
                  logo: "https://emancipa.xyz/api/infura/QmQsHgkxP37LAk8S6QQBcZhK9CQe3Z6cU4FxZhv5aZF7GX",
                  description: "Web3 fashion and digital art collective founded by Emma-Jane MacKinnon-Lee. We will not be banned. Women will not stay banned.",
                  founder: {
                    "@id": "https://emancipa.xyz/#person"
                  },
                  sameAs: [
                    "https://emancipa.xyz/",
                    "https://digitalax.xyz/",
                    "https://emancipa.net/",
                    "https://twitter.com/emmajane1313",
                  ],
                  keywords: "Web3 Fashion, DIGITALAX, Digital Fashion, Emma-Jane MacKinnon-Lee, Crypto Fashion, NFT Fashion, Open Source Fashion, CC0"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://emancipa.xyz/#website",
                  url: "https://emancipa.xyz/",
                  name: "Emancipa by Emma-Jane MacKinnon-Lee",
                  description: "We will not be banned. Web3 fashion and digital art by Emma-Jane MacKinnon-Lee.",
                  publisher: {
                    "@id": "https://emancipa.xyz/#organization"
                  },
                  inLanguage: ["en", "es", "fr", "fa", "uk", "ar", "pt", "he", "yi", "ja", "hu", "tr", "gd"]
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
