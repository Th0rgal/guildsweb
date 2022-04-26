import { useRouter } from 'next/router';
import { useGuildsContract } from '../../hooks/guilds';
import styles from '../../styles/Panel.module.css'
import Header from '../../components/header';

export default function Panel() {
  const router = useRouter()
  const { contract } = useGuildsContract(router.query);

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
      <h1>{guildName}</h1>

      <div className={styles.main}>

        <div className={styles.big_card}>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
          </div>
        </div>
      </div>

    </div>
  )
}
