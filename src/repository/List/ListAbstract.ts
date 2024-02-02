export default abstract class ListAbstract{

    protected currentIndex = 1
    protected priorityInterval = 3
    protected priorityIndex = 0

    protected checkUpdateIndex(){
        if(this.priorityIndex > this.currentIndex){
            this.currentIndex = this.priorityIndex + 1
        }
    }

    protected updateCurrentIndex(){
        this.currentIndex ++
        this.checkUpdateCurrentIndex()
    }

    protected updatePriorityIndex(){
        this.priorityIndex += this.priorityInterval
    }

    private checkUpdateCurrentIndex(){
        if(this.currentIndex % this.priorityInterval == 0) this.currentIndex ++
    }
}