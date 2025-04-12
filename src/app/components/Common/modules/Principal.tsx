import { INFURA_GATEWAY } from "@/app/lib/constantes";
import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import usePrincipal from "../hooks/usePrincipal";

const Principal: FunctionComponent = (): JSX.Element => {
  const { full, setFull } = usePrincipal();
  return (
    <div
      className="relative w-full h-fit flex gap-20 items-start justify-start flex-col pt-10"
      id={"grid"}
    >
      <div className="sticky z-10 px-2 sm:px-4 w-full h-fit flex items-end justify-end">
        <div className="relative w-fit h-fit flex">
          <div
            className="relative flex w-20 h-12 rounded-md border-4 border-morado bg-black items-center p-2 justify-center cursor-pointer"
            onClick={() => setFull(!full)}
          >
            <div className="relative w-full h-full flex">
              <Image
                draggable={false}
                src={`${INFURA_GATEWAY}/ipfs/${
                  full
                    ? "QmaYx9Hm5S74N7Q4RLfMBn6JBnhd4YC3XEaTAE6ZiTQZFr"
                    : "QmQDtHLcRMYKiBVFN4V3oM4ZwUAJDwCh7Kf6jjVqDtSPa9"
                }`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative h-fit flex justify-start flex-col w-full items-center`}
      >
        <div
          className={`relative h-fit flex justify-start flex-col ${
            full
              ? "w-full items-start"
              : "w-1/3 items-center border-8 border-amarillo"
          }`}
        >
          {[
            {
              imagen: "QmNrybajbY5LhWDTLsAk86PWgigHKdu8DdSoX8RmbbAq75",
              anchura: 3038,
              altura: 4696,
            },
            {
              imagen: "QmPzEyn2KM21ZkTyFTZLn7oqahYuUoAz7UNW9fcBDNfzqD",
              anchura: 2698,
              altura: 5503,
            },
          ].map((elemento, indice) => {
            return (
              <div key={indice} className="relative w-full">
                <Image
                  layout="responsive"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/${elemento.imagen}`}
                  objectFit="contain"
                  priority
                  width={elemento.anchura}
                  height={elemento.altura}
                />
              </div>
            );
          })}
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {[
              "QmRt6dpmTD7Ps42u3fBH2trJM4giVURGsL8XwwgBJuMUVn",
              "QmeJXfTzbe8qquHW8yrFYSHMtAiMgLcaab6f5qNG6j5bzX",
              "QmVbzcttHWyRzu8ef2tLWkzKhAaoAo2PZwoAy7qyZFxExe",
            ].map((imagen: string, indice: number) => {
              return (
                <div key={indice} className="relative w-full">
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    width={1025}
                    height={1025}
                  />
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {[
              "QmdayoVLF4z7F1zufPDusmFbHRSUbvGoZLB7hS9xznSdmR",
              "QmZk7DFZhz9Y2JrfKJmUEpMmk8tfGkeaAHGUjSA1Ysquhh",
              "QmZvRmxFdKE3zvdky62aCK65MXFfEyvfLbX9gG8ivKebiM",
            ].map((imagen: string, indice: number) => {
              return (
                <div key={indice} className="relative w-full">
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    width={1025}
                    height={1025}
                  />
                </div>
              );
            })}
          </div>
          {[
            {
              imagen: "QmNNS4wKZaXggt9K4Ww6RKzTpjHJLxS7Vr5LmNA5akeTJ1",
              anchura: 896,
              altura: 1360,
            },
            {
              imagen: "QmfACvMJYvcSJVQ1UucePwk7axutYr35rEPr2j3gkhMMRK",
              anchura: 960,
              altura: 1344,
            },
            {
              imagen: "QmWavSbkzSVBBGdKwZBCUZ1WpTvgnxctXfULkiJ86F2QxU",
              anchura: 1035,
              altura: 1592,
            },
            {
              imagen: "QmcfkgsSw5AXDJg3gKJt2ArSBmpRo9LkDtN5jLGdES6VZT",
              anchura: 759,
              altura: 1886,
            },
            {
              imagen: "QmbwcPAd82MD6bZNA85grZngWCTdQn7anDDvwP6tEV4F47",
              anchura: 816,
              altura: 1456,
            },
            {
              imagen: "QmRpq7CBQrhQuxgiy2i36XVzqRVcy8WeQBQW1Ap9B5McXn",
              anchura: 1473,
              altura: 769,
            },

            {
              imagen: "QmTsYZYvc3ZBaSxXRuDywsUyBMUrXipNjBs3ySRBczL3qh",
              anchura: 1807,
              altura: 943,
            },
            {
              imagen: "QmaGDN8WD53y7SdwPmYwu6XTDsSSqg581DvTq6ucuiH2Xz",
              anchura: 1472,
              altura: 824,
            },
            {
              imagen: "QmYUgZKL6RqpsLnbxdd8CazVcNJE8KV73cGenzit6BcTzb",
              anchura: 817,
              altura: 1457,
            },

            {
              imagen: "QmXSzv2WkgjzDbXUymnVkqeK45QKVNdSUhh5gX9yLspjFw",

              anchura: 754,
              altura: 1330,
            },
            {
              imagen: "QmSgDkJADYRxtBGwVqe6krkQKez6UoCvEmGDVLwFrksxPn",

              anchura: 810,
              altura: 1970,
            },
            {
              imagen: "QmbPNx8mPKKPwt7YaDFZ9PUhag4g9eSP9wFNs4aCvEcFmj",

              anchura: 945,
              altura: 1473,
            },
            {
              imagen: "QmVE7pDrbBpB95bc8u3XaWEoLbzDbvtR7CRSKNFq3E2BeA",

              anchura: 1112,
              altura: 1440,
            },
            {
              imagen: "QmbVKUSF2xLCfTd4fXVXw3SSX8hbxHBr6mP1YTUzPuaUQV",

              anchura: 1869,
              altura: 1289,
            },
          ].map((elemento, indice) => {
            return (
              <div key={indice} className="relative w-full">
                <Image
                  layout="responsive"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/${elemento.imagen}`}
                  objectFit="contain"
                  priority
                  width={elemento.anchura}
                  height={elemento.altura}
                />
              </div>
            );
          })}
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {[
              "QmZS9LSB2L8vVULaZRGzEiXijdAMcFwHUzdfgMZxYnQam7",
              "QmRthdHrbf2wBbV1huVqCAiAbCMmKJrYLqfNF6NEtfhpUi",
              "QmVLmhzPcesBtbKERM5yGcZC6jZ4UgbLSWdDvE5DHLTKLJ",
            ].map((imagen: string, indice: number) => {
              return (
                <div key={indice} className="relative w-full">
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    width={922}
                    height={794}
                  />
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {[
              "QmeXfAbhtx8jxA2RfP7d4XBdDvoR48ot2mXjiPQzQW6CAt",
              "QmWPdbKx7bfxYQSjFRceLnQz1utuhBGHD7pNb2QgRrP6cc",
              "Qmf65wCaJqUsFB44itaqHDikFtR9nBqNt8UJ7rr76UiRL8",
            ].map((imagen: string, indice: number) => {
              return (
                <div key={indice} className="relative w-full">
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    width={922}
                    height={794}
                  />
                </div>
              );
            })}
          </div>
          {[
            {
              imagen: "QmfXPtT1DZiHfCRhTcFaM94JzgFqP3GYFchfvePajSZ2td",

              anchura: 858,
              altura: 1282,
            },
            {
              imagen: "QmPv1dUj5iT459mc4ADmTJRH8W8QDvtUUPWLqLmWwzhY4f",

              anchura: 1213,
              altura: 1472,
            },
            {
              imagen: "QmaYPJRX1Dtose4njdsJ6vVgEfLHBydGWMvhonxUNVmwBe",

              anchura: 1456,
              altura: 816,
            },
            {
              imagen: "QmVwmNVU7WLz1bC1umLtTcyYoGBgDMBij3dVXu2GGSVFA3",

              anchura: 816,
              altura: 1192,
            },
            {
              imagen: "QmaJZUQNBcMwrCsTpXR6HtC1gmgHvL34fUkbJuwzpBC2CE",

              anchura: 737,
              altura: 977,
            },
            {
              imagen: "QmPbVz7oeNx2yL8Q436GSq3tXftR1Jc1fAAdmPv5pobLxy",

              anchura: 817,
              altura: 1457,
            },
            {
              imagen: "QmWAnqcp9ayYvb5NBPefpBrYa2fJWvyyZKdBZPZiUqQdby",

              anchura: 816,
              altura: 1456,
            },
            {
              imagen: "QmXVWGfMA4w6M5c9BVUdEy6MCa2X5eXoPgX2vvth6dz2vX",

              anchura: 816,
              altura: 1456,
            },
            {
              imagen: "QmRnjm5s4epfV6ryZGm4C7GgRPBB8Qc5qewgkkhgU6MACS",

              anchura: 1111,
              altura: 1260,
            },
            {
              imagen: "QmXU1xLCg2A1MWn4Z2HGVpd2Eww216D3dNrnyWvMTeuK8A",

              anchura: 849,
              altura: 985,
            },
            {
              imagen: "QmZSS9ywhbUyZdZyQN9pm57PEzujG2LJXTrjqqnBtMy4mn",

              anchura: 817,
              altura: 1458,
            },
            {
              imagen: "QmZrJZiu2DLHYc2rFRgdSS3Dj4ooyARmwbxStU4hmZUrDS",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmWurCyCPYjLsVCwPVDEr8X6dtR5CpGK4tAdADbDfTo98u",

              anchura: 561,
              altura: 793,
            },
            {
              imagen: "QmeVWZWCBu1ESULm6mFv5uWoavEvgdYJ3HArRDT6GHi2oG",

              anchura: 1225,
              altura: 1233,
            },
            {
              imagen: "QmXoYBSwUxHbpg8kNrUotvtEnKHXCn56yrHqgbbGJctBLZ",

              anchura: 817,
              altura: 1457,
            },
            {
              imagen: "QmRt1U9B61YNnncn7u4vZEZjXo6EsWXJFpKWB18zrSNa6k",

              anchura: 817,
              altura: 1457,
            },
            {
              imagen: "QmZkj8JKFWabdxXZUTCJRkatrZd2wMfHZaeCYypvvLqCjv",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmWoLW6b6mcYY9xcThcPEoEgWCjLamGA4zvnQ3Go3WoNTd",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmPDJsMYwBspJ3AyvTJKoc7Ng9NiFDHE36GsR6f1dCpaiY",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmeEPEJzpQZwrFGVUau944AiNHJds8ALGTvzmB3Wq7vDe2",

              anchura: 931,
              altura: 1233,
            },
            {
              imagen: "QmYAHD8fBin4DM4QJP5ie4TGC7EQSd8qymApXas2guFWd7",

              anchura: 769,
              altura: 1537,
            },
            {
              imagen: "QmVg5Rh5dm2pzvxnZcDFSbZY719XismvbnV4E8et44qa5y",

              anchura: 768,
              altura: 1536,
            },
            {
              imagen: "QmVD9YZkQJqDjHZUkLSdDgeUKEQRLXsVdCuabq9vP6NuFL",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmbuygbeEK5MimoNokmY5MozddUnV9VSA3awYisXPvaBxg",

              anchura: 689,
              altura: 1729,
            },
            {
              imagen: "QmWAkeDcCRpYQqAWgqQf46m6uSRPdgTKJEQHTktJzfvL72",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmdViyXtwRUJeDiykUYsLyGAQmDYejqhSLX3mDXNSLQ5DG",

              anchura: 897,
              altura: 1345,
            },
            {
              imagen: "Qmc9d941voNQ6a79Jk51bdzTvd5aFoyks4nsQfuA4jMyor",

              anchura: 897,
              altura: 1345,
            },
            {
              imagen: "QmVmo8enUp2ZdHs6YxsD8pBfeUfLUVreiGkKcCQMQpY2oj",

              anchura: 897,
              altura: 1345,
            },
            {
              imagen: "QmXVmHhcidgwoLvREeuWmp5YvckTYDcbUYhk4M7aLzB6xJ",

              anchura: 737,
              altura: 1305,
            },
            {
              imagen: "QmUbQ8xEBerraUGwQPyakHstMoHNSXG4vm7jHhsPm2Gtqc",

              anchura: 816,
              altura: 1456,
            },
            {
              imagen: "QmcciJCDSewwDfjYUV3XePW595CfYdANj9RB2XRkSiZjHf",

              anchura: 897,
              altura: 1345,
            },
            {
              imagen: "QmTs7PYFmjaDppmAiq4CdrTJ31LADpbn4P82N2zPvtKvFV",

              anchura: 1457,
              altura: 816,
            },
            {
              imagen: "QmaJ3383VA9oywEdLT8GX6pEZJASTvrVysavkhdS8zVh5q",

              anchura: 1457,
              altura: 816,
            },
            {
              imagen: "QmRcvQrRrYpdyq9UfehwoAobPXP2jaZZEiZu3Y57r2Qh4p",

              anchura: 1457,
              altura: 816,
            },
            {
              imagen: "QmfTd3pN3FWiV6LMhJCt4dYVkC5q2AAbgQwqoaGMpaeqWK",

              anchura: 1097,
              altura: 1841,
            },
            {
              imagen: "QmNjKVnpi5UvrXxWocz8gMFXeLojj1FkwpcUUrAnb4iXni",

              anchura: 689,
              altura: 1728,
            },
            {
              imagen: "QmVqM8YYRyna1Ns46hE2yhJU81W6usBWizGDp3yLPJu24f",

              anchura: 1457,
              altura: 817,
            },
            {
              imagen: "QmZeQdvpAPs65ex5nzctZaSggGL66a4geY1jzQJWvPWznE",

              anchura: 816,
              altura: 1456,
            },
            {
              imagen: "Qmdymc6P52w2qysfwvuqckYko7Bk4vkUmmsDptyuvAYTwK",

              anchura: 929,
              altura: 1329,
            },
            {
              imagen: "QmUxiUrsQkkfUS9SfCGtGmAoTMXJw9qew9Az3du4BoCg8d",

              anchura: 944,
              altura: 1360,
            },
            {
              imagen: "QmXymTLZB4sG1NfbS3MEneSq3Be2GdfYf3EPgtEMKUVA9i",

              anchura: 816,
              altura: 1456,
            },
            {
              imagen: "QmZiaeWySygkeah5V7oawzLvQMmANLUG85tHqZ5292XwUD",

              anchura: 1025,
              altura: 1089,
            },
            {
              imagen: "QmbAau1GR3FQEPuanbv9ELXn9kkHxaiGbg8rXCnxGhnAw2",

              anchura: 1346,
              altura: 898,
            },
            {
              imagen: "QmeMYVoM2i9rUqYLDFZYXAUxuLdvAYzMgvGf366UK1Yi6E",

              anchura: 945,
              altura: 1401,
            },
            {
              imagen: "QmTFPMf1mc1M5mEALsodGTNEitT9NLWWbQ7MUNVU2HZgWk",

              anchura: 846,
              altura: 1676,
            },
            {
              imagen: "QmNZqXS6vhTcYjbRHg4MAAqeGLtHVcr4AipDsjCqxDjQZZ",

              anchura: 847,
              altura: 1677,
            },
            {
              imagen: "QmQ3nAvNMUjYg15YNan7Ecs6iDjkR5sLzLTU8ncFGQ7osf",

              anchura: 898,
              altura: 1345,
            },
            {
              imagen: "QmPTGFEZYmKy3jtC4ZUnSjjH2ouPsCbcEaHpQmWnikNGTT",

              anchura: 897,
              altura: 1345,
            },
            {
              imagen: "QmafePxPpnYXeJKjQS5hxSH7h6hDYzmeawjbxbEgGZmkP5",

              anchura: 897,
              altura: 1345,
            },
            {
              imagen: "QmcGjT1Z4ZLg1oN6WkRPfQQSmanVRaBismgKDc1e4d6X7p",

              anchura: 1026,
              altura: 1026,
            },
            {
              imagen: "QmRLBkssHnauAJsHBC4edS9PvNcnWPVdBzgpzoYQbmEJUj",

              anchura: 1026,
              altura: 1538,
            },
            {
              imagen: "QmTXt3wbPLqBA8HCHF6J1PrZ3wLw6BAYqahprBpFbL5LZ6",

              anchura: 1025,
              altura: 1025,
            },
            {
              imagen: "QmP32YWzGAs2Fy3bDCjXAUbvkSCqsdvLGR42EHkfgDtRZp",

              anchura: 1025,
              altura: 1537,
            },
          ].map((elemento, indice) => {
            return (
              <div key={indice} className="relative w-full">
                <Image
                  layout="responsive"
                  draggable={false}
                  src={`${INFURA_GATEWAY}/ipfs/${elemento.imagen}`}
                  objectFit="contain"
                  priority
                  width={elemento.anchura}
                  height={elemento.altura}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Principal;
