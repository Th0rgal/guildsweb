import Header from '../components/header';
import styles from '../styles/Create.module.css'
import { useState } from "react";
import ShortTextInput from "../components/input";
import { json, Provider } from 'starknet';
import StringGuilds from '../contracts/Guilds.txt'
import { stringToFelt } from "../utils/felt";

export default function Create() {

  const [name, setName] = useState("");
  const provider = new Provider({
    baseUrl: 'https://hackathon-2.starknet.io',
    feederGatewayUrl: 'feeder_gateway',
    gatewayUrl: 'gateway',
  })

  return (
    <div className="background">
      <Header highlighted={"create"} />

      <div className={styles.box}>
        <h1 className={styles.title}>Create a Guild</h1>
        <ShortTextInput content={name} setContent={setName} />


        <div className={styles.box_footer}>
          {name ? <button onClick={() => {
            // starknet deploy --contract artifacts/Guilds.json --inputs 1 3365626219442678493174551853261412698466552586449194851486361051840386897548 0 0 31120794361192233103230344403960805466114649206157923927037366099134177401 NAME
            const callData = ["0x1", "0x770E07EBD9F9661344F2EC9267E3ECD1505BC1D20DFB4B12D61CB5CA37B168C", "0x0", "0x0", "0x119D1E6B289769E51750BBB83731D5CBBB284E927549436CF5D8E86484E079", stringToFelt(name)];
            console.log("callData", callData)
            provider.deployContract(
              json.parse(StringGuilds.toString('ascii')),
              callData
            ).then(
              function (value) { console.log("deployed", value) },
              function (error) { console.log("error", error) }
            );

          }} className={[styles.footer_element, styles.button].join(" ")}>
            <svg className={styles.button_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className={styles.button_text}>Create</p>
          </button> : null}
        </div>
      </div>
    </div>
  )
}
