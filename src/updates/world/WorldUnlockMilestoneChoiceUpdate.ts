import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldUnlockMilestoneChoiceUpdate {
  readonly level: number;
  readonly milestoneChoiceID: string;
  readonly resources: WorldResourcesUpdate;
}
