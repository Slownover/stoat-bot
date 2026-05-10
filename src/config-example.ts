import "dotenv/config";

export default {
  TOKEN: process.env.BOT_TOKEN ?? "",
  NODE_ENV: process.env.NODE_ENV,
  prefix: "",
};
