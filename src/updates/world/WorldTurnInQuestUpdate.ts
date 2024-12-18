import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldTurnInQuestCharacterUpdate {
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
export interface WorldTurnInQuestUpdate {
  readonly questID: string;
  readonly worldCharacters: readonly WorldTurnInQuestCharacterUpdate[];
}
