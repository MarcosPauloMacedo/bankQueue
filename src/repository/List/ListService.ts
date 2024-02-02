import ListAbstract from "./ListAbstract"
import IBankQueue from "../IBankQueue"
import { BankQueue } from "../../BankQueue"

export default class ListService extends ListAbstract implements IBankQueue{
    
    private list: BankQueue[] = []
    private firstElement = 1

    async addElement(element: BankQueue): Promise<void> {
        this.checkUpdateIndex()
        this.addElementList(element)
        this.updateCurrentIndex()
    }

    async addPriorityElement(element: BankQueue): Promise<void> {
        this.checkUpdateIndex()
        this.addPriorityElementToList(element)
        this.updatePriorityIndex()
    }

    async removeFirstList(): Promise<String> {   
        this.identifyIsEmpityList()
        this.findFirstElementInList()
        
        const firstElement = this.list[this.firstElement]
        delete this.list[this.firstElement]
        this.firstElement ++

        return firstElement.getCode()
    }

    async getAllList(): Promise<String[]> {
        this.identifyIsEmpityList()

        let arr = []

        for(let i = this.firstElement; i < this.currentIndex; i++){
            if(this.list[i] != undefined) arr.push(this.list[i].getCode())
        }

        return arr
    }

    private addElementList(element: BankQueue){
        this.list[this.currentIndex] = element
    }

    private addPriorityElementToList(element: BankQueue){
        this.list[this.priorityIndex] = element
    }

    private findFirstElementInList(){
        while(this.list[this.firstElement] == undefined && this.firstElement < this.currentIndex){
            this.firstElement ++
        }
    }

    private isEmpityList(){
        return this.firstElement == this.currentIndex  
    }

    private identifyIsEmpityList(){
        if(this.isEmpityList()) throw new Error("Não há clientes na fila")
    }
}