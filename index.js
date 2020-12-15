const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', function () {
    console.log(`login as ${client.user.tag}`);
});

client.on("message", function (message) {
    if(message.content.startsWith("/roll")) {
        if (message.channel.type === "dm") return message.reply(" Cette commande n'est pas disponible en message privé !");
        let roll = Math.floor(Math.random() * 100 + 1);
        let embed = new Discord.MessageEmbed();
        embed.setDescription(`:game_die: - Le résultat est ${roll}`).setColor(13697103);
      message.channel.send({embed}).catch(() => {
          message.author.send(`Impossible d'écrire dans le salon ${message.channel}\n le résultat était : ${roll}`)
              .catch(() => {console.log(`Impossible to respond to ${message.author.tag} in DM and in ${message.channel.name}`)})
      });
    }
});

client.login("TOKEN")
    .then(() => console.log("connected"))
    .catch(e => {console.log(`Connection refused #${e.code}`)});