"use client"
import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="contact">
            <div className="reveal">
                <Title title={t.contact.title} subtitle={t.contact.subtitle}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-0">
                    {dataContact.map((data, index) => (
                        <div key={data.id}
                            className={`reveal delay-${index + 1} flex flex-col items-center bg-card-bg dark:bg-card-bg border border-card-border rounded-2xl mb-3 md:mb-5 p-4 md:p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-brand-red">
                                {data.icon}
                            </div>
                            <p className="mt-3 font-semibold">{t.data.contact[index].title}</p>
                            <p className="text-muted-foreground">{data.subtitle}</p>
                            <Link href={data.link} target="_blank" className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red hover:text-primary transition-colors duration-200">
                                {t.contact.sendMessage}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="reveal delay-2 col-span-2">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Contact;
