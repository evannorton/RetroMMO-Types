import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCombatCharacterUpdate {
  readonly isRenewing: boolean;
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
export interface WorldCombatUpdate {
  readonly worldCombatCharacters: readonly WorldCombatCharacterUpdate[];
}
