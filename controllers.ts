import { Request, Response } from "./deps.ts";

export const helloWorld = function (
  { response }: { response: Response },
) {
  response.status = 200;
  response.body = "<html><body>Hello world</body></html>";
};
