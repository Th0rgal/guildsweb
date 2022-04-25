import { useRouter } from 'next/router'
import { useGuildsContract } from '../hooks/guilds';

export default function Profile() {
  const router = useRouter()
  const { pid } = router.query
  const { contract } = useGuildsContract(pid);
  return (
    <div className="background">
      <p>Guild name: {pid}</p>
    </div>
  )
}
