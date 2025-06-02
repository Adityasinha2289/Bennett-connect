import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Heart, MessageCircle, User, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: "Bennett Connect - App",
  description: "Connect with students at Bennett University",
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/app" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">BC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Bennett Connect
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 pb-20">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-10">
        <div className="container max-w-md mx-auto">
          <div className="flex justify-around py-2">
            <Link href="/app" className="flex flex-col items-center gap-1 p-2 text-pink-500 hover:text-pink-600">
              <Compass className="h-6 w-6" />
              <span className="text-xs">Discover</span>
            </Link>
            <Link
              href="/app/matches"
              className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-pink-500"
            >
              <Heart className="h-6 w-6" />
              <span className="text-xs">Matches</span>
            </Link>
            <Link
              href="/app/matches"
              className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-pink-500"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-xs">Messages</span>
            </Link>
            <Link
              href="/app/profile"
              className="flex flex-col items-center gap-1 p-2 text-slate-500 hover:text-pink-500"
            >
              <User className="h-6 w-6" />
              <span className="text-xs">Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}