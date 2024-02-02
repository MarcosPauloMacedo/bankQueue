import { Request, Response } from 'express'
import AddClientService from './AddClientService'

export default class AddClientController{
    constructor(private addClientService: AddClientService){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { priorityClient, code } = req.body

        try {
            await this.addClientService.execute({ priorityClient, code })
            return res.status(201).send();

        } catch (error) {
            return res.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}