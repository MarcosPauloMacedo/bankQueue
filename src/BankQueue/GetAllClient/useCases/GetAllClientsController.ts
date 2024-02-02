import { Request, Response } from "express";
import GetAllClientsService from "./GetAllClientsService"

export default class GetAllClientsController{
    constructor(private getAllClientsService: GetAllClientsService){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const clients = await this.getAllClientsService.execute()
            return res.status(200).json(clients)
            
        } catch (error) {
            return res.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}