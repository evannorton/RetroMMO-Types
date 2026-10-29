import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatHardenEndEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatHardenEndEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatHardenEndEventTarget;
  readonly type: CombatEventType.HardenEnd;
}
