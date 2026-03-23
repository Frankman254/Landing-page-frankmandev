"use client"
import { dataServices } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Services = () => {
    const { t } = useLanguage();
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="p-6 md:px-12 md:py-4 max-w-5xl mx-auto" id="services">
            <div className="reveal">
                <Title title={t.services.title} subtitle={t.services.subtitle}/>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-7">
                {dataServices.map((service, serviceIndex) => (
                    <div key={service.id}
                        className={`reveal delay-${serviceIndex + 1} rounded-2xl border border-card-border p-6 bg-card-bg dark:bg-card-bg h-fit shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                        <h4 className="mb-4 text-xl flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-brand-red">
                                {service.icon}
                            </span>
                            {t.data.services[serviceIndex].title}
                        </h4>
                        <ul>
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex gap-3 mb-3">
                                    <Check size={20} className="text-brand-red shrink-0" />
                                    {t.data.services[serviceIndex].features[index]}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
