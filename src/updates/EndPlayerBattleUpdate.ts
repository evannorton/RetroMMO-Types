import { ItemInstanceUpdate } from "./ItemInstanceUpdate";
import { PartyUpdate } from "./PartyUpdate";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "./world/WorldNPCUpdate";

export interface EndPlayerBattleCharacterUpdate {
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
  readonly strength: number;
  readonly tilemapID: string;
  readonly timePlayed: number;
  readonly wisdom: number;
  readonly x: number;
  readonly y: number;
}
export interface EndPlayerBattlePlayerUpdate {
  readonly level: number;
  readonly playerID: string;
}
export interface EndPlayerBattleWorldUpdate {
  readonly characters: readonly WorldCharacterUpdate[];
  readonly parties: readonly PartyUpdate[];
}
export interface EndPlayerBattleUpdate {
  readonly character?: EndPlayerBattleCharacterUpdate;
  readonly players: readonly EndPlayerBattlePlayerUpdate[];
  readonly world?: EndPlayerBattleWorldUpdate;
}
