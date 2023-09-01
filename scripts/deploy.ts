import { ethers } from 'hardhat'
import { deployFactory } from './utils/contract.utils'
import { getAddress } from 'ethers/lib/utils'
import { Contract } from 'ethers'

// const FACTORY = '0xbA7e9dB37fB8496F8a23B50d11bD764D34BdEAcf'
// const FACTORY = '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B' // new new please baby Jesus
const FACTORY = '0xaEd85e1D0c7E6e18335B9ea858cE1ab06934eaB5'

async function main() {
  const signer = (await ethers.getSigners())[0]

  // @note PCS dev account

  await deployFactory(signer)
  // TODO: Add the lower fee tier
  // const factory = await ethers.getContractAt('UniswapV3Factory', FACTORY, signer)
  // await factory.enableFeeAmount(100, 1)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
