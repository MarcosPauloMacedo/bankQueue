import BankQueue from "../../../entity/BankQueue"
import IAddClientDTO from "../useCases/IAddClientDTO"
import IBankQueueRepository from "../../../repository/IBankQueueRepository"

export default class AddClientService{
    constructor(private bankQueueRepository: IBankQueueRepository){}

    async execute(data: IAddClientDTO): Promise<void>{

        const bankQueue = new BankQueue(data.priorityClient, data.code)

        if(bankQueue.getPriorityClient()){
            return await this.bankQueueRepository.addPriorityElement(bankQueue)

        } else{ 
            return await this.bankQueueRepository.addElement(bankQueue) 
        }
    }
}