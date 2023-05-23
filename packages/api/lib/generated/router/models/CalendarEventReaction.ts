/* istanbul ignore file */

/* eslint-disable */

import type { Emote } from "./Emote";

export type CalendarEventReaction = {
  /**
   * The ID of the channel
   */
  channelId: string;
  /**
   * The ID of the user who added the reaction
   */
  createdBy: string;
  emote: Emote;
  /**
   * The ID of the calendar event
   */
  calendarEventId: number;
};