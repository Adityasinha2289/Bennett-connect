"use client"

import { useState } from "react"
import { Camera, Edit, MapPin, Calendar, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample user data
const userData = {
  name: "Aarav",
  age: 20,
  location: "Bennett University, Greater Noida",
  course: "Computer Science",
  year: "2nd Year",
  bio: "Coffee enthusiast and amateur photographer. I love hiking on weekends and exploring new restaurants. Looking for someone who enjoys adventures and good conversation.",
  interests: ["Photography", "Hiking", "Coffee", "Travel", "Coding", "Movies"],
  photos: [
    "https://picsum.photos/300/300?random=20",
    "https://picsum.photos/300/300?random=21",
    "https://picsum.photos/300/300?random=22",
    "https://picsum.photos/300/300?random=23",
  ],
  prompts: [
    {
      question: "The way to win me over is...",
      answer: "Good coffee and interesting conversation about tech or photography.",
    },
    {
      question: "A perfect first date would be...",
      answer: "Exploring a new café on campus and then taking photos around the university grounds.",
    },
    {
      question: "My most controversial opinion is...",
      answer: "Pineapple absolutely belongs on pizza!",
    },
  ],
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <div className="relative mb-16">
        <div className="h-32 w-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-t-lg"></div>
        <div className="absolute -bottom-16 left-4 border-4 border-white rounded-full">
          <img
            src={userData.photos[0] || "/placeholder.svg"}
            alt="Your profile"
            className="w-30 h-30 rounded-full object-cover"
            width={120}
            height={120}
          />
          <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-pink-500 hover:bg-pink-600 h-8 w-8">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        <Button size="sm" variant="outline" className="absolute top-4 right-4">
          <Edit className="h-4 w-4 mr-1" />
          Edit Profile
        </Button>
      </div>

      <div className="px-4">
        <h1 className="text-2xl font-bold text-slate-800">
          {userData.name}, {userData.age}
        </h1>
        <div className="flex items-center gap-1 text-muted-foreground mt-1">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{userData.location}</span>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Bio</h2>
              <p className="text-muted-foreground">{userData.bio}</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-3">Basics</h2>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{userData.course}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{userData.year}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-3">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {userData.interests.map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-3">Connected Accounts</h2>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <span>Instagram</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <span>Twitter</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <div className="grid grid-cols-2 gap-4">
              {userData.photos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <img src={photo || "/placeholder.svg"} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                  <Button size="icon" variant="outline" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prompts">
            <div className="space-y-4">
              {userData.prompts.map((prompt, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-pink-600 mb-1">{prompt.question}</h3>
                    <p>{prompt.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 mb-4">
          <Button
            variant="outline"
            className="w-full text-rose-500 border-rose-200 hover:bg-rose-50 hover:text-rose-600"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}