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
  categories: string[];
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
  categories,
}: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scrollToForm = () => {
    setSelectedService(null);
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-6 md:py-8 bg-muted/30">
      <div className="container">
        <div className="space-y-4 md:space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-3xl font-bold">Наши услуги</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Полный спектр работ по восстановлению трансмиссии
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs md:text-sm"
              >
                {category}
                {selectedCategory === category && (
                  <Badge variant="secondary" className="ml-2 bg-primary-foreground/20">
                    {filteredServices.length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-2 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4" 
                style={{ animationDelay: `${index * 100}ms`, animationDuration: '500ms' }}
                onClick={() => setSelectedService(service)}
              >
                {service.image && (
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.popular && (
                      <Badge variant="default" className="absolute top-3 right-3 bg-primary text-xs md:text-sm px-2 md:px-3 py-1">
                        <Icon name="Star" className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1" />
                        Популярно
                      </Badge>
                    )}
                  </div>
                )}
                <CardHeader className="pb-3 space-y-2">
                  <CardTitle className="text-sm md:text-base leading-snug">
                    {service.name}
                  </CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" className="h-4 w-4 md:h-4.5 md:w-4.5" />
                      <span className="text-xs md:text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-muted-foreground">от</span>
                      <span className="text-xl md:text-2xl font-bold text-primary">
                        {service.price.toLocaleString('ru-RU')}
                      </span>
                      <span className="text-sm text-muted-foreground">₽</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                  >
                    <Icon name="Info" className="mr-2 h-4 w-4" />
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
        <DialogContent className="sm:max-w-lg">
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
              onClick={scrollToForm}
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