import React from "react";
import "./MessageContainer.css";
import { Container } from "@mui/system";
import { MdPersonPin } from "react-icons/md";

const MessageContainer = ({ messageList, user }) => {
  return (
    <div className="chat-box">
      {messageList.map((message, index) => {
        return (
          <Container key={message._id} className="message-container">
            {message.user.name === "system" ? (
              <div className="system-message-container">
                <p className="system-message">{message.chat}</p>
              </div>
            ) : (
              <div
                className={
                  message.user.name === user.name
                    ? "my-message-container"
                    : "your-message-container"
                }
              >
                <div className="sender-info">
                  {message.user.name !== user.name && (
                    <div className="sender-info">
                      {/* <p className="sender-name">{message.user.name}</p> */}
                      <img
                        src="/profile.jpeg"
                        alt=""
                        className="profile-image"
                        style={
                          (index === 0
                            ? { visibility: "visible" }
                            : messageList[index - 1].user.name === user.name) ||
                              messageList[index - 1].user.name === "system"
                              ? { visibility: "visible" }
                              : { visibility: "hidden" }
                        }
                      />
                    </div>
                  )}
                </div>
                <div className={message.user.name === user.name ? "my-message" : "your-message"}>
                  {message.chat}
                </div>
              </div>
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default MessageContainer;
