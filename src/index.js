const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const TOKEN = process.env.TOKEN;

const BOT = new TelegramBot(TOKEN, {
	polling: true,
});

BOT.on("message", (message) => {
    const chatId = message.chat.id;
    BOT.sendMessage(chatId, "Misaka has received your message :3");
});
