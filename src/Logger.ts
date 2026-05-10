import pino from "pino";
import config from "./config.ts";

const isDev = config.NODE_ENV !== "production";

export default pino({
  level: isDev ? "trace" : "info",
  transport: {
    pipeline: [
      { target: "pino-pretty" },
      {
        target: "pino/file",
        options: {
          destination: "./logs/bot.log",
          mkdir: true,
        },
      },
    ],
  },
});
