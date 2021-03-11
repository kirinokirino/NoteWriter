import { Application, Router } from "./deps.ts";
import { log } from "./deps.ts";
import {
  responseTimeHeader,
  responseTimeLogger,
  setCorsHeaders,
} from "./middleware.ts";
import { allowVerbs, helloWorld } from "./controllers.ts";

const router = new Router();
router.get("/hello", helloWorld)
  .options("/hello", allowVerbs("GET"));

const app = new Application();
const port = 8080;

app.use(responseTimeLogger);
app.use(responseTimeHeader);
app.use(setCorsHeaders);
app.use(router.routes());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  log.info(`Listening on: ${url}`);
});

await app.listen({ port });
