import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleBleedStartEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly order: number;
  readonly username?: string;
}
export interface BattleBleedStartEvent extends BattleEvent {
  readonly target: BattleBleedStartEventTarget;
  readonly type: BattleEventType.BleedStart;
}
