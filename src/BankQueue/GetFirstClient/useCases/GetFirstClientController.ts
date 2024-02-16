import { Request, Response } from "express"
import GetFirstClientService from "./GetFirstClientService"

export default class GetFirtsClientController{
    constructor(private getFirstClientService: GetFirstClientService){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const client = await this.getFirstClientService.execute();
            return res.status(200).json(client)
        } catch (error) {
            return res.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}