import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface BattleFriendlyTargetFailureEventTarget {
  readonly battlerID: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface BattleFriendlyTargetFailureEvent extends BattleEvent {
  readonly target: BattleFriendlyTargetFailureEventTarget;
  readonly type: BattleEventType.FriendlyTargetFailure;
}
