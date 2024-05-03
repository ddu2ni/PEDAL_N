const mongoose = require('mongoose')

// DB 컬럼 만드는 느낌, 스키마 정의, 모델 정의가 한 세트
const userSchema = mongoose.Schema({
    username: { type: String },
    nickname: { type: String },
    password: { type: String }
})

console.log('테스트 스키마 정의')

// 위에 컬럼대로 DB 테이블 만드는 느낌
mongoose.model('userdbs', userSchema)
console.log('유저 모델 정의')
