import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

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

interface ServicesSectionProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  popularFilter: string;
  setPopularFilter: (value: string) => void;
  filteredServices: Service[];
  onFormOpen: (serviceName: string) => void;
}

export const ServicesSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  popularFilter,
  setPopularFilter,
  filteredServices,
  onFormOpen,
}: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleFormOpen = () => {
    const serviceName = selectedService?.name || '';
    setSelectedService(null);
    setTimeout(() => {
      onFormOpen(serviceName);
    }, 100);
  };

  return (
    <section id="services" className="py-6 md:py-8 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Наши услуги</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Полный спектр работ по восстановлению трансмиссии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4 flex flex-col" 
                style={{ animationDelay: `${index * 100}ms`, animationDuration: '500ms' }}
                onClick={() => setSelectedService(service)}
              >
                {service.image && (
                  <div className="relative h-52 overflow-hidden bg-white flex items-center justify-center p-2 shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.popular && (
                      <Badge variant="default" className="absolute top-2 right-2 bg-primary text-[10px] px-1.5 py-0.5">
                        <Icon name="Star" className="h-2.5 w-2.5 mr-0.5" />
                        Популярно
                      </Badge>
                    )}
                  </div>
                )}
                <CardHeader className="pb-2 pt-2.5 px-3">
                  <CardTitle className="text-xs md:text-sm leading-tight line-clamp-3 min-h-[3rem] md:min-h-[3.5rem]">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-2.5 px-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px] md:text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Clock" className="h-3 w-3" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] text-muted-foreground">от</span>
                      <span className="text-base md:text-lg font-bold text-primary">
                        {service.price.toLocaleString('ru-RU')}
                      </span>
                      <span className="text-[10px] text-muted-foreground">₽</span>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="w-full h-8 text-xs" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                  >
                    <Icon name="Info" className="mr-1.5 h-3.5 w-3.5" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 md:py-16 text-muted-foreground">
              <Icon name="Search" className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 opacity-50" />
              <p className="text-base md:text-lg">Услуги не найдены</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl leading-tight pr-6">{selectedService?.name}</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {selectedService?.description}
              </p>
              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-sm text-muted-foreground">от</span>
                <span className="text-3xl md:text-4xl font-bold text-primary">{selectedService?.price.toLocaleString('ru-RU')}</span>
                <span className="text-base text-muted-foreground">₽</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <Icon name="Clock" className="h-5 w-5" />
                <span>{selectedService?.duration}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-4">
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => window.location.href = 'tel:+79202520352'}
            >
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Позвонить
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              onClick={handleFormOpen}
            >
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Оставить заявку
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};