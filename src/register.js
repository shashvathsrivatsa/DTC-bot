const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});



client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", msg => {
    console.log("message received:", msg.content);
    if (msg.content === ".wsg") {
        msg.channel.send("Sup ng")
    }
});

client.login("MTQyNjI2MDYyMDY1ODg3MjM0MA.G1C5XU.r0z9H9ptHVUq_cjT1FgHFk0jSgP5fnM-VWzXfE");

