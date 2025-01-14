import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export default function NavBar() {
    return (
        <header className="border-b border-primary/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="font-semibold text-primary">
                    Farrel Najib Anshary
                </Link>
                <nav className="flex items-center gap-4">
                    <Link href="/posts" className="text-sm hover:text-primary">Posts</Link>
                    <ThemeSwitcher />
                </nav>
            </div>
        </header>
    )
}