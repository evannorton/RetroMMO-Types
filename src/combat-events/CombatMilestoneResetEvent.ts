import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { WorldResourcesUpdate } from "../updates/world/WorldResourcesUpdate";

export interface CombatMilestoneResetEvent extends CombatEvent {
  readonly abilityID: string;
  readonly characterID: string;
  readonly resources: WorldResourcesUpdate;
  readonly type: CombatEventType.MilestoneReset;
  readonly username: string;
}
