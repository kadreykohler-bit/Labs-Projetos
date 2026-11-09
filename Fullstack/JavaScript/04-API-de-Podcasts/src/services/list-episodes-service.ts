import { FilterModel } from "../models/filter-models";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<FilterModel> => {
    //Define o contrato
    let responseFormat: FilterModel = {
            statuscode: 0,
            body: []
        };
        //Busca os dados
         const data = await repositoryPodcast();
        //Verifica o tipo de resposta
        responseFormat = {
            statuscode: data.length !== 0 ? statusCode.OK : statusCode.NoContent,
            body: data,
        };

    return responseFormat;
};