import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { loginFetcher } from '../../network/loginFetcher'


const Login = props => {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')

    const _onClickLogIn = (name, pwd) => {
        let info = { name, pwd }
        loginFetcher(info, (error, data) => {
            if (error) {
                 console.log(error)
                alert(JSON.stringify(data.message),null,2)
            }
            else if (data.success === true) {
                alert(JSON.stringify(data.message),null,2)
                setName('')
                setPwd('')
                props.history.replace(`/`)
            }
        })
    }

    return (
        <div>
            {/* <div className="login-header">
                <span className="pl-3">Myanmar Tea Leaf</span>
            </div> */}
            <div className="Login d-flex justify-content-center">
                <div className="card login-card ">
                    <div className="card-header login-card-header">
                        <h3>Log In</h3>
                    </div>
                    <div className="card-body login-body">
                        <form>
                            <div className="input-group form-group  pb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-user" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="username"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                // onKeyPress={this.handleKeyPress}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-key" />
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                // onKeyPress={this.handleKeyPress}
                                />
                            </div>
                            {/* <div>
                            <span className="action-error">{this.props.errorMsg}</span>
                            </div> */}

                            <div className="form-group">
                                <input
                                    type="button"
                                    value="Login"
                                    id="login_btn"
                                    className="btn float-right login_btn"
                                    onClick={() => _onClickLogIn(name, pwd)}
                                />
                                <input
                                    type="button"
                                    value="Register"
                                    id="register_btn"
                                    className="btn register_btn"
                                    onClick={()=>props.history.push('/register')}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;