import { ChatType } from "../ChatType";

export interface Chat {
  readonly time: number;
  readonly type: ChatType;
  readonly username: string;
}
