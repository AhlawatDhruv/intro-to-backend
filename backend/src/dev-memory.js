import { MongoMemoryServer } from "mongodb-memory-server";

const mongo = await MongoMemoryServer.create({
  instance: {
    dbName: "intro-to-backend",
  },
});

process.env.MONGODB_URI = mongo.getUri();

process.on("SIGINT", async () => {
  await mongo.stop();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await mongo.stop();
  process.exit(0);
});

await import("./index.js");
