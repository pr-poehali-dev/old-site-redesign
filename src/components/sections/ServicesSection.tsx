import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
        <div className="space-y-3 md:space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl md:text-3xl font-bold">Наши услуги</h2>
            <p className="text-muted-foreground text-xs md:text-sm">
              Полный спектр работ по восстановлению трансмиссии
            </p>
          </div>

          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left p-2 md:p-3 text-xs md:text-sm font-semibold">Услуга</th>
                    <th className="text-center p-2 md:p-3 text-xs md:text-sm font-semibold whitespace-nowrap">Срок</th>
                    <th className="text-right p-2 md:p-3 text-xs md:text-sm font-semibold whitespace-nowrap">Цена</th>
                    <th className="text-center p-2 md:p-3 text-xs md:text-sm font-semibold w-24 md:w-32"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <tr 
                      key={service.id} 
                      className="border-b last:border-b-0 hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedService(service)}
                    >
                      <td className="p-2 md:p-3">
                        <div className="flex items-start gap-2">
                          <div className="flex-1">
                            <div className="text-xs md:text-sm font-medium leading-tight mb-1">
                              {service.name}
                            </div>
                            {service.popular && (
                              <Badge variant="default" className="text-[10px] px-1.5 py-0">
                                <Icon name="Star" className="h-2.5 w-2.5 mr-0.5" />
                                Популярно
                              </Badge>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 md:p-3 text-center">
                        <div className="flex items-center justify-center gap-1 text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                          <Icon name="Clock" className="h-3 w-3 md:h-3.5 md:w-3.5" />
                          <span>{service.duration}</span>
                        </div>
                      </td>
                      <td className="p-2 md:p-3 text-right">
                        <div className="flex items-baseline justify-end gap-1">
                          <span className="text-[10px] md:text-xs text-muted-foreground">от</span>
                          <span className="text-sm md:text-lg font-bold text-primary whitespace-nowrap">
                            {service.price.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                      </td>
                      <td className="p-2 md:p-3 text-center">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-xs h-7 md:h-8 px-2 md:px-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(service);
                          }}
                        >
                          <Icon name="Info" className="h-3 w-3 md:h-3.5 md:w-3.5 md:mr-1" />
                          <span className="hidden md:inline">Подробнее</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-8 md:py-12 text-muted-foreground">
                <Icon name="Search" className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-2 md:mb-3 opacity-50" />
                <p className="text-sm md:text-base">Услуги не найдены</p>
              </div>
            )}
          </Card>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs md:text-sm text-muted-foreground">
              💡 Нажмите на услугу для просмотра подробной информации и оформления заявки
            </p>
          </div>
        </div>
      </div>

      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base md:text-lg leading-tight pr-6">{selectedService?.name}</DialogTitle>
            <DialogDescription className="space-y-3 pt-3">
              <p className="text-xs md:text-sm text-foreground">{selectedService?.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-muted-foreground">от</span>
                <span className="text-2xl md:text-3xl font-bold text-primary">{selectedService?.price.toLocaleString('ru-RU')}</span>
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
