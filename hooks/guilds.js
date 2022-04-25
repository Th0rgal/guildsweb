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
    address: '0x00cd0d1b9ffd0565ff54c3d56b577707f8054e5f4e5925dab5d3f28c844c9e94',
  })
}