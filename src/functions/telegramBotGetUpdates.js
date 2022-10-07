const { default: TELEGRAM_BOT } = require("../common/bot");
import TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";

module.exports.handler = async (event, context, callback) => {
	try {
		console.log(
			"Running function at " +
				new Date().toLocaleString("en-SG", {
					timeZone: "Asia/Singapore",
					hour12: true,
				})
		);
		dotenv.config();

		const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
		const BOT = new TelegramBot(TELEGRAM_BOT_TOKEN, {
			polling: true,
		});

		BOT.onText(/\/datetime/, (message) => {
			const chatId = message.chat.id;
			const date = new Date().toLocaleString("en-SG", {
				timeZone: "Asia/Singapore",
				hour12: true,
			});
			BOT.sendMessage(chatId, date);
		});

		// console.log(JSON.stringify(res));
		console.log(JSON.stringify(event));
		return callback(null, {
			statusCode: 200,
			body: "Success",
		});
	} catch (error) {
		console.error(error);
		return {
			statusCode: error.statusCode ?? 500,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(error.body ?? "Internal Server Error"),
		};
	} finally {
	}
};
