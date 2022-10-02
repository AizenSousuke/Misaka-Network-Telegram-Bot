const TelegramBot = require("node-telegram-bot-api");
const { Configuration, OpenAIApi } = require("openai");
const completion = require("./models/completion");
("./models/completion");
require("dotenv").config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
const OPEN_AI_ORGANIZATION_ID = process.env.OPEN_AI_ORGANIZATION_ID;
const OPEN_AI_CONFIGURATION = new Configuration({
	organization: OPEN_AI_ORGANIZATION_ID,
	apiKey: OPEN_AI_KEY,
});
const openai = new OpenAIApi(OPEN_AI_CONFIGURATION);
const COMPLETIONS_API = "https://api.openai.com/v1/completions";

const BOT = new TelegramBot(TELEGRAM_BOT_TOKEN, {
	polling: true,
});

BOT.on("polling_error", console.log);

BOT.onText(/\/datetime/, (message) => {
	const chatId = message.chat.id;
	const date = new Date().toLocaleString("en-SG", {
		timeZone: "Asia/Singapore",
		hour12: true,
	});
	BOT.sendMessage(chatId, date);
});

BOT.onText(/Hello World/, (message) => {
	const chatId = message.chat.id;
	BOT.sendAnimation(
		chatId,
		"https://media3.giphy.com/media/PnUatAYWMEMvmiwsyx/giphy.gif?cid=ecf05e471tflyileji3sdwd6dnxd5gzbo7qeofk139j497dj&rid=giphy.gif&ct=g"
	);
});

BOT.onText(/\/echo (.*)/, (message) => {
	const chatId = message.chat.id;
	BOT.sendMessage(
		chatId,
		"Echoing " + message.text.replace("/echo ", "") + " back to you :D"
	);
});

BOT.onText(/\/complete (.*)/, async (message) => {
	const chatId = message.chat.id;
	const prompt = message.text.replace("/ai", "").trim();

	const response = await openai.createCompletion(
		completion.CompletionModel({ prompt: prompt }),
	);

	if (response) {
		BOT.sendMessage(chatId, response.data.choices[0].text);
	}
});

// Sample
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
