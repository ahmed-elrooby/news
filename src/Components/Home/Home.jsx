
    import React, { useEffect, useState } from 'react';
import axios from "axios"
import img from "../../images/newsImg.webp";
import { Helmet } from 'react-helmet';

export default function Home() {
    const [news, setNews] = useState(null)
    async function getApi(){
    let {data} = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=021673ed1bcf41d0a203e6dcf7cad4d4");
setNews(data.articles);

}
useEffect(function(){
getApi()
},[])
    return <>
    <Helmet>
        <meta name='description' content=''/>
        <title>Public News</title>
        
    </Helmet>
    
{
        news?<div className="container">
        <div className="row mt-5">
            {
                news.map((e,idx)=><div key={idx} className="col-sm-3 mb-3 col-lg-4">
                    <div className="card"style={{minHeight:"300px"}}>
                    <img src={e.urlToImage?e.urlToImage:img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{e.author}</h5>
                        <p className="card-text">{e.title}</p>
                        <a href={e.url}className='btn btn-primary mb-2 text-capitalize'>learn more</a><br />
                        <span>{e.publishedAt}</span>
                    </div>
                    </div>
                </div>)
            }
        </div>
    </div>:<div className="vh-100 d-flex justify-content-center align-items-center">
    <i className='fa-solid fa-spinner fa-spin fa-5x'></i>
        </div>  
    }
</>
}

