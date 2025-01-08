import { Card, CardContent } from "@/components/ui/card";
import ExperienceProps from "./types";

export default function Experience({title, company, contributions, techStacks, period}: ExperienceProps) {
    return (
        <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-px bg-primary/20">
                <div className="absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary" />
            </div>
            <Card className="border-primary/20">
                <CardContent className="p-6">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-semibold text-primary">{title}</h3>
                        <p className="text-sm text-muted-foreground">{period}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{company}</p>
                    <p className="mt-2 text-sm">{contributions}</p>
                    { techStacks.length > 0 && (
                        <p className="mt-2 text-sm text-muted-foreground"><strong>Tech Stack: </strong>{techStacks.join(", ")}</p>
                    ) }
                </CardContent>
            </Card>
        </div>
    )
}