import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import AchievementProps from "./types";

export default function Achievement({title, date, description, icon, url}: AchievementProps) {
    const formattedTime = Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(date)
    let content = (
        <Card className="border-primary/20 h-full grayscale hover:filter-none">
            <CardContent className="flex items-start gap-4 p-6">
                <div className="text-3xl">{icon}</div>
                <div>
                    <h3 className="font-semibold text-primary">{title}</h3>
                    <p className="text-sm text-muted-foreground">{formattedTime}</p>
                    <p className="mt-2 text-sm">{description}</p>
                </div>
            </CardContent>
        </Card>
    );

    if (url) {
        content = (
            <Link href={url} target="_blank" className="transition duration-150 hover:drop-shadow-lg">
                {content}
            </Link>
        )
    }

    return content;
}