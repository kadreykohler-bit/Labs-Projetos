import { PodcastModel } from "./podcast-model";

export interface FilterModel {
    statuscode: number;
    body: PodcastModel[];
}