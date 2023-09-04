import Lavamusic from './structures/Lavamusic';
import { ClientOptions, GatewayIntentBits } from 'discord.js';
import config from './config';
import { DiscordDashboard } from "./api";
import child from "node:child_process";
const { GuildMembers, MessageContent, GuildVoiceStates, GuildMessages, Guilds, GuildMessageTyping } = GatewayIntentBits;
const clientOptions: ClientOptions = {
    intents: [Guilds, GuildMessages, MessageContent, GuildVoiceStates, GuildMembers, GuildMessageTyping],
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false,
    },
};

const client = new Lavamusic(clientOptions);

client.start(config.token);

if (config.dashboard.enable) {
    const dashboard = new DiscordDashboard();
    dashboard.start();
    client.logger.start('Starting dashboard...');
    child.exec('cd dashboard && npm i && npm run dev && cd ..', (err, stdout) => {
        if (err) {
            client.logger.error(err);
            return;
        }
        client.logger.start(stdout);
    });
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
