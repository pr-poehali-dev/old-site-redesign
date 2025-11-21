import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
  onConsultClick?: () => void;
  onFullFormClick?: () => void;
}

const backgroundImages = [
  'https://cdn.poehali.dev/files/f668d529-788d-49c9-8c2d-c97a6c3ae8a1.jpg',
  'https://cdn.poehali.dev/files/d28fc2e5-f77d-4575-9e54-ee54ff497afb.jpg',
  'https://cdn.poehali.dev/files/ec06826c-c9b9-4e9c-ab6c-918a959f73f1.jpg',
  'https://cdn.poehali.dev/files/48d37a61-c9c0-4999-983a-ee9cc1088257.jpg',
  'https://cdn.poehali.dev/files/7d01f14d-b68f-4ce2-9a08-95b5a33d5bec.jpg',
  'https://cdn.poehali.dev/files/d850d4f8-78b4-4b63-b223-ab3fcd4b27a2.jpg',
  'https://cdn.poehali.dev/files/b3566624-d327-4f7d-9698-b55c4cc7560f.jpg',
  'https://cdn.poehali.dev/files/7c988958-4822-4b53-8f44-c03391e2be03.jpeg',
  'https://cdn.poehali.dev/files/91489e6b-a3d8-4934-8dec-a8899a6b6b63.jpg',
  'https://cdn.poehali.dev/files/e1628af3-3240-49d2-8798-0ed56ac92218.jpg',
  'https://cdn.poehali.dev/files/58a834b2-a324-4430-878a-40a9de358bd1.jpg',
  'https://cdn.poehali.dev/files/b3c88cc7-9023-4aeb-b40d-6c50c585b3bd.jpg',
];

export const HeroSection = ({ scrollToSection, onConsultClick, onFullFormClick }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative py-6 md:py-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Восстановление шлицевых соединений"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Восстановление шлицевых соединений
          </h1>
          <p className="text-sm md:text-lg text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            Производственная компания по восстановлению шлицевых соединений трансмиссии по всей стране
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button size="default" className="md:h-11 md:px-8" variant="secondary" onClick={onConsultClick}>
              Консультация
              <Icon name="Headphones" className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button size="default" className="md:h-11 md:px-8" onClick={onFullFormClick}>
              Отправить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};