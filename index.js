const mineflayer = require('mineflayer');
const http = require('http');

// Render'ın "Port" hatası vermemesi için küçük bir sunucu
http.createServer((req, res) => {
    res.write("Bot Aktif!");
    res.end();
}).listen(10000);

const botArgs = {
    host: 'SMP311231.aternos.me',
    port: 28665,
    username: 'afk_reis_bot',
    version: '1.21.4'
};

function initBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log("BOMBA GİBİ GİRDİK REİS! SUNUCU ÖLÜMSÜZ OLDU.");
    });

    bot.on('error', (err) => {
        console.log("Hata: " + err);
    });

    bot.on('end', () => {
        console.log("Bağlantı koptu, 10 saniye sonra tekrar dalıyoruz...");
        setTimeout(initBot, 10000);
    });
}

initBot();
