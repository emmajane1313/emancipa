import { Metadata } from "next";
import "./../../globals.css";
import Head from "next/head";

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
      <Head>
        <meta
          name="keywords"
          content="Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Emancipa",
              description:
                "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom.",
              url: "https://www.emancipa.xyz/",
            }),
          }}
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
