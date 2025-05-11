import { BattleCharacterUpdate } from "./battle/BattleCharacterUpdate";
import { BattleSubmittedAbilityUpdate } from "./battle/BattleSubmittedAbilityUpdate";
import { BattleSubmittedItemUpdate } from "./battle/BattleSubmittedItemUpdate";
import { BattlerUpdate } from "./battle/BattlerUpdate";
import { ItemInstanceUpdate } from "./ItemInstanceUpdate";
import { MainMenuCharacterUpdate } from "./main-menu/MainMenuCharacterUpdate";
import { MainState } from "../MainState";
import { PartyUpdate } from "./PartyUpdate";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "./world/WorldNPCUpdate";

export interface InitialPlayerCharacterUpdate {
  readonly classID: string;
  readonly level: number;
  readonly partyID: string;
}
export interface InitialPlayerUpdate {
  readonly character?: InitialPlayerCharacterUpdate;
  readonly characterID?: string;
  readonly playerID: string;
  readonly userID: number;
  readonly username: string;
}
export interface InitialBattleUpdate {
  readonly battlerID: string;
  readonly battlers: BattlerUpdate[];
  readonly characters: BattleCharacterUpdate[];
  readonly enemyBattlerIDs: readonly string[];
  readonly friendlyBattlerIDs: readonly string[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
  readonly reachableID: string;
  readonly submittedAbilities: BattleSubmittedAbilityUpdate[];
  readonly submittedItems: BattleSubmittedItemUpdate[];
}
export interface InitialMainMenuUpdate {
  readonly characters: readonly MainMenuCharacterUpdate[];
}
export interface InitialWorldUpdate {
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
  readonly strength: number;
  readonly timePlayed: number;
  readonly wisdom: number;
}
export interface InitialUpdate {
  readonly battle?: InitialBattleUpdate;
  readonly isSubscribed: boolean;
  readonly mainMenu?: InitialMainMenuUpdate;
  readonly mainState: MainState;
  readonly parties: readonly PartyUpdate[];
  readonly players: readonly InitialPlayerUpdate[];
  readonly world?: InitialWorldUpdate;
}
