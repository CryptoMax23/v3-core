import { ethers } from 'hardhat'
import managerABI from '../abis/NonFungiblePositionManager.json'
import routerABI from '../abis/SwapRouter.json'
import { Contract } from 'ethers'

export const BASE_ADDRESSES = {
  v3CoreFactoryAddress: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693', // Uni custom one
  quoterAddress: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
  tickLensAddress: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
  swapRouter02Address: '0x14963869592E41a2ecD7524bD213cFC3044AdF75', // 02?
}

export async function UniFixture() {
  const signer = (await ethers.getSigners())[0]
  const router = new Contract(BASE_ADDRESSES.swapRouter02Address, routerABI, signer)
  const pool = null
  const factory = await ethers.getContractAt('UniswapV3Factory', BASE_ADDRESSES.v3CoreFactoryAddress, signer)
  const manager = new Contract(BASE_ADDRESSES.nonfungiblePositionManagerAddress, managerABI, signer)

  return {
    router,
    pool,
    factory,
    manager,
  }
}
