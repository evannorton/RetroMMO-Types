import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleUseAbilityEventCaster {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleUseAbilityEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleUseAbilityEvent extends BattleEvent {
  readonly abilityID: string;
  readonly caster: BattleUseAbilityEventCaster;
  readonly target?: BattleUseAbilityEventTarget;
  readonly type: BattleEventType.UseAbility;
}
