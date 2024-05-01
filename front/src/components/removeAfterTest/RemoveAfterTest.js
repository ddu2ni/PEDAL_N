import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './RemoveAfterTestNav.css'

const RemoveAfterTest = () => {

    const [id,setId] = useState('');
    const [name,setName] = useState('');

    const [datas, setDatas] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/test')
            setDatas(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log('데이터', {id,name})
        try {
            const response = await axios.post('http://localhost:8000/api/test', {
                id: id,
                name: name,
            });
            console.log("보내는 데이터 ",response.data)
            fetchData();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                아디:<input type='text' value={id} onChange={(e)=>setId(e.target.value)}/><br/>
                이름:<input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <button type='submit'>전송</button>
            </form>

            <br/><br/>
            <h2>DB에 있는거</h2>
           
            <ul>
                {
                    datas.map((item)=>(
                        <li key={item.id}>
                            아디:{item.id} / 이름: {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RemoveAfterTest;