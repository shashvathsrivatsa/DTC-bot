const { Client, GatewayIntentBits } = require("discord.js");
const { commands } = require("./commands");

require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", msg => {
    if (!msg.content.startsWith(".") || msg.author.bot) return;

    const args = msg.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands.get(commandName);
    if (command) command.execute(msg, args);
});

client.login(process.env.BOT_TOKEN);

