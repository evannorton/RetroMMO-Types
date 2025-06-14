import { BattleAbilityHotkeyUpdate } from "../battle/BattleAbilityHotkeyUpdate";
import { BattleCharacterUpdate } from "../battle/BattleCharacterUpdate";
import { BattleItemHotkeyUpdate } from "../battle/BattleItemHotkeyUpdate";
import { BattleType } from "../../BattleType";
import { BattlerUpdate } from "../battle/BattlerUpdate";
import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldStartBattleUpdate {
  readonly abilityHotkeys: readonly BattleAbilityHotkeyUpdate[];
  readonly battlerID: string;
  readonly battleType: BattleType;
  readonly battlers: BattlerUpdate[];
  readonly characters: BattleCharacterUpdate[];
  readonly enemyBattlerIDs: readonly string[];
  readonly friendlyBattlerIDs: readonly string[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
  readonly itemHotkeys: readonly BattleItemHotkeyUpdate[];
  readonly reachableID: string;
}
