"use client"
import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Portfolio = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <div className="reveal">
                <Title title={t.portfolio.title} subtitle={t.portfolio.subtitle}/>
            </div>
            <div className="grid md:grid-cols-3 gap-14 mt-4">
                {dataPortfolio.map((data, index) => (
                    <div
                        key={data.id}
                        className={`reveal delay-${index + 1} group rounded-2xl border border-card-border bg-card-bg p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                    >
                        <h3 className="text-xl mb-3 font-semibold">{data.title}</h3>
                        <div className="relative overflow-hidden rounded-2xl border border-card-border">
                            <Image
                                src={data.image}
                                alt={data.alt}
                                width={600}
                                height={600}
                                className="w-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {data.tags && (
                            <div className="mt-3 flex flex-wrap gap-2">
                                {data.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-card-border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="mt-4 flex gap-3">
                            <Link
                                className={buttonVariants({ variant: "outline", size: "sm" })}
                                href={data.urlGithub}
                                target="_blank"
                            >
                                {t.portfolio.github}
                            </Link>
                            <Link
                                className={buttonVariants({ size: "sm" })}
                                href={data.urlDemo}
                                target="_blank"
                            >
                                {t.portfolio.liveDemo}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
