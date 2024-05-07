import {io} from "socket.io-client"

const socket = io("http://localhost:8000")


// 연결이 성공적으로 설정되었을 때
socket.on('connect', () => {
    console.log('WebSocket 연결 성공');
});

// 연결 실패 시
socket.on('connect_error', (error) => {
    console.error('WebSocket 연결 실패:', error);
});

// 연결이 끊길 때
socket.on('disconnect', () => {
    console.log('WebSocket 연결 끊김');
});

export default socket;