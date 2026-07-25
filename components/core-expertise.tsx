"use client"
import { Code2, Database, Server, Activity } from "lucide-react";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const icons = [
    <Code2 key="code" />,
    <Database key="db" />,
    <Server key="server" />,
    <Activity key="activity" />,
];

const CoreExpertise = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="expertise">
            <div className="reveal">
                <Title title={t.expertise.title} subtitle={t.expertise.subtitle} />
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-2">
                {t.expertise.domains.map((domain, index) => (
                    <div
                        key={domain.name}
                        className={`reveal delay-${index + 1} flex h-full flex-col rounded-2xl border border-card-border bg-card-bg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-brand-red">
                                {icons[index]}
                            </span>
                            <h3 className="text-lg font-semibold text-foreground">{domain.name}</h3>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-text-secondary">{domain.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {domain.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-card-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground"
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

export default CoreExpertise;
