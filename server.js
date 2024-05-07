const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const userController = require("./Controllers/user.controller")

//express app
const app = express();
const server = http.createServer(app);

//DB연결
mongoose.connect('mongodb://127.0.0.1:27017/pedal');
console.log('DB연결 완료');

//socket io 
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:8000",
        methods: ["GET", "POST"],
    },
});

// 서버 종료시 클라이언트한테 종료메세지 보내기
process.on('SIGINT', function () {
    io.sockets.emit('serverClosed');
    process.exit();
});

app.set('port', process.env.PORT || 8000);
app.use(express.json());
const cors = require('cors');
const chatController = require('./Controllers/chat.controller');
app.use(cors());

// 테스트 스키마 호출
require('./models/testSchema');

const router = express.Router();

// 라우터 등록, 리액트 라우팅 말고 컨트롤러 느낌의 서버 라우터들
require('./routes/testRoutes')(app);

app.use(express.static(path.join(__dirname, 'front/build')));

app.get('/', function(req, resp) {
    resp.sendFile(path.join(__dirname, 'front/build/index.html'));
});

// 혹시 유저가 url에 직접 아무렇게나 적었을 경우 다시 메인페이지로 가도록
// 이건 항상 맨 아래로 유지시키자 
app.get('*', function (req, resp) {
    resp.sendFile(path.join(__dirname, 'front/build/index.html'));
});

// 웹소켓 연결 관련 로직
io.on("connection", async (socket) => {
    console.log(`연결이 이루어졌습니다.${socket.id}`);


    socket.on("login", async (userName, cb) => {
        // console.log("backend",userName);

        //유저정보 저장
        try {
            const user = await userController.saveUser(userName, socket.id);
            const welcomeMessage = {
                chat: `${user.name}님이 입장하였습니다.`,
                user: {id : null, name: 'system'}, //백엔드에서 주는 메세지니까 id = null
            };
            io.emit("message",welcomeMessage);
            cb({ ok: true, data: user })

        } catch (error) {
            cb({ ok: false, error: error.message });
        }
    });

    socket.on("sendMessage", async (message, cb) => {

        try {
            //유저찾기 socket.id로 
            const user = await userController.checkUser(socket.id)
            //메세지 저장(유저)
            const newMessage = await chatController.saveChat(message, user);
            io.emit("message", newMessage) //한명이 말했을 때 단톡방같은 경우 다 전체 클라이언트한테 알려야하니까 emit
            cb({ ok: true });

        } catch (error) {
            cb({ ok: false, error: error.message });
        }


    })

    // 소켓 연결 끊김
    socket.on("disconnect", () => {
        console.log("연결이 끊겼습니다.");
    });

});


server.listen(app.get('port'), function() {
    console.log('서버를 시작했습니다: ' + app.get('port'));
});
