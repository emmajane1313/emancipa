import { Metadata } from "next";
import "./../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emancipa.xyz"),
  title: "Emancipa",
  description:
    "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
  twitter: {
    card: "summary_large_image",
    images:
      "https://thedial.infura-ipfs.io/ipfs/QmYNukHXNGtvA8DdEvjZR1hMezaBkGLGxiENJC9L9EoPRL",
    title: "Emancipa",
    description:
      "We will not be banned. Todos los géneros, todos los amores, todas las vidas, no seremos prohibidos. Women will not stay banned. زن زندگی آزادی",
  },
  openGraph: {
    images:
      "https://thedial.infura-ipfs.io/ipfs/QmYNukHXNGtvA8DdEvjZR1hMezaBkGLGxiENJC9L9EoPRL",
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
  keywords: "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom."
};
export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "ar" },
    { lang: "he" },
    { lang: "uk" },
    { lang: "fa" },
    { lang: "pt" },
    { lang: "fr" },
    { lang: "yi" },
    { lang: "ja" },
  ];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
