import { useContract } from '@starknet-react/core'

import Guilds from '../abi/Guilds.json'
import ShareCertificate from '../abi/ShareCertificate.json'

export function useGuildsContract(contract) {
  return useContract({
    abi: Guilds,
    address: "0x0" + contract.toString(16),
  })
}

export function useShareCertificate() {
  return useContract({
    abi: ShareCertificate,
    address: '0x00119d1e6b289769e51750bbb83731d5cbbb284e927549436cf5d8e86484e079',
  })
}