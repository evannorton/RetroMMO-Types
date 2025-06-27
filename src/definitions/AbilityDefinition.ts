import { Definition } from "./Definition";
import { TargetType } from "../TargetType";

export interface AbilityDefinition extends Definition {
  readonly battleImpactAnimationID?: string;
  readonly battleImpactCritAnimationID?: string;
  readonly battleImpactInstakillAnimationID?: string;
  readonly boostItemID?: string;
  readonly canBeUsedInBattle?: boolean;
  readonly canBeUsedInWorld?: boolean;
  readonly chargeAudioPath?: string;
  readonly description: string;
  readonly fleeChance?: number;
  readonly iconImagePath: string;
  readonly impactAudioPath?: string;
  readonly impactCritAudioPath?: string;
  readonly impactInstakillAudioPath?: string;
  readonly mpCost: number;
  readonly name: string;
  readonly targetType: TargetType;
}
