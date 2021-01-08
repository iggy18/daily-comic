import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import axios from 'axios';
import Link from 'next/link'


// PROPS IS PASSED IN FROM THE ASYNC FUNCTION WHIC IS HOW THE IFO FROM THE API GETS INTO THE HTML
export default function Home(props) {

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Daily xkcd</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Welcome to daily XCKD</h1>
          <h2>{props.comic.title}</h2>
          <img src={props.comic.img} />
        </main>
        <PreviosTen comicNumber={props.comic.num}/>
      </div>
    </Layout>
  )
}

// THIS IS WHAT RETRIEVES DATA FROM THE API AND PUSHES IT INTO THE HOME FUNCTION
export async function getStaticProps(){
  
  const response = await axios.get('https://xkcd.com/info.0.json');
  return{
    props:{
      comic: response.data
    }
  }
}

function PreviosTen(props){
  // YOU CAN ENTER NORMAL JAVASCRIPT IN BETWEEN THE FUNCTION DECLARATION AND THE RETURN
  const currentComic = props.comicNumber;
  const comics = [];
  const num = currentComic -1;
  for (let n = num; n > num - 10; n--)
    comics.push(n)
  return(
    <footer>
            <h2> Previous {comics.length}</h2>
            <ul>
                {comics.map(num => (
                    <Link href="/num/[id].js" as={`/num/${num}`} key={num}>
                        <a> #{num}</a>
                    </Link>
                ))}
            </ul>
        </footer>
  );
}