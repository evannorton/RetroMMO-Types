import { Definition } from "./Definition";

export interface MonsterDefinition extends Definition {
  readonly battleHeight: number;
  readonly battleWidth: number;
  readonly deathAudioPath: string;
  readonly imagePath: string;
  readonly name: string;
  readonly offset: number;
  readonly shadowXOffset: number;
  readonly shadowXRadius: number;
  readonly shadowYOffset: number;
  readonly shadowYRadius: number;
}
