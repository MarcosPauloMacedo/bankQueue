import { Router } from "express"
import { addClientController, getAllClientsController, getFirtsClientController } 
from "./BankQueue"

const router = Router()

router.get("/", (req, res) => {
    getAllClientsController.handle(req, res)
})

router.get("/getFirstClient", (req, res) => {
    getFirtsClientController.handle(req, res)
})

router.post("/addClient", (req, res) => {
    addClientController.handle(req, res)
})

export default router