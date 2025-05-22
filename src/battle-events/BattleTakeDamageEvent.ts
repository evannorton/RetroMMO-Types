import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleTakeDamageEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleTakeDamageEvent extends BattleEvent {
  readonly amount: number;
  readonly target: BattleTakeDamageEventTarget;
  readonly type: BattleEventType.TakeDamage;
}
