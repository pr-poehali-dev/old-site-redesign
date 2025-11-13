import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  quickConsultOpen: boolean;
  setQuickConsultOpen: (value: boolean) => void;
  quickFormData: { name: string; phone: string };
  setQuickFormData: (value: { name: string; phone: string }) => void;
  quickFormStatus: 'idle' | 'sending' | 'success' | 'error';
  handleQuickFormSubmit: (e: React.FormEvent) => void;
  scrollToSection: (section: string) => void;
}

export const Header = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  quickConsultOpen,
  setQuickConsultOpen,
  quickFormData,
  setQuickFormData,
  quickFormStatus,
  handleQuickFormSubmit,
  scrollToSection,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <img src="https://cdn.poehali.dev/files/95ca077b-94b5-42c3-a7a7-f99244c50369.jpg" alt="Мега Шлиц" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          <span className="text-xl font-extrabold text-secondary group-hover:text-primary transition-colors duration-300">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">Вопросы</button>
          <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
        </nav>

        <div className="flex items-center gap-2">
          <Button 
            className="hidden lg:flex bg-[#25D366] hover:bg-[#20BA5A]"
            onClick={() => window.open('https://wa.me/79202520352', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button 
            className="hidden md:flex"
            onClick={() => setQuickConsultOpen(!quickConsultOpen)}
          >
            <Icon name="Headphones" className="mr-2 h-4 w-4" />
            Консультация
          </Button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {quickConsultOpen && (
        <div className="hidden md:block border-t bg-background animate-in slide-in-from-top duration-300">
          <div className="container py-6">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon name="Headphones" className="h-5 w-5 text-primary" />
                    Быстрая консультация
                  </span>
                  <button onClick={() => setQuickConsultOpen(false)} className="hover:bg-muted p-1 rounded">
                    <Icon name="X" className="h-4 w-4" />
                  </button>
                </CardTitle>
                <CardDescription>Оставьте контакты, мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                {quickFormStatus === 'success' && (
                  <div className="mb-4 p-3 bg-primary/10 text-primary rounded-md text-sm">
                    ✓ Спасибо! Мы скоро свяжемся с вами.
                  </div>
                )}
                {quickFormStatus === 'error' && (
                  <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
                    Ошибка. Позвоните нам: +7 (831) 260-11-23
                  </div>
                )}
                <form onSubmit={handleQuickFormSubmit} className="space-y-3">
                  <Input 
                    placeholder="Ваше имя" 
                    required 
                    value={quickFormData.name}
                    onChange={(e) => setQuickFormData({...quickFormData, name: e.target.value})}
                    disabled={quickFormStatus === 'sending'}
                  />
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    required 
                    value={quickFormData.phone}
                    onChange={(e) => setQuickFormData({...quickFormData, phone: e.target.value})}
                    disabled={quickFormStatus === 'sending'}
                  />
                  <Button type="submit" className="w-full" disabled={quickFormStatus === 'sending'}>
                    {quickFormStatus === 'sending' ? 'Отправка...' : 'Перезвоните мне'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-in slide-in-from-top duration-300">
          <nav className="container py-4 flex flex-col gap-2">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">О компании</button>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Услуги</button>
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
  );
};