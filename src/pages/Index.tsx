import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/sections/Header';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactsSection } from '@/components/sections/ContactsSection';

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
  { id: 1, name: 'Восстановление шлицев вала раздатки', category: 'Раздатка', price: 10000, duration: '2-3 дня', popular: true, description: 'Восстановление шлицевого соединения вала раздаточной коробки на станках ЧПУ с термообработкой' },
  { id: 2, name: 'Восстановление шлицев переднего моста', category: 'Передний мост', price: 15000, duration: '2-3 дня', popular: true, description: 'Полное восстановление изношенных шлицевых соединений' },
  { id: 3, name: 'Восстановление шлицев заднего моста', category: 'Задний мост', price: 14000, duration: '2-3 дня', popular: true, description: 'Восстановление шлицов полуосей и дифференциала' },
  { id: 4, name: 'Ремонт раздаточной коробки', category: 'Раздатка', price: 18000, duration: '3-4 дня', popular: false, description: 'Восстановление шлицевых валов раздаточной коробки' },
  { id: 5, name: 'Восстановление ШРУС', category: 'ШРУС', price: 8000, duration: '1-2 дня', popular: true, description: 'Ремонт внутренних и наружных шарниров' },
  { id: 6, name: 'Восстановление кардана', category: 'Кардан', price: 12000, duration: '2 дня', popular: false, description: 'Восстановление шлицев карданного вала' },
  { id: 7, name: 'Ремонт КПП (шлицы первичного вала)', category: 'КПП', price: 16000, duration: '3-4 дня', popular: false, description: 'Восстановление изношенных шлицев первичного вала' },
  { id: 8, name: 'Балансировка карданного вала', category: 'Кардан', price: 3500, duration: '1 день', popular: true, description: 'Динамическая балансировка после восстановления' },
  { id: 9, name: 'Диагностика трансмиссии', category: 'Диагностика', price: 1500, duration: '1-2 часа', popular: true, description: 'Проверка состояния всех шлицевых соединений' },
];

const categories = ['Все услуги', ...Array.from(new Set(services.map(s => s.category)))];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [priceRange, setPriceRange] = useState('all');
  const [popularFilter, setPopularFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', detail: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [quickConsultOpen, setQuickConsultOpen] = useState(false);
  const [quickFormData, setQuickFormData] = useState({ name: '', phone: '' });
  const [quickFormStatus, setQuickFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedCount = localStorage.getItem('megashlic_view_count');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    const newCount = currentCount + 1;
    setViewCount(newCount);
    localStorage.setItem('megashlic_view_count', newCount.toString());
  }, []);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://functions.poehali.dev/fd96c7e7-0adf-485f-a51a-abcd609b660d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', detail: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuickFormStatus('sending');

    try {
      const response = await fetch('https://functions.poehali.dev/fd96c7e7-0adf-485f-a51a-abcd609b660d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...quickFormData,
          detail: 'Быстрая консультация',
          message: 'Запрос на консультацию из шапки сайта'
        }),
      });

      if (response.ok) {
        setQuickFormStatus('success');
        setQuickFormData({ name: '', phone: '' });
        setTimeout(() => {
          setQuickFormStatus('idle');
          setQuickConsultOpen(false);
        }, 3000);
      } else {
        setQuickFormStatus('error');
        setTimeout(() => setQuickFormStatus('idle'), 5000);
      }
    } catch (error) {
      setQuickFormStatus('error');
      setTimeout(() => setQuickFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        quickConsultOpen={quickConsultOpen}
        setQuickConsultOpen={setQuickConsultOpen}
        quickFormData={quickFormData}
        setQuickFormData={setQuickFormData}
        quickFormStatus={quickFormStatus}
        handleQuickFormSubmit={handleQuickFormSubmit}
        scrollToSection={scrollToSection}
      />

      <section id="hero" className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/files/2f9eb982-2a71-488e-b732-fc642b3ef8e8.jpg"
            alt="Восстановление шлицевых соединений"
            className="w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/85 to-background/80 animate-in fade-in duration-700"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Восстановление шлицевых соединений
            </h1>
            <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              Производственная компания по восстановлению шлицевых соединений трансмиссии по всей стране
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">О компании</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">Мега Шлиц<sup>®</sup></span> — производственная компания, специализирующаяся на восстановлении шлицевых соединений деталей трансмиссии. 
                    Работаем с автосервисами и дилерскими центрами по всей России. Используем оборудование с ЧПУ, 
                    специальный металл с добавлением титана для долговечного шлицевого соединения, применяем термообработку 
                    и запатентованные технологии восстановления.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <Icon name="Award" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Патент РФ № 2829377</h4>
                      <p className="text-sm text-muted-foreground">
                        Способ восстановления шлицевого соединения на полноприводных автомобилях
                      </p>
                    </div>
                  </div>

                  <div className="relative group max-w-2xl mx-auto">
                    <div className="overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg group-hover:border-primary/40 transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/bd4c62cb-eb60-4650-bf0c-77c2bbd65ed0.jpg"
                        alt="Патент РФ № 2829377"
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              <Card className="text-center p-3">
                <Icon name="Award" className="h-8 w-8 mx-auto text-primary mb-1" />
                <h3 className="text-base font-bold">3+ лет</h3>
                <p className="text-xs text-muted-foreground">опыта работы</p>
              </Card>
              <Card className="text-center p-3">
                <Icon name="Car" className="h-8 w-8 mx-auto text-primary mb-1" />
                <h3 className="text-base font-bold">3000+</h3>
                <p className="text-xs text-muted-foreground">восстановленных деталей</p>
              </Card>
              <Card className="text-center p-3">
                <Icon name="Shield" className="h-8 w-8 mx-auto text-primary mb-1" />
                <h3 className="text-base font-bold">Гарантия</h3>
                <p className="text-xs text-muted-foreground">18 месяцев без ограничения пробега</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Преимущества нашей технологии</h2>
            <p className="text-lg text-muted-foreground">Почему восстановление выгоднее покупки новой детали</p>
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
                  Ремонт от 1-5 дней. Не нужно ждать заказа запчастей из-за границы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Высокая прочность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Используется легированная титаном сталь с дальнейшей термообработкой</p>
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

      <section id="process" className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Как мы работаем</h2>
            <p className="text-lg text-muted-foreground">
              Порядок работы восстановления
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Send" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <CardTitle className="text-xl">Заявка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оставьте заявку на сайте или позвоните нам для консультации
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Truck" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <CardTitle className="text-xl">Доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отправьте деталь через СДЭК или привезите лично в цех
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Tag" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <CardTitle className="text-xl">Маркировка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Принимаем деталь, маркируем и проводим диагностику
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Settings" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <CardTitle className="text-xl">Восстановление</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Восстановление шлицевого соединения с термообработкой </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Banknote" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <CardTitle className="text-xl">Оплата</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оплата после выполнения работ любым удобным способом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="PackageCheck" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      6
                    </div>
                  </div>
                  <CardTitle className="text-xl">Отправка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отправляем восстановленную деталь обратно через СДЭК
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground">Ответы на популярные вопросы о восстановлении шлицевых соединений</p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Как понять, что шлицы изношены?', a: 'Основные признаки: вибрация при разгоне и торможении, металлический стук при трогании с места, рывки при переключении передач, гул со стороны раздаточной коробки. Если заметили хотя бы один симптом — необходима диагностика.' },
                { q: 'Сколько времени занимает восстановление?', a: 'Восстановление занимает от 1 до 5 рабочих дней с момента получения деталей. Это зависит от загруженности производства. Однако благодаря отлаженному процессу, мы справляемся за 2 дня.' },
                { q: 'Можно ли восстановить сильно изношенные шлицы?', a: 'Да, наша запатентованная технология позволяет восстанавливать даже критически изношенные шлицы. Мы изготавливаем новое шлицевое соединение на станках с ЧПУ и проводим термообработку. Восстановленная деталь не уступает новой по прочности.' },
                { q: 'Какая гарантия на восстановленные детали?', a: 'На восстановление шлицевых соединений предоставляем гарантию 18 месяцев без ограничения пробега. Гарантия оформляется официальным талоном с печатью организации.' },
                { q: 'Нужно ли снимать детали с автомобиля самостоятельно?', a: 'Мы работаем только с уже снятыми деталями — занимаемся восстановлением, а не демонтажем. Вы можете снять детали самостоятельно или обратиться в любой автосервис. После этого привезите их к нам или отправьте транспортной компанией СДЭК.' },
                { q: 'Работаете ли вы только с определенными марками автомобилей?', a: 'Мы восстанавливаем шлицевые соединения на всех полноприводных моделях автомобилей. Звоните — проконсультируем по вашему случаю.' },
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

      <ServicesSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        popularFilter={popularFilter}
        setPopularFilter={setPopularFilter}
        filteredServices={filteredServices}
        categories={categories}
      />

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleFormSubmit={handleFormSubmit}
      />

      <ContactsSection />

      <footer className="border-t py-8 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/95ca077b-94b5-42c3-a7a7-f99244c50369.jpg" alt="Мега Шлиц" className="h-10 w-10 object-contain" />
              <span className="font-extrabold">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-secondary-foreground/80">
                © 2024 Мега Шлиц. Восстановление шлицевых соединений.
              </p>
              <div className="flex items-center gap-2 text-xs text-secondary-foreground/60">
                <Icon name="Eye" className="h-4 w-4" />
                <span>Просмотров: {viewCount.toLocaleString('ru-RU')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+79202520352"
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Позвонить"
        >
          <Icon name="Phone" className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Позвонить
          </span>
        </a>

        <a
          href="https://wa.me/79202520352"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Написать в WhatsApp
          </span>
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-28 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Вернуться наверх"
        >
          <Icon name="ArrowUp" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;