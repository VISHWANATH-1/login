import React, { useState } from 'react'

const Register = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='frm'>
           <form className='reg' onSubmit={handleSubmit}>
           <label htmlFor="name"> Full name </label>
           <input value={name} onChange={(e)=> setName (e.target.value)} type="name" placeholder="Your Name" id="Name" name="name" />
           <label htmlFor="email"> Email </label>
           <input value={email} onChange={(e)=> setEmail (e.target.value)} type="email" placeholder="Your E-mail" id="email" name="email" />
           <label htmlFor="Password"> Password </label>
           <input value={pass}  onChange={(e)=> setPass (e.target.value)} type="pass" placeholder="*********" id="Password" name="Password" />
           <button type='submit'>Register</button>
           <button className='btn' onClick={()=> props.onFormSwitch ("Login")}>Already have account? Log In</button>
       </form>
    </div>
  )
}

export default Register