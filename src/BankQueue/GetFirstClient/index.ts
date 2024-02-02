import ListService from "../../repository/List/ListService"
import GetFirstClientService from "./useCases/GetFirstClientService"
import GetFirtsClientController from "./useCases/GetFirstClientController"

const getFirstClientService = new GetFirstClientService(ListService)
const getFirtsClientController = new GetFirtsClientController(getFirstClientService)

export { getFirtsClientController, getFirstClientService }