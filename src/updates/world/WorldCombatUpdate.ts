import { ItemInstanceUpdate } from "../ItemInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCombatCharacterUpdate {
  readonly isRenewing: boolean;
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
export interface WorldCombatUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly worldCombatCharacters: readonly WorldCombatCharacterUpdate[];
}
