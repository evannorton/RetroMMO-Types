export interface InitialUpstreamWindowMessagePlayer {
  readonly monthsSubscribed?: number;
  readonly permission: number;
  readonly username: string;
}
export interface InitialUpstreamWindowMessage {
  readonly discordID?: string;
  readonly isSubscriptionCanceled?: boolean;
  readonly subscriptionOverAt?: number;
  readonly username: string;
  readonly players: readonly InitialUpstreamWindowMessagePlayer[];
}
