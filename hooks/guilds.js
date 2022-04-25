import { useContract } from '@starknet-react/core'

import Guilds from '../abi/Guilds.json'
import ShareCertificate from '../abi/ShareCertificate.json'

export function useGuildsContract(contract) {
  return useContract({
    abi: Guilds,
    address: contract,
  })
}

export function useShareCertificate() {
  return useContract({
    abi: ShareCertificate,
    address: '0x03bca171fd12fc8a0fcbf641970e501ad33086c052bda0e58a6b747bf49c2c1d',
  })
}