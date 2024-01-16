import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function Science() {
    const[science,setScience] = useState(null)
    async function ScienceApi(){
        let {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=021673ed1bcf41d0a203e6dcf7cad4d4")
        setScience(data.articles)
    }
    useEffect(function(){
        ScienceApi()
    })
    return <>
            <Helmet>
            <meta name='description' content=''/>
            <title>Science News</title>
            
        </Helmet>
    {
        science?<div className="container">
        <div className="row mt-5">
            {
                science.map((el,idx)=><div key={idx} className="col-md-4">
            <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{el.author}</h5>
                        <p className="card-text">{el.title}</p>
                        <a href={
                            el.url ? (
                            el.url
                            ) : (
                            <div className="vh-100 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-spinner fa-spin fa-5x"></i>
                            </div>
                            )
                        }className='btn btn-primary mb-2'>learn more</a><br />
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
