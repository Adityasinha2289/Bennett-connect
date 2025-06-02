"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Match Modal Component
function MatchModal({
  isOpen,
  onClose,
  matchName,
}: {
  isOpen: boolean
  onClose: () => void
  matchName: string
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="text-center p-6">
          <div className="text-5xl mb-4">💖</div>
          <h2 className="text-3xl font-bold text-pink-600 mb-2">It&apos;s a match!</h2>
          <p className="text-slate-600 mb-6">You and {matchName} liked each other</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={onClose}>
              Keep Swiping
            </Button>
            <Button className="primary-gradient">Send Message</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Sample user data
const users = [
  {
    id: 1,
    name: "Priya",
    age: 20,
    course: "Computer Science",
    year: "2nd Year",
    bio: "Coffee enthusiast and coding lover. Looking for someone to explore Delhi NCR with!",
    interests: ["Coding", "Coffee", "Travel", "Movies"],
    prompts: [
      {
        question: "The way to win me over is...",
        answer: "Bring me coffee and talk about tech with me!",
      },
      {
        question: "A perfect first date would be...",
        answer: "A quiet café where we can talk for hours about anything and everything.",
      },
    ],
    photos: ["/placeholder.svg?height=500&width=400&text=Priya", "/placeholder.svg?height=500&width=400&text=Priya+2"],
  },
  {
    id: 2,
    name: "Arjun",
    age: 21,
    course: "Business Administration",
    year: "3rd Year",
    bio: "Basketball player and music enthusiast. Always up for trying new restaurants on campus.",
    interests: ["Basketball", "Music", "Food", "Fitness"],
    prompts: [
      {
        question: "My most controversial opinion is...",
        answer: "Pineapple absolutely belongs on pizza!",
      },
      {
        question: "A perfect first date would be...",
        answer: "Playing basketball and then grabbing dinner at a new restaurant.",
      },
    ],
    photos: ["/placeholder.svg?height=500&width=400&text=Arjun", "/placeholder.svg?height=500&width=400&text=Arjun+2"],
  },
  {
    id: 3,
    name: "Aisha",
    age: 19,
    course: "Design",
    year: "1st Year",
    bio: "Art lover and aspiring designer. Looking for someone creative to share ideas with.",
    interests: ["Art", "Design", "Photography", "Fashion"],
    prompts: [
      {
        question: "The way to win me over is...",
        answer: "Take me to an art exhibition or a design museum.",
      },
      {
        question: "A perfect first date would be...",
        answer: "A creative workshop where we can make something together.",
      },
    ],
    photos: ["/placeholder.svg?height=500&width=400&text=Aisha", "/placeholder.svg?height=500&width=400&text=Aisha+2"],
  },
]

export default function AppPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [showMatch, setShowMatch] = useState(false)
  const [expandedPromptIndex, setExpandedPromptIndex] = useState<number | null>(null)

  const currentUser = users[currentIndex % users.length]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      // Show match animation for right swipes
      setShowMatch(true)
    }

    // Reset photo index and move to next profile
    setCurrentPhotoIndex(0)
    setCurrentIndex((prev) => prev + 1)
    setExpandedPromptIndex(null)
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev < currentUser.photos.length - 1 ? prev + 1 : 0))
  }

  const togglePrompt = (index: number) => {
    setExpandedPromptIndex(expandedPromptIndex === index ? null : index)
  }

  return (
    <>
      <MatchModal isOpen={showMatch} onClose={() => setShowMatch(false)} matchName={currentUser.name} />

      <div className="max-w-md mx-auto pt-4">
        <Card className="overflow-hidden rounded-xl border shadow-lg">
          <div className="relative h-[500px] w-full" onClick={nextPhoto}>
            <Image
              src={currentUser.photos[currentPhotoIndex] || "/placeholder.svg"}
              alt={`${currentUser.name}'s photo`}
              fill
              className="object-cover"
            />

            {/* Photo indicators */}
            <div className="absolute top-4 right-4 left-4 flex justify-center gap-1">
              {currentUser.photos.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 w-12 rounded-full ${idx === currentPhotoIndex ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>

            {/* User info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">
                  {currentUser.name}, {currentUser.age}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span>{currentUser.course}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                <span>{currentUser.year}</span>
              </div>
              <p className="text-sm mb-3">{currentUser.bio}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {currentUser.interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="bg-white/20 text-white border-white/30">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Prompts section */}
          <div className="p-4 space-y-3 bg-white">
            {currentUser.prompts.map((prompt, idx) => (
              <div key={idx} className="rounded-lg bg-slate-50 p-3 cursor-pointer" onClick={() => togglePrompt(idx)}>
                <h3 className="text-sm font-medium text-slate-700">{prompt.question}</h3>
                <p className={`text-sm mt-1 text-slate-600 ${expandedPromptIndex === idx ? "" : "line-clamp-1"}`}>
                  {prompt.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex justify-between gap-4 p-4 pt-0">
            <Button
              size="lg"
              variant="outline"
              className="flex-1 rounded-full border-2 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              onClick={() => handleSwipe("left")}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Pass</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 rounded-full border-2 border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600"
              onClick={() => handleSwipe("right")}
            >
              <Heart className="h-6 w-6" />
              <span className="sr-only">Like</span>
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}
