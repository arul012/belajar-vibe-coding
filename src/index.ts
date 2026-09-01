import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => "Hello World")
  .get("/health", () => ({ status: "ok" }))
  .get("/users", async () => {
    return await db.select().from(users);
  })
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
