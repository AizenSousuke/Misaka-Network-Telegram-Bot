const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const OPEN_AI_KEY = process.env.OPEN_AI_KEY;

const BOT = new TelegramBot(TELEGRAM_BOT_TOKEN, {
	polling: true,
});

BOT.on("polling_error", console.log);

BOT.onText(/Hello World/, (message) => {
    const chatId = message.chat.id;
    BOT.sendAnimation(chatId, "https://media3.giphy.com/media/PnUatAYWMEMvmiwsyx/giphy.gif?cid=ecf05e471tflyileji3sdwd6dnxd5gzbo7qeofk139j497dj&rid=giphy.gif&ct=g");
});

BOT.onText(/\\echo (.*)/, (message) => {
    const chatId = message.chat.id;
    BOT.sendMessage(chatId, "Echoing " + message.text.replace("\\echo ", "") + " back to you :D");
});

// BOT.on("message", (message) => {
//     const chatId = message.chat.id;
//     switch (message.text) {
//         case "Testing":
//             BOT.sendMessage(chatId, "Misaka has received your message :3");
//             break;
//         default:
//             BOT.sendMessage(chatId, "...");
//             break;
//     }
// });
