const ping = require("../commands/ping.js");

const Discord = require("discord.js")

function runCommand() {
    ping.run(client,message,args);
}