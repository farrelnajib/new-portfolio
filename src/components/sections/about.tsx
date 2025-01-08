import Link from "next/link";

export default function About() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">About me</h2>
            <p className="text-muted-foreground">
            I am a <strong>Bachelor of Computer Science</strong> from <strong>Binus University</strong> with a specialization in
            Software Engineering. I have been working as a Software Engineer using <strong>Golang</strong> and <strong>TypeScript</strong> for more than 4 years. 
            Currently, I am working as a <strong>Senior Software Engineer</strong> at {' '}
            <Link href="https://www.linkedin.com/company/govtech-procurement" target="_blank" className="underline">
                GovTech Procurement (Telkom Indonesia)
            </Link>{' '}
            where I focus on developing robust and scalable systems for government procurement processes.
            </p>
        </section>
    )
}