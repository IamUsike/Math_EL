// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import "./LoginValidation";
import validation from "./LoginValidation"; 
import "./Login.css"  
import axios from 'axios'

function Login() {
  const [formValues, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  axios.defaults.withCredentials=true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const err=validation(formValues);
    setErrors(err);
    if(err.email==="" && err.password==="" ){
     axios.post('http://localhost:8080/signup', formValues)
      .then(result=> {
        if(result.data.success===true){
          navigate('/home');
        }
        else{
          alert("No record found!!");
        }
      })
      .catch(err=>console.log(err));
    }
  };
  
  return (
    <div>
     <div className="wrapper">
     <h2 id="login">Log In</h2>
        <form action="" onSubmit={handleSubmit}>
         <div className="label">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" onChange={handleInput} name="email" />
            <i className='bx bx-envelope'></i>
            <div id="error">{errors.email && <span>{errors.email}</span>}</div>
          </div>
           <div className="label">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} />
            <i className='bx bxs-lock-alt' ></i>
            <div id="error">{errors.password && <span>{errors.password}</span>}</div>
          </div>
          <button type="submit"className="button" onClick={handleSubmit}>Login</button>
          <Link to="/signup" ><button className="button"> Create Account</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

// Login.js
// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom'; 
// import "./LoginValidation";
// import validation from "./LoginValidation";
// import "./Login.css" 
// import axios from 'axios'

// function Login() {
//  const [formValues, setValues] = useState({
//    email: '',
//    password: '',
//  });

//  const [errors, setErrors] = useState({});
//  const navigate = useNavigate();

//  const handleInput = (event) => {
//    setValues((prev) => ({
//      ...prev,
//      [event.target.name]: event.target.value,
//    }));
//  };

//  axios.defaults.withCredentials=true;
//  const handleSubmit = (event) => {
//    event.preventDefault();
//    const err=validation(formValues);
//    setErrors(err);
//    if(err.email==="" && err.password==="" ){
//     axios.post('http://localhost:8080/signup', formValues) // Change '/signup' to '/login'
//      .then(result=> {
//        if(result.data.success===true){
//          navigate('/home');
//        }
//        else{
//          alert("No record found!!");
//        }
//      })
//      .catch(err=>{
//        console.log(err);
//        alert("An error occurred during login.");
//      });
//    }
//  };
 
//  return (
//    <div>
//     <div className="wrapper">
//     <h2 id="login">Log In</h2>
//        <form action="" onSubmit={handleSubmit}>
//         <div className="label">
//            <label htmlFor="email">Email</label>
//            <input type="email" placeholder="Enter Email" onChange={handleInput} name="email" />
//            <i className='bx bx-envelope'></i>
//            <div id="error">{errors.email && <span>{errors.email}</span>}</div>
//          </div>
//           <div className="label">
//            <label htmlFor="password">Password</label>
//            <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} />
//            <i className='bx bxs-lock-alt' ></i>
//            <div id="error">{errors.password && <span>{errors.password}</span>}</div>
//          </div>
//          <button type="submit"className="button">Login</button> // Removed onClick handler
//          <Link to="/signup" ><button className="button"> Create Account</button></Link>
//        </form>
//      </div>
//    </div>
//  );
// }

// export default Login;