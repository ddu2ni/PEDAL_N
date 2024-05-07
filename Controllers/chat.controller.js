const Chat = require("../Models/chat")
const chatController = {}

chatController.saveChat = async(message,user)=>{
    const newMessage = new Chat({
        chat:message,
        user:{
            id:user._id, //_id: 몽고디비 특성
            name:user.name
        }
    })
    //메세지 저장 - 메세지내용(io.message) , 유저정보(유저아이디, 이름)(socket.id)
    await newMessage.save();
    return newMessage;
}

module.exports = chatController