import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldPartyCharacterUpdate {
  readonly openedChestIDs: readonly string[];
  readonly order: number;
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
