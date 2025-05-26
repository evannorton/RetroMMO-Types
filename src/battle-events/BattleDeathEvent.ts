import { BattleEvent } from "./BattleEvent";

export interface BattleDeathEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleDeathEvent extends BattleEvent {
  readonly target: BattleDeathEventTarget;
}
