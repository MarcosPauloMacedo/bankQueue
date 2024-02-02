import BankQueue from "../entity/BankQueue"

export default interface IBankQueueRepository {

    addElement: (element: BankQueue) => Promise<void>,

    addPriorityElement: (element: BankQueue) => Promise<void>,

    removeFirstList: () => Promise<string>,

    getAllList: () => Promise<string[]>
}