import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col justify-between">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">BC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Bennett Connect
            </span>
          </Link>
        </div>
      </header>

      <section className="container flex flex-wrap items-center justify-center py-16 md:py-24 gap-12 max-w-6xl">
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">Bennett Connect</h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8">Chemistry starts on campus.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="primary-gradient">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[400px] flex justify-center">
          <div className="relative w-full aspect-square max-w-[350px] bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-6xl">💕</span>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Students Only",
              description: "Match and connect with real students of Bennett University, verified via your college ID.",
            },
            {
              title: "Campus-Only Matching",
              description: "Discover people who attend your lectures, hang in your canteen, or walk your corridors.",
            },
            {
              title: "Event & Club Integration",
              description: "Find matches through events, clubs, and interest groups across campus.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-pink-600 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-pink-100 py-6 text-center text-slate-700">
        &copy; {new Date().getFullYear()} Bennett Connect | Made with ❤️ for Bennett University students
      </footer>
    </div>
  )
}