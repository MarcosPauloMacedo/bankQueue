import { Router } from "express"
import { bankQueueController } from "./BankQueue"

const router = Router()

router.get("/", (req, res) => {
    bankQueueController.getListClientsAtFila(req, res)
})

router.post("/addClientVip", (req, res) => {
    bankQueueController.addClientVip(req, res)
})

router.post("/addClientNormal", (req, res) => {
    bankQueueController.addClientNormal(req, res)
})

router.post("/addClientElderly", (req, res) => {
    bankQueueController.addClientElderly(req, res)
})

router.get("/getClientFila", (req, res) => {
    bankQueueController.getClientFila(req, res)
})

export default router