import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Helmet } from 'react-helmet';

export default function Health() {
    const [health, setHealth] = useState(null)
    async function Apigenral(){
        let {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=021673ed1bcf41d0a203e6dcf7cad4d4");
        setHealth(data.articles)
    }
    useEffect(function(){
        Apigenral()
    },[])
    return <>
    <Helmet>
    <meta name='description' content=''/>
        <title>Health News</title>
    </Helmet>
    {
        health?<div className="container">
        <div className="row mt-5">
            {
                health.map((e,idx)=><div class="col-sm-3 mb-3">
                    <div className="card"style={{minHeight:"300px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{e.author}</h5>
                        <p className="card-text">{e.title}</p>
                        <a href={e.url}className='btn btn-primary mb-2'>learn more</a><br />
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
