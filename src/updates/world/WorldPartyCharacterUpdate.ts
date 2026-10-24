import { WorldQuestInstanceUpdate } from "./WorldQuestInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldPartyCharacterUpdate {
  readonly characterID: string;
  readonly isPoisoned: boolean;
  readonly isRenewing: boolean;
  readonly openedChestIDs: readonly string[];
  readonly order: number;
  readonly poisonOrder?: number;
  readonly questInstances: Record<string, WorldQuestInstanceUpdate>;
  readonly renewOrder?: number;
  readonly resources: WorldResourcesUpdate;
}
