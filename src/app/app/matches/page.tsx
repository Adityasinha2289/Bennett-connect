import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const matches = [
  {
    id: 1,
    name: "Neha",
    age: 20,
    course: "Media Studies",
    image: "https://picsum.photos/150/150?random=10",
    matchTime: "Just now",
    message: "Hey there! How's your day going?",
  },
  {
    id: 2,
    name: "Rahul",
    age: 21,
    course: "Engineering",
    image: "https://picsum.photos/150/150?random=11",
    matchTime: "2 hours ago",
    message: "I love that restaurant you mentioned!",
  },
  {
    id: 3,
    name: "Zara",
    age: 19,
    course: "Design",
    image: "https://picsum.photos/150/150?random=12",
    matchTime: "Yesterday",
    message: "Would you like to grab coffee sometime?",
  },
  {
    id: 4,
    name: "Vikram",
    age: 22,
    course: "Computer Science",
    image: "https://picsum.photos/150/150?random=13",
    matchTime: "2 days ago",
    message: null,
  },
  {
    id: 5,
    name: "Ananya",
    age: 20,
    course: "Psychology",
    image: "https://picsum.photos/150/150?random=14",
    matchTime: "3 days ago",
    message: null,
  },
]

export default function MatchesPage() {
  return (
    <div className="max-w-2xl mx-auto py-4">
      <h1 className="text-2xl font-bold mb-6">Your Matches</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {matches.map((match) => (
          <Link href={`/app/messages/${match.id}`} key={match.id}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0">
                  <img
                    src={match.image || "/placeholder.svg"}
                    alt={`${match.name}'s profile`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-3 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">
                      {match.name}, {match.age}
                    </h3>
                    <span className="text-xs text-muted-foreground">{match.matchTime}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{match.course}</p>
                  {match.message ? (
                    <p className="text-sm line-clamp-2">{match.message}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">Say hello to start a conversation!</p>
                  )}
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}