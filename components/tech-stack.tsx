"use client"
import Title from "./shared/title"
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TechStack = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="stack">
            <div className="reveal">
                <Title title={t.techStack.title} subtitle={t.techStack.subtitle} />
            </div>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
                {t.techStack.groups.map((group, index) => (
                    <div
                        key={group.title}
                        className={`reveal delay-${index + 1} rounded-2xl border border-card-border bg-card-bg p-6 shadow-md`}
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
                            {group.title}
                        </h3>
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
