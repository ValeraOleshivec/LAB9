import React from 'react';

export default class SingInPage extends React.Component {
    register() {
        let login = document.getElementById("login");
        let password = document.getElementById("password");
        localStorage.setItem("regist", true);
        localStorage.setItem("login", login.value);
        localStorage.setItem("password", password.value);
      }
    render() {
        return (
            <div>  
            {!localStorage.getItem("regist") ? (
            <form>
                <div className="container mt-5">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <br/>
                    <label for="lgn"><p className='mr-2'>login</p></label>
                    <input type="text" placeholder="Enter login" name="login" required id='login'/>
                    <br/>
                    <label for="psw"><p className='mr-2'>Password</p></label>
                    <input type="password" placeholder="Enter Password" name="psw" required id='password'/>
                    <br/>
                    <button className='btn btn-secondary' onClick={() => this.register()}>Log In</button>
                </div>
            </form> 
            ) : null}
            </div>
        )
    }
}