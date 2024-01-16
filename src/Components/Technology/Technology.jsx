import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function Technology() {

    const [tech, setTech] = useState(null)

    async function SportApi(){
        let {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=021673ed1bcf41d0a203e6dcf7cad4d4")
        setTech(data.articles)
    }
    useEffect(function(){
        SportApi()
    },[])
    return<>

        <Helmet>
            <meta name='description' content=''/>
            <title>Technology News</title>
            
        </Helmet>
    {
        tech?<div className="container">
        <div className="row">{
        tech.map((el,idx)=><div key={idx} className="col-md-4">
            <div className="card mb-3 mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{el.author}</h5>
                        <p className="card-text">{el.title}</p>
                        <a href={el.url}className='btn btn-primary mb-2'>learn more</a><br />
                        <span>{el.publishedAt}</span>
                    </div>
                    </div>
            </div>)            
        }

        </div>
    </div>:<div className='vh-100 d-flex justify-content-center align-items-center text-align-center'>
        <i className='fa-solid fa-spin fa-spinner fa-5x'></i>
    </div>
    }

    </>

}
