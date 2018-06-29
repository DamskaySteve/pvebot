const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setActivity("Bot pour Anti-Arnaque PVE");
    console.log("Connecter");
});

bot.on('message', message =>{
    if (message.content ==="arnaque"){
        message.reply("Merci de ton signalement !");
        console.log("Commande reply salut faite !")
    }
	
        if (message.content ==="Yo"){
        message.reply("Yo tu vas bien :D");
        console.log("Commande reply salut faite !")
    }
	
	
	if (message.content ==="Qui est la"){
        message.reply("Moi chuis la mec !");
        console.log("Commande reply salut faite !")
    }
	
	if (message.content ==="!update"){
        message.reply("Mise a jour en cours...");
        console.log("Commande reply salut faite !")
    }
	
	
	
});


bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", "bienvenue").send('Un anti-arnaqueur est aparue ! Bienvenue sur Anti-Arnaque PVE !')

});


bot.login(process.env.TOKEN)
