import React, { useEffect, useState } from 'react';
import './chat.css'
import io from 'socket.io-client';
import socket from '../../server';
import InputField from './InputField/InputField';
import MessageContainer from './MessageContainer/MessageContainer';

const Chat = () => {

  useEffect(() => {
    //서버 호스트 및 포트설정
    const socket = io.connect('http://localhost:8000');

    // 소켓 연결 시도
    socket.on('connect', () => {
      console.log("소켓 연결됨!");
    });

    // 서버로부터 메시지 수신
    socket.on('message', (data) => {
      console.log("서버로부터 메세지 수신:", data);
    });

    // 클라이언트가 메시지를 받은 후의 응답 처리
    socket.on('messageReceived', (data) => {
      console.log("서버로부터의 응답:", data);
    });

    // 컴포넌트가 언마운트되면 소켓 연결 종료
    return () => {
      socket.disconnect();
    };
  }, []);



  const [user, setUser] = useState(null);
  const [messageList, setMessageList] = useState([]);
  console.log("messageList", messageList)

  useEffect(() => {
    socket.on("message", (message) => {
      setMessageList((prevState) => prevState.concat(message));
    })
    askUserName();
  }, [])


  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요")
    console.log("uuu", userName);

    //emit(대화제목, 보낼 내용, 콜백함수)
    socket.emit("login", userName, (res) => {
      if (res?.ok) {
        setUser(res.data);
      }

    })
  }

  const [message, setMessage] = useState('');


  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage res", res);
    });
    setMessage("");
  };




  return (
    <div>
      <div>
        <MessageContainer messageList={messageList} user={user} />
        <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
