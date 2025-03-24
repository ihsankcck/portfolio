import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const ExperienceSlider = () => {
    const staticData = [
        { name: "istanbulspor", logo: "/istanbulspor.svg", color: "#f8e601", alt: "istanbulspor logo" },
        { name: "fabercastel", logo: "/fabercastel.svg", color: "#234935", alt: "fabercastel logo" },
        { name: "garantipos", logo: "/garantipos.svg", color: "#224a81", alt: "garantipos logo" },
        { name: "lux", logo: "/lux.svg", color: "#c31620", alt: "lux logo" },
        { name: "kadingirisimci", logo: "/kadingirisimci.svg", color: "#009444", alt: "kadingirisimci logo" },
        { name: "istanbulspor", logo: "/istanbulspor.svg", color: "#f8e601", alt: "istanbulspor logo" },
        { name: "istanbulspor", logo: "/istanbulspor.svg", color: "#f8e601", alt: "istanbulspor logo" },
    ];

    return (
        <Carousel>
            <CarouselContent>
                {staticData.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                        <div className="flex items-center justify-center">
                            <div
                                className="flex items-center justify-center bg-white rounded-full h-[150px] w-[150px] border-2"
                                style={{ borderColor: item.color }}
                            >
                                <img className="max-w-14" src={item.logo} alt={item.alt} />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ExperienceSlider;
