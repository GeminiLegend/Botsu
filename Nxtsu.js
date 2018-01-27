
const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'MjYwOTk1ODY3NzUyOTIzMTQ2.DUcRMQ.OKM0G7NQ-UJO09DE8eZRLCwZsNg';
const commands = ["!salt","!rng","!3am","!nwta","!trump","!casul","!bdr","!fuckyou","!starlight","!halp","!roasted","!fiteme","!yesu","!nou","!confused","!gif","!nudes","!leo","!kys","!strip","!insult"]
var maintenanceMode = true;

var GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient("dyxb9ZumczbBa20SfCye5to4TB778Ntl")

bot.on('ready', () => {
  console.log(`Logged in as ${bot}!`);
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
    salt1 = "./images/salt1.jpg";
    salt2 = "./images/salt2.jpg";
    salt3 = "./images/salt3.jpg";
    salt4 = "./images/salt4.jpg";
    salt5 = "./images/salt5.jpg";
    salt6 = "./images/salt6.jpg";
    salt7 = "./images/salt7.jpg";
    salt8 = "./images/salt8.jpg";
    salt9 = "./images/salt9.jpg";
    salt10 = "./images/salt10.jpg";
    salt11 = "./images/salt11.jpg";
    salt12 = "./images/salt12.jpg";
    saltArray = [salt12,salt11,salt10,salt9,salt8,salt7,salt6,salt5,salt4,salt3,salt2,salt1];
});

bot.on('message', message => {

    var userID = message.author.id
    if(message.author.id === '356175367200833548'){
        console.log(message.content);
        if (new RegExp(commands.join("|")).test(message.content)) {
            message.channel.send("stfu fag");
            return;            
        }   

    }
    if(message.author.id === '305928414785961984'){
        console.log(message.content);
        if (new RegExp(commands.join("|")).test(message.content)) {
            message.channel.send("stfu thot");
            return;            
        }   

    }
	if (message.content === "!salt") {
		var randomSalt = saltArray[Math.floor(Math.random() * saltArray.length)];
        var file = new Discord.Attachment(randomSalt, "YESU.png");
        message.channel.send(file);
	}
	if (message.content === "!rng") {
        var file = new Discord.Attachment("./images/sora.jpg", "YESU.png");
        message.channel.send(file);
    }
    
    if (message.content === "!3am") {
        var file = new Discord.Attachment("./images/3am.gif", "3am.gif");
        message.channel.send(file);
	}
    if (message.content === "!nwta") {
        message.channel.send("Not with that attitude");
    };
    if (message.content === "!trump") {
        message.channel.send("Trump is Führer");
    };
    if (message.content === "!casul") {
        message.channel.send("Casul");
    };
    if (message.content === "!bdr") {
        message.channel.send("They call me big dick rick");
    };
    if (message.content === "!fuckyou") {
        message.channel.send("....................../´¯/)\n....................,/¯../\n.................../..../\n............./´¯/'...'/´¯¯`·¸\n........../'/.../..../......./¨¯\\\n........('(...´...´.... ¯~/'...')\n.........\\ .................'...../\n..........''...\\ .......... _.·´\n............\\ ..............(\n..............\\ .............\\ ...");
    }
    if (message.content === "!starlight") {
        message.channel.send("Starlight is Best Light\n#StarlightMasterRace");
    }
    if (message.content === "!halp") {
        message.channel.send("Commands: nou, nwta, trump, casul, bdr, fuckyou fiteme. \n" +
        " Mention Commands: nudes, leo, insult, kys, strip, gif");
    };
    if (message.content === "!roasted") {
        var file = new Discord.Attachment("./images/roasted.gif", "ROASTED.gif");
        message.channel.send(file);
    };
    if (message.content === "!fiteme") {
        var file = new Discord.Attachment("./images/fiteme.jpg", "fiteme.jpg");
        message.channel.send(file);
    };
    if (message.content === "!yesu") {
        var file = new Discord.Attachment("./images/yesu.jpg", "YESU.jpg");
        message.channel.send(file);
    };
    if (message.content === "!nou") {
        var file = new Discord.Attachment("./images/no_u.png", "NOU.png");
        message.channel.send(file);
    };
    if (message.content === "!confused") {
        var file = new Discord.Attachment("./images/confused.jpg", "confused.jpg");
        message.channel.send(file);
    };

    if (message.content.includes("!gif")) {
        var gifTag = message.content.split("!gif")[1];
        client.random('gifs', {"tag": gifTag})
        .then((response) => {
            console.log(response.data.url);
            message.channel.send(response.data.url);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    if (/!+.+<@217447408676634624>/.test(message)){
        console.log('Metioned God');
        message.channel.send("Do not speak my name so lightly mortal!");
        return;
	} else if (/!nudes/.test(message)) {
    	content = message.content;
    	mention = content.replace("!nudes", " ");
        message.channel.send(`${mention} Send Nudes`);
    } else if (message.content === "!leo") {
    	myArray = ['are you even in the party?','stfu you piece of shit','your mother never loved you','kys','your medals are shit'
    	,'the spawn hoes were more useful than you','faggot','my left nut is better at this game that you','no wonder your dad left you'
    	,'when are you going to kill yourself?','no one loves you','uninstall','you were a failed abortion','your life is trash just like your setup'
    	, "you're a waste of a sperm", 'your voice gives me cancer', 'i love you', "you're worse than michy's puns", "you look like a struck match", "you are subhuman trash"]
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(`<@!148688609715814400> ${rand}`);
    } else if (/!kys/.test(message)) {
    	content = message.content;
    	mention = content.replace("!kys", " ");
        message.channel.send(`${mention} kys`);
    } else if (/!strip/.test(message)) {
    	content = message.content;
    	mention = content.replace("!strip", " ");
        message.channel.send(`${mention} start stripping`);
    } else if (/!insult/.test(message)) {
        content = message.content;
        mention = content.replace("!insult", " ");
        myArray = ["i'm better than you", "you filthy casul","your lux is shit","go back to NA u skrub",
        "i’ll fuk u up", "fucking weeb", "nerd", "at least you tried", "your mother should've swallowed"];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(`${mention} ${rand}`);
    }
});

// bot.on('message', message =>{
// 	if (/!+.+<@217447408676634624>/.test(message)){
//         console.log('Metioned God');
//         message.channel.send("Do not speak my name so lightly mortal!");
// 	} else if (/!+.+gem/.test(message)) {
//         message.channel.send("Do not speak my name so lightly mortal!");
//     } else if (/!+.+Gem/.test(message)) {
//         message.channel.send("Do not speak my name so lightly mortal!");
//     } else if (/!+.+gemini/.test(message)) {
//         message.channel.send("Do not speak my name so lightly mortal!");
//     }  else if (/!+.+maverick/.test(message)) {
//         message.channel.send("Do not speak my name so lightly mortal!");
//     }  else if (/!+.+marius/.test(message)) {
//         message.channel.send("Do not speak my name so lightly mortal!");
//     } else if (/!nudes/.test(message)) {
//     	content = message.content;
//     	mention = content.replace("!nudes", " ");
//         message.channel.send(`${mention} Send Nudes`);
//     } else if (message.content === "!leo") {
//     	myArray = ['are you even in the party?','stfu you piece of shit','your mother never loved you','kys','your medals are shit'
//     	,'the spawn hoes were more useful than you','faggot','my left nut is better at this game that you','no wonder your dad left you'
//     	,'when are you going to kill yourself?','no one loves you','uninstall','you were a failed abortion','your life is trash just like your setup'
//     	, "you're a waste of a sperm", 'your voice gives me cancer', 'i love you', "you're worse than michy's puns", "you look like a struck match", "you are subhuman trash"]
//     	var rand = myArray[Math.floor(Math.random() * myArray.length)];
//         message.channel.send(`<@!148688609715814400> ${rand}`);
//     } else if (/!kys/.test(message)) {
//     	content = message.content;
//     	mention = content.replace("!kys", " ");
//         message.channel.send(`${mention} kys`);
//     } else if (/!strip/.test(message)) {
//     	content = message.content;
//     	mention = content.replace("!strip", " ");
//         message.channel.send(`${mention} start stripping`);
//     } else if (/!insult/.test(message)) {
//         content = message.content;
//         mention = content.replace("!insult", " ");
//         myArray = ["i'm better than you", "you filthy casul","your lux is shit","go back to NA u skrub",
//         "i’ll fuk u up", "fucking weeb", "nerd", "at least you tried", "your mother should've swallowed"];
//         var rand = myArray[Math.floor(Math.random() * myArray.length)];
//         message.channel.send(`${mention} ${rand}`);
//     } 
// });

// 305928414785961984 davi
// 356175367200833548 tj


bot.login(token);
