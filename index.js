const mineflayer = require('mineflayer');

const botArgs = {
    host: 'SMP311231.aternos.me', // Sadece adres
    port: 28665,                  // Sadece sayı
    username: 'afk_reis_bot',
    version: '1.21.4'             // Sunucu sürümün farklıysa burayı düzelt
};

const initBot = () => {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log("BOMBA GİBİ GİRDİK REİS! 7/24 AKTİF.");
    });

    bot.on('spawn', () => {
        bot.chat('Ben geldim! Artık bu sunucu kapanmaz.');
    });

    bot.on('error', (err) => {
        console.log("Hata çıktı: " + err);
    });

    bot.on('end', () => {
        console.log("Bot düştü, tekrar bağlanıyor...");
        setTimeout(initBot, 5000);
    });
};

initBot();
