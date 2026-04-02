"use client"
import * as React from "react";
import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "./ui/carousel";

function PortfolioGallery({
    images,
    language,
}: {
    images: Array<{ src: string; alt: { es: string; en: string } }>;
    language: "es" | "en";
}) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        const updateCurrent = () => {
            setCurrent(api.selectedScrollSnap());
        };

        updateCurrent();
        api.on("select", updateCurrent);
        api.on("reInit", updateCurrent);

        return () => {
            api.off("select", updateCurrent);
            api.off("reInit", updateCurrent);
        };
    }, [api]);

    return (
        <div className="mt-5">
            <Carousel
                setApi={setApi}
                opts={{ loop: images.length > 1 }}
                className="w-full"
            >
                <CarouselContent className="ml-0">
                    {images.map((item) => (
                        <CarouselItem key={item.src} className="pl-0">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-card-border">
                                <Image
                                    src={item.src}
                                    alt={item.alt[language]}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {images.length > 1 ? (
                    <>
                        <CarouselPrevious className="left-3 top-auto bottom-3 h-9 w-9 translate-y-0 border-border bg-background/85 backdrop-blur-sm" />
                        <CarouselNext className="right-3 top-auto bottom-3 h-9 w-9 translate-y-0 border-border bg-background/85 backdrop-blur-sm" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-2">
                            {images.map((item, index) => (
                                <span
                                    key={item.src}
                                    className={`h-2.5 rounded-full transition-all ${
                                        current === index
                                            ? "w-8 bg-brand-yellow"
                                            : "w-2.5 bg-white/55"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                ) : null}
            </Carousel>
        </div>
    );
}

const Portfolio = () => {
    const { t, language } = useLanguage();
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="p-4 max-w-6xl md:py-24 mx-auto" id="portfolio">
            <div className="reveal">
                <Title title={t.portfolio.title} subtitle={t.portfolio.subtitle}/>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-2">
                {dataPortfolio.map((data, index) => (
                    <div
                        key={data.id}
                        className={`reveal delay-${index + 1} group flex h-full flex-col rounded-[1.75rem] border border-card-border bg-card-bg p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                    >
                        <div className="mb-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                                {data.status[language]}
                            </span>
                            <span className="rounded-full border border-card-border bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                {data.audience[language]}
                            </span>
                        </div>
                        <h3 className="text-2xl font-semibold">{data.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-text-secondary">
                            {data.summary[language]}
                        </p>
                        <PortfolioGallery
                            images={
                                data.gallery?.length
                                    ? data.gallery
                                    : [{ src: data.image, alt: data.alt }]
                            }
                            language={language}
                        />
                        <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                            {data.highlights.map((highlight) => (
                                <li key={highlight.es} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
                                    <span>{highlight[language]}</span>
                                </li>
                            ))}
                        </ul>
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
                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                className={buttonVariants({ variant: "outline", size: "sm" })}
                                href={data.urlGithub}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.portfolio.github}
                            </Link>
                            {data.urlDemo ? (
                                <Link
                                    className={buttonVariants({ size: "sm" })}
                                    href={data.urlDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.portfolio.liveDemo}
                                </Link>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
