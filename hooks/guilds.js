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
    address: '0x04ea4170dfdda021fe23cd064f2e17272142a7ec04401c5d1d34b0e667142c08',
  })
}