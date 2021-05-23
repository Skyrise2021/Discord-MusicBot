module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "p>", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token: process.env.Token || "ODQ1NjM0NTgxMjA1MjIxNDA2.YKj0kw.9MS0bThjJd2e7Kkv5toDtvebVHQ", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "845634581205221406", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "TCu9hf80cK3011qhWp_Cq-ZNufh4jZs7", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a server to connect :)
  Lavalink: {
    id: "Main",
    host: "lavalink.sudhanplayz.live",
    port: 1234,
    pass: "CodingWithSudhan",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "af392669651442b2bc3b6fefa9fbf635", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "7ab2aa6aee714c14b9a2625ca8a2a411", //Spotify Client Secret
  },
};
