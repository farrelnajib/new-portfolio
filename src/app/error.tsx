'use client'

import { JSX, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { AlertCircle, Ban, Wifi, ServerCrash, MapPinOff } from 'lucide-react'

function getErrorDetails(error: Error): { icon: JSX.Element; message: string } {
    // Check if it's a network error
    if ((error as any).networkError || !window.navigator.onLine) {
        return {
        icon: <Wifi className="h-12 w-12 text-destructive mx-auto" />,
        message: "Unable to connect to the server. Please check your internet connection."
        }
    }

    // Check if it's a server error (500)
    if ((error as any).serverError || error.message.includes('500')) {
        return {
        icon: <ServerCrash className="h-12 w-12 text-destructive mx-auto" />,
        message: "Server error occurred."
        }
    }

    // Check if it's a forbidden error (403)
    if ((error as any).forbidden || error.message.includes('403')) {
        return {
        icon: <Ban className="h-12 w-12 text-destructive mx-auto" />,
        message: "You don't have permission to access this resource."
        }
    }

    // Default error
    return {
        icon: <AlertCircle className="h-12 w-12 text-destructive mx-auto" />,
        message: error.message || "An unexpected error occurred. Please try again later."
    }
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error)
  }, [error])

  const { icon, message } = getErrorDetails(error)

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="space-y-4">
        {icon}
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
        <p className="text-xl text-muted-foreground max-w-lg mx-auto">
          {message}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              Go back home
            </Link>
          </Button>
        </div>
        {error.digest && (
          <p className="text-sm text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}

