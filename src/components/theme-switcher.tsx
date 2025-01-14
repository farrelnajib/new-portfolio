"use client"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import lightIcon from "@iconify/icons-lucide/sun"
import darkIcon from "@iconify/icons-lucide/moon"
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();

    if (!theme) {
        setTheme("dark");
    }
    
    const handleTheme = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleTheme}>
                        <Icon icon={theme == "light" ? darkIcon : lightIcon} className="text-4xl" />
                        <span className="sr-only">Dark Mode Toggle</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Toggle {theme == "light" ? "Dark" : "Light"} Mode</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}