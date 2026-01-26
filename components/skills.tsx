"use client"
import Title from "./shared/title"
import { Check } from "lucide-react";
import { useLanguage } from "./language-provider";

const Skills = () => {
    const { t } = useLanguage();
    return (
        <div className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="skills">
            <Title title={t.skills.title} subtitle={t.skills.subtitle}/>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {t.data.skills.map((category, categoryIndex) => (
                    <div 
                        key={categoryIndex} 
                        className="p-6 rounded-xl border border-card-border bg-card-bg dark:bg-card-bg"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-center">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center gap-3">
                                    <Check size={20} className="text-primary flex-shrink-0" />
                                    <span className="text-foreground">
                                        {item}
                                    </span>
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
