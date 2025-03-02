import { ItemInstanceUpdate } from "../ItemInstanceUpdate";
import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldNPCUpdate } from "./WorldNPCUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPositionUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly didTeleport?: boolean;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
