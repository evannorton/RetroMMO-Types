import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatInstakillFinishEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatInstakillFinishEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatInstakillFinishEventTarget;
  readonly type: CombatEventType.InstakillFinish;
}
