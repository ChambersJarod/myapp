import React, { useState } from 'react';
import Headerhome from '../components/headerhome';
import Footer from '../components/footer';

import './signin.css';

function Signin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
            if (username == 'user') {
                if (password == 'pass'){
                    setIsLoggedIn(true);
                    window.sessionStorage.setItem("loggedin",'true');

                }
            }
            
        
      };

    return(
        <div className='signinfullpage'>
            <Headerhome/>
            
            <div className="login-container">
                {isLoggedIn ? (
                    <div className="welcome-message">
                    <h2>Welcome, {username}!</h2>
                    <p>You are now logged in.</p>
                    </div>
                ) : (
                    <div className="login-form">
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    </div>
                )}
            </div>

            <Footer/>
        </div>
    )
}

export default Signin;