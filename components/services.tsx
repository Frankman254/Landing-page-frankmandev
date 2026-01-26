"use client"
import { dataServices } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";
import { useLanguage } from "./language-provider";

const Services = () => {
    const { t } = useLanguage();
    return (
        <div className="p-6 md:px-12 md:py-4 max-w-5xl mx-auto" id="services">
            <Title title={t.services.title} subtitle={t.services.subtitle}/>
            <div className="grid md:grid-cols-3 gap-5 mt-7">
                {dataServices.map((service, serviceIndex) => (
                    <div key={service.id} 
                    className="rounded-xl border border-card-border p-6 bg-card-bg dark:bg-card-bg h-fit"
                    >
                        <h4 className="mb-4 text-xl flex gap-2">
                            {service.icon}
                            {t.data.services[serviceIndex].title}
                        </h4>
                        <ul>
                            {service.features.map((feature, index)=> (
                                <li key={index} className="flex gap-3 mb-3">
                                    <Check size={20} />
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
