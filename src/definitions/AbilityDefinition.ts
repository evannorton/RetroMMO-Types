import { Definition } from "./Definition";
import { TargetType } from "../TargetType";

export interface AbilityDefinition extends Definition {
  readonly canBeUsedInBattle?: boolean;
  readonly canBeUsedInWorld?: boolean;
  readonly description: string;
  readonly mpCost: number;
  readonly name: string;
  readonly targetType: TargetType;
}
