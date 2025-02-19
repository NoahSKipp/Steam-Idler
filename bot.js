const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('config.example.json', 'utf8'));
const client = new SteamUser();

function saveConfig() {
    fs.writeFileSync('config.example.json', JSON.stringify(config, null, 2), 'utf8');
    console.log("💾 Config file updated.");
}

function logIntoSteam() {
    const logOnOptions = {
        accountName: config.accountName,
        password: config.password,
        machineName: config.machineName,
    };

    if (config.sharedSecret) {
        logOnOptions.twoFactorCode = SteamTotp.generateAuthCode(config.sharedSecret);
    }

    console.log(`🔄 Logging into Steam as "${config.machineName}"...`);
    client.logOn(logOnOptions);
}

client.on('loggedOn', () => {
    console.log(`✅ Logged into Steam as "${config.accountName}"`);
    startIdling(config.gameIDs);
});

function startIdling(gameIDs) {
    console.log(`🎮 Idling games: ${gameIDs.join(", ")}`);
    client.gamesPlayed(gameIDs);
}

function stopIdling() {
    console.log(`⏹️ Stopping idling...`);
    client.gamesPlayed([]);
}

logIntoSteam();
