import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldJoinPartyUpdate {
  characterID: string;
  partyID: string;
  resourcesUpdate?: WorldResourcesUpdate;
}
