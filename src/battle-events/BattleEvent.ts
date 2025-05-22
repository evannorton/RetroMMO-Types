import { BattleEventType } from "./BattleEventType";

export interface BattleEvent {
  readonly channel: number;
  duration: number;
  readonly startedAt: number;
  readonly type: BattleEventType;
}
