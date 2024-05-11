// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons
// import './login.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordShown, setPasswordShown] = useState(false);

//     const togglePasswordVisibility = () => {
//         setPasswordShown(!passwordShown);
//     };

//     const handleLogin = (event) => {
//         event.preventDefault();
//         console.log('Login Attempt:', { username, password });
//     };

//     return (
//         <div className="login-container">
//             <div className="login-form">
//                 <form onSubmit={handleLogin}>
//                     <div className="form-group">
//                         <label>Username:</label>
//                         <input
//                             type="text"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group password-group">
//                         <label>Password:</label>
//                         <input
//                             type={passwordShown ? 'text' : 'password'}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
//                             {passwordShown ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login Attempt:', { username, password });
        // Placeholder for login logic
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div className="form-group password-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-input-container">
                        <input
                            id="password"
                            type={passwordShown ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                            {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <div className="form-group remember_me">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
