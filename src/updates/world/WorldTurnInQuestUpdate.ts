import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldTurnInQuestCharacterUpdate {
  readonly level: number;
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
export interface WorldTurnInQuestUpdate {
  readonly npcID: string;
  readonly questID: string;
  readonly worldCharacters: readonly WorldTurnInQuestCharacterUpdate[];
}
