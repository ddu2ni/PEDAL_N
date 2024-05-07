module.exports = function (io) {

    //on = 듣는거 , emit = 말하는거

    //연결된 사람의 정보 = socket에 담아서 연결해줌
    io.on("connection", async (socket) => {
        console.log("연결이 이루어졌습니다.", socket.id);


        //소켓 연결 끊김
        socket.on("disconnect", () => {
            console.log("연결이 끊겼습니다.");
        });

    });

};