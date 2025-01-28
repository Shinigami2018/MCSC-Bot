const { Client, Intents, MessageEmbed, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const axios = require('axios');
const cheerio = require('cheerio');
const schedule = require('node-schedule');
require('dotenv').config();

// Replace with your bot's token
const TOKEN = process.env.TOKEN;

// Channel ID where updates will be posted
const CHANNEL_ID = '1333497550010847384';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages ,GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Schedule daily updates
    // schedule.scheduleJob('0 0 * * *', async () => {
    //     const channel = client.channels.cache.get(CHANNEL_ID);
    //     if (channel) {
    //         const ctfData = await scrapeCtfData();
    //         for (const event of ctfData) {
    //             const embed = new MessageEmbed()
    //                 .setTitle(event.name)
    //                 .setURL(event.link)
    //                 .setColor('BLUE')
    //                 .addField('Final Registration Date', event.registration_end, false)
    //                 .addField('Event Start Date', event.start_date, false)
    //                 .addField('Team Size', event.team_size, false)
    //                 .setFooter('CTF Updates');

    //             channel.send({ embeds: [embed] });
    //         }
    //     }
    // });
});

// async function scrapeCtfData() {
//     const url = 'https://ctftime.org/event/list/upcoming'; // Example URL; adjust as needed
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const events = [];

//     $('.event-item').each((index, element) => { // Adjust selector based on the website structure
//         const name = $(element).find('.title').text().trim();
//         const link = 'https://ctftime.org' + $(element).find('a').attr('href');
//         const registration_end = $(element).find('.registration-end').text().trim();
//         const start_date = $(element).find('.start-date').text().trim();
//         const team_size = $(element).find('.team-size').text().trim();

//         events.push({
//             name,
//             link,
//             registration_end,
//             start_date,
//             team_size
//         });
//     });

//     return events;
// }

// Command for manual updates
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    console.log(message.content);
    if (message.content === '!update_ctfs') {
        const ctfData = await scrapeCtfData();
        for (const event of ctfData) {
            const embed = new MessageEmbed()
                .setTitle(event.name)
                .setURL(event.link)
                .setColor('BLUE')
                .addField('Final Registration Date', event.registration_end, false)
                .addField('Event Start Date', event.start_date, false)
                .addField('Team Size', event.team_size, false)
                .setFooter('CTF Updates');

            message.channel.send({ embeds: [embed] });
        }
    }
});

client.login(TOKEN);
