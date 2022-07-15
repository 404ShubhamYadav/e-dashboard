import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  }, [])
  
  const collectData = async ()=>{
    let result = await fetch("http://localhost:5000/register",{
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers:{
        'content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if(result.auth){
      localStorage.setItem("user", JSON.stringify(result.result))
      localStorage.setItem("token", JSON.stringify(result.auth))
      navigate('/')
    }else{
      alert('Please fill the required details')
    }
  }

  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <input className='inputBox' type="text" placeholder='Enter Your Name'
      value={name} onChange = {(e)=> setName(e.target.value)} />
      <input className='inputBox' type="email" placeholder='Enter Your email' 
      value={email} onChange = {(e)=> setEmail(e.target.value)} />
      <input className='inputBox' type="password" placeholder='Enter Your password' 
      value={password} onChange = {(e)=> setPassword(e.target.value)} />
      <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
    </div>
  )
}

export default SignUp;