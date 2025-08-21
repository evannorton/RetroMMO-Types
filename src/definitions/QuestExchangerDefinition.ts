export interface QuestExchangerDefinition {
  readonly questExchangerQuests: readonly {
    readonly completedText: string;
    readonly isGiver?: boolean;
    readonly isReceiver?: boolean;
    readonly questID: string;
  }[];
}
