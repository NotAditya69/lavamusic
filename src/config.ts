import dotenv from 'dotenv';
import { SearchEngine } from './types.js';
dotenv.config();

export default {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  color: {
    red: 0xff0000,
    green: 0x00ff00,
    blue: 0x0000ff,
    yellow: 0xffff00,
    main: 0x2f3136,
  },
  searchEngine: process.env.SEARCH_ENGINE || (SearchEngine.YouTube as SearchEngine),
  maxPlaylistSize: parseInt(process.env.MAX_PLAYLIST_SIZE) || 100,
  botStatus: process.env.BOT_STATUS || 'online', // online, idle, dnd, invisible
  botActivity: process.env.BOT_ACTIVITY || 'Lavamusic', // set the bot activity
  maxQueueSize: parseInt(process.env.MAX_QUEUE_SIZE) || 100,
  owners: process.env.OWNERS?.split(','),
  database: process.env.DATABASE_URL,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  production: parseBoolean(process.env.PRODUCTION) || true,
  lavalink: [
    {
      url: process.env.LAVALINK_URL,
      auth: process.env.LAVALINK_AUTH,
      name: process.env.LAVALINK_NAME,
      secure: parseBoolean(process.env.LAVALINK_SECURE) || false,
    },
  ],
};

function parseBoolean(value: string | undefined): boolean {
  if (typeof value === 'string') {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case 'true':
      return true;
    default:
      return false;
  }
}
/**
 * Project: lavamusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
