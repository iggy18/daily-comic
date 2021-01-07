import Layout from '../../components/Layout'

export default function ComicDetail(props){
    return(
        <Layout>
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img}/>
        </Layout>
    );
}

