import ListRepository from "../../repository/List/ListRepository"
import AddClientService from "./useCases/AddClientService"
import AddClientController from "./useCases/AddClientController"

const addClientService = new AddClientService(ListRepository)
const addClientController = new AddClientController(addClientService)

export { addClientController, addClientService }