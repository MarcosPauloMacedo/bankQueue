import IBankQueueRepository from "../../../repository/IBankQueueRepository"

export default class GetFirstClientService{
    constructor(private bankQueueRepository: IBankQueueRepository){}

    async execute(): Promise<string>{
        return await this.bankQueueRepository.removeFirstList()
    }
}