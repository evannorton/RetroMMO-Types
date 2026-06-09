import { ChatChannel } from "../ChatChannel";

export interface MessageDownstreamWindowMessage {
  readonly channel: ChatChannel;
  readonly contents: string;
}
