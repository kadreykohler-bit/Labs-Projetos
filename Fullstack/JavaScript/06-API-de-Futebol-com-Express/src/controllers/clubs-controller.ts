import { Request, Response } from 'express';
import { getClubservices } from '../services/clubs-services';

export const getClubs = async (req: Request res: Response) => {
    const response = await getClubservices();
    res.status(response.statusCode).json(response.body);
};