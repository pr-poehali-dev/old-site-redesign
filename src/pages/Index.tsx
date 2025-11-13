import { useState, useMemo } from 'react';
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

const services: Service[] = [
  { id: 1, name: 'Восстановление шлицев переднего моста', category: 'Передний мост', price: 15000, duration: '2-3 дня', popular: true, description: 'Полное восстановление изношенных шлицевых соединений' },
  { id: 2, name: 'Восстановление шлицев заднего моста', category: 'Задний мост', price: 14000, duration: '2-3 дня', popular: true, description: 'Восстановление шлицов полуосей и дифференциала' },
  { id: 3, name: 'Ремонт раздаточной коробки', category: 'Раздатка', price: 18000, duration: '3-4 дня', popular: false, description: 'Восстановление шлицевых валов раздаточной коробки' },
  { id: 4, name: 'Восстановление ШРУС', category: 'ШРУС', price: 8000, duration: '1-2 дня', popular: true, description: 'Ремонт внутренних и наружных шарниров' },
  { id: 5, name: 'Восстановление кардана', category: 'Кардан', price: 12000, duration: '2 дня', popular: false, description: 'Восстановление шлицев карданного вала' },
  { id: 6, name: 'Ремонт КПП (шлицы первичного вала)', category: 'КПП', price: 16000, duration: '3-4 дня', popular: false, description: 'Восстановление изношенных шлицев первичного вала' },
  { id: 7, name: 'Балансировка карданного вала', category: 'Кардан', price: 3500, duration: '1 день', popular: true, description: 'Динамическая балансировка после восстановления' },
  { id: 8, name: 'Диагностика трансмиссии', category: 'Диагностика', price: 1500, duration: '1-2 часа', popular: true, description: 'Проверка состояния всех шлицевых соединений' },
];

const categories = ['Все услуги', ...Array.from(new Set(services.map(s => s.category)))];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [priceRange, setPriceRange] = useState('all');
  const [popularFilter, setPopularFilter] = useState('all');

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Все услуги' || service.category === selectedCategory;
      const matchesPopular = popularFilter === 'all' || (popularFilter === 'popular' && service.popular);
      
      let matchesPrice = true;
      if (priceRange === 'low') matchesPrice = service.price < 5000;
      else if (priceRange === 'medium') matchesPrice = service.price >= 5000 && service.price < 15000;
      else if (priceRange === 'high') matchesPrice = service.price >= 15000;

      return matchesSearch && matchesCategory && matchesPopular && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange, popularFilter]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-secondary">МегаШлиц</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">Вопросы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>

          <Button>
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Восстановление шлицевых соединений
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональный ремонт трансмиссии полноприводных автомобилей по всей стране
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')}>
                Наши услуги
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Записаться на ремонт
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">О компании</h2>
            <p className="text-lg text-muted-foreground">
              МегаШлиц — специализированный автосервис по восстановлению шлицевых соединений. 
              Работаем с полноприводными автомобилями всех марок. Используем современное оборудование 
              и оригинальные технологии восстановления.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Icon name="Award" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">12 лет</h3>
                <p className="text-muted-foreground">опыта работы</p>
              </div>
              <div className="space-y-2">
                <Icon name="Car" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">3500+</h3>
                <p className="text-muted-foreground">отремонтированных авто</p>
              </div>
              <div className="space-y-2">
                <Icon name="Shield" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">Гарантия</h3>
                <p className="text-muted-foreground">до 24 месяцев</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <Icon name="Calendar" className="mr-2 h-4 w-4" />
                      Записаться
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

      <section id="portfolio" className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Выполненные работы</h2>
            <p className="text-lg text-muted-foreground">
              Примеры успешно выполненных ремонтов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Toyota Land Cruiser 200', description: 'Восстановление шлицев переднего моста. Замена ШРУСов. Полная диагностика трансмиссии.', icon: 'Car' },
              { title: 'Nissan Patrol Y62', description: 'Ремонт раздаточной коробки с восстановлением всех шлицевых соединений.', icon: 'Wrench' },
              { title: 'Mitsubishi Pajero Sport', description: 'Восстановление карданного вала, балансировка, замена крестовин.', icon: 'Settings' },
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={project.icon as any} className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Как понять, что шлицы изношены?', a: 'Основные признаки: вибрация при разгоне, стук в трансмиссии, люфт в соединениях. Рекомендуем пройти диагностику.' },
                { q: 'Сколько времени занимает ремонт?', a: 'В зависимости от сложности работ — от 1 до 4 дней. Точные сроки озвучим после диагностики.' },
                { q: 'Какая гарантия на работы?', a: 'Предоставляем гарантию от 12 до 24 месяцев в зависимости от типа восстановления и условий эксплуатации.' },
                { q: 'Работаете ли вы с внедорожниками?', a: 'Да, специализируемся именно на полноприводных автомобилях и внедорожниках всех марок.' },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Icon name="HelpCircle" className="h-5 w-5 text-primary mt-0.5" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-8">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для консультации или записи на ремонт
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Icon name="MapPin" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Адрес сервиса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15, стр. 3</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Phone" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 777-88-99</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Mail" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@megashlic.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Clock" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб: 10:00 - 18:00<br />Вс: выходной</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="h-6 w-6" />
              <span className="font-bold">МегаШлиц</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              © 2024 МегаШлиц. Восстановление шлицевых соединений.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;