import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'

export async function deployFactory(signer: SignerWithAddress) {
  const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory', signer)
  const factory = await UniswapV3Factory.deploy()
  await factory.deployed()
  console.log(`UniswapV3Factory deployed at: ${factory.address}`)

  return factory
}

export async function deployPoolDeployer(signer: SignerWithAddress) {
  const UniswapV3PoolDeployer = await ethers.getContractFactory('UniswapV3PoolDeployer', signer)
  const poolDeployer = await UniswapV3PoolDeployer.deploy()
  console.log(`🎉 UniswapV3PoolDeployer Deployed to: ${poolDeployer.address}`)

  return poolDeployer
}

export async function deployTestToken(name: string, symbol: string, decimals: number) {
  const factory = await ethers.getContractFactory('ERC20TestAuth')
  const token = await factory.deploy(name, symbol, decimals)
  console.log(`🎉 ${name} Deployed to: ${token.address}`)

  return token
}

export async function deployDummyToken(name: string) {
  const factory = await ethers.getContractFactory(name)
  const token = await factory.deploy()
  console.log(`🎉 ${name} Deployed to: ${token.address}`)

  return token
}
