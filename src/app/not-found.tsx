import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Button asChild>
        <Link href="/">
          Go back home
        </Link>
      </Button>
    </div>
  )
}
