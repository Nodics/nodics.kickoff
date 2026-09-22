module.exports = {
  "credentials": {
    "telegram.bot.circa": {
      "value": null,
      "label": "Circa Telegram bot token",
      "status": "UNCONFIGURED",
      "secret": true,
      "credentialKind": "BOT_TOKEN"
    },
    "openai.circa": {
      "value": null,
      "label": "Circa OpenAI provider token",
      "status": "UNCONFIGURED",
      "secret": true,
      "credentialKind": "API_TOKEN"
    }
  },
  "httpHardening": {
    "cors": {
      "allowedOrigins": [
        "http://localhost:3600",
        "https://coming-designated-dialog-elevation.trycloudflare.com"
      ]
    }
  },
  "profileCustomerBrowserSession": {
    "enabled": true,
    "allowInsecureLoopback": true,
    "sameSite": "Lax"
  },
  "profileBrowserSession": {
    "enabled": true,
    "allowInsecureLoopback": true,
    "sameSite": "Lax"
  },
  "cache": {
    "default": {
      "engines": {
        "redis": {
          "enabled": true
        }
      }
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ],
    "allowMissingModelServices": true
  },
  "backofficeLocalReset": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ]
  }
};
