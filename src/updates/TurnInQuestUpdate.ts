import { WorldResourcesUpdate } from "./world/WorldResourcesUpdate";

export interface TurnInQuestWorldCharacterUpdate {
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
export interface TurnInQuestWorldUpdate {
  readonly experienceUntilLevel?: number;
  readonly npcID: string;
  readonly questID: string;
  readonly worldCharacters: readonly TurnInQuestWorldCharacterUpdate[];
}
export interface TurnInQuestPlayerUpdate {
  readonly id: string;
  readonly level: number;
}
export interface TurnInQuestUpdate {
  readonly players: readonly TurnInQuestPlayerUpdate[];
  readonly world?: TurnInQuestWorldUpdate;
}
