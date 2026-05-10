import { Client } from "stoat.js";
import config from "./config.ts";

if (!config.TOKEN) {
  throw new Error("BOT_TOKEN manquant dans le fichier .env");
}

const client = new Client();

client.once("ready", async () => {
  if (!client.user) {
    throw new Error("Client non connecté");
  }
  console.info(`Logged in as ${client.user.username}!`);

  await client.user.edit({
    status: { presence: "Online", text: "Grandit avec Slownover" },
  });
});

client.on("messageCreate", async (message) => {
  if (message.authorId === client.user?.id || !message) return;
  if (!message.channel) return;
  if (message.content === "hello") {
    message.channel.sendMessage("world");
  }

  if (message.content === "!ping") {
    const start = Date.now();
    const sent = await message.channel.sendMessage("Pong...");
    const end = Date.now();
    sent.edit({ content: `Pong ! Latence : ${end - start}ms` });
  }
});

client.loginBot(config.TOKEN);
