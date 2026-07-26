"use client"
import Title from "./shared/title"
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const levelStyles: Record<string, string> = {
    professional: "border-brand-red/30 bg-brand-red/10 text-brand-red",
    "hands-on": "border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow",
};

const TechStack = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();

    const levelLabels: Record<string, string> = Object.fromEntries(
        t.techStack.legend.map((entry) => [entry.level, entry.label])
    );

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="stack">
            <div className="reveal">
                <Title title={t.techStack.title} subtitle={t.techStack.subtitle} />
            </div>

            {/* Classification legend */}
            <div className="reveal mt-8 rounded-2xl border border-card-border bg-card-bg p-5 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    {t.techStack.legendTitle}
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8">
                    {t.techStack.legend.map((entry) => (
                        <div key={entry.level} className="flex items-center gap-2 text-sm">
                            <span
                                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${levelStyles[entry.level]}`}
                            >
                                {entry.label}
                            </span>
                            <span className="text-text-secondary">{entry.description}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 mt-6 sm:grid-cols-2">
                {t.techStack.groups.map((group, index) => (
                    <div
                        key={group.title}
                        className={`reveal delay-${(index % 4) + 1} rounded-2xl border border-card-border bg-card-bg p-6 shadow-md`}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
                                {group.title}
                            </h3>
                            <span
                                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${levelStyles[group.level]}`}
                            >
                                {levelLabels[group.level]}
                            </span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-card-border bg-background/70 px-3 py-1.5 text-sm font-medium text-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;
