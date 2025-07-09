# 🤖 MCSC-Bot

A custom Discord bot for the MIST Cyber Security Club. It provides automated notifications about upcoming CTFs and supports web scraping to keep members informed.

## 📦 Project Structure

```
MCSC-Bot-main/
├── index.js           # Main bot logic
├── scraper.js         # Web scraper for fetching CTF event info
├── package.json       # Node.js project metadata
├── .gitignore
```

## 🚀 Features

- Scrapes and posts upcoming international CTF events
- Sends formatted messages to a specific Discord channel
- Automates community announcements
- Built with Node.js and Discord.js

## ⚙️ Requirements

- Node.js (v16+ recommended)
- Discord Bot Token
- Required Discord channel ID for posting updates

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shinigami2018/MCSC-Bot.git
   cd MCSC-Bot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory with the following contents:

   ```
   DISCORD_TOKEN=your_discord_bot_token
   CHANNEL_ID=your_target_channel_id
   ```

4. **Run the bot:**
   ```bash
   node index.js
   ```

## 🔍 How It Works

- The bot logs in using your Discord token.
- It scrapes data from a list of CTF platforms using `scraper.js`.
- It posts new CTF information to a specified channel.

You can modify the `scraper.js` to include more platforms or parse more event details.

## 🧠 Technologies Used

- **Node.js** – Runtime environment
- **Discord.js** – Interfacing with the Discord API
- **Axios / Cheerio** – Web scraping and data extraction (if used internally)

## 🛠️ To-Do (Optional)

- [ ] Add support for scheduling (e.g. daily checks)
- [ ] Implement logging or database persistence
- [ ] Add command interface for users to request CTFs manually

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙌 Credits

Developed for MCSC

##Not Maintained
