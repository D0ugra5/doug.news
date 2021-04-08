import { SingInButton } from "../SingInButton";
import  styles from "./styles.module.scss";

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="DOug.News"/>
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>
                <SingInButton/>
            </div>
         
        </header>
    )
}