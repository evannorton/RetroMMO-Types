import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatUseAbilityEventCaster {
  readonly battlerID?: string;
  readonly characterID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatUseAbilityEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatUseAbilityEvent extends CombatEvent {
  readonly abilityID: string;
  readonly caster: CombatUseAbilityEventCaster;
  readonly target?: CombatUseAbilityEventTarget;
  readonly type: CombatEventType.UseAbility;
}
