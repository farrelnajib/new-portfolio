import SkillProps from "./types";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export default function Skill({name, url, icon}: SkillProps) {
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={url} target="_blank">
                        <Icon icon={icon} className="relative h-12 w-12 grayscale transition-all hover:scale-110 hover:filter-none"/>    
                        <span className="sr-only">{name}</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}