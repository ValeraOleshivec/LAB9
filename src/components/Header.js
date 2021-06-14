import React from 'react';
import { Link } from 'react-router-dom';


function LogOut() {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    localStorage.removeItem("regist");
    window.location.reload();
  }

export default function Header() {
    return (
        <div className='d-flex justify-content-around mt-2'>
            <div><Link to='/'>Main</Link></div>
            <div><Link to='/profile'>Profile</Link></div>
            <div>{!localStorage.getItem("regist") ? (
                <Link to="/sign-in"> SignInPage</Link>
            ) : null}
            </div>
            <div>{localStorage.getItem("regist") ? (
                <button className='btn btn-secondary' onClick={() => LogOut()}>Log Out</button>
            ) : null}
            </div>
        </div>
    )
}
