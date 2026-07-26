"use client"
import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutMe = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();

    const statValues = ["3+", "4", String(dataPortfolio.length)];

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-4xl mx-auto" id="about-me">
            <div className="reveal">
                <Title title={t.aboutMe.title} subtitle={t.aboutMe.subtitle} />
            </div>
            <div className="flex flex-col gap-8 mt-8">
                <p className="reveal delay-1 text-lg leading-8 text-text-secondary">
                    {t.aboutMe.description}
                </p>

                {/* Stats strip */}
                <div className="reveal delay-2 grid grid-cols-3 gap-4 rounded-2xl border border-card-border bg-card-bg p-6 shadow-md">
                    {t.aboutMe.stats.map((label, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 text-center">
                            <span className="text-3xl font-bold text-brand-yellow tabular-nums">{statValues[i]}</span>
                            <span className="text-xs text-muted-foreground sm:text-sm">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default AboutMe;
