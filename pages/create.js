import Header from '../components/header';
import styles from '../styles/Create.module.css'
import { useState } from "react";
import ShortTextInput from "../components/input";

export default function Create() {

  const [name, setName] = useState("");

  return (
    <div className="background">
      <Header highlighted={"create"} />

      <div className={styles.box}>
        <h1 className={styles.title}>Create a Guild</h1>
        <ShortTextInput content={name} setContent={setName} />


        <div className={styles.box_footer}>
          {name ? <button onClick={() => {
            // starknet deploy --contract artifacts/Guilds.json --inputs 1 3365626219442678493174551853261412698466552586449194851486361051840386897548 0 0 31120794361192233103230344403960805466114649206157923927037366099134177401 NAME
            console.log(name);
          }} className={[styles.footer_element, styles.button].join(" ")}>
            <svg className={styles.button_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className={styles.button_text}>Create</p>
          </button> : null}
        </div>
      </div>
    </div>
  )
}
