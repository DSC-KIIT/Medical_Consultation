import React from "react";
import ChatBar from "./ChatBar";
import "./Chat.css";
import ChatText from "./ChatText";
import ChatMessages from "./ChatMessages";

export default function Chat() {
  return (
    <div classsName="chat">
      <ChatBar />
      <ChatMessages />
      <ChatText />
    </div>
  );
}
