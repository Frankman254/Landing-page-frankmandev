"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";

const Personal = () => {
    const { t } = useLanguage();

    return (
        <div className="p-6 md:px-12 md:py-30 max-w-7xl mx-auto" id="personal">
            <Title title={t.personal.title} subtitle={t.personal.subtitle} />
            <Carousel 
                opts={{
                    align: "start",
                    loop: true
                }}
                orientation="horizontal"
                className="w-full max-w-6xl h-fit mx-auto"
            >
                <CarouselContent className="-mt-1">
                    {t.data.personal.images.map((image, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="flex flex-col items-center justify-center p-4">
                                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden mb-6 shadow-2xl">
                                    <Image 
                                        src={image.url} 
                                        alt={image.alt} 
                                        fill
                                        className="object-contain"
                                        quality={95}
                                        sizes="100vw"
                                        priority={index === 0}
                                    />
                                </div>
                                <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 px-4 font-medium max-w-3xl">
                                    {image.caption}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:left-4"/>
                <CarouselNext className="right-2 md:right-4"/>
            </Carousel>
        </div>
    )
}

export default Personal;