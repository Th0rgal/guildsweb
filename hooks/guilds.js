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
    address: '0x00119d1e6b289769e51750bbb83731d5cbbb284e927549436cf5d8e86484e079',
  })
}