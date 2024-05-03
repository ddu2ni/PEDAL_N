import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

import './join.css';

const Join = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        nickname: '',
        password: ''
    });
    const [modalIsOpen, setModalIsOpen] = useState(false); //가입완료 되었습니다 모달창

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/join', form);
            console.log("보내는 데이터 ", response.data);
            setModalIsOpen(true); // 가입완료 되었습니다 모달창 열기
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className="join-box">
            <p>Resister</p>
            <form>
                <div className="user-box">
                    <input required="" name="username" type="text" onChange={handleChange} />
                    <label>ID</label>
                </div>

                <div className="user-box">
                    <input required="" name="nickname" type="text" onChange={handleChange} />
                    <label>Name</label>
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
            <p>Already have an acount? <a href="/node/login" className="a2">Log In!</a></p>

            {/* 가입 완료 모달  이거도 join.css 에서 디자인*/}
            <Modal className='modal' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div>
                    <h2>가입 완료</h2>
                    <p>가입이 완료되었습니다.</p>
                    <button onClick={() => {
                        setModalIsOpen(false);
                        navigate('/node/login');
                    }}>
                        확인
                    </button>
                </div>
            </Modal>
        </div>
    );
};;

export default Join;
