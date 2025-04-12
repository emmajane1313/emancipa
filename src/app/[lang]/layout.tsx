import type { Metadata } from "next";
import "./../globals.css";
import Footer from "../components/Common/modules/Footer";
import { tParams } from "./[...notFound]/page";
import Modals from "../components/Modals/modules/Modals";
import Providers from "../providers";

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
  keywords:
    "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom.",
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
    { lang: "ym" },
    { lang: "hu" },
    { lang: "tr" },
  ];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: tParams;
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4">
            {children}
            <Footer params={params} />
          </div>
          <Modals params={params} />
        </Providers>
      </body>
    </html>
  );
}
