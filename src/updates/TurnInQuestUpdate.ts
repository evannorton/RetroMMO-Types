import { WorldResourcesUpdate } from "./world/WorldResourcesUpdate";

export interface TurnInQuestWorldCharacterUpdate {
  readonly characterID: string;
  readonly resources: WorldResourcesUpdate;
}
export interface TurnInQuestWorldUpdate {
  readonly characters: readonly TurnInQuestWorldCharacterUpdate[];
  readonly experienceUntilLevel?: number;
  readonly npcID: string;
  readonly questID: string;
}
export interface TurnInQuestPlayerUpdate {
  readonly level: number;
  readonly playerID: string;
}
export interface TurnInQuestUpdate {
  readonly players: readonly TurnInQuestPlayerUpdate[];
  readonly world?: TurnInQuestWorldUpdate;
}
