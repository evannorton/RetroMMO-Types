import { ChatType } from "../ChatType";

export interface Chat {
  readonly playerID?: string;
  readonly time: number;
  readonly type: ChatType;
  readonly username: string;
}
