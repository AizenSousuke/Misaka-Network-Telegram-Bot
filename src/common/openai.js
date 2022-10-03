export const OPEN_AI = () => {
	const { Configuration, OpenAIApi } = require("openai");
	const completion = require("./models/completion");
	const { RemoveCommand } = require("./common/messageHelper");
	("./models/completion");
	require("dotenv").config();

	const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
	const OPEN_AI_ORGANIZATION_ID = process.env.OPEN_AI_ORGANIZATION_ID;
	const OPEN_AI_CONFIGURATION = new Configuration({
		organization: OPEN_AI_ORGANIZATION_ID,
		apiKey: OPEN_AI_KEY,
	});
	const openai = new OpenAIApi(OPEN_AI_CONFIGURATION);
	const COMPLETIONS_API = "https://api.openai.com/v1/completions";

	return openai;
};
