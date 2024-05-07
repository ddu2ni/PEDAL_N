const mongoose = require("mongoose");

//메세지 채팅
const chatSchema = new mongoose.Schema(
    {
        chat: String, //메세지 내용
        user: {       //메세지 누가보냈는지
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);