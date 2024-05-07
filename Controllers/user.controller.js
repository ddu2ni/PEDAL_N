const User = require("../models/chatUser")
const userController = {}

userController.saveUser=async(userName, sid)=>{
    //유저정보 저장 (유저이름 , 토큰값)
    //유저 이름 - io , 토큰값 - socketId넘겨주면됨

    //이미 있는 유저인지 확인
    let user = await User.findOne({name: userName});
    //없다면 새로운 유저정보 만들기
    if(!user){
        user = new User({
            name:userName,
            token:sid,
            online:true
        })
    }
    //이미 있는 유저라면 연결정보 token값만 바꿔줌
    user.token = sid
    user.online = true
    
    await user.save();
    return user;
}

    //유저정보 찾기
    userController.checkUser=async(sid)=>{
        const user = await User.findOne({token:sid})
        if(!user) throw new Error("유저없음!")
        return user;
    }

module.exports = userController