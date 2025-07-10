import { ItemInstanceUpdate } from "./ItemInstanceUpdate";
import { PartyUpdate } from "./PartyUpdate";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "./world/WorldNPCUpdate";

export interface EnterPlayerWorldUpdate {
  readonly character: WorldCharacterUpdate;
}
export interface EnterPlayerCharacterUpdate {
  readonly agility: number;
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly boostItemInstances: readonly ItemInstanceUpdate[];
  readonly characterID: string;
  readonly characters: readonly WorldCharacterUpdate[];
  readonly clothesDyeItemInstance?: ItemInstanceUpdate;
  readonly defense: number;
  readonly experienceUntilLevel?: number;
  readonly hairDyeItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly intelligence: number;
  readonly inventoryGold: number;
  readonly luck: number;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly maskItemInstance?: ItemInstanceUpdate;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly offHandItemInstance?: ItemInstanceUpdate;
  readonly outfitItemInstance?: ItemInstanceUpdate;
  readonly parties: readonly PartyUpdate[];
  readonly reachableID: string;
  readonly strength: number;
  readonly timePlayed: number;
  readonly wisdom: number;
}
export interface EnterPlayerUpdate {
  readonly character?: EnterPlayerCharacterUpdate;
  readonly characterID?: string;
  readonly classID: string;
  readonly level: number;
  readonly partyID: string;
  readonly playerID: string;
  readonly world?: EnterPlayerWorldUpdate;
}
