"use client"
import React from "react";
import { useLanguage } from "./language-provider";
import Title from "./shared/title";
import { Check } from "lucide-react";
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

            {/* Nivel por tecnología (sin barras): alineado al uso real en producción */}
            <div className="grid md:grid-cols-2 gap-6">
                {t.data.skillProficiency.map((category, cIndex) => (
                    <div
                        key={category.title}
                        className={`reveal delay-${cIndex + 2} p-6 rounded-2xl border border-card-border bg-card-bg shadow-md`}
                    >
                        <h3 className="text-lg font-semibold mb-5 text-brand-red">{category.title}</h3>
                        <ul className="space-y-0 divide-y divide-border/60">
                            {category.skills.map((skill, sIndex) => (
                                <li
                                    key={`${skill.name}-${sIndex}`}
                                    className="flex items-center justify-between gap-4 py-3 first:pt-0"
                                >
                                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                    <span className="shrink-0 rounded-md border border-card-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                        {t.skillLevels[skill.level]}
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
