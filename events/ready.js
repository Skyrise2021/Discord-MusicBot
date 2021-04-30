module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("m.help | VISORS FAMILY |", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
