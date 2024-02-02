import { BankQueue } from "../BankQueue"

export default interface IBankQueue {

    addElement: (element: BankQueue) => Promise<void>,

    addPriorityElement: (element: BankQueue) => Promise<void>,

    removeFirstList: () => Promise<String>,

    getAllList: () => Promise<String[]>
}