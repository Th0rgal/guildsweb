import styles from '../styles/components/Header.module.css'
import Link from 'next/link'

function Header({ highlighted }) {
    return (
        <nav className={styles.header}>
            <div className={styles.icons}>
                <Link href="/" passHref>
                    <img className={styles.logo} src="/logo.svg" alt="Guilds Logo" />
                </Link>

                <Link href="/home" passHref>
                    <div className={[styles.button, (highlighted == "home" ? styles.highlighted : styles.normal), styles.button_div].join(" ")}>
                        <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        <p className={styles.button_text}>
                            Home
                        </p>
                    </div>
                </Link>

                <Link href="/create" passHref>
                    <div className={[styles.button, (highlighted == "create" ? styles.highlighted : styles.normal), styles.button_div].join(" ")}>
                        <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                        <p className={styles.button_text}>
                            Create
                        </p>
                    </div>
                </Link>

                <div className={[styles.button, (highlighted == "docs" ? styles.highlighted : styles.normal), styles.button_div].join(" ")}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                    <p className={styles.button_text}>
                        Docs
                    </p>
                </div>
            </div>
        </nav>
    );

}
export default Header;
