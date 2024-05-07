const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "User must type name"],
        unique: true,
    },
    token: {
        type: String,
    },
    online : {
        type: Boolean,
        default:false,
    },
});

// token 
// => 연결 id정보저장

// online
// 유저가 online인지 offline인지? 상태 보여주는거

module.exports = mongoose.model("User",userSchema);