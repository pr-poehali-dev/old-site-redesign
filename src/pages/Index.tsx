import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { GalleryCarouselSection } from '@/components/sections/GalleryCarouselSection';
import { AboutAndAdvantagesSection } from '@/components/sections/AboutAndAdvantagesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
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
  { id: 1, name: 'Восстановление шлицев вала раздатки Hyundai/Kia / Mazda CX-7 / Mazda CX-9 / Volvo / Land Rover / Ford Kuga / Haval F7', category: 'Раздатка', price: 10000, duration: '1-3 дня', popular: true, description: 'Устраняем износ шлицев на валу раздатки. Деталь восстанавливается до заводских размеров. Без замены — экономия до 90% от стоимости новой детали', image: 'https://cdn.poehali.dev/files/f668d529-788d-49c9-8c2d-c97a6c3ae8a1.jpg' },
  { id: 12, name: 'Ремонт корзины фрикционов муфты Hyundai/Kia (478003B520)', category: 'Раздатка', price: 5000, duration: '1-2 дня', popular: true, description: 'Ремонтируем корзину фрикционов муфты полного привода роботизированной лазерной сваркой. Высокая точность и прочность шва. Деталь № 478003B520. Новая стоит в 3 раза дороже', image: 'https://cdn.poehali.dev/files/b3c88cc7-9023-4aeb-b40d-6c50c585b3bd.jpg' },
  { id: 2, name: 'Восстановление вала + дифференциал в усиленное шлицевое Hyundai/Kia с АКПП', category: 'Раздатка', price: 25000, duration: '1-3 дня', popular: true, description: 'Восстанавливаем обе детали — вал и дифференциал. Делаем усиленное соединение — прослужит дольше оригинала. Подходит для автомобилей с автоматической коробкой', image: 'https://cdn.poehali.dev/files/d28fc2e5-f77d-4575-9e54-ee54ff497afb.jpg' },
  { id: 3, name: 'Восстановление вала + дифференциал в оригинальное шлицевое Hyundai/Kia с МКПП', category: 'Раздатка', price: 35000, duration: '1-3 дня', popular: true, description: 'Восстанавливаем обе детали — вал и дифференциал в заводские размеры. Специально для автомобилей с механической коробкой передач', image: 'https://cdn.poehali.dev/files/ec06826c-c9b9-4e9c-ab6c-918a959f73f1.jpg' },
  { id: 6, name: 'Вал раздатки Tiguan под оригинальный корпус дифференциала', category: 'Раздатка', price: 20000, duration: '1-3 дня', popular: true, description: 'Восстанавливаем вал раздатки для Volkswagen Tiguan. Встанет в ваш родной корпус дифференциала без доработок', image: 'https://cdn.poehali.dev/files/d850d4f8-78b4-4b63-b223-ab3fcd4b27a2.jpg' },
  { id: 7, name: 'Дифференциал Tiguan под оригинальный вал раздатки', category: 'Раздатка', price: 20000, duration: '1-3 дня', popular: true, description: 'Восстанавливаем дифференциал для Volkswagen Tiguan. Подойдёт к вашему родному валу раздатки без замены других деталей', image: 'https://cdn.poehali.dev/files/b3566624-d327-4f7d-9698-b55c4cc7560f.jpg' },
  { id: 8, name: 'Комплект вал + чашка Tiguan под оригинальный размер', category: 'Раздатка', price: 35000, duration: '1-3 дня', popular: true, description: 'Комплект из двух деталей — вал раздатки и чашка дифференциала для Tiguan. Восстанавливаем обе детали в заводские размеры', image: 'https://cdn.poehali.dev/files/7c988958-4822-4b53-8f44-c03391e2be03.jpeg' },
  { id: 11, name: 'Восстановление вала + дифференциал шлицевое Mazda CX-7', category: 'Раздатка', price: 35000, duration: '1-3 дня', popular: true, description: 'Восстанавливаем обе детали — вал и дифференциал для Mazda CX-7. Возвращаем заводские размеры. Проводим термообработку для прочности', image: 'https://cdn.poehali.dev/files/58a834b2-a324-4430-878a-40a9de358bd1.jpg' },
  { id: 4, name: 'Раздатка в сборе на обмен под оригинальный корпус дифференциала Hyundai/Kia', category: 'Раздатка', price: 20000, duration: 'В наличии', popular: true, description: 'Готовая раздатка — сразу на обмен. Вы отдаёте свою старую, получаете восстановленную. Встанет в ваш корпус дифференциала. Гарантия 1,5 года', image: 'https://cdn.poehali.dev/files/48d37a61-c9c0-4999-983a-ee9cc1088257.jpg' },
  { id: 5, name: 'Раздатка в сборе на обмен + корпус дифференциала Hyundai/Kia', category: 'Раздатка', price: 30000, duration: 'В наличии', popular: true, description: 'Полный комплект — раздатка и корпус дифференциала. Готово к установке. Меняете свой старый узел на восстановленный. Гарантия 1,5 года', image: 'https://cdn.poehali.dev/files/7d01f14d-b68f-4ce2-9a08-95b5a33d5bec.jpg' },
  { id: 9, name: 'Раздатка в сборе Tiguan на обмен с АКПП', category: 'Раздатка', price: 35000, duration: 'В наличии', popular: true, description: 'Готовая раздатка для Tiguan с автоматом — сразу на обмен. Встанет в ваш корпус дифференциала. Гарантия 1,5 года', image: 'https://cdn.poehali.dev/files/91489e6b-a3d8-4934-8dec-a8899a6b6b63.jpg' },
  { id: 10, name: 'Раздатка в сборе + корпус дифференциала на обмен Tiguan с АКПП', category: 'Раздатка', price: 55000, duration: 'В наличии', popular: true, description: 'Полный узел для Tiguan — раздатка и корпус дифференциала. Готово к установке. Обмениваете свой старый на восстановленный. Гарантия 1,5 года', image: 'https://cdn.poehali.dev/files/e1628af3-3240-49d2-8798-0ed56ac92218.jpg' },
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

      <HeroSection scrollToSection={scrollToSection} />

      <AboutAndAdvantagesSection />

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

      <ContactsSection
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleFormSubmit={handleFormSubmit}
      />

      <FooterWithButtons viewCount={viewCount} showScrollTop={showScrollTop} />
    </div>
  );
};

export default Index;