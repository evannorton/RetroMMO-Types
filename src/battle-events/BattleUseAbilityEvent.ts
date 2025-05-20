import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleUseAbilityEventCaster {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleUseAbilityEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleUseAbilityEvent extends BattleEvent {
  readonly abilityID: string;
  readonly caster: BattleUseAbilityEventCaster;
  readonly target?: BattleUseAbilityEventTarget;
  readonly type: BattleEventType.UseAbility;
}
