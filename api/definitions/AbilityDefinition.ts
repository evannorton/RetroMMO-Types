import { Definition } from "./Definition";
import { TargetType } from "../TargetType";

export interface AbilityDefinition extends Definition {
  targetType: TargetType;
}
