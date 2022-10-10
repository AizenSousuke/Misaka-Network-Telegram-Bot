import OPEN_AI from "./openai";
import TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
import completion from "../models/completion";
import { RemoveCommand } from "./messageHelper";
import { Telegraf } from "telegraf";

export const TELEGRAM_BOT = () => {
	// dotenv.config();

	const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
	// const BOT = new TelegramBot(TELEGRAM_BOT_TOKEN, {
	// 	polling: true,
	// });
	// const BOT = new TelegramBot(TELEGRAM_BOT_TOKEN, {
	// 	webHook: true,
	// });

	// Telegraf
	const BOT = new Telegraf(TELEGRAM_BOT_TOKEN);

	BOT.start((ctx) => ctx.reply("Hello world"));
	BOT.hears("hi", (ctx) => ctx.reply("Hey there"));
	BOT.launch();
	// BOT.launch({
	// 	webhook: {
	// 		domain: "misakanetwork-telegram-api.netlify.app"
	// 	}
	// });

	// // Enable graceful stop
	// process.once('SIGINT', () => BOT.stop('SIGINT'));
	// process.once('SIGTERM', () => BOT.stop('SIGTERM'));

	console.log("Finished running bot");

	return BOT;
};

export const SETUP_TELEGRAM_BOT = async (BOT) => {
	const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
	const openai = OPEN_AI();

	// BOT.on("polling_error", console.log);

	// Remove old webhook
	// BOT.setWebHook(
	// 	"https://api.telegram.org/bot" +
	// 		TELEGRAM_BOT_TOKEN +
	// 		"/setWebhook"
	// );

	// // Set webhook
	// BOT.setWebHook(
	// 	"https://api.telegram.org/bot" +
	// 		TELEGRAM_BOT_TOKEN +
	// 		"/setWebhook?url=" +
	// 		process.env.WEBHOOK_URL
	// );

	BOT.onText(/\/start/, (message) => {
		const chatId = message.chat.id;

		BOT.sendMessage(
			chatId,
			`
	    <b>Welcome to the Misaka Network.</b>

	    This Telegram Bot has an Open AI functionality.

	    To get started, please choose type one of the following commands:
	    /start - show this message
	    /complete &lt;text&gt; - use Open AI to complete a sentence or write something out
	    /datetime - get the current date and time in Singapore
	    `,
			{ parse_mode: "HTML" }
		);
	});

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
			"Echoing " + RemoveCommand(message.text) + " back to you :D"
		);
	});

	BOT.onText(/\/complete (.*)/, async (message) => {
		const chatId = message.chat.id;
		const prompt = RemoveCommand(message.text);

		const response = await openai.createCompletion(
			completion.CompletionModel({ prompt: prompt })
		);

		if (response) {
			BOT.sendMessage(chatId, response.data.choices[0].text);
		}
	});

	// await BOT.close();
	// await BOT.closeWebHook();
};

export default TELEGRAM_BOT;
