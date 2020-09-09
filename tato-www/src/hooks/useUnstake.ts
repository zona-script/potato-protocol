import { useCallback } from 'react'

import { useWallet } from 'use-wallet'
import { Contract } from "web3-eth-contract"

import { unstake } from '../yamUtils'

const useUnstake = (poolContract: Contract,tokenName:string) => {
  const { account } = useWallet()

  const handleUnstake = useCallback(async (amount: string) => {
    const txHash = await unstake(poolContract,tokenName, amount, account)
    console.log(txHash)
  }, [account, poolContract])

  return { onUnstake: handleUnstake }
}

export default useUnstake