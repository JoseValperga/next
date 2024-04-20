"use client"
import { MessageType } from "@/types/types.message";
import Message from "../messages/Message";
import { useState } from "react";

enum TabView {
  MESSAGE,
  REPLIES,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};

const UserTabs = ({ messages, replies }: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGE);

  return (
    <div>
      <div className="flex justify-evenly mb-4">
        <div
          className={`cursor-pointer border-b-4  ${tab === TabView.MESSAGE ? " border-b-4 border-blue-400" : ""}`}
          onClick={() => setTab(TabView.MESSAGE)}
        >
          Mensajes
        </div>
        <div
          className={`cursor-pointer ${tab === TabView.REPLIES ? " border-b-4 border-blue-400" : ""}`}
          onClick={() => setTab(TabView.REPLIES)}
        >
          Respuestas
        </div>
      </div>

      <div>
        {tab === TabView.MESSAGE &&
          messages.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
        {tab === TabView.REPLIES &&
          replies.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
      </div>
    </div>
  );
};

export default UserTabs;
