import { deleteOnePlayer, findAllplayers, findPlayerById, insertPlayer } from "../repositories/players-repositorys";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
import { PlayerModel } from "../models/palyer-model";
import { statisticModel } from "../models/statiscts-model";

export const getPlayersService = async () => {
    const data = await findAllplayers();
    let response = null;
if(data){
    response = await ok(data);
}else {
    response = await noContent();
}
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    // pass an empty statistics object cast to statisticModel to satisfy repository signature
    const data = await findPlayerById(id, {} as statisticModel);
    let response = null;
    if(data){
        response = await ok(data);
    }else {
        response = await noContent();
    }
    return response;
};


export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0){
        await insertPlayer(player);
        response = created();
    }else{
        response = await badRequest(new Error("Invalid player"));
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await deleteOnePlayer(id);
    if(isDeleted){
        response = await ok ({message: "deleted"});
    }else{
        response = await badRequest(new Error("Invalid player"));
    }
    return response;
};

export const updatePlayerService = async (id: number, statistics: statisticModel) => {
    let response = null;

    if(Object.keys(statistics).length === 0){
        response = await badRequest(new Error("Invalid statistics"));
    } else {
        response = await ok(statistics)
    }
    return response;
}