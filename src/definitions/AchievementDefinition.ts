import { Definition } from "./Definition";

export interface AchievementDefinition extends Definition {
  readonly description: string;
  readonly imagePath: string;
  readonly name: string;
}
