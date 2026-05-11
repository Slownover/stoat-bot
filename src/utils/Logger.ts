import config from "../config.ts";
import pino from "pino";

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
