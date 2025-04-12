import { emancipaClient } from "@/app/lib/graph/client";
import { FetchResult, gql } from "@apollo/client";

const ORDERS = gql`
  query ($skip: Int!, $buyer: String!) {
    orderCreateds(where: { buyer: $buyer }, first: 20, skip: $skip) {
      collection {
        uri
      }
      transactionHash
      amount
      currency
      total
    }
  }
`;

export const getOrders = async (
  buyer: string,
  skip: number
): Promise<FetchResult | void> => {
  let timeoutId: NodeJS.Timeout | undefined;
  const queryPromise = emancipaClient.query({
    query: ORDERS,
    variables: {
      buyer,
      skip,
    },
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve({ timedOut: true });
    }, 60000);
  });

  const result: any = await Promise.race([queryPromise, timeoutPromise]);

  timeoutId && clearTimeout(timeoutId);

  if (result.timedOut) {
    return;
  } else {
    return result;
  }
};
