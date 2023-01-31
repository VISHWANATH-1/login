import React, {useState} from 'react'

const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='frm'>
       <form className='log' onSubmit={handleSubmit}>
           <label htmlFor="email"> Email </label>
           <input value={email} onChange={(e)=> setEmail (e.target.value)} type="email" placeholder="Your E-mail" id="email" name="email" />
           <label htmlFor="Password"> Password </label>
           <input value={pass}  onChange={(e)=> setPass (e.target.value)} type="pass" placeholder="*********" id="Password" name="Password" />
           <button type='submit'>Log In</button>
           <button className='btn' onClick={() =>props.onFormSwitch('Register')}>Don't have acoount? Register</button>
       </form>
    </div>
  )
}

export default Login