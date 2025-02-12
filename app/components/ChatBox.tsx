"use client"

import { useState, type React } from "react"

type ChatBoxProps = {
  onSend: (message: string) => void
}

export default function ChatBox({ onSend }: ChatBoxProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSend(message)
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow rounded-lg border border-primary bg-secondary p-2 text-primary"
        placeholder="Type your message..."
      />
      <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-secondary hover:bg-gray-800">
        Send
      </button>
    </form>
  )
}

