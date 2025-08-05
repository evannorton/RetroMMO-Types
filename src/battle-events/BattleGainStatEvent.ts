import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";
import { Stat } from "../Stat";

export interface BattleGainStatEvent extends BattleEvent {
  readonly amount: number;
  readonly stat: Stat;
  readonly type: BattleEventType.GainStat;
  readonly username: string;
}
