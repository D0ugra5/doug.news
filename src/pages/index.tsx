import  Head  from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from './home.module.scss'
export default function Home() {
  return (
    <> 
<Head>
  <title>Home| Doug.News</title>
</Head>
<main className={styles.contentContainer}>
  <section className={styles.hero}>
    <span>👏 Hey, welcome</span>
    <h1>News about the <span>World.</span></h1>
    <p>
      Get Acess to all the Publications <br/>
      <span>For $9.90 month</span>
    </p>
    <SubscribeButton/>
  </section>
  <img src="/images/avatar.svg" alt="girl coding "/>
</main>
</>
  )
}
