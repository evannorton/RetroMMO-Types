import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleHealEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleHealEvent extends BattleEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: BattleHealEventTarget;
  readonly type: BattleEventType.Heal;
}
