export interface QuestExchangerDefinition {
  readonly questExchangerQuests: readonly {
    readonly isGiver?: boolean;
    readonly isReceiver?: boolean;
    readonly questID: string;
  }[];
}
