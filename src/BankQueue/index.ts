import BankQueue from "./BankQueue"
import ListService from "../repository/List/ListService"
import BankQueueService from "./BankQueueService"
import BankQueueController from "./BankQueueController"

const listService = new ListService()
const bankQueueService = new BankQueueService(listService)
const bankQueueController = new BankQueueController(bankQueueService)

export { bankQueueController, BankQueue }