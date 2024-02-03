import ListRepository from "../../repository/List/ListRepository"
import GetFirstClientService from "./useCases/GetFirstClientService"
import GetFirtsClientController from "./useCases/GetFirstClientController"

const getFirstClientService = new GetFirstClientService(ListRepository)
const getFirtsClientController = new GetFirtsClientController(getFirstClientService)

export { getFirtsClientController, getFirstClientService }