import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  return (
    <section id="services" className="py-8 border-t bg-muted/30">
      <div className="container">
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
            <p className="text-muted-foreground">
              Полный спектр работ по восстановлению трансмиссии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">от {service.price.toLocaleString('ru-RU')}</span>
                    <span className="text-sm text-muted-foreground">₽</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};