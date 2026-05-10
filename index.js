const http = require('http');
// Render'ın uyumaması için gereken web sunucusu
http.createServer((req, res) => {
  res.write("Bot 7/24 Aktif!");
  res.end();
}).listen(8080);

const mineflayer = require('mineflayer');

const settings = {
  host: "SMP311231.aternos.me",
  port: 28665, // Burayı kendi portunla kontrol et reis
  username: "afk_reis_bot",
  version: "1.21.4"
};

const bot = mineflayer.createBot(settings);

bot.on('spawn', () => {
  console.log('BOMBA GİBİ GİRDİK REİS! 7/24 AKTİF.');
});

bot.on('end', () => {
  console.log('Bağlantı koptu, tekrar deneniyor...');
  setTimeout(() => { process.exit(); }, 15000); 
});

bot.on('error', (err) => console.log('Hata: ' + err.message));
