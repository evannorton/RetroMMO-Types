import { BattleEvent } from "./BattleEvent";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleDeathEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleDeathEvent extends BattleEvent {
  readonly target: BattleDeathEventTarget;
}
