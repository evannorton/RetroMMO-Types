import { WorldResourcesUpdate } from "../WorldResourcesUpdate";

export interface WorldQuestTurnInWorldCharacterUpdate {
  readonly characterID: string;
  readonly resources: WorldResourcesUpdate;
}
export interface WorldQuestTurnInWorldUpdate {
  readonly characters: readonly WorldQuestTurnInWorldCharacterUpdate[];
  readonly experienceUntilLevel?: number;
  readonly npcID: string;
  readonly questID: string;
}
export interface WorldQuestTurnInPlayerUpdate {
  readonly level: number;
  readonly playerID: string;
}
export interface WorldQuestTurnInUpdate {
  readonly players: readonly WorldQuestTurnInPlayerUpdate[];
  readonly world?: WorldQuestTurnInWorldUpdate;
}
