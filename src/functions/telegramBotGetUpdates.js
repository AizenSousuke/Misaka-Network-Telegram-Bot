import TELEGRAM_BOT from "../common/bot";
const BOT = TELEGRAM_BOT();

module.exports.handler = async (event, context, callback) => {
	try {
		// console.log(event.body);
		console.log("Running function");
		const json = JSON.parse(event.body);
		BOT.handleUpdate(json);
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
