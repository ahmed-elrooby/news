import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Helmet } from 'react-helmet'

export default function Entertainment() {
    const [enter, setEnter] = useState()

    async function ApiEnter(){
        let {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=021673ed1bcf41d0a203e6dcf7cad4d4")
        setEnter(data.articles)
    }
    useEffect(function(){
    ApiEnter()
    },[])
    return <>
        <Helmet>
            <meta name='description' content=''/>
            <title>Entertainment News</title>
            
        </Helmet>
    {
        enter?<div className="container">
        <div className="row mt-5">
            {
                enter.map((element,idx)=> <div className='col-sm-4 mb-3 mb-3'key={idx}>
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{element.author}</h5>
            <p class="card-text">{element.title}</p>
            <a href={element.url} className='btn btn-info'>learn more</a>
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
