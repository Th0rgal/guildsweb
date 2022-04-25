import { useRouter } from 'next/router'
import Header from '../../components/header';

export default function Panel() {
  const router = useRouter()
  const { contract } = router.query


  const guildContract = "0x000a7a9203bff78bfb24f0753c184a33d4cad95b1f4f510b36b00993815704";
  const guildName = "Titans of the Dark Circle";
  const title = "Legendary Diplomat";
  const shares = 7;
  const totalShares = 100;
  const members = 47;
  const fundsValue = 1500;
  const extensions = 4;

  return (
    <div className="background">
      <Header highlighted={"home"} />
      <p>Guild name: {guildName}</p>
    </div>
  )
}
