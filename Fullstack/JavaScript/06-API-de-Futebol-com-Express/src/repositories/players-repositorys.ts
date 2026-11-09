import { PlayerModel } from "../models/palyer-model";
import { statisticModel } from "../models/statiscts-model";

export const database: PlayerModel[] =[
    {
    id: 1,
    name: "Brasil",
    confederation: "CONMEBOL",
    coach: "Carlo Ancelotti",
    captain: "Marquinhos",
    statistics: {
      fifaRanking: 5,
      worldTitles: 5,
      attack: 92,
      midfield: 89,
      defense: 87,
      overall: 90
    }
  },
  {
    id: 2,
    name: "Argentina",
    confederation: "CONMEBOL",
    coach: "Lionel Scaloni",
    captain: "Lionel Messi",
    statistics: {
      fifaRanking: 1,
      worldTitles: 3,
      attack: 93,
      midfield: 91,
      defense: 88,
      overall: 92
    }
  },
  {
    id: 3,
    name: "França",
    confederation: "UEFA",
    coach: "Didier Deschamps",
    captain: "Kylian Mbappé",
    statistics: {
      fifaRanking: 2,
      worldTitles: 2,
      attack: 92,
      midfield: 90,
      defense: 89,
      overall: 91
    }
  },
  {
    id: 4,
    name: "Inglaterra",
    confederation: "UEFA",
    coach: "Thomas Tuchel",
    captain: "Harry Kane",
    statistics: {
      fifaRanking: 4,
      worldTitles: 1,
      attack: 90,
      midfield: 90,
      defense: 88,
      overall: 90
    }
  },
  {
    id: 5,
    name: "Espanha",
    confederation: "UEFA",
    coach: "Luis de la Fuente",
    captain: "Álvaro Morata",
    statistics: {
      fifaRanking: 3,
      worldTitles: 1,
      attack: 89,
      midfield: 92,
      defense: 88,
      overall: 90
    }
  },
  {
    id: 6,
    name: "Marrocos",
    confederation: "CAF",
    coach: "Walid Regragui",
    captain: "Achraf Hakimi",
    statistics: {
      fifaRanking: 12,
      worldTitles: 0,
      attack: 84,
      midfield: 86,
      defense: 88,
      overall: 86
    }
  },
  {
    id: 7,
    name: "Noruega",
    confederation: "UEFA",
    coach: "Ståle Solbakken",
    captain: "Martin Ødegaard",
    statistics: {
      fifaRanking: 15,
      worldTitles: 0,
      attack: 88,
      midfield: 86,
      defense: 82,
      overall: 85
    }
  },
  {
    id: 8,
    name: "Bélgica",
    confederation: "UEFA",
    coach: "Rudi Garcia",
    captain: "Kevin De Bruyne",
    statistics: {
      fifaRanking: 8,
      worldTitles: 0,
      attack: 88,
      midfield: 87,
      defense: 84,
      overall: 86
    }
  }
];

export const findAllplayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (
id: number, statistics: statisticModel):
    Promise<PlayerModel | undefined> => {
   return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);
    if(index !== -1){
        database.splice(index, 1);
        return true;
    }else{
        return false;
    }
};

export const findAndModifyPlayer = async (id: number, statistics: statisticModel): Promise<PlayerModel | undefined>=> {
  const palyerIndex = database.findIndex(player => player.id === id);
  if (palyerIndex !== -1) {
    database[palyerIndex].statistics = statistics;
  }

  return database[palyerIndex];
}