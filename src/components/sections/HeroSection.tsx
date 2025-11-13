import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/files/f668d529-788d-49c9-8c2d-c97a6c3ae8a1.jpg"
          alt="Восстановление шлицевых соединений"
          className="w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 animate-in fade-in duration-700"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Восстановление шлицевых соединений
          </h1>
          <p className="text-xl text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            Производственная компания по восстановлению шлицевых соединений трансмиссии по всей стране
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button size="lg" onClick={() => scrollToSection('services')}>
              Наши услуги
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" onClick={() => scrollToSection('contacts')}>
              Отправить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};