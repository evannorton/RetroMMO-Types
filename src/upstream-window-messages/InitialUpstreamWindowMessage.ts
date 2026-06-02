export interface InitialUpstreamWindowMessage {
  readonly isSubscriptionCanceled?: boolean;
  readonly subscriptionOverAt?: number;
  readonly username: string;
}
