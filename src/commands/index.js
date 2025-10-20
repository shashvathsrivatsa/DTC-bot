const fs = require("fs");
const path = require("path");

const commands = new Map();

const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    if (file === "index.js") continue;
    const command = require(path.join(__dirname, file));
    commands.set(command.name, command);
}

module.exports = { commands };

