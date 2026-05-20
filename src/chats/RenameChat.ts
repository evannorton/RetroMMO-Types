import { Chat } from "./Chat";
import { ChatType } from "../ChatType";

export interface RenameChat extends Chat {
  readonly enforcerUsername: string;
  readonly recipientNewUsername: string;
  readonly recipientOldUsername: string;
  readonly type: ChatType.Rename;
}
