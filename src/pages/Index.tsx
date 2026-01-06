import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { GalleryCarouselSection } from '@/components/sections/GalleryCarouselSection';
import { RutubeSection } from '@/components/sections/RutubeSection';
import { AboutAndAdvantagesSection } from '@/components/sections/AboutAndAdvantagesSection';
import { TurnkeySection } from '@/components/sections/TurnkeySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { ContactsMapSection } from '@/components/sections/ContactsMapSection';
import { FooterWithButtons } from '@/components/sections/FooterWithButtons';

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

const services: Service[] = [
  { id: 1, name: 'Восстановление шлицев вала раздатки Hyundai/Kia / Mazda CX-7 / Mazda CX-9 / Volvo / Land Rover / Ford Kuga / Haval F7', category: 'Раздатка', price: 9990, duration: '1-3 дня', popular: true, description: `Устраняем износ шлицев на валу раздатки. Деталь восстанавливается до заводских размеров.

Подходит для:
• Hyundai Santa Fe (2006-2018)
• Hyundai ix55, Tucson
• Kia Sorento (2009-2020)
• Kia Sportage, Mohave
• Mazda CX-7, CX-9
• Volvo XC60, XC90
• Land Rover Freelander
• Ford Kuga
• Haval F7, H6

Экономия до 90% от стоимости новой детали`, image: 'https://cdn.poehali.dev/files/f668d529-788d-49c9-8c2d-c97a6c3ae8a1.jpg' },
  { id: 12, name: 'Ремонт корзины фрикционов муфты Hyundai/Kia 47800-3B520', category: 'Раздатка', price: 4990, duration: '1-2 дня', popular: true, description: `Ремонтируем корзину фрикционов муфты полного привода роботизированной лазерной сваркой. Высокая точность и прочность шва. Деталь № 47800-3B520.

Подходит для:
• Hyundai Santa Fe (2006-2012, CM)
• Hyundai ix55 (Veracruz)
• Hyundai ix35
• Kia Sorento (2009-2015, XM)
• Kia Sportage
• Kia Mohave (Borrego)

Оригинальная деталь стоит в 3 раза дороже. Мы восстанавливаем за 4990₽ с гарантией 12 месяцев`, image: 'https://cdn.poehali.dev/files/b3c88cc7-9023-4aeb-b40d-6c50c585b3bd.jpg' },
  { id: 2, name: 'Восстановление вала + дифференциал в усиленное шлицевое Hyundai/Kia с АКПП', category: 'Раздатка', price: 24990, duration: '1-3 дня', popular: true, description: `Восстанавливаем обе детали — вал и дифференциал. Делаем усиленное соединение — прослужит дольше оригинала.

Подходит для автомобилей с АКПП:
• Hyundai Santa Fe (все поколения)
• Hyundai ix55, Tucson
• Kia Sorento (все поколения)
• Kia Sportage, Mohave

Усиленное шлицевое соединение увеличивает срок службы на 40%`, image: 'https://cdn.poehali.dev/files/d28fc2e5-f77d-4575-9e54-ee54ff497afb.jpg' },
  { id: 3, name: 'Восстановление вала + дифференциал в оригинальное шлицевое Hyundai/Kia с МКПП', category: 'Раздатка', price: 34990, duration: '1-3 дня', popular: true, description: `Восстанавливаем обе детали — вал и дифференциал в заводские размеры.

Подходит для автомобилей с МКПП:
• Hyundai Tucson (дизель)
• Kia Sorento (дизель)
• Kia Sportage (механика)

Точное соблюдение оригинальных размеров. Гарантия 12 месяцев`, image: 'https://cdn.poehali.dev/files/ec06826c-c9b9-4e9c-ab6c-918a959f73f1.jpg' },
  { id: 6, name: 'Вал раздатки Tiguan под оригинальный корпус дифференциала', category: 'Раздатка', price: 19990, duration: '1-3 дня', popular: true, description: `Восстанавливаем вал раздатки для Volkswagen Tiguan. Встанет в ваш родной корпус дифференциала без доработок.

Подходит для:
• VW Tiguan (2007-2016, 5N)
• VW Tiguan (2016-2024, 5NA)
• Раздаточная коробка Haldex Gen 4, Gen 5

Восстановление до заводских размеров. Установка без переделок`, image: 'https://cdn.poehali.dev/files/d850d4f8-78b4-4b63-b223-ab3fcd4b27a2.jpg' },
  { id: 7, name: 'Дифференциал Tiguan под оригинальный вал раздатки', category: 'Раздатка', price: 19990, duration: '1-3 дня', popular: true, description: 'Восстанавливаем дифференциал для Volkswagen Tiguan. Подойдёт к вашему родному валу раздатки без замены других деталей', image: 'https://cdn.poehali.dev/files/b3566624-d327-4f7d-9698-b55c4cc7560f.jpg' },
  { id: 8, name: 'Комплект вал + чашка Tiguan под оригинальный размер', category: 'Раздатка', price: 34990, duration: '1-3 дня', popular: true, description: 'Комплект из двух деталей — вал раздатки и чашка дифференциала для Tiguan. Восстанавливаем обе детали в заводские размеры', image: 'https://cdn.poehali.dev/files/7c988958-4822-4b53-8f44-c03391e2be03.jpeg' },
  { id: 11, name: 'Восстановление вала + дифференциал шлицевое Mazda CX-7', category: 'Раздатка', price: 34990, duration: '1-3 дня', popular: true, description: 'Восстанавливаем обе детали — вал и дифференциал для Mazda CX-7. Возвращаем заводские размеры. Подходит для Mazda CX-7 (2006-2012) и Mazda CX-9 (2007-2015). Термообработка для увеличения прочности. Срок службы как у новой детали', image: 'https://cdn.poehali.dev/files/58a834b2-a324-4430-878a-40a9de358bd1.jpg' },
  { id: 4, name: 'Раздатка в сборе на обмен под оригинальный корпус дифференциала Hyundai/Kia', category: 'Раздатка', price: 19990, duration: 'В наличии', popular: true, description: 'Готовая раздатка — сразу на обмен. Вы отдаёте свою старую, получаете восстановленную. Встанет в ваш корпус дифференциала. Гарантия 12 месяцев без ограничения пробега', image: 'https://cdn.poehali.dev/files/48d37a61-c9c0-4999-983a-ee9cc1088257.jpg' },
  { id: 5, name: 'Раздатка в сборе на обмен + корпус дифференциала Hyundai/Kia', category: 'Раздатка', price: 29990, duration: 'В наличии', popular: true, description: 'Полный комплект — раздатка и корпус дифференциала. Готово к установке. Меняете свой старый узел на восстановленный. Гарантия 12 месяцев без ограничения пробега', image: 'https://cdn.poehali.dev/files/7d01f14d-b68f-4ce2-9a08-95b5a33d5bec.jpg' },
  { id: 9, name: 'Раздатка в сборе Tiguan на обмен с АКПП', category: 'Раздатка', price: 34990, duration: 'В наличии', popular: true, description: 'Готовая раздатка для Tiguan с автоматом — сразу на обмен. Встанет в ваш корпус дифференциала. Гарантия 12 месяцев без ограничения пробега', image: 'https://cdn.poehali.dev/files/91489e6b-a3d8-4934-8dec-a8899a6b6b63.jpg' },
  { id: 10, name: 'Раздатка в сборе + корпус дифференциала на обмен Tiguan с АКПП', category: 'Раздатка', price: 54990, duration: 'В наличии', popular: true, description: 'Полный узел для Tiguan — раздатка и корпус дифференциала. Готово к установке. Обмениваете свой старый на восстановленный. Гарантия 12 месяцев без ограничения пробега', image: 'https://cdn.poehali.dev/files/b6b6d94e-516d-4aa1-b81b-cb423cf4af49.jpg' },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [popularFilter, setPopularFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', detail: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [quickConsultOpen, setQuickConsultOpen] = useState(false);
  const [quickFormData, setQuickFormData] = useState({ name: '', phone: '' });
  const [quickFormStatus, setQuickFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fullFormOpen, setFullFormOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewCount, setViewCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.length === 0) return '';
    
    let formatted = '+7';
    
    if (cleaned.length > 1) {
      const withoutCountryCode = cleaned.startsWith('7') || cleaned.startsWith('8') ? cleaned.slice(1) : cleaned;
      
      if (withoutCountryCode.length > 0) {
        formatted += ' (' + withoutCountryCode.slice(0, 3);
      }
      if (withoutCountryCode.length >= 4) {
        formatted += ') ' + withoutCountryCode.slice(3, 6);
      }
      if (withoutCountryCode.length >= 7) {
        formatted += '-' + withoutCountryCode.slice(6, 8);
      }
      if (withoutCountryCode.length >= 9) {
        formatted += '-' + withoutCountryCode.slice(8, 10);
      }
    }
    
    return formatted;
  };

  const handlePhoneChange = (value: string, setter: (data: any) => void, currentData: any) => {
    const formatted = formatPhoneNumber(value);
    setter({ ...currentData, phone: formatted });
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all';
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

  const isPhoneValid = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 11;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://functions.poehali.dev/9b6ada36-da84-4729-b828-3e41115b8136', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'Полная заявка',
          name: formData.name,
          phone: formData.phone,
          detail: formData.detail,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', detail: '', message: '' });
        setTimeout(() => {
          setFullFormOpen(false);
          setTimeout(() => {
            setFormStatus('idle');
          }, 300);
        }, 2500);
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
      const response = await fetch('https://functions.poehali.dev/9b6ada36-da84-4729-b828-3e41115b8136', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'Быстрая консультация',
          name: quickFormData.name,
          phone: quickFormData.phone,
          detail: '',
          message: 'Запрос на консультацию из шапки сайта'
        }),
      });

      if (response.ok) {
        setQuickFormStatus('success');
        setQuickFormData({ name: '', phone: '' });
        setTimeout(() => {
          setQuickConsultOpen(false);
          setTimeout(() => {
            setQuickFormStatus('idle');
          }, 300);
        }, 2500);
      } else {
        setQuickFormStatus('error');
        setTimeout(() => setQuickFormStatus('idle'), 5000);
      }
    } catch (error) {
      setQuickFormStatus('error');
      setTimeout(() => setQuickFormStatus('idle'), 5000);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center">
        <div className="text-center space-y-4 animate-in fade-in duration-700">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground animate-in slide-in-from-bottom-4 duration-700 delay-200">
              Мега Шлиц<sup className="text-sm">®</sup>
            </h2>
            <p className="text-sm text-muted-foreground animate-in slide-in-from-bottom-4 duration-700 delay-300">
              Загрузка...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
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
        fullFormOpen={fullFormOpen}
        setFullFormOpen={setFullFormOpen}
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleFormSubmit={handleFormSubmit}
        handlePhoneChange={handlePhoneChange}
      />

      <HeroSection 
        scrollToSection={scrollToSection} 
        onConsultClick={() => setQuickConsultOpen(true)}
        onFullFormClick={() => setFullFormOpen(true)}
      />

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
        onFormOpen={(serviceName) => {
          setFormData(prev => ({ ...prev, detail: serviceName }));
          setFullFormOpen(true);
        }}
      />

      <AboutAndAdvantagesSection />

      <TurnkeySection onFormOpen={() => setFullFormOpen(true)} />

      <RutubeSection />

      <ReviewsSection />

      <ContactsMapSection />

      {/* SEO текстовый блок */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="prose prose-sm md:prose-base max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Восстановление шлицевых соединений в Нижнем Новгороде</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Мега Шлиц</strong> — производственная компания, специализирующаяся на восстановлении шлицевых соединений деталей полного привода. 
                Мы используем запатентованную технологию (патент РФ № 2829377), которая позволяет восстанавливать изношенные детали до заводских параметров с гарантией качества на 12 месяцев.
              </p>
              
              <p>
                Наша компания работает с автомобилями всех популярных марок с полным приводом: <strong className="text-foreground">Hyundai Santa Fe</strong>, Hyundai Tucson, Hyundai ix35, Hyundai Creta, 
                <strong className="text-foreground"> Kia Sorento</strong>, Kia Sportage, Kia Mohave, <strong className="text-foreground">Volkswagen Tiguan</strong>, Mazda CX-7, Mazda CX-9, 
                Volvo XC60, Volvo XC90, Land Rover Freelander, Ford Kuga, Haval F7, Haval H6 и многих других моделей.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">Почему выбирают нас?</h3>
              
              <p>
                <strong className="text-foreground">Экономия до 90%</strong> — восстановление шлицевых соединений обходится значительно дешевле покупки новой детали. 
                Например, новая раздатка 0AU409053T для Volkswagen Tiguan I стоит более 350 000 рублей, а мы восстанавливаем её под ключ за 34 990 рублей с полной гарантией.
              </p>
              
              <p>
                <strong className="text-foreground">Высокое качество</strong> — мы используем современное оборудование для восстановления шлицев, включая роботизированную лазерную сварку. 
                В работе применяем специальные сплавы с добавлением титана и обязательную термообработку, что увеличивает срок службы восстановленных деталей.
              </p>
              
              <p>
                <strong className="text-foreground">Работаем со всей Россией</strong> — принимаем детали на восстановление от частных лиц, автосервисов и дилерских центров из любого региона. 
                Отправить деталь можно через транспортные компании (СДЭК, ПЭК, Деловые Линии). После восстановления отправляем обратно в ваш город.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">Наши услуги</h3>
              
              <p>
                • <strong className="text-foreground">Восстановление вала раздатки</strong> — устраняем износ шлицев, восстанавливаем геометрию до заводских размеров (от 9 990 ₽)<br/>
                • <strong className="text-foreground">Ремонт корзины фрикционов</strong> — лазерная сварка корзины муфты 47800-3B520 (4 990 ₽)<br/>
                • <strong className="text-foreground">Ремонт дифференциала</strong> — восстановление внутренних шлицев корпуса дифференциала (от 19 990 ₽)<br/>
                • <strong className="text-foreground">Ремонт раздатки под ключ</strong> — полный цикл работ от изношенной до новой (от 19 990 ₽)<br/>
                • <strong className="text-foreground">Восстановление вала + дифференциал</strong> — комплексное восстановление обеих деталей (от 24 990 ₽)
              </p>
              
              <p className="mt-6 text-center">
                <strong className="text-foreground text-lg">Звоните прямо сейчас: </strong>
                <a href="tel:+79202520352" className="text-primary hover:underline font-bold text-lg">+7 (920) 252-03-52</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterWithButtons 
        viewCount={viewCount} 
        showScrollTop={showScrollTop} 
        onConsultClick={() => setFullFormOpen(true)}
      />
    </div>
  );
};

export default Index;