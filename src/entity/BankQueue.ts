export default class BankQueue {
    constructor(private priorityClient: boolean, private code: string) {}
  
      public getPriorityClient(): boolean {
        return this.priorityClient
      }

      public getCode(): string {
        return this.code
      }
  }