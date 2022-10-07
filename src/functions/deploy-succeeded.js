const { default: TELEGRAM_BOT, SETUP_TELEGRAM_BOT } = require("../common/bot");

module.exports.handler = (event, context) => {
    console.log("Deploy succeeded");
    // const BOT = TELEGRAM_BOT();
    // SETUP_TELEGRAM_BOT(BOT);
}