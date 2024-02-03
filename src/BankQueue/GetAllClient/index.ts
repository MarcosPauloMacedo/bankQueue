import ListRepository from "../../repository/List/ListRepository"
import GetAllClientsService from "./useCases/GetAllClientsService"
import GetAllClientsController from "./useCases/GetAllClientsController"

const getAllClientsService = new GetAllClientsService(ListRepository)
const getAllClientsController = new GetAllClientsController(getAllClientsService)

export { getAllClientsController, getAllClientsService }