const mineflayer = require('mineflayer');

const botArgs = {
    host: 'SMP311231.aternos.me',
    port: 28665,
    username: 'afk_reis_bot',
    version: '1.21.1'
};

const initBot = () => {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log("BOMBA GİBİ GİRDİK REİS! 7/24 AKTİF.");
    });

    bot.on('spawn', () => {
        console.log("Bot sunucuda doğdu!");
    });

    bot.on('error', (err) => {
        console.log("Hata: " + err);
    });

    bot.on('end', () => {
        console.log("Bot düştü, 5 saniye sonra tekrar deniyor...");
        setTimeout(initBot, 5000);
    });
};

initBot();
