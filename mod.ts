import { Application, Router } from "./deps.ts";
import { log } from "./deps.ts";
import {
  responseTimeHeader,
  responseTimeLogger,
  setCorsHeaders,
} from "./middleware.ts";
import {
  aboutPage,
  allowVerbs,
  deleteNote,
  getAllNotes,
  getNote,
  postNote,
  updateNote,
} from "./controllers.ts";

const router = new Router();
router.get("/about", aboutPage)
  .options("/about", allowVerbs("GET"))
  .get("/notes", getAllNotes)
  .post("/notes", postNote)
  .options("/notes", allowVerbs("GET, POST"))
  .get("/notes/:id", getNote)
  .put("/notes/:id", updateNote)
  .delete("/notes/:id", deleteNote)
  .options("/notes/:id", allowVerbs("GET, PUT, DELETE"));

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
