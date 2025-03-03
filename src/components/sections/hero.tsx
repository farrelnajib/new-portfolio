"use client"

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import downloadIcon from "@iconify/icons-lucide/download";
import {sendGAEvent, sendGTMEvent} from "@next/third-parties/google";

export default function Hero() {
    const sendCVDownloadedEvent = () => {
        sendGTMEvent({ event: "cvDownloaded" });
        sendGAEvent("event", "cvDownloaded");
    }
    return (
        <section className="flex flex-row justify-between gap-8 py-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-primary">
                    Hello 👋
                    <br />
                    I&apos;m Farrel Najib Anshary
                </h1>
                <p className="text-2xl text-muted-foreground">a Software Engineer</p>
                <Button asChild className="transition-all hover:shadow-lg hover:-translate-y-1">
                    <Link
                        href="https://raw.githubusercontent.com/farrelnajib/new-portfolio/refs/heads/main/storage/assets/documents/CV_Farrel-Najib-Anshary.pdf"
                        onClick={() => sendCVDownloadedEvent()}
                    >
                        <Icon icon={downloadIcon} className="w-4 h-4" />
                        Download Resume
                    </Link>
                </Button>
            </div>
            {/* <ThemeSwitcher /> */}
        </section>
    )
}