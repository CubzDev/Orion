require('dotenv').config();
const fs = require("fs");
const Discord = require("discord.js");
const db = require('quick.db');

const config = require("./config.json");

const client = new Discord.Client();

client.defaultPrefix = '!';
client.noPermission = "You do not have permission do execute this command!";
client.adminPermission = "ADMNINISTRATOR";

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });

client.login(process.env.DISCORD_BOT_TOKEN);