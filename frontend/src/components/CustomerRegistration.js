// import { useReducer, useState} from "react";

// export default function RegistrationComp()
// {

//     const init={
//         fname:"",
//         lname:"",
//         username:"",
//         password:"",
//         address:"",
//         city:"",
//         contact_no:"",
//         email:"" 
//     }

//     const reducer = (state,action) =>{
//         switch(action.type)
//         {
//             case 'update':
//                 return {...state,[action.fld]:action.val}
//             case 'reset':
//                 return init;    
//         }
//     }

//     const [info,dispatch] = useReducer(reducer,init);
    
//     const sendData = (e)=>{
        
//         e.preventDefault();
//         const reqOptions = {
//             method:'POST',
//             headers: {'content-type':'application/json'},
//             body: JSON.stringify(info)
//         }

//         fetch("http://localhost:8080/regCustomer",reqOptions)
//         .then(resp => resp.json())
        

//     }


//     return(
//         <div>
//             <h1>Registration</h1>
//             {/* <form>
//                 Enter First Name:<input type="text" name="fname"></input> <br/>
//                 Enter Last Name:<input type="text" name="lname"></input> <br/>
//                 Enter Uid:<input type="text" name="uid"></input> <br/>
//                 Enter Password:<input type="password" name="password"></input> <br/>
//                 Enter Address:<input type="text" name="address"></input> <br/>
//                 Enter City:<input type="text" name="city"></input> <br/>
//                 Enter Contact Number:<input type="number" name="cnumber"></input> <br/>
//                 Enter Email Id:<input type="text" name="email"></input> <br/>
//                 Enter Roll Type:<select name="roll">
//                            <option value="none" selected disabled hidden>choose one</option>
//                            <option value="1">Admin</option>
//                            <option value="2">Vender</option>
//                            <option value="3">Customer</option>
//                            </select>
//                            <br/>
//                            <input type="submit" value="REGISTER"></input>
//             </form> */}


// <form>
//     <div className="mb-3">
//         <label htmlFor="fname" className="form-label"> Enter First Name: </label>
//         <input type="text" className="form-control" id="fname" name="fname" value={info.fname}
//         onChange={(e)=>{dispatch({type:'update',fld:'fname',val: e.target.value})}} 
//         />
//         <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="lname" className="form-label"> Enter Last Name: </label>
//         <input type="text" className="form-control" id="lname" name="lname" value={info.lname}
//         onChange={(e)=>{dispatch({type:'update',fld:'lname',val: e.target.value})}} 
//         />
//         <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="username" className="form-label"> Enter Uid: </label>
//         <input type="text" className="form-control" id="username" name="username" value={info.uid}
//         onChange={(e)=>{dispatch({type:'update',fld:'username',val: e.target.value})}} 
//         />
//         <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="password" className="form-label"> Enter Password: </label>
//         <input type="password" className="form-control" id="password" name="password" value={info.pwd} 
//         onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}
//         />
//         <div id="emailHelp" className="form-text">........</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="address" className="form-label"> Enter Address: </label>
//         <input type="text" className="form-control" id="address" name="address" value={info.address} 
//         onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}
//         />
//         <div id="emailHelp" className="form-text">........</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="city" className="form-label"> Enter City: </label>
//         <input type="text" className="form-control" id="city" name="city" value={info.city} 
//         onChange={(e)=>{dispatch({type:'update',fld:'city',val:e.target.value})}}
//         />
//         <div id="emailHelp" className="form-text">........</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="contact_no" className="form-label"> Enter Contact Number: </label>
//         <input type="number" className="form-control" id="contact_no" name="contact_no" value={info.cnumber} 
//         onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}
//         />
//         <div id="emailHelp" className="form-text">........</div> 
//     </div>

//     <div className="mb-3">
//         <label htmlFor="email" className="form-label"> Enter Email Id: </label>
//         <input type="email" className="form-control" id="email" name="email" value={info.email} 
//         onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}
//         />
//         <div id="emailHelp" className="form-text">........</div> 
//     </div>

//     <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>REGISTER</button>
//     <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>
// </form>

// <p>{JSON.stringify(info)}</p>
            
//         </div>
        
        
//     )
// }

import React, { useReducer, useState } from "react";
import { Navigate } from "react-router-dom";

export default function CustomerRegistration() {
  const init = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    address: "",
    city: "",
    contact_no: "",
    email: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateUsername = (username) => /^[A-Za-z0-9]+$/.test(username);
  const validatePassword = (password) => password.length >= 8;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

  const [info, dispatch] = useReducer(reducer, init);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(info.fname)) {
      newErrors.fname = "Invalid first name";
    }
    if (!validateName(info.lname)) {
      newErrors.lname = "Invalid last name";
    }
    if (!validateUsername(info.username)) {
      newErrors.username = "Invalid username";
    }
    if (!validatePassword(info.password)) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!validateEmail(info.email)) {
      newErrors.email = "Invalid email";
    }
    if (!validatePhoneNumber(info.contact_no)) {
      newErrors.contact_no = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const sendData = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const reqOptions = {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(info)
  //     };

  //     fetch("http://localhost:8080/regCustomer", reqOptions)
  //       .then((resp) => {
  //           if(resp.ok)
  //               return resp.json();
  //           else
  //             throw new Error("server Error");
        
                
  //       })
  //       .then(obj => {
  //           if(obj)
  //           {
  //               alert("Registation Successful");
  //               Navigate('/'); 
  //           }
  //           else
  //           {
  //               alert("Registation Failed ");
  //               Navigate('/registration'); 
  //           }
            
  //       })
        
  //       .catch((error) => {
          
  //       });
  //   }
  // };

 
    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)

        }
        fetch("http://localhost:8080/regCustomer", reqOptions)
        .then(resp => {
            if (resp.ok) 
                return resp.text();
             else 
                throw new Error("Server Error");
            
        })
        .then(resp => resp.JSON)
        .then(obj => console.log(JSON.stringify(obj)))
        .then((obj)=>{alert("Registation Successfully Done");
        window.location.href = "/";})
        .catch((error)=> alert("Server Error . Try After Some Time"));   
    }
 
    
  return (
    <div>
      <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Customer-Registration
                      </p>

                        <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-column  mb-4">
                        <label htmlFor="fname" className="form-label"> Enter First Name: </label>
                            <input type="text" className="form-control" id="fname" name="fname" value={info.fname}
                            onChange={(e)=>{dispatch({type:'update',fld:'fname',val: e.target.value})}} 
                            />
                            {errors.lname && <div className="error">{errors.fname}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="lname" className="form-label"> Enter Last Name: </label>
                            <input type="text" className="form-control" id="lname" name="lname" value={info.lname}
                            onChange={(e)=>{dispatch({type:'update',fld:'lname',val: e.target.value})}} 
                            />
                            {errors.lname && <div className="error">{errors.lname}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="username" className="form-label"> Enter Uid: </label>
                            <input type="text" className="form-control" id="username" name="username" value={info.uid}
                            onChange={(e)=>{dispatch({type:'update',fld:'username',val: e.target.value})}} 
                            />
                            {errors.lname && <div className="error">{errors.username}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="password" className="form-label"> Enter Password: </label>
                            <input type="password" className="form-control" id="password" name="password" value={info.pwd} 
                            onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}
                            />
                            {errors.lname && <div className="error">{errors.password}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="address" className="form-label"> Enter Address: </label>
                            <input type="text" className="form-control" id="address" name="address" value={info.address} 
                            onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}
                            />
                            {errors.lname && <div className="error">{errors.address}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="city" className="form-label"> Enter City: </label>
                            <input type="text" className="form-control" id="city" name="city" value={info.city} 
                            onChange={(e)=>{dispatch({type:'update',fld:'city',val:e.target.value})}}
                            />
                            {errors.lname && <div className="error">{errors.city}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="contact_no" className="form-label"> Enter Contact Number: </label>
                            <input type="number" className="form-control" id="contact_no" name="contact_no" value={info.cnumber} 
                            onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}
                            />
                            {errors.lname && <div className="error">{errors.contact_no}</div>}
                        </div>

                        <div className="d-flex flex-column  mb-4">
                            <label htmlFor="email" className="form-label"> Enter Email Id: </label>
                            <input type="email" className="form-control" id="email" name="email" value={info.email} 
                            onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}
                            />
                            {errors.lname && <div className="error">{errors.email}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>REGISTER</button>
                        <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>
                    </form>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
  );
}


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// function FarmerReg()
// {


//     const [regestration, setRegestration] = useState({
//         fname: "",
//         lname: "",
//         username: "",
//         password: "",  
//         address:"",
//         city:"",
//         contact_no: "",
//         email: ""
        
        
        
//       });
      
    
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setRegestration({ ...regestration, [name]: value });
//   };

//   const [isvalid, setIsvalid] = useState(false);

  
//   console.log(regestration);
//   console.log(isvalid);
//   const handleSubmit = (e) => {
//      e.preventDefault();
//     console.log("clicked")
//     if(isvalid)
//     {
//     axios
//     .post("http://localhost:8080/regCustomer", {
     
//       email: regestration.email,
//       fname: regestration.fname,
//       lname: regestration.lname,
//       password: regestration.password,
//       contact_no: regestration.contact_no,
//       username: regestration.username,
//       address:regestration.address,
//       city:regestration.city

     
//     })
//     .then((response) => {
//       console.log(response.data);
//       if(response.data === "register_success")
//       {
//         setRegestration({
//           fname: "",
//           lname: "",
//           email: "",
//           contact_no: "",
//           username: "",
//           address:"",
//           city:"",
//           password: "",
//         });
     
//         alert("Registration successfully")
//       }
      
//     })
//     .catch((error) => {
//       console.log(error.response);
//     });
//   }
//   else{
//     alert("Registration Unsuccessfully")
//   }

//   }



// const [fnameErr, setFnameErr] = useState("")
// function firstNameValidation(){
//     if(regestration.fname === "")
//     {
//         setFnameErr("* Invalid Firstname") ;
//         setIsvalid(false);
//     }
//     else{
//         setFnameErr("");
//         setIsvalid(true);
//     }
// }

// const [lnameErr, setLnameErr] = useState("")
// function lastNameValidation(){
//     if(regestration.lname === "")
//     {
//       setLnameErr("* Invalid Last Name") ;
//       setIsvalid(false);
//     }
//     else{
//       setLnameErr("");
//       setIsvalid(true);
//     }
// }

// const [emailErr, setEmailErr] = useState("")
// function emailValidation(){
//   const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   ;
//     if(regex.test(regestration.email))
//     {
//       setEmailErr("") ;
//       setIsvalid(true)
//     }
//     else{
//       setEmailErr("* Invalid Email");
//       setIsvalid(false);
//     }
// }

// const [contactNoErr, setConatctNoErr] = useState("")
// function contactNoValidation(){
//     if(regestration.contact_no.length != 10)
//     {
//       setConatctNoErr("* Invalid Conatact No") ;
//       setIsvalid(false);
//     }
//     else{
//       setConatctNoErr("");
//       setIsvalid(true);
//     }
// }

// const [userNameErr, setUserNameErr] = useState("")
// function userNameValidation(){
//     if(regestration.username === "")
//     {
//       setUserNameErr("* Invalid User Name") ;
//       setIsvalid(false);
//     }
//     else{
//       setUserNameErr("");
//       setIsvalid(true);
//     }
// }

// const [passwordErr, setPasswordErr] = useState("")
// function passwordValidation(){
//     if(regestration.password === "")
//     {
//       setPasswordErr("* Invalid Password") 
//       setIsvalid(false);
//     }
//     else{
//       setPasswordErr("");
//       setIsvalid(true);
//     }
// }

// const [addressErr, setAddressErr] = useState("")
// function addressValidation(){
//     if(regestration.address === "")
//     {
//       setAddressErr("* Invalid Address") ;
//       setIsvalid(false);
//     }
//     else{
//       setAddressErr("");
//       setIsvalid(true);
//     }
// }



//   return (
//     <div>
//       <>
//       {/* <section className="vh-100" > */}
//       <div>
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-9">
//               <div className="card text-black" style={{ borderRadius: "25px" }}>
//                 <div className="card-body p-md-5">
//                   <div className="row justify-content-center">
//                     <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Customer-Registration
//                       </p>
                    
//                       <form className="mx-1 mx-md-4" method="Post">
//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="fname"
//                               name="fname"
//                               className="form-control"
//                               placeholder="First Name"
//                               value={regestration.fname}
//                               onChange={handleChange}
//                               onBlur={firstNameValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{fnameErr}</span>
//                           </div>
                          
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="lname"
//                               name="lname"
//                               className="form-control"
//                               placeholder="Last Name"
//                               value={regestration.lastname}
//                               onChange={handleChange}
//                               onBlur={lastNameValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{lnameErr}</span>
//                           </div>
                          
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="email"
//                               name="email"
//                               className="form-control"
//                               placeholder="Email"
//                               value={regestration.email}
//                               onChange={handleChange}
//                               onBlur={emailValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{emailErr}</span>
//                           </div>
                          
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="contact_no"
//                               name="contact_no"
//                               className="form-control"
//                               placeholder="Contact No"
//                               value={regestration.contact}
//                               onChange={handleChange}
//                               onBlur={contactNoValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{contactNoErr}</span>
//                           </div>
//                           </div>

//                           <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="address"
//                               name="address"
//                               className="form-control"
//                               placeholder="Address"
//                               value={regestration.address}
//                               onChange={handleChange}
//                               onBlur={addressValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{addressErr}</span>
//                           </div>
                          
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="city"
//                               name="city"
//                               className="form-control"
//                               placeholder="City"
//                               value={regestration.city}
//                               onChange={handleChange}
                              
//                             />
//                           </div>
                          
//                         </div>


                        
//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="username"
//                               name="username"
//                               className="form-control"
//                               placeholder="User Name"
//                               value={regestration.username}
//                               onChange={handleChange}
//                               onBlur={userNameValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{userNameErr}</span>
//                           </div>
                          
//                         </div>

//                         <div className="d-flex flex-column  mb-4">
//                           <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div className="form-outline flex-fill mb-0">
//                             <input
//                               type="text"
//                               id="password"
//                               name="password"
//                               className="form-control"
//                               placeholder="Password"
//                               value={regestration.password}
//                               onChange={handleChange}
//                               onBlur={passwordValidation}
//                             />
//                           </div>
//                           <div>
//                           <span className="text-danger">{passwordErr}</span>
//                           </div>
                          
//                         </div>

//                         <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
//                        </form>
//                     </div>
                   
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* </section> */}
//       </div>
//     </>
//     </div>
//   );
// };

// export default FarmerReg;


