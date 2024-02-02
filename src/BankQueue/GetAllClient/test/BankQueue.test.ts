import { expect, test } from 'vitest'
import BankQueue from '../../BankQueue'

test('BankQueue', async () => {
    const bankQueue = new BankQueue("001")
    expect(bankQueue).toBeInstanceOf(BankQueue)
    expect(bankQueue.getCode()).toEqual("001")
})