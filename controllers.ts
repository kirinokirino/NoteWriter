import { Request, Response } from "./deps.ts";

export const allowVerbs = function (
  verbs: string,
) {
  return ({ response }: { response: Response }) => {
    response.status = 200;
    response.headers.set("Allow", verbs);
  };
};

export const aboutPage = function (
  { response }: { response: Response },
) {
  response.status = 200;
  response.body =
    `<html><Head><Title>About Notes api</Title></Head><body><h2>Notes api routes:</h2>
  <ul><li>/about - GET (this page)</li><li>/notes - GET, POST</li><li>/notes/:id - GET, PUT, DELETE</li></ul>
  </body></html>`;
};

export const getAllNotes = function ({ response }: { response: Response }) {};
export const postNote = function (
  { request, response }: { request: Request; response: Response },
) {};
export const getNote = function (
  { response, params }: { response: Response; params: { id: string } },
) {};
export const updateNote = function (
  { request, response, params }: {
    request: Request;
    response: Response;
    params: { id: string };
  },
) {};
export const deleteNote = function (
  { response, params }: { response: Response; params: { id: string } },
) {};
