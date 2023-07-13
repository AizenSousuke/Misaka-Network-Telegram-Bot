const { default: TELEGRAM_BOT, SETUP_TELEGRAM_BOT } = require("../common/bot");

module.exports.handler = async (event, context) => {
	try {
		const BOT = TELEGRAM_BOT();

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
		console.log("Done");
	}
};
