import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const responseGoogle = (response)=>{
        console.log(response);
        setLoggedIn(true);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
    }
    return (
        <div className="login-div">
       
            <h1 style={{textAlign:'center'}}>Login using Google OAuth</h1>
            <div className="login_button_div">
            <GoogleLogin
            clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            /></div>
  <hr />
   <p style={{textAlign:"center"}}>{loggedIn ? `Hello ${name} you are Logged In. Your Email-ID: ${email}`: "Click on button to Login"}
   </p>
   
        </div>
        
    )
}

export default Login
