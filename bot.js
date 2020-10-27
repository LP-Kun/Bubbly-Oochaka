const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';



client.once('ready', () => {
    console.log('Bubbly Oochaka is Online');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    message.delete();
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'bogus') {
        message.channel.send('<:BogusPalpatine:768556424346599484>');
    }
    else if (command === 'bubbly') {

        const messages = ['<:BullshitPalps:768940539940175894>', 'Epic', '<:BogusPalpatine:768556424346599484>', 'Nic Plz',
            'Leave me alone it’s anime time', 'Why do you always ask for my opinion', 'do not ask me ask moe', 'yes', 'Quiet, colm', 'Bruh Like IDK']

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage);

    }
});

client.login('NzcwMzI2NDk3MDI2MTEzNTU2.X5b8dA.tFFaJqnKveTNNQUoD7ww4XGA5_o');