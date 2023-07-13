const { default: TELEGRAM_BOT, SETUP_TELEGRAM_BOT } = require("../common/bot");

const BOT = TELEGRAM_BOT();

module.exports.handler = async (event, context) => {
	try {
		BOT.handleUpdate(JSON.parse(event.body));

		return {
			statusCode: 200,
			body: "",
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
