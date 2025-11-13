import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
