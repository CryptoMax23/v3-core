import { ethers } from 'hardhat'
import { deployFactory } from './utils/contract.utils'
import { getAddress } from 'ethers/lib/utils'
import { Contract } from 'ethers'

const FACTORY = '0xbA7e9dB37fB8496F8a23B50d11bD764D34BdEAcf'

// udder repo (Periph)
const SWAP_ROUTER = ''
const QUOTER_V2 = ''

async function main() {
  const signer = (await ethers.getSigners())[0]

  // await deployFactory(signer)
  // TODO: Add the lower fee tier
  // const factory = await ethers.getContractAt('UniswapV3Factory', FACTORY, signer)
  // await factory.enableFeeAmount(100, 1)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
