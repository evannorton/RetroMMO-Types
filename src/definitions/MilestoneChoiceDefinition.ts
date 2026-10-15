import { Definition } from "./Definition";
import { Stat } from "../Stat";

export interface MilestoneChoiceDefinition extends Definition {
  readonly description: string;
  readonly imagePath: string;
  readonly maxHP?: boolean;
  readonly maxMP?: boolean;
  readonly name: string;
  readonly powerIncreaseAbilityIDs?: readonly string[];
  readonly stat?: Stat;
  readonly unlockAbilityIDs?: readonly string[];
}
