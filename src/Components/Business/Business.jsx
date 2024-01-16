    import axios from "axios";
    import React, { useEffect, useState } from "react";
    import { Helmet } from "react-helmet";
    export default function Business() {
    const [api, setApi] = useState(null);

    async function ApiBusiness() {
        let { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=021673ed1bcf41d0a203e6dcf7cad4d4"
        );
        setApi(data.articles);
    }
    useEffect(function () {
        ApiBusiness();
    }, []);
    return (
        <>
        <Helmet>
            <meta name="description" content="" />
            <title>Business News</title>
        </Helmet>
        {api ? (
            <div className="container">
            <div className="row mt-5">
                {api.map((e, idx) => (
                <div key={idx} className="col-sm-3 mb-3">
                    <div className="card" style={{ minHeight: "300px" }}>
                    <div className="card-body">
                        <h5 className="card-title">{e.author}</h5>
                        <p className="card-text">{e.title}</p>
                        <a
                        href={
                            e.url ? (
                            e.url
                            ) : (
                            <div className="vh-100 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-spinner fa-spin fa-5x"></i>
                            </div>
                            )
                        }
                        className="btn btn-primary mb-2"
                        >
                        learn more
                        </a>
                        <br />
                        <span>{e.publishedAt}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        ) : (
            <div className="vh-100 d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-spinner fa-spin fa-5x"></i>
            </div>
        )}
        </>
    );
    }
