"use client"
import Link from "next/link";
import Image from 'next/image'
import { Mail, Paperclip } from "lucide-react";
import BrandLogo from "./brand/brand-logo";
import BrandMark from "./brand/brand-mark";
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import { useLanguage } from "./language-provider";
const Introduction= () => {
    const { t } = useLanguage();
    return ( 
        <Container className="max-w-6xl px-4 sm:px-8 md:px-10 lg:px-16 xl:max-w-7xl xl:px-20">
            <div className="mt-[42px] pt-4 sm:mt-[56px] md:mt-[78px] lg:mt-[102px] xl:mt-[132px]" id="home">
                <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-border/70 bg-background/72 px-4 py-8 text-center shadow-[0_18px_55px_rgba(15,15,20,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/38 dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:px-6 md:px-10 md:py-10 xl:px-14">
                    <div className="mx-auto flex w-fit items-center rounded-full border border-border/70 bg-background/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-yellow backdrop-blur-md dark:border-white/15 dark:bg-black/40">
                        Personal Brand
                    </div>
                    <div className="mt-6 flex justify-center">
                        <BrandLogo textTone="adaptive" showTagline={false} markAnimated />
                    </div>
                    <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-foreground dark:text-white md:text-4xl">{t.introduction.greeting}</h1>
                    <h2 className="mx-auto mt-3 max-w-3xl text-base uppercase tracking-[0.26em] text-text-secondary dark:text-white/75 md:text-lg">{t.introduction.role}</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-text-secondary dark:text-white/70 md:text-base">
                        {t.introduction.summary}
                    </p>
                    <p className="mt-3 text-muted-foreground">{t.introduction.email}</p>
                    <div className="flex items-center">
                        <div className="mx-auto mt-10 flex flex-col gap-4 md:flex-row md:justify-between">
                            <Link className={buttonVariants()} href="#contact">
                                <Mail className="mr-2"/> {t.introduction.contactButton}
                            </Link>
                            <Link className={buttonVariants({ variant: 'secondary'})} 
                            href="/resumen-francisco-rodriguez-2025.pdf" 
                            target="_blank">
                                <Paperclip className="mr-2"/> {t.introduction.downloadCV}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-end lg:gap-12">
                        <div className="relative rounded-[2rem] border border-border/70 bg-background/70 p-3 shadow-[0_18px_45px_rgba(15,15,20,0.12)] backdrop-blur-md dark:border-white/12 dark:bg-black/30 dark:shadow-[0_20px_50px_rgba(0,0,0,0.32)]">
                            <div className="absolute inset-x-8 top-4 h-12 rounded-full bg-brand-yellow/25 blur-3xl" />
                            <Image 
                                src="/profile.jpg" 
                                alt="Profile pic" 
                                width={400} 
                                height={400} 
                                className="relative rounded-[1.6rem] mx-auto w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] object-cover"
                            />
                        </div>
                        <div className="w-full max-w-[320px] rounded-[2rem] border border-border/70 bg-background/72 p-6 text-left shadow-[0_18px_45px_rgba(15,15,20,0.12)] backdrop-blur-md dark:border-white/12 dark:bg-black/35 dark:shadow-[0_20px_50px_rgba(0,0,0,0.32)]">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground dark:text-white/60">
                                    Frankman Dev
                                </span>
                                <span className="h-2 w-2 rounded-full bg-brand-red" />
                            </div>
                            <BrandMark className="mt-5 w-28" animated />
                            <p className="mt-5 text-lg font-semibold text-foreground dark:text-white">
                                {t.introduction.brandCard}
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <span className="h-1.5 w-16 rounded-full bg-brand-yellow" />
                                <span className="h-1.5 w-8 rounded-full bg-brand-red" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default Introduction;