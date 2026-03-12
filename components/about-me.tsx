"use client"
import { dataAboutMe } from "@/data";
import Title from "./shared/title";

import { useLanguage } from "./language-provider";

const AboutMe = ()=>{
    const { t } = useLanguage();
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title={t.aboutMe.title} subtitle={t.aboutMe.subtitle}/>
            <div className="flex flex-col gap-6">

                <div>
                    <p className="my-8 text-lg leading-8 text-text-secondary">{t.aboutMe.description}</p>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data, index)=> (
                            <div key={data.id} className="border border-card-border rounded-2xl p-5 shadow-md bg-card-bg dark:bg-card-bg transition duration-200 hover:-translate-y-1">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-brand-red">
                                    {data.icon}
                                </div>
                                <p className="my-3 text-lg font-semibold">{t.data.aboutMe[index].name}</p>
                                <p className="text-muted-foreground">{t.data.aboutMe[index].description}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="py-12 md:py-0 flex items-center justify-center mt-8">

                </div>
            </div>
        </div>
    )
}
export default AboutMe;