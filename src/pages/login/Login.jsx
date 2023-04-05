import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Login() {
    // const [eye, setEye] = useState(true)
    // let passshow="password";
    // const showpassword=()=>{
    //     if(eye){

    //     }
    // }
    const handleLogin=(event)=>{
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        alert(email + password);
    }
  return (
    <div className='login'>
        <div className="loginmember">Login Existing Member</div>
        <form onSubmit={handleLogin}>
            <input type="email" required />
            <input type="password" required/>
            <div className='forgetpass'>Forgot password?</div>
            <button type='submit'>Login</button>
            <div className="or">or</div>
            <div className="facebooklogin">Login With Facebook</div>
        </form>
        <div className="notmember">Not a member yet? <Link to="/signup">Sign up now!</Link></div>
    </div>
  )
}

export default Login