import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleInstakillEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleInstakillEvent extends BattleEvent {
  readonly abilityID: string;
  readonly target: BattleInstakillEventTarget;
  readonly type: BattleEventType.Instakill;
}
