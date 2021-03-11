import { Application, Router } from "./deps.ts";
import { log } from "./deps.ts";
import { responseTimeHeader, responseTimeLogger } from "./middleware.ts";

const router = new Router();

const app = new Application();
const port = 8080;

app.use(router.routes());
app.use(responseTimeHeader);
app.use(responseTimeLogger);

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  log.info(`Listening on: ${url}`);
});

await app.listen({ port });
