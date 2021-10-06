import {React, useState} from 'react';
import '../Global/Login.css';


const Login1 = ({setTokenadmin, notifyinvalidadmin}) =>{
const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

// const history = useHistory();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'ADMIN',
        password: '12345678'
    }

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        const tokenadmin = '123456abcdef';
        setTokenadmin(tokenadmin)
        sessionStorage.setItem('auth-token', tokenadmin);
        //go to www.website.com/todo
        // history.push('/todo');
    } else {
        //bad combination
        notifyinvalidadmin();
        // alert('wrong email or password combination');
    }
}

return (
    <div className="login-page">
        <h2>Login</h2>
        <form autoComplete="off" onSubmit={handleLoginSubmit}>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter User ID"
                value={emailInput}
                onChange={handleEmailChange}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
      </form>
    </div>
  );
}

export default Login1;
