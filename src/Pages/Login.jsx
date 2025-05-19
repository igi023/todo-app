import React, { useState } from 'react';
import Users from '../Data/users.json'; 
import { Navigate } from 'react-router-dom';


export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [goToHome, setGoToHome] = useState(false);

   

    

    const handleSubmit = (e) => {
        e.preventDefault();    
    
        const userFound = Users.find(
            user => user.username === username && user.password === password
        );
    
        if (userFound) {
            setMessage(`Welcome ${userFound.username}!`);
            setGoToHome(true);
             
        } else {
            setMessage('Wrong username or password');
        }
    };

    if (goToHome) {
        return <Navigate to="/home" />;
    }
    

    return (
        <div style={{  maxWidth: '400px', margin: '50px auto' }}>
            <h1  className="text-center">Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder='Type your username' 
                    type="text" 
                    className="form-control mb-3"
                />
                <input 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='Type your password' 
                    type="password" 
                    className="form-control mb-3"

                />
                <div>
                 
                    <button className="btn btn-primary" type="submit">Log in</button>
                </div> 
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
}
