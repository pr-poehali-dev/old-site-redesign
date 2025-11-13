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
  const [formData, setFormData] = useState({ name: '', phone: '', detail: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [quickConsultOpen, setQuickConsultOpen] = useState(false);
  const [quickFormData, setQuickFormData] = useState({ name: '', phone: '' });
  const [quickFormStatus, setQuickFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/96c20d62-17ac-4514-bba8-a36e3442d0da.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/cff3532b-c50c-4441-bc30-33af77a3bea6.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/99b1c7e3-2f34-4512-9d07-9c30a801f51f.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/1d99926f-1ef6-42ce-ae00-0485464534a9.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/d004d95e-3662-40fc-86c6-17bb8672cf10.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/7469e23e-d800-4e36-b70c-b5edbddf946d.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/a85c07d7-892c-45a5-b6df-ffdda8176bfb.jpg',
              'https://cdn.poehali.dev/projects/8ee1c24b-26fc-4abd-acc6-886bdb63cd67/files/bdf0dd8f-7542-4347-a5ae-801bd2a68e2c.jpg',
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
        href="https://wa.me/79202520352"
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

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-24 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Вернуться наверх"
        >
          <Icon name="ArrowUp" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;