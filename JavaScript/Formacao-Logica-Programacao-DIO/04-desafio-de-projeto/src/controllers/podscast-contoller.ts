import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { contentType } from '../utils/content-type';
import { FilterModel } from '../models/filter-models';


export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
    ) => {
    const content: FilterModel = await serviceListEpisodes();

    res.writeHead(content.statuscode, {'Content-Type': contentType.JSON});
    res.write(JSON.stringify(content.body, null, 2));

    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content: FilterModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statuscode, {'Content-Type': contentType.JSON});
    res.write(JSON.stringify(content.body, null, 2));
    
    res.end();
};





