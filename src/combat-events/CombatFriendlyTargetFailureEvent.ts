import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatFriendlyTargetFailureEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatFriendlyTargetFailureEvent extends CombatEvent {
  readonly target: CombatFriendlyTargetFailureEventTarget;
  readonly type: CombatEventType.FriendlyTargetFailure;
}
