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
    <section id="services" className="py-20 border-t bg-muted/30">
      <div className="container">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Полный спектр работ по восстановлению трансмиссии
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-4">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Поиск услуги..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Цена" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая цена</SelectItem>
                <SelectItem value="low">До 5 000 ₽</SelectItem>
                <SelectItem value="medium">5 000 - 15 000 ₽</SelectItem>
                <SelectItem value="high">Более 15 000 ₽</SelectItem>
              </SelectContent>
            </Select>

            <Select value={popularFilter} onValueChange={setPopularFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Популярность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все услуги</SelectItem>
                <SelectItem value="popular">Популярные</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Все услуги');
                setPriceRange('all');
                setPopularFilter('all');
              }}
            >
              <Icon name="X" className="mr-2 h-4 w-4" />
              Сбросить
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Найдено услуг: <span className="font-semibold text-foreground">{filteredServices.length}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center overflow-hidden">
                    <Icon name="Settings" className="h-20 w-20 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">{service.category}</Badge>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{service.description}</CardDescription>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{service.price.toLocaleString('ru-RU')}</span>
                      <span className="text-sm text-muted-foreground">₽</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                    {service.popular && (
                      <Badge className="bg-amber-500">
                        <Icon name="Star" className="mr-1 h-3 w-3" />
                        Популярное
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Услуги не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
