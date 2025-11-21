import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  duration: string;
  popular: boolean;
  description: string;
  image?: string;
}

interface GalleryCarouselSectionProps {
  services: Service[];
}

export const GalleryCarouselSection = ({ services }: GalleryCarouselSectionProps) => {
  return (
    <section className="py-6 md:py-8 bg-muted/20">
      <div className="container">
        <div className="text-center space-y-1 mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold">Наши работы</h2>
          <p className="text-xs md:text-sm text-muted-foreground">Фотографии выполненных работ</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-3 md:p-4">
                      <h3 className="font-semibold text-xs md:text-sm line-clamp-2">{service.name}</h3>
                      <p className="text-primary font-bold mt-1 text-sm">от {service.price.toLocaleString('ru-RU')} ₽</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex md:-left-12" />
          <CarouselNext className="hidden md:flex md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};