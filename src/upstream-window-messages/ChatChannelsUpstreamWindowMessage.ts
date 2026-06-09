import { ChatChannel } from "../ChatChannel";

export interface ChatChannelsUpstreamWindowMessage {
  readonly chatChannels: readonly ChatChannel[];
}
