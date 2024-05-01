const mongoose = require('mongoose')

const Test = mongoose.model('testdbs')



module.exports = (app) => {



    //데이터 입력
    app.post('/api/test', async(req,resp) => {
        const user = await Test.create(req.body)

        return resp.status(200).send({
            error:false,
            user
        })
    })

    //데이터 조회
    app.get('/api/test', async(req,resp) => {
        const users = await Test.find()

        return resp.status(200).send(users)
    })

}