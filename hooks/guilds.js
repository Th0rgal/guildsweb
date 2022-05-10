import { useContract } from '@starknet-react/core'

import Guilds from '../abi/Guilds.json'
import ShareCertificate from '../abi/ShareCertificate.json'

export function useGuildsContract(contract) {
  const output = contract.toString(16);
  return useContract({
    abi: Guilds,
    address: /^0x/.test(output) ? output : "0x" + output,
  })
}

export function useShareCertificate() {
  return useContract({
    abi: ShareCertificate,
    address: '0x00042874e73c9f80f48be03b3b358df8f479f5b81594a5397565c7417aa42c93',
  })
}