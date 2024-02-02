import e, { Request, Response, response } from "express"
import BankQueueService from "./BankQueueService"

export default class BankQueueController{
    constructor(private bankQueueService: BankQueueService){}

    async addClientVip(req:Request, res:Response): Promise<Response> {
        try{
            this.bankQueueService.addClientVip()
            return res.status(201).send("Cliente VIP adicionado com sucesso")
            
        } catch(err){
            return response.status(400).json({message: "Erro ao adicionar client VIP"})
        }
    }
    
    async addClientNormal(req: Request, res: Response): Promise<Response> {
        try{
            this.bankQueueService.addClientNormal()
            return res.status(201).send( "Cliente Normal adicionado com sucesso")

        } catch(err){
            return response.status(400).json({message: "Erro ao adicionar client Normal"})
        }
    }

    async addClientElderly(req: Request, res: Response): Promise<Response> {
        try{
            this.bankQueueService.addClientElderly()
            return res.status(201).send("Cliente Idoso adicionado com sucesso")

        } catch(err){
            return response.status(400).json({message: "Erro ao adicionar client Idoso"})
        }
    }

    async getListClientsAtFila(req: Request, res: Response): Promise<Response> {
        try{
            const list = await this.bankQueueService.getListClientsAtFila()
            return res.status(200).json(list)

        } catch(err: any){
            return res.status(400).json(err.message)
        }
    }

    async getClientFila(req: Request, res: Response): Promise<Response> {
        try{
            const client = await this.bankQueueService.getClientFila()
            return res.status(200).json(client)

        } catch(err: any){
            return res.status(400).json(err.message)
        } 
    }
}