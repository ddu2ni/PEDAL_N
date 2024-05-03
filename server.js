const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')

//스키마 호출
require('./models/testSchema')
require('./models/userSchema')

const app = express()

const router = express.Router();

app.set('port', process.env.PORT||8000)
app.use(express.json())
var cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/pedal')
const db = mongoose.connection
console.log('DB연결 완료')

//라우터 등록, 리액트 라우팅 말고 컨트롤러 느낌의 서버 라우터들
require('./routes/testRoutes')(app)
require('./routes/userRoutes')(app, db)








http.createServer(app).listen(app.get('port'),function(){
    console.log('서버를 시작했습니다: ' + app.get('port'))
})




app.use(express.static(path.join(__dirname,'front/build')));

app.get('/', function(req,resp){
    resp.sendFile(path.join(__dirname,'front/build/index.html'));
})



//혹시 유저가 url에 직접 아무렇게나 적었을 경우 다시 메인페이지로 가도록
//이건 항상 맨 아래로 유지시키자 
app.get('*', function(req,resp){
    resp.sendFile(path.join(__dirname,'front/build/index.html'));
})

