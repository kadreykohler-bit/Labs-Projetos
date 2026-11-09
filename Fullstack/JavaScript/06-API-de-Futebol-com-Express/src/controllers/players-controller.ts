import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayersService, updatePlayerService } from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { statisticModel } from "../models/statiscts-model";

export const getPlayers = async (_req: Request, res: Response) => {
    const httpResponse = await getPlayersService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);   
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await createPlayerService(bodyValue);
    
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const bodyValue: statisticModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
