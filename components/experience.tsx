"use client"
import React from "react";
import { Briefcase, MapPin, Check } from "lucide-react";
import { useLanguage } from "./language-provider";
import Title from "./shared/title";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Experience = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto flex flex-col gap-6" id="experience">
            <div className="reveal">
                <Title title={t.experience.title} subtitle={t.experience.subtitle} />
            </div>

            <div className="mt-8 flex flex-col gap-8">
                {t.experience.roles.map((role, index) => (
                    <div
                        key={`${role.company}-${index}`}
                        className="reveal delay-1 rounded-2xl border border-card-border bg-card-bg p-6 shadow-md md:p-8"
                    >
                        <div className="flex flex-col gap-4 border-b border-card-border pb-5 md:flex-row md:items-start md:justify-between">
                            <div className="flex items-start gap-4">
                                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-brand-red">
                                    <Briefcase className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground md:text-xl">{role.role}</h3>
                                    <p className="mt-1 text-sm font-semibold text-brand-red">{role.company}</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <MapPin className="h-3.5 w-3.5" /> {role.location}
                                    </p>
                                </div>
                            </div>
                            <span className="w-fit rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-yellow">
                                {role.period}
                            </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-text-secondary md:text-base">{role.summary}</p>

                        <ul className="mt-5 grid gap-3 md:grid-cols-2">
                            {role.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={18} className="mt-0.5 flex-shrink-0 text-brand-red" />
                                    <span className="text-sm text-foreground">{item}</span>
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
