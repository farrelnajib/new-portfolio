import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import Logo from "./logo";

export default function NavBar() {
    return (
        <header className="border-b border-border">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Logo />
                <nav className="flex items-center gap-4">
                    <Link href="/posts" className="text-sm text-primary transition-colors hover:text-primary/75">Posts</Link>
                    <ThemeSwitcher />
                </nav>
            </div>
        </header>
    )
}