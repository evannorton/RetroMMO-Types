import { ItemInstanceUpdate } from "../world/ItemInstanceUpdate";
import { WorldCharacterUpdate } from "../world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "../world/WorldNPCUpdate";
import { WorldPartyUpdate } from "../world/WorldPartyUpdate";

export interface BattleExitToWorldUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly inventoryGold: number;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly offHandItemInstance?: ItemInstanceUpdate;
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
  readonly x: number;
  readonly y: number;
}
