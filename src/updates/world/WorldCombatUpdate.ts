import { ItemInstanceUpdate } from "../ItemInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCombatCharacterUpdate {
  readonly characterID: string;
  readonly isRenewing?: boolean;
  readonly resources: WorldResourcesUpdate;
}
export interface WorldCombatUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly boostItemInstances: readonly ItemInstanceUpdate[];
  readonly worldCombatCharacters: readonly WorldCombatCharacterUpdate[];
}
