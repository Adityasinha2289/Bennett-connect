"use client"

import type React from "react"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample conversation data
const conversations = [
  {
    id: "1",
    name: "Neha",
    age: 20,
    course: "Media Studies",
    image: "/placeholder.svg?height=50&width=50&text=Neha",
    lastActive: "Online now",
    messages: [
      { id: 1, text: "Hey there! How's your day going?", sender: "them", time: "2:30 PM" },
      { id: 2, text: "Pretty good! Just finished my classes. How about you?", sender: "me", time: "2:35 PM" },
      {
        id: 3,
        text: "Same here! I was thinking about checking out that new café near the library this weekend.",
        sender: "them",
        time: "2:37 PM",
      },
      { id: 4, text: "That sounds fun! I've been wanting to try it too.", sender: "me", time: "2:40 PM" },
      { id: 5, text: "Would you like to join me on Saturday around 3?", sender: "them", time: "2:42 PM" },
    ],
  },
  {
    id: "2",
    name: "Rahul",
    age: 21,
    course: "Engineering",
    image: "/placeholder.svg?height=50&width=50&text=Rahul",
    lastActive: "Active 20m ago",
    messages: [
      { id: 1, text: "I love that restaurant you mentioned!", sender: "them", time: "Yesterday" },
      { id: 2, text: "It's one of my favorites! We should go sometime.", sender: "me", time: "Yesterday" },
    ],
  },
  {
    id: "3",
    name: "Zara",
    age: 19,
    course: "Design",
    image: "/placeholder.svg?height=50&width=50&text=Zara",
    lastActive: "Active 1h ago",
    messages: [{ id: 1, text: "Would you like to grab coffee sometime?", sender: "them", time: "Yesterday" }],
  },
]

export default function MessagePage() {
  const params = useParams()
  const id = params.id as string
  const conversation = conversations.find((c) => c.id === id) || conversations[0]
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState(conversation.messages)

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: Date.now(),
      text: newMessage,
      sender: "me" as const,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <div className="max-w-2xl mx-auto h-[calc(100vh-180px)] flex flex-col">
      <div className="border-b pb-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={conversation.image || "/placeholder.svg"}
              alt={conversation.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h3 className="font-medium">
              {conversation.name}, {conversation.age}
            </h3>
            <p className="text-xs text-muted-foreground">{conversation.lastActive}</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === "me" ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white" : "bg-gray-100"
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === "me" ? "text-pink-100" : "text-gray-500"}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-4 pt-3 border-t">
        <form className="flex gap-2" onSubmit={sendMessage}>
          <Input
            placeholder="Type a message..."
            className="flex-1"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}