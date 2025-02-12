"use client"

import { useState } from "react"
import ChatBox from "./ChatBox"
import ConversationLog from "./ConversationLog"
import TopicSelector from "./TopicSelector"

type Message = {
  text: string
  sender: "user" | "bot"
  topic: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentTopic, setCurrentTopic] = useState("general")

  const addMessage = (text: string, sender: "user" | "bot") => {
    setMessages([...messages, { text, sender, topic: currentTopic }])
  }

  const handleSend = (message: string) => {
    addMessage(message, "user")
    // Here you would typically send the message to your chatbot backend
    // and then add the response to the messages
    setTimeout(() => {
      addMessage(`You said: "${message}" (Topic: ${currentTopic})`, "bot")
    }, 1000)
  }

  return (
    <div className="flex w-full max-w-4xl flex-col space-y-4">
      <TopicSelector currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
      <ConversationLog messages={messages} />
      <ChatBox onSend={handleSend} />
    </div>
  )
}

