import NotFoundEntry from "@/app/components/Common/modules/NotFoundEntry";
import { getDictionary } from "../[lang]/dictionaries";
import { Suspense } from "react";
import Wrapper from "../components/Common/modules/Wrapper";

export default async function NotFound() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <NotFoundEntry lang={"en"} dict={dict} />
        </Suspense>
      }
    />
  );
}
