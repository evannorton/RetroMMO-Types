import { Definition } from "./Definition";
import { TargetType } from "../TargetType";

export interface AbilityDefinition extends Definition {
  readonly battleImpactAnimationID?: string;
  readonly battleImpactCritAnimationID?: string;
  readonly battleImpactInstakillAnimationID?: string;
  readonly boostItemID?: string;
  readonly canBeUsedInBattle?: boolean;
  readonly canBeUsedInWorld?: boolean;
  readonly chargeNoiseID?: string;
  readonly description: string;
  readonly fleeChance?: number;
  readonly iconImagePath: string;
  readonly impactCritNoiseID?: string;
  readonly impactInstakillNoiseID?: string;
  readonly impactNoiseID?: string;
  readonly mpCost: number;
  readonly name: string;
  readonly targetType: TargetType;
}
