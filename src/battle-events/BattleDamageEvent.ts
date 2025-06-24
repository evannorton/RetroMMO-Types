import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleDamageEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleDamageEvent extends BattleEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly isRedirected?: boolean;
  readonly target: BattleDamageEventTarget;
  readonly type: BattleEventType.Damage;
}
