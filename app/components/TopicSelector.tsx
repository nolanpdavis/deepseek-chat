type TopicSelectorProps = {
  currentTopic: string
  setCurrentTopic: (topic: string) => void
}

export default function TopicSelector({ currentTopic, setCurrentTopic }: TopicSelectorProps) {
  const topics = ["general", "tech", "science"]

  return (
    <div className="flex space-x-2">
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => setCurrentTopic(topic)}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            currentTopic === topic ? "bg-primary text-secondary" : "bg-secondary text-primary hover:bg-gray-200"
          }`}
        >
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </button>
      ))}
    </div>
  )
}

