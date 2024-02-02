import IBankQueue from "../repository/IBankQueue"
import BankQueue from "./BankQueue"

export default class BankQueueService{
    
    list: IBankQueue
    clientVip = 1
    clientNormal = 1
    clientElderly = 1

    constructor(list: IBankQueue){
        this.list = list
    }

    async addClientVip(): Promise<void> {
        let clientVip = new BankQueue(`v0${this.clientVip}`)
        await this.list.addPriorityElement(clientVip)
        this.clientVip ++
    }

    async addClientNormal(): Promise<void> {
        let clientNormal = new BankQueue(`n0${this.clientNormal}`)
        await this.list.addElement(clientNormal)
        this.clientNormal ++
    }

    async addClientElderly(): Promise<void> {
        let clientElderly = new BankQueue(`e0${this.clientElderly}`)
        await this.list.addPriorityElement(clientElderly)
        this.clientElderly ++
    }

    async getListClientsAtFila(): Promise<String[]> {     
        return await this.list.getAllList()
    }

    async getClientFila(): Promise<String> {        
        return await this.list.removeFirstList()
    }
}