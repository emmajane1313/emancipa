export interface Collection {
  uri: string;
  prices: string[];
  collectionId: string;
  acceptedTokens: string[];
}

export interface Order {
  buyer: string;
  collection: Collection;
  currency: string;
  amount: string;
  transactionHash: string;
}
