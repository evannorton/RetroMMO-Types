import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattlePoisonStartEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattlePoisonStartEvent extends BattleEvent {
  readonly target: BattlePoisonStartEventTarget;
  readonly type: BattleEventType.PoisonStart;
}
