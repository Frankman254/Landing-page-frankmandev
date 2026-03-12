"use client"
import { useLanguage } from "./language-provider";
import Title from "./shared/title";
import { Check } from "lucide-react";
    
const Experience = () => {
    const { t } = useLanguage();
    return (
        <div className="p-6 md:px-12 md:py-14 max-w-3xl mx-auto flex flex-col gap-6" id="experience">
            <Title title={t.experience.title} subtitle={t.experience.subtitle}/>
            <div className="flex flex-col gap-6 mt-8">
                {t.data.experience.map((experience, index) => (
                    <div key={index} className="p-6 rounded-2xl border border-card-border bg-card-bg shadow-md">
                        <ul className="space-y-3">
                            {experience.descriptions.map((description, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check size={20} className="text-brand-red flex-shrink-0" />
                                    <span className="text-foreground">
                                        {description}
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

export default Experience;