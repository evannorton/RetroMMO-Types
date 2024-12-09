export interface QuestDefinition {
  readonly availableText: string;
  readonly completedText: string;
  readonly inProgressText: string;
  readonly monster?: {
    readonly kills: number;
    readonly monsterID: string;
  };
  readonly name: string;
  readonly npcID: string;
}
