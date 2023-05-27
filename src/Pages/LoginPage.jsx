import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';

export default function LoginPage() {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUser}=useContext(UserContext);


// login submit function ---------------------------------
// ---------------------------------------------
  async function handleLoginSubmit(ev){
    ev.preventDefault();

    // login submit api ---------------------------------------
    // ------------------------------------------
    try{
      const {data} = await axios.post('/login', {email,password})
      setUser(data)
      alert('login success')
      setRedirect(true);
    }
    catch(e){
      alert('login failed')
    }
  }
  
  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
       <div className='mb-64'>
       <h1 className='text-4xl text-center mb-4'>Login</h1>

       {/* login form --------------------------------------- */}
      <form className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>

        {/* email input ------------------------------------------- */}
        <input type="email" placeholder='your@email.com' value={email} onChange={ev => setEmail(ev.target.value)} />

        {/* passwor input -------------------------------------------------- */}
        <input type="password" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/>

        {/* login button --------------------------------------------------- */}
        <button className='primary'>Login</button>

        {/* Register link ----------------------------------------- */}
        <div className='text-center py-2 text-gray-500'>Dont't have an acoount yet? <Link className='underline text-black' to={'/register'}>Register Now</Link></div>
      </form>
       </div>
    </div>
  );
}
