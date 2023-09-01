import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Slice";

export default function LoginComp()
{

    const init={
        uid:"",
        pwd:""
    }

    const reducer = (state,action) =>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;    
        }
    }

    const [info,dispatch] = useReducer(reducer,init);
    const [msg, setMsg ]=useState("");
    const navigate = useNavigate();
    const  reduxAction = useDispatch();

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }

        fetch("http://localhost:8080/checkLogin",reqOptions)

        .then(resp => {if(resp.ok) 
                      return resp.text();
                      else
                      throw new Error("Server Error");
                      })
        .then(text=>text.length ? JSON.parse(text) : {})
        .then(obj => 
            {
                if(Object.keys(obj).length===0)
                {
                    setMsg("Wrong Uid/Pwd")
                }
                else
                {
                    reduxAction(login())
                    localStorage.setItem("loggedUser",JSON.stringify(obj));
                    if(obj.status===false)
                    {
                        alert("Request has not been approved")
                    }
                    else
                    {
                        if(obj.role_id.id === 1)
                        {
                            navigate("/adminhome")
                        }
                        else if(obj.role_id.id === 2)
                        {
                            navigate("/vendorhome")
                        }
                        else if(obj.role_id.id === 3)
                        {
                            navigate("/customerhome") 
                        }
                        
                    }
                }
            })
            .catch((error)=> alert("Server error.check after some time"))

    }

    return(
        <div>
       <div className="bg">        
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>
            <form>
    
                <div className="mb-3">
                    <label htmlFor="uid" className="form-label"> Enter Uid: </label>
                    <input type="text" className="form-control" id="uid" name="uid" value={info.uid}
                    onChange={(e)=>{dispatch({type:'update',fld:'uid',val: e.target.value})}} 
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div> 
                </div>

                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label"> Enter Password: </label>
                    <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd} 
                    onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div> 
                </div>

                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>LOGIN</button>
                <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>
            </form>
            <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>

            </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        </div>
    )
}

// import React, {useReducer, useState} from 'react'
// import {useDispatch} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import {login} from './Slice';
// import './css/Login.css'
// import loginimg from './images/img1.jpeg';


// export default function LoginComp() {

//     const init = {
//         uid: "",
//         pwd: ""
//     }


//     const reducer = (state, action) => {
//         switch (action.type) {

//             case 'update':
//                 return {
//                     ...state,
//                     [action.fld]: action.val
//                 }

//             case 'reset':
//                 return init;

//             default:
//                 return init;

//         }
//     }

//     const [info, dispatch] = useReducer(reducer, init);
//     const [msg, setMsg] = useState("");
//     const navigate = useNavigate();
//     const reduxAction = useDispatch();

//     const sendData = (e) => {
//         e.preventDefault();

//         const reqOptions = {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(info)
//         }
//         fetch("http://localhost:8080/checkLogin", reqOptions).then(resp => {
//             if (resp.ok) 
//                 return resp.text();
//              else 
//                 throw new Error("Server Error");
            

//         }).then(text => text.length ? JSON.parse(text) : {}).then(obj => {

//             if (Object.keys(obj).length === 0) {
//                 setMsg("Wrong Uid / Pwd");
//                 alert("Invalid Credentials")
//             } else {
//                 if (obj.status === false) {
//                     alert("Request has not been Approved")
//                 } else {

//                     reduxAction(login())
//                     if(obj.role_id.id === 1)
//                         {
//                              navigate("/admin_home")
//                          }
//                          else if(obj.role_id.id=== 2)
//                          {
//                              navigate("/vender_home")
//                          }
//                          else if(obj.role_id.id === 3)
//                          {
//                              navigate("/customer_home") 
//                          }
//                 }
//             }
//         }).catch((error) => alert("Server Error . Try After Some Time"));
//     }

//     return (


//         <section className="text-center text-lg-start">

//             <style> {`
//           .rounded-t-5 {
//             border-top-left-radius: 0.5rem;
//             border-top-right-radius: 0.5rem;
//           }
  
//           @media (min-width: 992px) {
//             .rounded-tr-lg-0 {
//               border-top-right-radius: 0;
//             }
  
//             .rounded-bl-lg-5 {
//               border-bottom-left-radius: 0.5rem;
//             }
//           }
//         `} </style>
//             <div className="card mb-3 ">
//                 <div className="row g-0 d-flex align-items-center">

//                     <div className="col-lg-4 d-none d-lg-flex">
//                         <img src={loginimg}
//                             alt="Trendy Pants and Shoes"
//                             className="w-100 h-auto rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 border"
//                             style={
//                                 {
//                                     maxWidth: '85%',
//                                     height: '100px'
//                                 }
//                             }/>
//                     </div>

//                     <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
//                         <h1 style={
//                             {textAlign: 'center'}
//                         }>Login Page
//                         </h1>
//                         <div className="card-body py-5 px-md-5">
//                             <form> {/* uid input */}
//                                 <div className="form-outline mb-3">
//                                     <label className="form-label" htmlFor="uid">Enter Uid</label>
//                                     <input type="text" id="uid" className="form-control" name='uid'
//                                         value={
//                                             info.uid
//                                         }
//                                         onChange={
//                                             (e) => {
//                                                 dispatch({type: 'update', fld: 'uid', val: e.target.value})
//                                             }
//                                         }/>
//                                 </div>

//                             {/* Password input */}
//                             <div className="form-outline mb-4">
//                                 <label className="form-label" htmlFor="pwd">Enter Password</label>
//                                 <input type="password" id="pwd" name='pwd' className="form-control"
//                                     value={
//                                         info.pwd
//                                     }
//                                     onChange={
//                                         (e) => {
//                                             dispatch({type: 'update', fld: 'pwd', val: e.target.value})
//                                         }
//                                     }/>
//                             </div>

//                         {/* 2 column grid layout for inline styling */}
//                         <div className="row mb-4">
//                             <div className="col d-flex justify-content-center">
//                                 {/* Checkbox */}
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked/>
//                                     <label className="form-check-label" htmlFor="form2Example31">
//                                         Remember me
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className="col">
//                                 {/* Simple link */}
//                                 <a href="#!">Forgot password?</a>
//                             </div>
//                         </div>

//                         {/* Submit button */}
//                         <button type="submit" className="btn btn-primary btn-block mb-4"
//                             onClick={
//                                 (e) => {
//                                     sendData(e)
//                                 }
//                         }>Sign in</button>
//                         <button type="reset" className="btn btn-primary btn-block mb-4"
//                             onClick={
//                                 () => {
//                                     dispatch({type: 'reset'})
//                                 }
//                         }>Clear</button>

//                     </form>
//                     <div style={
//                         {textAlign: 'center'}
//                     }>
//                         <p> {
//                             JSON.stringify(info)
//                         }</p>
//                         <p>{msg}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// </section>
//     )
// }
