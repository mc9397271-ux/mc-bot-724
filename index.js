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

// ... (üstteki http ve settings kısımları aynı kalsın) ...

const bot = mineflayer.createBot(settings);

bot.on('spawn', () => {
  console.log('BOMBA GİBİ GİRDİK REİS!');
  
  // BOT İÇERİ GİRİNCE ŞİFRE BELİRLİYOR (Örn: Omer123)
  // Eğer sunucu "Kayıtlısın, giriş yap" derse /login Omer123 yazar.
  // Değilse /register ile kayıt olur.
  setTimeout(() => {
    bot.chat('/register Omer123 Omer123');
    bot.chat('/login Omer123');
    console.log('Kayıt/Giriş işlemi yapıldı.');
  }, 3000); // Girdikten 3 saniye sonra yazar
});

// ... (geri kalan hata kısımları aynı) ...
});

bot.on('end', () => {
  console.log('Bağlantı koptu, tekrar deneniyor...');
  setTimeout(() => { process.exit(); }, 15000); 
});

bot.on('error', (err) => console.log('Hata: ' + err.message));
