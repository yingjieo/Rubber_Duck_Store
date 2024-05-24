import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Register = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        verifyPassword: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

        if (name === 'password' || name === 'verifyPassword') {
            validatePassword(value);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(state);

        if (!emailRegex.test(state.email)) {
            setErrorMessage('Invalid email');
            return;
        }

        if (state.password !== state.verifyPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
    };

    const validatePassword = (password) => {
        if (!/(?=.*\W).{4,}/.test(password)) {
            setErrorMessage('Password is not secure enough');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <section className='Register'>
            <div className="container">
                <h1 className="mb-4">Register</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            name="username"
                            value={state.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            name="password"
                            type="password"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Verify Password</label>
                        <input
                            className="form-control"
                            name="verifyPassword"
                            type="password"
                            value={state.verifyPassword}
                            onChange={(e) => {
                                handleChange(e);
                                validatePassword(e.target.value);
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                {/* Error message */}
                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                        {errorMessage}
                        <button type="button" className="close" onClick={() => setErrorMessage('')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Register;