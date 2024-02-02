import ListService from "../../repository/List/ListService"
import GetAllClientsService from "./useCases/GetAllClientsService"
import GetAllClientsController from "./useCases/GetAllClientsController"

const getAllClientsService = new GetAllClientsService(ListService)
const getAllClientsController = new GetAllClientsController(getAllClientsService)

export { getAllClientsController, getAllClientsService }