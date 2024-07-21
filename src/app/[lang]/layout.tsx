import { Metadata } from "next";
import "./../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emancipa.xyz"),
  title: "Emancipa",
  description:
    "We will not be banned. All genders, all loves, all lives, we will not be banned. Women will not stay banned. Women, life, freedom. زن زندگی آزادی",
  twitter: {
    card: "summary_large_image",
    images:
      "https://thedial.infura-ipfs.io/ipfs/QmSuzW4UN6Fs3HmTydpmLaSk4g4mBMpjCj1GgLqbXuoTBQ",
    title: "Emancipa",
    description:
      "We will not be banned. All genders, all loves, all lives, we will not be banned. Women will not stay banned. Women, life, freedom. زن زندگی آزادی",
  },
  openGraph: {
    images:
      "https://thedial.infura-ipfs.io/ipfs/QmSuzW4UN6Fs3HmTydpmLaSk4g4mBMpjCj1GgLqbXuoTBQ",
    title: "Emancipa",
    description:
      "We will not be banned. All genders, all loves, all lives, we will not be banned. Women will not stay banned. Women, life, freedom. زن زندگی آزادی",
  },
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
