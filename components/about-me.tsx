import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = ()=>{
    
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre Mi" subtitle="Conóceme"/>
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* Carrousel */}
                    <Carousel 
                    opts={{
                        align:"start"
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[250px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center jstify-center">
                                        <Image 
                                        src={data.url} 
                                        alt="Image" 
                                        width={350} height={500} 
                                        className="w-full h-auto rounded-lg"/>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
                <div>

                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data)=> (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">Desarrollador Web e Ingeniero en Sistemas con experiencia en desarrollo Front End, encuentro inspiracion entre lineas de codigo y algoritmos complejos. En cuanto a mis pasatiempos fuera de la programación, disfruto de video juegos, deporte y senderismo además de visitar paisajes hermosos, esto con el fin de mantener un equilibrio entre la mente y el cuerpo. Además de disfrutar de vez en cuando de un buen libro ya que es una fuente de conocimiento y crecimiento personal, además de investigar sobre nuevas tecnologías. También comparto con amigos que tienen la programación como pasión al igual que yo y asistimos a eventos de tecnología.</p>
                    <Button>
                        <Phone size={20} className="mr-2"/>Contáctame
                    </Button>
                    </div>
            </div>
        </div>
    )
}
export default AboutMe;