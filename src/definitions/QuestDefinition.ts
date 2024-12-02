export interface QuestDefinition {
  readonly description: string;
  readonly monster?: {
    readonly kills: number;
    readonly monsterID: string;
  };
  readonly name: string;
}
