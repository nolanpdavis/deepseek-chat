type Message = {
  text: string
  sender: "user" | "bot"
  topic: string
}

type ConversationLogProps = {
  messages: Message[]
}

export default function ConversationLog({ messages }: ConversationLogProps) {
  return (
    <div className="h-96 overflow-y-auto rounded-lg border border-primary bg-secondary p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 rounded-lg p-2 ${
            message.sender === "user" ? "bg-primary text-secondary" : "bg-gray-100 text-primary"
          }`}
        >
          <p className={`text-sm ${getTopicColor(message.topic)}`}>{message.topic}</p>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  )
}

function getTopicColor(topic: string) {
  switch (topic) {
    case "general":
      return "text-accent1"
    case "tech":
      return "text-accent2"
    case "science":
      return "text-accent3"
    default:
      return "text-primary"
  }
}

