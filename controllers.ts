import { Request, Response } from "./deps.ts";

export const allowVerbs = function (
  verbs: string,
) {
  return ({ response }: { response: Response }) => {
    response.status = 200;
    response.headers.set("Allow", verbs);
  };
};

export const helloWorld = function (
  { response }: { response: Response },
) {
  response.status = 200;
  response.body = "<html><body>Hello world</body></html>";
};
