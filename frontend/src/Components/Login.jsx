import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginNow = () => {
    const [Username, setUsername] = useState(getCookie('username'));
    const [Password, setPassword] = useState(getCookie('password'));
    const[token , setToken] = useState("")
    const navigate = useNavigate();

    function getCookie(name) {
        let cookieArray = document.cookie.split(';');
        let cookie = cookieArray.find((row) => row.trim().startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }

    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 365 * 24 * 60 * 60 * 1000); // Convert days to milliseconds
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    function deleteCookie(cookieName) {
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        console.log(document.cookie)
    }
    

    function deleteCook() {
        console.log("Deleting cookies...");
        deleteCookie('username');
        deleteCookie('password');
        console.log("Cookies deleted.");
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/signup",{Username:Username,Password:Password})
    .then(res=>{setCookie( "token" , res.data.accessToken ,365)})
        setCookie("token" , token,365)
        console.log(token)
        setCookie('username', Username, 365);
        setCookie('password',Password,365)
        navigate('/');
    };

    return (
        <div className="box2">
            <h2>Orphanage Donation Form</h2>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        name="Username"
                        value={Username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="Password"
                        value={Password || ''}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className='addbtn'>
                <button onClick={login}>Login</button>
                </div>
               
                
                <div className='delbtn'>
                <button onClick={deleteCook}>Log out</button>

                </div>
                
            </form>
        </div>
    );
};

export default LoginNow;
