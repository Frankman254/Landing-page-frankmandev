"use client"
import Link from "next/link";
import Image from 'next/image'
import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import { useLanguage } from "./language-provider";
const Introduction= () => {
    const { t } = useLanguage();
    return ( 
        <Container>
            <div className="text-center pt-8 md:pt-16 mt-[150px] md:mt-[-0px] lg:mt-[-100px]" id="home">
                <h1 className="text-4xl font-bold mb-3 text-white">{t.introduction.name}</h1>
                <h3 className="text-2xl text-white dark:text-white">{t.introduction.greeting}</h3>
                <h2 className="text-1xl text-gray-400 dark:text-white">{t.introduction.role}</h2>
                <p className="text-gray-400 dark:text-gray-400">{t.introduction.email}</p>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
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
                    <Image 
                        src="/profile.jpg" 
                        alt="Profile pic" 
                        width={400} 
                        height={400} 
                        className="rounded-full mt-10 mx-auto w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
                    />
            </div>
        </Container>
    );
}
export default Introduction;