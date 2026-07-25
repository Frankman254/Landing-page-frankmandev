"use client"
import { Database, Search, Compass, ShieldCheck } from "lucide-react";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CaseStudy = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    const c = t.caseStudy;

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="case-study">
            <div className="reveal">
                <Title title={c.title} subtitle={c.subtitle} />
            </div>

            <div className="reveal delay-1 mt-8 overflow-hidden rounded-2xl border border-card-border bg-card-bg shadow-md">
                {/* Header */}
                <div className="flex flex-col gap-3 border-b border-card-border p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                    <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-brand-red">
                            <Database className="h-5 w-5" />
                        </span>
                        <h3 className="text-lg font-semibold text-foreground md:text-xl">{c.subtitle}</h3>
                    </div>
                    <span className="w-fit rounded-full border border-brand-red/30 bg-brand-red/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                        {c.badge}
                    </span>
                </div>

                <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
                    {/* Context */}
                    <div>
                        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                            <Compass className="h-4 w-4" /> {c.contextTitle}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-text-secondary">{c.context}</p>

                        <p className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                            <ShieldCheck className="h-4 w-4" /> {c.approachTitle}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-text-secondary">{c.approach}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {c.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-card-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Investigation */}
                    <div>
                        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                            <Search className="h-4 w-4" /> {c.investigationTitle}
                        </p>
                        <ul className="mt-3 space-y-2.5">
                            {c.investigation.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-card-border bg-muted/30 px-6 py-4 md:px-8">
                    <p className="text-xs leading-6 text-muted-foreground">{c.disclaimer}</p>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;
