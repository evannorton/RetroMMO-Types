import { Definition } from "./Definition";

export interface MonsterDefinition extends Definition {
  readonly agility: number;
  readonly battleHeight: number;
  readonly battleWidth: number;
  readonly countsTowardTotal?: boolean;
  readonly deathAudioPath: string;
  readonly defense: number;
  readonly experience: number;
  readonly gold: number;
  readonly imagePath: string;
  readonly intelligence: number;
  readonly level: number;
  readonly luck: number;
  readonly maxHP: number;
  readonly maxMP: number;
  readonly name: string;
  readonly offset?: number;
  readonly shadowXOffset: number;
  readonly shadowXRadius: number;
  readonly shadowYOffset: number;
  readonly shadowYRadius: number;
  readonly strength: number;
  readonly wisdom: number;
}
