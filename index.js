const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const token = process.env.TOKEN;


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


const fetchCTFEvents = async () => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const url = `https://ctftime.org/api/v1/events/?limit=10&start=${currentTimestamp}`;

  const headers = {
    'User-Agent': 'Mozilla/5.0 (compatible; DiscordBot/1.0)',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data;

   
    if (data.length === 0) {
      return "No upcoming events found.";
    }

  
    let eventList = data.map(event => {
      return `**${event.title}**\n` +
             `Start: <t:${event.start}> | End: <t:${event.finish}>\n` +
             `Format: ${event.format}\n` +
             `URL: ${event.url}\n`;
    }).join('\n');

    return eventList;
  } catch (error) {
    console.error("Error fetching events:", error);
    return "An error occurred while fetching the events.";
  }
};


client.once('ready', () => {
  console.log('Logged in as ' + client.user.tag);
});


client.on('messageCreate', async (message) => {
 
  if (message.content.toLowerCase() === '!events') {
    const events = await fetchCTFEvents();
    message.channel.send(events); 
    // console.log(events);
  }
});


client.login(token);