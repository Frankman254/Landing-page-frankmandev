"use client"
import React from "react";
import { useLanguage } from "./language-provider";
import Title from "./shared/title";
import { Check } from "lucide-react";
import { dataExperience } from "@/data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Experience = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto flex flex-col gap-6" id="experience">
            <div className="reveal">
                <Title title={t.experience.title} subtitle={t.experience.subtitle}/>
            </div>
            <div className="flex flex-col gap-6 mt-8">
                {t.data.experience.map((experience, index) => (
                    <div key={index} className="reveal delay-1 p-6 rounded-2xl border border-card-border bg-card-bg shadow-md">
                        <ul className="space-y-3">
                            {experience.descriptions.map((description, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check size={20} className="text-brand-red flex-shrink-0" />
                                    <span className="text-foreground">{description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Animated skill proficiency bars */}
            <div className="grid md:grid-cols-2 gap-6">
                {dataExperience.map((category, cIndex) => (
                    <div
                        key={category.id}
                        className={`reveal delay-${cIndex + 2} p-6 rounded-2xl border border-card-border bg-card-bg shadow-md`}
                    >
                        <h3 className="text-lg font-semibold mb-5 text-brand-red">{category.title}</h3>
                        <ul className="space-y-4">
                            {category.experience.map((skill, sIndex) => (
                                <li key={sIndex}>
                                    <div className="flex justify-between mb-1.5">
                                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                        <span className="text-xs text-muted-foreground">{skill.subtitle}</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                        <div
                                            className="bar-animated h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-red"
                                            style={{ '--bar-target': `${skill.value}%` } as React.CSSProperties}
                                        />
                                    </div>
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
