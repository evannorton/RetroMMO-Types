import { ItemInstanceUpdate } from "../ItemInstanceUpdate";
import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldNPCUpdate } from "./WorldNPCUpdate";

export interface WorldPositionUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly didTeleport?: boolean;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly tilemapID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
