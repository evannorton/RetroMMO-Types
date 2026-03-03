import { CombatEventType } from "./CombatEventType";

export interface CombatEvent {
  readonly channel: number;
  duration: number;
  readonly startedAt: number;
  readonly type: CombatEventType;
}
