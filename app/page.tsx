import ChatInterface from "./components/ChatInterface"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary p-24">
      <h1 className="mb-8 text-4xl font-bold text-primary">Topic Chatbot</h1>
      <ChatInterface />
    </main>
  )
}

