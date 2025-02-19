# 🎮 Steam Idling Bot

I made this bot on the side for fun, as I wanted a simple  way to idle Steam games while having additional functionality like status management and basic automation. It started as a personal project, but I figured others might find it useful too. Whether you want to farm hours or remotely control your Steam presence, this bot makes it easy.

---

## 🚀 Overview

The Steam Idling Bot allows you to:
- ✅ **Idle multiple games** at once to farm playtime.
- ✅ **Control the bot via Steam chat** (start/stop idling, change status, etc.).
- ✅ **Set and change your Steam status** (Online, Invisible, Away, etc.).
- ✅ **Automatically reply to messages** with a custom response.
- ✅ **Accept or decline trades and friend requests** based on your preferences.
- ✅ **Reconnect automatically** if Steam disconnects.
- ✅ **Save settings automatically** so they persist after a restart.

---

## 🛠️ Setup Instructions

### 1️⃣ Install Node.js
Ensure you have **Node.js (v16+)** installed:
```bash
sudo apt update && sudo apt install nodejs npm -y
```

Verify installation:
```bash
node -v
```

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/steam-idler-bot.git
cd steam-idler-bot
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Configure the Bot
Before running the bot, you need to **create a configuration file**.

1. **Copy the example config:**
   ```bash
   cp config.example.json config.json
   ```
2. **Edit `config.json` and fill in your Steam details:**

```json
{
  "accountName": "YOUR_STEAM_USERNAME",
  "password": "YOUR_STEAM_PASSWORD",
  "gameIDs": [440],
  "machineName": "IdleBot1",
  "status": "Invisible",
  "autoReply": true,
  "autoReplyMessage": "I'm idling right now, will respond later!",
  "acceptTrades": false,
  "acceptFriends": true,
  "trustedUsers": ["steamid64"]
}
```

### 5️⃣ Start the Bot
Run:
```bash
node bot.js
```

---

## 📜 Chat Commands

| **Command** | **Function** |
|------------|-------------|
| `!idle <gameID>` | Starts idling the specified game(s). Example: `!idle 730,440` |
| `!stop` | Stops all currently idled games. |
| `!status <mode>` | Changes status (`online`, `away`, `busy`, `invisible`). Example: `!status invisible` |
| `!autoreply on/off` | Enables or disables auto-reply messages. |
| `!setreply <message>` | Updates the auto-reply message. |
| `!autofriend on/off` | Enables or disables auto-accepting friend requests. |
| `!autotrade on/off` | Enables or disables auto-accepting trade requests. |
| `!games` | Lists currently idling games. |
| `!help` | Displays available commands. |

Only **trusted users** (listed in `config.json`) can issue commands.

---

## 🛠️ Customization

### 🔹 Change Default Status
Set your default Steam status (`Online`, `Away`, `Invisible`, etc.) in `config.json`:
```json
"status": "Invisible"
```

### 🔹 Change Auto-Reply Message
Modify the message that is sent when someone messages the bot:
```json
"autoReplyMessage": "I'm idling right now, will respond later!"
```

### 🔹 Change Trusted Users
Only trusted users can issue chat commands:
```json
"trustedUsers": ["STEAM_0:1:12345678"]
```

---

## ❓ Troubleshooting

### 🔹 Bot Fails to Log In
- Ensure your Steam credentials are correct.
- If Steam Guard is enabled, you will be prompted to **enter the Steam Guard code manually in the console** upon login. The `sharedSecret` is not required for this bot to function.
- Check if Steam is down: [Steam Status](https://steamstat.us/).

### 🔹 Bot Disconnects Frequently
- Steam may force-disconnect idle accounts. The bot **auto-reconnects** when this happens.
- If the bot crashes, restart it using:
  ```bash
  node bot.js
  ```

### 🔹 Commands Not Working in Chat
- Ensure you are using the correct format (`!idle <gameID>`).
- Only **trusted users** can send commands.
- Restart the bot and try again.

---

## 📜 License
This project is **open-source** under the **MIT License**.

---

## 🌟 Support & Contributions
💡 **Feature Requests:** Open a GitHub Issue.  
🐛 **Report Bugs:** Submit an Issue.  
🤝 **Contribute:** Fork and submit a Pull Request!

---

## 🔗 Useful Links
- **Steam API Documentation** – [https://partner.steamgames.com/doc/home](https://partner.steamgames.com/doc/home)
- **Steam Game IDs List** – [https://steamdb.info/apps/](https://steamdb.info/apps/)

---

🚀 Enjoy idling! Let me know if you have suggestions! 🎮

