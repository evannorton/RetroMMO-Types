import { Definition } from "./Definition";
import { TargetType } from "../TargetType";

export interface AbilityDefinition extends Definition {
  readonly boostItemID?: string;
  readonly canBeUsedInBattle?: boolean;
  readonly canBeUsedInWorld?: boolean;
  readonly description: string;
  readonly iconImagePath: string;
  readonly mpCost: number;
  readonly name: string;
  readonly targetType: TargetType;
}
