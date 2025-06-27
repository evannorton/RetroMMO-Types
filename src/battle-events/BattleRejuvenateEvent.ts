import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleRejuvenateEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleRejuvenateEvent extends BattleEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: BattleRejuvenateEventTarget;
  readonly type: BattleEventType.Rejuvenate;
}
