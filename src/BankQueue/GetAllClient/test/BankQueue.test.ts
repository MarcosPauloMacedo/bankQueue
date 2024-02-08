import { expect, test } from 'vitest'
import BankQueue from '../../../entity/BankQueue'

test('BankQueue', async () => {
    const bankQueue = new BankQueue(false, "001")
    
    expect(bankQueue).toBeInstanceOf(BankQueue)
    expect(bankQueue.getCode()).toEqual("001")
    expect(bankQueue.getPriorityClient()).toEqual(false)
})
