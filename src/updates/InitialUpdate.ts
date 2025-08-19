import { BattleAbilityHotkeyUpdate } from "./battle/BattleAbilityHotkeyUpdate";
import { BattleCharacterUpdate } from "./battle/BattleCharacterUpdate";
import { BattleItemHotkeyUpdate } from "./battle/BattleItemHotkeyUpdate";
import { BattlePhase } from "../BattlePhase";
import { BattleRoundUpdate } from "./battle/BattleRoundUpdate";
import { BattleSelectionUpdate } from "./battle/BattleSelectionUpdate";
import { BattleSubmittedAbilityUpdate } from "./battle/BattleSubmittedAbilityUpdate";
import { BattleSubmittedItemUpdate } from "./battle/BattleSubmittedItemUpdate";
import { BattleType } from "../BattleType";
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
  readonly abilityHotkeys: readonly BattleAbilityHotkeyUpdate[];
  readonly battlerID: string;
  readonly battleType: BattleType;
  readonly battlers: BattlerUpdate[];
  readonly characters: BattleCharacterUpdate[];
  readonly encounterID?: string;
  readonly enemyBattlerIDs: readonly string[];
  readonly enemyBattlersCount: number;
  readonly friendlyBattlerIDs: readonly string[];
  readonly friendlyBattlersCount: number;
  readonly itemHotkeys: readonly BattleItemHotkeyUpdate[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
  readonly phase: BattlePhase;
  readonly reachableID: string;
  readonly round?: BattleRoundUpdate;
  readonly selection?: BattleSelectionUpdate;
  readonly submittedAbilities: BattleSubmittedAbilityUpdate[];
  readonly submittedItems: BattleSubmittedItemUpdate[];
  readonly teamIndex: 0 | 1;
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
  readonly reachableID: string;
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
