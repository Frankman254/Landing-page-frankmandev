"use client"
import { dataAboutMe, dataPortfolio } from "@/data";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutMe = () => {
    const { t, language } = useLanguage();
    const ref = useScrollReveal();

    const stats = [
        { value: "2+", label: language === 'es' ? "Años de Experiencia" : "Years Experience" },
        { value: String(dataPortfolio.length), label: language === 'es' ? "Proyectos destacados" : "Featured projects" },
        { value: "3", label: language === 'es' ? "Servicios" : "Services" },
    ];

    return (
        <div ref={ref} className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <div className="reveal">
                <Title title={t.aboutMe.title} subtitle={t.aboutMe.subtitle}/>
            </div>
            <div className="flex flex-col gap-6">
                <p className="reveal delay-1 my-8 text-lg leading-8 text-text-secondary">
                    {t.aboutMe.description}
                </p>

                {/* Stats strip */}
                <div className="reveal delay-2 grid grid-cols-3 gap-4 rounded-2xl border border-card-border bg-card-bg p-6 shadow-md">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 text-center">
                            <span className="text-3xl font-bold text-brand-yellow tabular-nums">{stat.value}</span>
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 mt-3 gap-4">
                    {dataAboutMe.map((data, index) => (
                        <div
                            key={data.id}
                            className={`reveal delay-${index + 1} border border-card-border rounded-2xl p-5 shadow-md bg-card-bg dark:bg-card-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-brand-red">
                                {data.icon}
                            </div>
                            <p className="my-3 text-lg font-semibold">{t.data.aboutMe[index].name}</p>
                            <p className="text-muted-foreground">{t.data.aboutMe[index].description}</p>
                        </div>
                    ))}
                </div>

                <div className="py-12 md:py-0 flex items-center justify-center mt-8" />
            </div>
        </div>
    );
}
export default AboutMe;
