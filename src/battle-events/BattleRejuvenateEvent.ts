import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleRejuvenateEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleRejuvenateEvent extends BattleEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: BattleRejuvenateEventTarget;
  readonly type: BattleEventType.Rejuvenate;
}
