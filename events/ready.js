module.exports = (client, ready) => {
    console.log(`[client]: Serving ${client.guilds} Servers.`);
    console.log(`[client]: Serving ${client.users} Users.`);
    console.log(`[client]: Serving ${client.channels} Channels.`);
    console.log(`[client]: Successfully online!`);
};