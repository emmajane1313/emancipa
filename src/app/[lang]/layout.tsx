import Footer from "../components/Common/modules/Footer";
import Modals from "../components/Modals/modules/Modals";
export type tParams = Promise<{ lang: string }>;

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
    { lang: "gd" },
  ];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return (
    <>
      <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4">
        {children}
        <Footer params={params} />
      </div>
      <Modals params={params} />
    </>
  );
}
