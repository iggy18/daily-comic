import Layout from '../../components/Layout'

export default function ComicDetail(props){
    return(
        <Layout>
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img}/>
        </Layout>
    );
}

export async function getServerSideProps(context){
    const num = context.query.id;
    const response = await fetch('http://xkcd.com/${num}/info.0.json')
    const data = await response.json();
    return {
        props: {
            comic: data
        },
    }
}