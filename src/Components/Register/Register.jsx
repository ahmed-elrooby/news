import Joi from 'joi';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
export default function Register() {



    let navigate = useNavigate();
// use state to send date
const [user, setUser] = useState({//to send data to backend as object 
    first_name:"",
    last_name:"",
    age:0,
    email:"",
    password:""
});
// -----------------------------------------------------------------------------------
const [joiErrors, setJoiErrors] = useState(null)
// const [apiMessage, setApiMessage] = useState(null)

// spinner in clicked button register 
// const [clickedButton, setClickedButton] = useState(false)








//function to get data
// steps
// 1- get input value 
// 2-get target input 
// 3-copy of old object
// 4- edit in new copy
// 5- update your edit 
// --------------------------------------------------------
                                                     //   =
function getUser(e){ //                                   =
setJoiErrors(null)                              //        = 
let inputValue = e.target.value;// value of user          =
let inputName = e.target.id;//name of input               =                          
let newUser = {...user};//copy  //                        =
newUser[inputName] = inputValue;                    //    =
setUser(newUser);                                  //     =
}                                                //       =
                                                //        =
// --------------------------------------------------------


/* to call api 
=================================================================================================================
= async function callApi(){                                                                                     =
=                                                                                                               =
= let {data} = await axios.post("https://route-egypt-api.herokuapp.com/signup",object ==> user={});             =
=     console.log(data);  
=      if(data.message == "success"){
        home page ===> navigate("/home")
        }else{
            اعرض لليوزر ان الايميل معمول بيه قبل كده
            setApiMessage(data.message)
        }                                                                                                       =
} =                                                                                                             =                 
=================================================================================================================
*/




// to make regular expression use Joi

//===========================================================================================================
function submitUser(e){ //                                                                                   =
                                     //                                                                      = 
    e.preventDefault();                                                     //                               =
    // to make regular exp                                                       //                          =
    let schema = Joi.object({                                                      //                        =
        first_name:Joi.string().alphanum().min(3).max(10).required(),      //                                =
        last_name:Joi.string().alphanum().min(3).max(10).required(),       //                                =
        age:Joi.number().min(18).max(60).required(),                       //                                =
        email: Joi.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).required(),           // =
        password: Joi.string().pattern(/^[a-zA-Z1-9]{3,6}$/i)             //                                 =
    });//                                                                                                    =
        let joiResponse = schema.validate(user,{abortEarly:false});//                                        =
        if(joiResponse.error === undefined){//                                                               =
            //validated and call api//                                                                       =
            // callApi();if sucees ==>go to home page                                                                                    =  
            navigate("/home")                          //                                                    =                                    
        }else{//                                                                                             =     
            let errorList = joiResponse.error.details;//                                                     =
            console.log(errorList) //                                                                        =
                                                                //                                           =
            setJoiErrors(errorList); //                                                                      =
        }//                                                                                                  =
                                                                                               //            =                   

}
//============================================================================================================
//============================================================================================================
// to appear error under input 
function getSpecificError(key){
    if( joiErrors !== null){
    for(let i =0; i<joiErrors.length;i++){
        if(joiErrors[i].context.key === key){// if exist error or not 
            return joiErrors[i].message;
        }
    }
}
return '';

}




    return<>
                <Helmet>
            <meta name='description' content=''/>
            <title>Registration Page</title>
            
        </Helmet>
    <div className="w-50 m-auto py-2">
    <form action=""onSubmit={submitUser}>
    <h3 className='mb-3'>Registration form</h3>
        <label htmlFor="first_name">first name</label>
        <input onChange={getUser} type="text"placeholder='First-Name' id='first_name'className='form-control mb-3'/>
        {getSpecificError("first_name")?<div className='alert alert-danger'>{getSpecificError("first_name")}</div>:""}

        <label htmlFor="last_name">last-name</label>
        <input onChange={getUser} type="text"placeholder='last_name' id='last_name'className='form-control mb-3'/>

        {getSpecificError("last_name")?<div className='alert alert-danger'>{getSpecificError("last_name")}</div>:""}


        <label htmlFor="age">age</label>
        <input onChange={getUser} type="number"placeholder='age' id='age'className='form-control mb-3'/>
        {getSpecificError("age")?<div className='alert alert-danger'>{getSpecificError("age")}</div>:""}


        <label htmlFor="email">email</label>
        <input onChange={getUser} type="email" placeholder='email'id='email'className='form-control mb-3'/>
        {getSpecificError("email")?<div className='alert alert-danger'>{getSpecificError("email")}</div>:""}

        <label htmlFor="password">password</label>
        <input onChange={getUser} type="password"placeholder='password' id='password'className='form-control mb-3'/>
        {getSpecificError("password")?<div className='alert alert-danger'>
            write strong password 
        </div>:""}

        <button className='btn btn-outline-info'>
           Register
        </button>
    </form>
    </div>
    
    </>
}
