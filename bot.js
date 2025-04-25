const { Telegraf } = require("telegraf");
const TOKEN = "7291741563:AAHyUhEBr5eO3jbCmVWaHztU8XDe0QJQa7o";
const bot = new Telegraf(TOKEN);

const web_link = "https://maraki.yenesite.et";
const web_link2 = "https://maraki.yenesite.et/shop-page/track-order";
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
});
const PORT = process.env.PORT || 3000;

bot.start((ctx) =>

  ctx.reply(("Welcome to maraki meat To order please click Order Meat button                                                                                                                                                                                                                                      Your ip is only used for you to access the bot app :)"), {
    reply_markup: {
      keyboard: [[{ text: "Order Meat", web_app: { url: web_link } }], [{ text: "Track Order", web_app: { url: web_link2 } }]],

    },
  }),
);

bot.launch();

server.listen(PORT, () => console.log("Server is running on port 3000"));
