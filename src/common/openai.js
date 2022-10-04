import { Configuration, OpenAIApi } from "openai";
import { CompletionModel } from "../models/completion";
import { RemoveCommand } from "../common/messageHelper";
import * as dotenv from "dotenv";

export const OPEN_AI = () => {
	dotenv.config();

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
