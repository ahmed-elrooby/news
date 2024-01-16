import Joi from 'joi';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const [user, setUser] = useState({
    email:"",
    password:""
})
let navigate = useNavigate();
//to get data from user 
function getUser(e){
    setResponseError(null)
    let inputValue = e.target.value;
    let inputName = e.target.id;
    const newUser = {...user};
    newUser[inputName] = inputValue;
    console.log(newUser)
    setUser(newUser);
}


const [respnseError, setResponseError] = useState(null)

// const [clickedButton, setClickedButton] = useState(false)

// to make regular expression 
function sendData(e){
    e.preventDefault();

let schema = Joi.object({
    email: Joi.string().email({minDomainSegments: 2,tlds:{allow:["com","net"]}}),
    password: Joi.string().pattern(/^[a-z]{3,6}$/i)
})
//to make validate 
let response = schema.validate(user,{abortEarly:false})
if(response.error === undefined){
    // call api 
    navigate("/home")
}else{

    let errorList = response.error.details;
  

setResponseError(errorList);

}



}

function getSpecificError(key){
    if( respnseError !== null){
    for(let i =0; i<respnseError.length;i++){
        if(respnseError[i].context.key === key){// if exist error or not 
            return respnseError[i].message;
        }
    }
}
return '';

}


    return <>
            <Helmet>
                <meta name='description' content=''/>
                <title>login page</title>
            </Helmet>
    <div className='w-50 m-auto py-4'>

        <form action=""onSubmit={sendData}>
            <h3 className='mb-3'>login form</h3>

            <label htmlFor="email">email</label>
            <input onChange={getUser} type="email" id="email"placeholder='email'className='form-control' />
            {getSpecificError("email")?<div className='alert alert-danger'>{getSpecificError("email")}</div>:""}

            <label htmlFor="password"className='mt-3'>password</label>
            <input onChange={getUser}type="password" id="password"placeholder='password'className='form-control mb-3' />
            {getSpecificError("password")?<div className='alert alert-danger'>
            write strong password 
        </div>:""}


            <button className='btn btn-outline-info'>
                        login 
            </button>
        </form>
    </div>
    
    </>
}
