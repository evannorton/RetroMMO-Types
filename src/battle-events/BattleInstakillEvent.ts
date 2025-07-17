import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleInstakillEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleInstakillEvent extends BattleEvent {
  readonly abilityID: string;
  readonly target: BattleInstakillEventTarget;
  readonly type: BattleEventType.Instakill;
}
