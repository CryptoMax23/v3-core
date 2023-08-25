import * as hardhat from 'hardhat'
import { sleepWait } from './utils'

export async function verifyContract(contractAddress: string, constructorArguments?: any[], delayTime?: number) {
  await sleepWait(delayTime)
  await hardhat.run('verify:verify', {
    address: contractAddress,
    constructorArguments,
  })
}
