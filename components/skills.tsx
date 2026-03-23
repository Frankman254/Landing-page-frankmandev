"use client"
import Title from "./shared/title"
import { Check } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Skills = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="skills">
            <div className="reveal">
                <Title title={t.skills.title} subtitle={t.skills.subtitle}/>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {t.data.skills.map((category, categoryIndex) => (
                    <div
                        key={categoryIndex}
                        className={`reveal delay-${categoryIndex + 1} p-6 rounded-2xl border border-card-border bg-card-bg dark:bg-card-bg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-center text-brand-red">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center gap-3 group">
                                    <Check size={20} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                    <span className="text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills
