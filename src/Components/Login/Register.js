import React from 'react'

function Register() {
    return (
        <div>
            <div className="login-header">
                <span className="pl-3">Myanmar Tea Leaf</span>
            </div>
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
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register