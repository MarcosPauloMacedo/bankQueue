import { expect, test } from 'vitest'
import BankQueue from '../../../entity/BankQueue'

test('BankQueue', async () => {
    const code = "001"
    const outhersCode = "002"
    const bankQueue = new BankQueue(false, code)
    
    expect(bankQueue).toBeInstanceOf(BankQueue)
    expect(bankQueue.getCode()).toEqual(outhersCode)
    expect(bankQueue.getPriorityClient()).toEqual(false)
})
