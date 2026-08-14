export interface PlayerModel{
    id: number;
    name: string;
    confederation: string;
    coach: string;
    captain: string;
    statistics: {
        fifaRanking: number;
        worldTitles: number;
        attack: number;
        midfield: number;
        defense: number;
        overall: number; 
    };
}
   