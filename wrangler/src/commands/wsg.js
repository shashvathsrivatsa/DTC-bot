module.exports = {
    name: "wsg",
    description: "Replies with a greeting",
    execute(msg) {
        msg.channel.send("Sup ng");
    }
};

