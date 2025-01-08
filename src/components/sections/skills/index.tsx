import SkillProps from "./types";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";


export default function Skill({name, url, icon}: SkillProps) {
    return (
        <Link href={url} target="_blank" className="transition duration-150 hover:drop-shadow-lg">
            <Card className="overflow-hidden border-primary/20 grayscale hover:filter-none">
                <CardContent className="flex items-center gap-3 p-4">
                    <div className="relative">
                        <Icon className="w-8 h-8" icon={icon} />
                    </div>
                    <span className="font-medium text-primary">{name}</span>
                </CardContent>
            </Card>
        </Link>
    )
}