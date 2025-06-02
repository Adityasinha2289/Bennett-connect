"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Camera, Upload, ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const interests = [
  "Sports",
  "Music",
  "Art",
  "Reading",
  "Travel",
  "Cooking",
  "Gaming",
  "Movies",
  "Technology",
  "Fashion",
  "Fitness",
  "Photography",
  "Dancing",
  "Singing",
  "Coding",
  "Hiking",
  "Yoga",
  "Meditation",
]

const courses = [
  "Computer Science",
  "Business Administration",
  "Law",
  "Engineering",
  "Media Studies",
  "Design",
  "Economics",
  "Psychology",
  "Liberal Arts",
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(20)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [photos, setPhotos] = useState<string[]>([
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "",
    "",
    "",
    "",
  ])

  const nextStep = () => {
    const newStep = step + 1
    setStep(newStep)
    setProgress(newStep * 20)

    if (newStep > 5) {
      // Onboarding complete, redirect to app
      router.push("/app")
    }
  }

  const prevStep = () => {
    const newStep = step - 1
    if (newStep >= 1) {
      setStep(newStep)
      setProgress(newStep * 20)
    }
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handlePhotoUpload = (index: number) => {
    // In a real app, this would open a file picker and upload the image
    // For demo purposes, we&apos;ll just set a placeholder
    const newPhotos = [...photos]
    newPhotos[index] = `/placeholder.svg?height=300&width=300&text=Photo ${index + 1}`
    setPhotos(newPhotos)
  }

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Bennett Connect Logo" width={32} height={32} />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Bennett Connect
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container max-w-2xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Create Your Profile</h1>
          <p className="text-slate-600 mb-4">Let&apos;s set up your profile to help you connect with others</p>
          <Progress value={progress} className="h-2" />
        </div>

        {step === 1 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>I am</Label>
                  <RadioGroup defaultValue="male" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>I am interested in</Label>
                  <RadioGroup defaultValue="women" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="men" id="interested-men" />
                      <Label htmlFor="interested-men">Men</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="women" id="interested-women" />
                      <Label htmlFor="interested-women">Women</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="everyone" id="interested-everyone" />
                      <Label htmlFor="interested-everyone">Everyone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Birthday</Label>
                    <Input id="birthday" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course.toLowerCase()}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
                      <SelectItem value="5">Fifth Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={nextStep} className="primary-gradient">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Add Your Photos</h2>
              <p className="text-slate-600 mb-6">Add at least 2 photos. The first one will be your profile picture.</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className={cn(
                      "aspect-square rounded-lg overflow-hidden border-2 border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors",
                      photo ? "border-transparent" : "border-slate-300",
                    )}
                    onClick={() => handlePhotoUpload(index)}
                  >
                    {photo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`Photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 text-slate-400 mb-2" />
                        <span className="text-sm text-slate-500">Add Photo</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="primary-gradient">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">About You</h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Write a short bio about yourself..." className="min-h-[120px]" />
                  <p className="text-xs text-slate-500">
                    Tell others about yourself, your interests, and what you&apos;re looking for.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Your Interests</Label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <div
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-sm cursor-pointer transition-colors",
                          selectedInterests.includes(interest)
                            ? "bg-pink-500 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                        )}
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">Select interests that you&apos;d like to share and match on.</p>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="primary-gradient">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Prompts</h2>
              <p className="text-slate-600 mb-6">Add some prompts to help others get to know you better.</p>

              <div className="space-y-6">
                {[
                  "The way to win me over is...",
                  "A perfect first date would be...",
                  "My most controversial opinion is...",
                ].map((prompt, index) => (
                  <div key={index} className="space-y-2">
                    <Label>{prompt}</Label>
                    <Textarea placeholder="Your answer..." className="min-h-[80px]" />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="primary-gradient">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 5 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Age Range</Label>
                  <div className="flex items-center gap-4">
                    <Select defaultValue="18">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 13 }, (_, i) => i + 18).map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-slate-500">to</span>
                    <Select defaultValue="25">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 13 }, (_, i) => i + 18).map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Looking For</Label>
                  <RadioGroup defaultValue="relationship" className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="relationship" id="relationship" />
                      <Label htmlFor="relationship">Relationship</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="casual" id="casual" />
                      <Label htmlFor="casual">Casual Dating</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="friendship" id="friendship" />
                      <Label htmlFor="friendship">Friendship</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label>Match Preferences</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="same-course" />
                      <label
                        htmlFor="same-course"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Prioritize matches from the same course
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="same-year" />
                      <label
                        htmlFor="same-year"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Prioritize matches from the same year
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="similar-interests" defaultChecked />
                      <label
                        htmlFor="similar-interests"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Prioritize matches with similar interests
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="primary-gradient">
                  Complete Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
