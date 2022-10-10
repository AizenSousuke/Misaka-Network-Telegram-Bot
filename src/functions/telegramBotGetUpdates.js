const { default: TELEGRAM_BOT, SETUP_TELEGRAM_BOT } = require("../common/bot");

module.exports.handler = async (event, context) => {
	try {
		console.log(
			"Running function at " +
				new Date().toLocaleString("en-SG", {
					timeZone: "Asia/Singapore",
					hour12: true,
				})
		);
		console.log(JSON.stringify(event));

		const BOT = TELEGRAM_BOT();
		await SETUP_TELEGRAM_BOT(BOT);

		const data = JSON.parse(event.body);
		BOT.sendMessage(data.message.chat.id, data.message.text);

		return {
			statusCode: 200,
			body: "Success",
		};
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
