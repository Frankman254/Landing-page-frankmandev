"use client"
import { ChevronDown, ChevronRight } from "lucide-react";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SystemOwnership = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    const steps = t.ownership.steps;

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="ownership">
            <div className="reveal">
                <Title title={t.ownership.title} subtitle={t.ownership.subtitle} />
            </div>

            <p className="reveal delay-1 mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-text-secondary">
                {t.ownership.intro}
            </p>

            {/* Layer chain */}
            <div className="reveal delay-2 mt-10 flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:justify-center lg:gap-2">
                {steps.map((step, index) => (
                    <div key={step.name} className="flex flex-col items-center lg:flex-1 lg:flex-row">
                        <div className="w-full flex-1 rounded-2xl border border-card-border bg-card-bg p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="mt-2 text-sm font-semibold text-foreground">{step.name}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{step.detail}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <span className="flex items-center justify-center text-brand-red/70" aria-hidden="true">
                                <ChevronDown className="my-1 h-5 w-5 lg:hidden" />
                                <ChevronRight className="mx-1 hidden h-5 w-5 lg:block" />
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="reveal delay-3 mt-8 rounded-2xl border border-brand-yellow/20 bg-brand-yellow/10 p-6">
                <p className="text-sm leading-7 text-text-secondary">{t.ownership.closing}</p>
            </div>
        </div>
    );
}

export default SystemOwnership;
