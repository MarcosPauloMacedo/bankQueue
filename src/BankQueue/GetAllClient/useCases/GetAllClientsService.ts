import IBankQueueRepository from "../../../repository/IBankQueueRepository"

export default class GetAllClientsService{
    constructor(private bankQueueRepository: IBankQueueRepository){}

    async execute(): Promise<string[]>{
        return await this.bankQueueRepository.getAllList()
    }
}