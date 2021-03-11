import { Middleware } from "./deps.ts";
import { log } from "./deps.ts";

// https://github.com/oakserver/middleware
export const responseTimeHeader: Middleware = async function (ctx, next) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

export const responseTimeLogger: Middleware = async function (ctx, next) {
  await next();
  const responseTime = ctx.response.headers.get("X-Response-Time");
  log.info(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
};
