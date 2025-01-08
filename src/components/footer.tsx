import { Icon } from "@iconify/react";
import mailIcon from "@iconify/icons-lucide/mail";
import instagramIcon from "@iconify/icons-mdi/instagram";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubIcon from "@iconify/icons-mdi/github";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-primary/20 bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-2">
                        <Icon icon={mailIcon} className="h-5 w-5 text-primary" />
                        <Link className="text-muted-foreground hover:text-primary" href="mailto:me@farrelanshary.com">me@farrelanshary.com</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://instagram.com/farrelnajib" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <Icon icon={instagramIcon} className="text-2xl" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/farrelanshary" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <Icon icon={linkedinIcon} className="text-2xl" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://github.com/farrelnajib" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <Icon icon={githubIcon} className="text-2xl" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}