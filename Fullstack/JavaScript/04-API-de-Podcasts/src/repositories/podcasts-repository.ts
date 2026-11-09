import * as fs from "fs";
import * as path from "path";
import { PodcastModel } from '../models/podcast-model';


const pathData = path.join(__dirname, 'podcast.json');

export const repositoryPodcast = async (
    podcastName?: string
): Promise<PodcastModel[]> => {
    const language = 'utf-8';

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);
    
    console.log("Filtro:", podcastName);
    
    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.canalName === podcastName
        );
    }

    return jsonFile;
}
