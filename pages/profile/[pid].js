import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className="background">
      <p>Guild name: {pid}</p>
    </div>
  )
}
