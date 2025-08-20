import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleInstakillFinishEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleInstakillFinishEvent extends BattleEvent {
  readonly abilityID: string;
  readonly target: BattleInstakillFinishEventTarget;
  readonly type: BattleEventType.InstakillFinish;
}
