import ListService from "../../repository/List/ListService"
import AddClientService from "./useCases/AddClientService"
import AddClientController from "./useCases/AddClientController"

const addClientService = new AddClientService(ListService)
const addClientController = new AddClientController(addClientService)

export { addClientController, addClientService }