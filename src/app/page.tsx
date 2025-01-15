import Achievement from "@/components/sections/achievements";
import Experience from "@/components/sections/experiences";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import experiences from "@/data/experiences";
import achievements from "@/data/achievements";
import skills from "@/data/skills";
import Skill from "@/components/sections/skills";
import { getSortedPostData } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlogCard from "@/components/blog-card";


export default async function Home() {
    const posts = await (await getSortedPostData()).slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8 space-y-12">
            <Hero />
            <section className="space-y-8">
                <About />
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">Skills</h3>
                    <div className="flex flex-wrap gap-6">
                        {skills.map((skill, index) => (
                            <Skill 
                                key={index} 
                                name={skill.name} 
                                icon={skill.icon} 
                                url={skill.url}
                            />
                        ))}
                    </div>
                </section>
            </section>
            
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Working Experiences 👨‍💻</h2> 
                <div className="relative space-y-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-6">
                            <Experience 
                                title={exp.title}
                                company={exp.company}
                                contributions={exp.contributions}
                                period={exp.period}
                                techStacks={exp.techStacks}
                            />
                            {!(index == experiences.length - 1) && <div className="h-4" />}
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Achievements 🏆</h2>
                <div className="container grid gap-4 auto-rows-fr lg:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <Achievement 
                            key={index}
                            title={achievement.title}
                            date={achievement.date}
                            description={achievement.description}
                            icon={achievement.icon}
                            url={achievement.url}
                        />
                    ))}
                </div>
            </section>
            
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-primary">Latest Posts</h2>
                    <Button variant="outline" asChild>
                        <Link href="/posts">View All Posts</Link>
                    </Button>
                </div>
                {posts.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {posts.map((post, index) => (
                            <BlogCard
                                key={index}
                                post={post}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground">No blog posts at this moment.</p>
                )}
            </section>
        </div>
    );
}
