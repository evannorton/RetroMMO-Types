export interface QuestDefinition {
  readonly availableText: string;
  readonly completedText: string;
  readonly experience: number;
  readonly gold: number;
  readonly inProgressText: string;
  readonly monster?: {
    readonly kills: number;
    readonly monsterID: string;
  };
  readonly name: string;
  readonly npcID: string;
  readonly prerequisiteQuestID?: string;
}
