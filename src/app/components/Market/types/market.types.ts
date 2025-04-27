export interface Collection {
  uri: string;
  prices: string[];
  collectionId: string;
  acceptedTokens: string[];
  alt: string;
}

export interface Order {
  buyer: string;
  collection: Collection;
  currency: string;
  amount: string;
  transactionHash: string;
}
