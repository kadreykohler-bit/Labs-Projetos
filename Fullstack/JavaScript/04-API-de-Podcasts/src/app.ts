 import * as http from "http";
 import { getListEpisodes, getFilterEpisodes } from './controllers/podscast-contoller'
 import { Routes } from "./routes/routes";
 import { httpMethods } from "./utils/http-methods";
 
 export const app = async (
    req: http.IncomingMessage,
    res: http.ServerResponse) => {
    // QueryString para listar todos os episódios
    const [baseUrl] = req.url?.split('?') ?? ["", ""];

    // Rota para listar todos os episódios
    if (req.method === httpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(req, res);
    }

    // Rota para listar episódios filtrados
    if (req.method === httpMethods.GET && baseUrl === Routes.FILTER) {
    await getFilterEpisodes(req, res);
    }
};