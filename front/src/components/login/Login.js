import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.css'
const Login = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', form,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
     
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="login-box">
        <p>Login</p>
        <form>
            <div className="user-box">
                <input required="" name="nickname" type="text" onChange={handleChange} />
                <label>ID</label>
            </div>
            <div className="user-box">
                <input required="" name="password" type="password" onChange={handleChange} />
                <label>Password</label>
            </div>
            
            <a onClick={onSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </a>
        </form>
        <p>Don't have an account? <a href="/node/join" className="a2">Sign up!</a></p>
    </div>
    );
};

export default Login;