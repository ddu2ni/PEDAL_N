const mongoose = require('mongoose')


//DB 컬럼 만드는 느낌 , 스키마정의, 모델정의가 한 세트 
const testSchema = mongoose.Schema({
    id:{type:String},
    name:{type:String}
})

console.log('테스트 스키마 정의')

//위에 컬럼대로 DB 테이블 만드는 느낌 
mongoose.model('testdbs', testSchema)
console.log('테스트 모델 정의')