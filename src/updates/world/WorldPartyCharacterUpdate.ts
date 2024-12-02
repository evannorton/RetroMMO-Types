import { WorldQuestInstanceUpdate } from "./WorldQuestInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldPartyCharacterUpdate {
  readonly openedChestIDs: readonly string[];
  readonly order: number;
  readonly questInstances: Record<string, WorldQuestInstanceUpdate>;
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
