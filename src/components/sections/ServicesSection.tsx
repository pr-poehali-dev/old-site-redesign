import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    <section id="services" className="py-8 bg-muted/30">
      <div className="container">
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
            <p className="text-muted-foreground">
              Полный спектр работ по восстановлению трансмиссии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 overflow-hidden group animate-in fade-in slide-in-from-bottom-4 cursor-pointer" 
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedService(service)}
              >
                {service.image && (
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white text-sm bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                          <Icon name="Clock" className="h-3 w-3" />
                          <span>{service.duration}</span>
                        </div>
                        {service.popular && (
                          <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                            <Icon name="Star" className="h-3 w-3 mr-1" />
                            Популярно
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm leading-tight line-clamp-3">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">от</span>
                    <span className="text-2xl font-bold text-primary">{service.price.toLocaleString('ru-RU')}</span>
                    <span className="text-sm text-muted-foreground">₽</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="Search" className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Услуги не найдены</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg leading-tight pr-6">{selectedService?.name}</DialogTitle>
            <DialogDescription className="space-y-3 pt-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-muted-foreground">от</span>
                <span className="text-3xl font-bold text-primary">{selectedService?.price.toLocaleString('ru-RU')}</span>
                <span className="text-sm text-muted-foreground">₽</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" className="h-4 w-4" />
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