import Achievement from "@/components/sections/achievements";
import Experience from "@/components/sections/experiences";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import experiences from "@/data/experiences";
import achievements from "@/data/achievements";
import skills from "@/data/skills";
import Skill from "@/components/sections/skills";


export default function Home() {
    return (
        <div className="space-y-12">
            <Hero />
            <About />
            
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Working Experiences 👨‍💻</h2> 
                <div className="relative space-y-0">
                    {experiences.map((exp, index) => (
                        <div key={index}>
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
                <h2 className="text-2xl font-bold text-primary">Skills</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
        </div>
    );
}
