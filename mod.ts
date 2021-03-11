import { Application, Router } from "./deps.ts";

const router = new Router();

const app = new Application();
const port = 8080;

app.use(router.routes());

await app.listen({ port });
