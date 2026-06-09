export interface InitialUpstreamWindowMessagePlayer {
  readonly monthsSubscribed?: number;
  readonly permission: number;
  readonly username: string;
}
export interface InitialUpstreamWindowMessage {
  readonly discordID?: string;
  readonly isSubscriptionCanceled?: boolean;
  readonly players: readonly InitialUpstreamWindowMessagePlayer[];
  readonly subscriptionOverAt?: number;
  readonly untilShutdown: number;
  readonly username: string;
}
