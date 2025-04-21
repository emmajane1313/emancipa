import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = [
  "en",
  "es",
  "fa",
  "uk",
  "ar",
  "pt",
  "he",
  "yi",
  "ja",
  "fr",
  "hu",
  "tr",
  "ym",
];
let defaultLocale = "en";

export const LOCALES: string[] = ["en", "es"];

function getLocale(request: NextRequest) {
  let headers = {
    "accept-language": request.headers.get("accept-language") || "en",
  };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|fonts).*)"],
};
