const { Telegraf } = require("telegraf");
const TOKEN = "5892537142:AAFM2V_Xy6lsC2t8KqqOegmmsmwcKEH5pA4";
const bot = new Telegraf(TOKEN);

const web_link = "https://order.yummydelivery.et/";
const web_link2 = "https://bit.ly/3HLxGxV";

bot.start((ctx) =>

  ctx.reply(("Welcome this is the official BOT of Yummy Delivery Adama for ordering foods online                                                                                                                                                                                                                                      Your ip is only used for you to access the bot app :)"), {
    reply_markup: {
      keyboard: [[{ text: "Order food", web_app: { url: web_link } }], [{ text: "Join US", web_app: { url: web_link2 } }]],

    },
  }),
);

bot.launch();

