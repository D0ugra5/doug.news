import  Head  from "next/head";
import {GetStaticProps} from 'next'
import { SubscribeButton } from "../components/SubscribeButton";
import styles from './home.module.scss'
import { stripe } from "../service/stripe";

interface HomeProps{
product:{
  priceId:string;
  amount:number;
}

}

//client-side
//Server-Side
//Static site generation



export default function Home({product}:HomeProps) {
  
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
      <span>For {product.amount} month</span>
    </p>
    <SubscribeButton priceId={product.priceId}/>
  </section>
  <img src="/images/avatar.svg" alt="girl coding "/>
</main>
</>
  )
}

export const getStaticProps: GetStaticProps=async() =>{

    const price = await stripe .prices.retrieve('price_1Ie0JtBviOVVIhB8g0TdNz2v',{
      
    });

const product={
  pricceId:price.id,
  amount:new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format(price.unit_amount /100),
}
  return{
  props:{
    product
  },
  revalidate:60 * 60  * 24 //24 hours,
}
}
