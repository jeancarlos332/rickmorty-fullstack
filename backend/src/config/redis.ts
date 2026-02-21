
import { createClient } from "redis";

export const redisClient = createClient();

redisClient.connect();

redisClient.on("error", console.error);
