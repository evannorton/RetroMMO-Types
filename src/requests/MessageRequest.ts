import { ChatChannel } from "../ChatChannel";

export interface MessageRequest {
  readonly channel: ChatChannel;
  readonly contents: string;
}
