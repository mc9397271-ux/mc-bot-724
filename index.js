const mineflayer = require('mineflayer');

const botArgs = {
    host: 'SMP311231.aternos.me',
    port: 28665,
    username: 'afk_reis_bot',
    version: '1.21.4' // Tam olarak senin sürümün
};

const initBot = () => {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log("BOMBA GİBİ GİRDİK REİS! 1.21.4 AKTİF.");
    });

    bot.on('spawn', () => {
        console.log("Bot sunucuda! Artık kapanmaz.");
    });

    bot.on('error', (err) => {
        console.log("Hata: " + err);
    });

    bot.on('end', () => {
        console.log("Bağlantı koptu, tekrar deneniyor...");
        setTimeout(initBot, 5000);
    });
};

initBot();
