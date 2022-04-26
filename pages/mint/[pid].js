import { useRouter } from 'next/router'
import { useGuildsContract } from '../../hooks/guilds';
import styles from '../../styles/Create.module.css'
import Header from '../../components/header';
import { useDisplayName } from "../../hooks/starknet";
import { useStarknetInvoke } from '@starknet-react/core'

export default function Mint() {
  const router = useRouter()
  const { pid } = router.query
  const { contract } = useGuildsContract("" + pid);
  const { data, loading, invoke } = useStarknetInvoke({ contract: contract, method: 'mint' })
  const name = useDisplayName(pid);

  return (
    <div className="background">
      <Header highlighted={"create"} />
      <div className={styles.box}>
        <h1 className={styles.title}>Guild name: {name}</h1>
        <div className={styles.box_footer}>


          <div onClick={() => {

          }} className={[styles.footer_element, styles.button_normal].join(" ")}>

            <svg className={styles.button_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            <p className={styles.button_text}>Mint a share</p>
          </div>

        </div>
      </div>
    </div>
  )
}
