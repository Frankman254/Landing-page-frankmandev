"use client"
import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import { useLanguage } from "./language-provider";

const AboutMe = ()=>{
    const { t } = useLanguage();
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title={t.aboutMe.title} subtitle={t.aboutMe.subtitle}/>
            <div className="flex flex-col gap-6">

                <div>
                    <p className="my-8">{t.aboutMe.description}</p>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data, index)=> (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{t.data.aboutMe[index].name}</p>
                                <p className="text-gray-400">{t.data.aboutMe[index].description}</p>
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