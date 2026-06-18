import { WorldResourcesUpdate } from "../WorldResourcesUpdate";

export interface WorldQuestTurnInWorldCharacterUpdate {
  readonly characterID: string;
  readonly resources: WorldResourcesUpdate;
}
export interface WorldQuestTurnInWorldUpdate {
  readonly agility: number;
  readonly characters: readonly WorldQuestTurnInWorldCharacterUpdate[];
  readonly defense: number;
  readonly experienceUntilLevel?: number;
  readonly intelligence: number;
  readonly inventoryGold: number;
  readonly luck: number;
  readonly npcID: string;
  readonly questID: string;
  readonly strength: number;
  readonly wisdom: number;
}
export interface WorldQuestTurnInPlayerUpdate {
  readonly level: number;
  readonly playerID: string;
}
export interface WorldQuestTurnInUpdate {
  readonly players: readonly WorldQuestTurnInPlayerUpdate[];
  readonly world?: WorldQuestTurnInWorldUpdate;
}
