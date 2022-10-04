import TELEGRAM_BOT from "../common/bot";
const BOT = TELEGRAM_BOT();

module.exports.handler = async (event, context) => {
	try {
		console.log(event.body);
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
}
