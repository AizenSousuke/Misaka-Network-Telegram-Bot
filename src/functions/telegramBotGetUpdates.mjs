import TELEGRAM_BOT from "../common/bot";

module.exports = {
	handler: async (event, context) => {
		const BOT = TELEGRAM_BOT();
		try {
			return {
				statusCode: 200,
				body: "Success",
			};
		} catch (error) {
			return {
				statusCode: error.statusCode ?? 500,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(error.body ?? "Internal Server Error"),
			};
		} finally {
		}
	},
};
