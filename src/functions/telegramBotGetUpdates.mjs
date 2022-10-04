const { TELEGRAM_BOT } = require("../common/bot");

exports.handler = async (event, context) => {
	try {
        console.log(event);
        const BOT = TELEGRAM_BOT();
        
	} catch (error) {
		console.log(error);
		return {
			statusCode: error.statusCode,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(error.body),
		};
	}
};
