import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


export default function Register() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev){
    ev.preventDefault();
    try{
      const url = '/register';
      await axios.post(url, {
        name,
        email,
        password
      });
      alert('Registration Successful. Now you can log in')
    }
    catch(e){
      alert('Registration faile. Please try again later')
    }
    
  }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
    <h1 className='text-4xl text-center mb-4'>Register</h1>

    {/* Register form ----------------------------- */}
   <form className='max-w-md mx-auto' onSubmit={registerUser}>

    {/* name input ------------------------ */}
    <input type="text" 
    placeholder='John Doe' 
    value={name} 
    onChange={ev=> setName(ev.target.value)} />

    {/* email input ------------------------------ */}
     <input type="email" 
     placeholder='your@email.com'
     value={email} 
     onChange={ev=> setEmail(ev.target.value)}/>

     {/* Password input -------------------------- */}
     <input type="password" 
     placeholder='password' 
     value={password} 
     onChange={ev=> setPassword(ev.target.value)}/>

      {/* Register Button ------------------ */}
     <button className='primary'>Register</button>

     {/* Login link in register page ------------------------------ */}
     <div className='text-center py-2 text-gray-500'>Already a member? <Link className='underline text-black' to={'/login'}>Login Now</Link></div>
   </form>
    </div>
 </div>
  );
}
