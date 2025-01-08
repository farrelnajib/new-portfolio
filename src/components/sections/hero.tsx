import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import downloadIcon from "@iconify/icons-lucide/download";
import { ThemeSwitcher } from "../theme-switcher";


export default function Hero() {
    return (
        <section className="flex flex-row justify-between gap-8 py-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-primary">
                    Hello 👋
                    <br />
                    I&apos;m Farrel Najib Anshary
                </h1>
                <p className="text-2xl text-muted-foreground">a Software Engineer</p>
                <Button asChild>
                    <Link href="/CV_Farrel-Najib-Anshary.pdf">
                        <Icon icon={downloadIcon} className="w-4 h-4" />
                        Download Resume
                    </Link>
                </Button>
            </div>
            <ThemeSwitcher />
        </section>
    )
}