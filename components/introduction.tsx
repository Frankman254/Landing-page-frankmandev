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
            <div className="mt-[70px] pt-4 sm:mt-[90px] md:mt-[120px] lg:mt-[150px] xl:mt-[190px]" id="home">
                <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-transparent px-4 py-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:px-6 md:px-10 md:py-10 xl:px-14">
                    <div className="mx-auto flex w-fit items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-yellow backdrop-blur-md">
                        Personal Brand
                    </div>
                    <div className="mt-6 flex justify-center">
                        <BrandLogo textTone="light" showTagline={false} markAnimated />
                    </div>
                    <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white md:text-4xl">{t.introduction.greeting}</h1>
                    <h2 className="mx-auto mt-3 max-w-3xl text-base uppercase tracking-[0.26em] text-white/75 md:text-lg">{t.introduction.role}</h2>
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
                        <div className="relative rounded-[2rem] border border-white/12 bg-black/30 p-3 shadow-2xl backdrop-blur-md">
                            <div className="absolute inset-x-8 top-4 h-12 rounded-full bg-brand-yellow/25 blur-3xl" />
                            <Image 
                                src="/profile.jpg" 
                                alt="Profile pic" 
                                width={400} 
                                height={400} 
                                className="relative rounded-[1.6rem] mx-auto w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] object-cover"
                            />
                        </div>
                        <div className="w-full max-w-[320px] rounded-[2rem] border border-white/12 bg-black/35 p-6 text-left shadow-2xl backdrop-blur-md">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
                                    Frankman Dev
                                </span>
                                <span className="h-2 w-2 rounded-full bg-brand-red" />
                            </div>
                            <BrandMark className="mt-5 w-28" animated />
                            <p className="mt-5 text-lg font-semibold text-white">
                                Marca personal enfocada en sistemas reales, experiencia web y soluciones confiables.
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