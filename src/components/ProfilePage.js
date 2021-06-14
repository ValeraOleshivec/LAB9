import React from 'react'
import { Redirect } from 'react-router'

export default class ProfilePage extends React.Component {
    render () {
        return (
            <div className='container mt-5'>
                {!localStorage.getItem('regist') ? <Redirect to='/'/> : null}
                <div className="Info">
                    Login: {localStorage.getItem("login")} <br />
                    Password: {localStorage.getItem("password")}
                </div>
            </div>
        ) 
    }
}

