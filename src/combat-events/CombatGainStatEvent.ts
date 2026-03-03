import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { Stat } from "../Stat";

export interface CombatGainStatEvent extends CombatEvent {
  readonly amount: number;
  readonly stat: Stat;
  readonly type: CombatEventType.GainStat;
  readonly username: string;
}
