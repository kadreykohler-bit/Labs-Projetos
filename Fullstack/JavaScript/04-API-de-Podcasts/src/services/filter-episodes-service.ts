import { FilterModel } from "../models/filter-models";
import { repositoryPodcast } from "../repositories/podcasts-repository";


export const serviceFilterEpisodes = async (
    canalName: string | undefined
    ): Promise<FilterModel> => {
    //Definindo a interface de retorno da função
    let responseFormat: FilterModel = {
        statuscode: 0,
        body: []
    };

    //Buscando os dados 
    const queryString = decodeURIComponent(
    canalName?.split("?p=")[1] || "");
    
    const data = await repositoryPodcast(queryString);

    //Verifico se tem conteúdo
    /* Forma alternativa de fazer a verificação
    if (data.length !== 0){
        responseFormat.statuscode = statusCode.OK;
    }else{
        responseFormat.statuscode = statusCode.NoContent;
    }
    */

    return responseFormat;
};
