import React from 'react';
import Register from "./Register";

function Login() {
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
                                // value={this.state.username}
                                // onChange={this.handleChangeUsername}
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
                                // value={this.state.password}
                                // onChange={this.handleChangePassword}
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
                                // onClick={() => {
                                // this.props.onLoginClick(
                                //     this.state.username,
                                //     this.state.password
                                // );
                                // }}
                            />
                            <input
                                type="button"
                                value="Register"
                                id="register_btn"
                                className="btn register_btn"
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