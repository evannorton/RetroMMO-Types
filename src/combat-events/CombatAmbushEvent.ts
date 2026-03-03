import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatAmbushEvent extends CombatEvent {
  readonly teamIndex: 0 | 1;
  readonly type: CombatEventType.Ambush;
}
