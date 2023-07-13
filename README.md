# Misaka Mikoto Network Telegram API




### Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/69c5c697-dffb-4027-8fd6-698d90016345/deploy-status)](https://app.netlify.com/sites/misakanetwork-telegram-api/deploys)

### Getting Started
```
# Install the netlify cli
yarn global add netlify-cli

# Login
netlify login

# Install dependencies
yarn install

# Set webbook
```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={netlify_function_url_to_send_updates_to}

eg. netlify_function_url_to_send_updates_to: https://misakanetwork-telegram-api.netlify.app/.netlify/functions/telegramBotGetUpdates
```

### Testing locally
Run the command
```
netlify dev
```
Then go to [http://localhost:8888/.netlify/functions/telegramBotGetUpdates](Browser)

```