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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src="https://cdn.poehali.dev/files/95ca077b-94b5-42c3-a7a7-f99244c50369.jpg" alt="МегаШлиц" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <span className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">МегаШлиц<sup className="text-xs ml-0.5">®</sup></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">Вопросы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              className="hidden md:flex bg-[#25D366] hover:bg-[#20BA5A]"
              onClick={() => window.open('https://wa.me/78312601123', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button 
              className="hidden md:flex"
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Связаться
            </Button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background animate-in slide-in-from-top duration-300">
            <nav className="container py-4 flex flex-col gap-2">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">О компании</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Вопросы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Контакты</button>
              <Button className="mt-2" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Восстановление шлицевых соединений
            </h1>
            <p className="text-xl text-muted-foreground">
              Производственная компания по восстановлению шлицевых соединений трансмиссии по всей стране
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')}>
                Наши услуги
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Отправить заявку
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
              МегаШлиц — производственная компания, специализирующаяся на восстановлении шлицевых соединений деталей трансмиссии. 
              Работаем с автосервисами и дилерскими центрами по всей России. Используем промышленное оборудование 
              и запатентованные технологии металлизации.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Icon name="Award" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">12 лет</h3>
                <p className="text-muted-foreground">опыта работы</p>
              </div>
              <div className="space-y-2">
                <Icon name="Car" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">5000+</h3>
                <p className="text-muted-foreground">восстановленных деталей</p>
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

      <section className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Преимущества нашей технологии</h2>
            <p className="text-lg text-muted-foreground">
              Почему восстановление выгоднее замены
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="DollarSign" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Экономия до 70%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Восстановление обходится в 3-5 раз дешевле покупки новых деталей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ремонт за 1-4 дня. Не нужно ждать заказа запчастей из-за границы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Высокая прочность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Технология напыления создает соединение прочнее заводского
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Recycle" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Безопасно для узлов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Сохраняем оригинальные детали без замены дорогостоящих узлов
                </p>
              </CardContent>
            </Card>
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

      <section id="portfolio" className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Наши работы</h2>
            <p className="text-lg text-muted-foreground">
              Примеры успешно восстановленных деталей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Полуось переднего моста', description: 'Восстановление изношенных шлицев полуоси Land Cruiser 200. Металлизация с последующей механической обработкой.', icon: 'Settings' },
              { title: 'Вал раздаточной коробки', description: 'Восстановление шлицевого соединения вала раздатки Nissan Patrol. Твердость покрытия HRC 58-62.', icon: 'Wrench' },
              { title: 'Карданный вал', description: 'Восстановление шлицев карданного вала Pajero Sport. Напыление + термообработка + балансировка.', icon: 'Cog' },
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

      <section className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Галерея работ</h2>
            <p className="text-lg text-muted-foreground">
              Фотографии процесса восстановления и готовых деталей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1581092160607-ee67d6e5f3e7?w=400&h=400&fit=crop',
            ].map((img, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg bg-muted hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={img} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Какие детали можно восстановить?', a: 'Восстанавливаем шлицевые соединения полуосей, валов КПП и раздатки, карданов, ШРУСов. Работаем с деталями любых марок автомобилей.' },
                { q: 'Сколько времени занимает восстановление?', a: 'В зависимости от сложности детали — от 1 до 4 дней. Срочные заказы выполняем за 24 часа с доплатой 50%.' },
                { q: 'Какая гарантия на восстановленные детали?', a: 'Предоставляем гарантию от 12 до 24 месяцев. Восстановленное покрытие превосходит заводское по износостойкости.' },
                { q: 'Как отправить деталь на восстановление?', a: 'Принимаем детали в производственном цехе в Москве или работаем через транспортные компании по всей России.' },
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
              Свяжитесь с нами для консультации или отправки заявки
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Icon name="MapPin" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Производственный цех</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Нижний Новгород, Восточный проезд, 11/1</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Phone" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (920) 252-03-52</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Mail" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">megashlic@yandex.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="MessageCircle" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>WhatsApp (производство)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (831) 260-11-23</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/95ca077b-94b5-42c3-a7a7-f99244c50369.jpg" alt="МегаШлиц" className="h-10 w-10 object-contain" />
              <span className="font-bold">МегаШлиц<sup className="text-xs ml-0.5">®</sup></span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              © 2024 МегаШлиц. Восстановление шлицевых соединений.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/78312601123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Написать в WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Index;