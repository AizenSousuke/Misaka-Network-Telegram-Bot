const { default: TELEGRAM_BOT } = require("../common/bot");

module.exports.handler = (event, context) => {
    console.log("Deploy succeeded");
    // const BOT = TELEGRAM_BOT();

	// // Set webhook
	// BOT.setWebHook(
	// 	"https://api.telegram.org/bot" +
	// 		TELEGRAM_BOT_TOKEN +
	// 		"/setWebhook?url=" +
	// 		process.env.WEBHOOK_URL
	// );
}