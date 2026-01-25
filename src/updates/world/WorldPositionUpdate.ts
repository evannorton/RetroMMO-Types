import { ItemInstanceUpdate } from "../ItemInstanceUpdate";
import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldNPCUpdate } from "./WorldNPCUpdate";

export interface WorldPositionUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly characters: readonly WorldCharacterUpdate[];
  readonly didTeleport?: boolean;
  readonly enterableID?: string;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly reachableID: string;
  readonly tilemapID: string;
  readonly transportID?: string;
}
