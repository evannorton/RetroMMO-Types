import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldPreparationCharacterUpdate {
  readonly isRenewing: boolean;
  readonly resources: WorldResourcesUpdate;
  readonly worldCharacterID: string;
}
export interface WorldPreparationUpdate {
  readonly worldPreparationCharacters: readonly WorldPreparationCharacterUpdate[];
}
