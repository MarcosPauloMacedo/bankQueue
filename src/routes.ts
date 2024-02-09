import { Response, Router } from "express"
import { addClientController, getAllClientsController, getFirtsClientController } 
from "./BankQueue"

const router = Router()

router.get("/", async (req, res): Promise<Response> => {
    return await getAllClientsController.handle(req, res)
})

router.get("/getFirstClient", async function(req, res){
    await getFirtsClientController.handle(req, res)
})

router.post("/addClient", (req, res) => {
    addClientController.handle(req, res)
})

export default router