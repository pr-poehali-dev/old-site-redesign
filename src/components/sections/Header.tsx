import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

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
  fullFormOpen: boolean;
  setFullFormOpen: (value: boolean) => void;
  formData: { name: string; phone: string; detail: string; message: string };
  setFormData: (value: { name: string; phone: string; detail: string; message: string }) => void;
  formStatus: 'idle' | 'sending' | 'success' | 'error';
  handleFormSubmit: (e: React.FormEvent) => void;
  handlePhoneChange: (value: string, setter: (data: any) => void, currentData: any) => void;
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
  fullFormOpen,
  setFullFormOpen,
  formData,
  setFormData,
  formStatus,
  handleFormSubmit,
  handlePhoneChange,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
          <img src="https://cdn.poehali.dev/files/3b7acb48-4a62-4ce2-83d2-80821e9215a3.jpg" alt="Мега Шлиц" className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-110" />
          <span className="text-base md:text-xl font-extrabold text-secondary group-hover:text-primary transition-colors duration-300">Мега Шлиц<sup className="text-[10px] md:text-xs ml-0.5">®</sup></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          <button onClick={() => scrollToSection('hero')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Главная</button>
          <button onClick={() => scrollToSection('services')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('about')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">О компании</button>
          <button onClick={() => scrollToSection('process')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Регионам</button>
          <button onClick={() => scrollToSection('turnkey')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Под ключ</button>
          <button onClick={() => scrollToSection('reviews')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Icon name="Star" className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            Отзывы
          </button>
        </nav>

        <div className="flex items-center gap-1.5 md:gap-2">
          <Button 
            className="hidden xl:flex text-xs bg-green-600 hover:bg-green-700 text-white"
            size="sm"
            onClick={() => scrollToSection('contacts')}
          >
            <Icon name="MapPin" className="mr-1.5 h-3.5 w-3.5" />
            Контакты
          </Button>
          <Button 
            className="hidden lg:flex text-xs bg-green-600 hover:bg-green-700 text-white"
            size="sm"
            onClick={() => window.open('https://web.telegram.org/a/#777000', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-1.5 h-3.5 w-3.5" />
            Telegram
          </Button>
          <Button 
            className="hidden md:flex text-xs bg-green-600 hover:bg-green-700 text-white"
            size="sm"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).ym) {
                (window as any).ym(96856709, 'reachGoal', 'phone_click');
              }
              window.location.href = 'tel:+79202520352';
            }}
          >
            <Icon name="Phone" className="mr-1.5 h-3.5 w-3.5" />
            Позвонить
          </Button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 hover:bg-muted rounded-md transition-colors"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {quickConsultOpen && (
        <div className="border-t bg-background animate-in slide-in-from-top duration-300">
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
                  <div className="mb-4 p-3 bg-primary/10 text-primary rounded-md text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <Icon name="CheckCircle2" className="h-5 w-5 flex-shrink-0" />
                    <span>Спасибо! Мы скоро свяжемся с вами.</span>
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
                    minLength={18}
                    maxLength={18}
                    value={quickFormData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value, setQuickFormData, quickFormData)}
                    disabled={quickFormStatus === 'sending'}
                  />
                  <Button type="submit" className="w-full" disabled={quickFormStatus === 'sending'}>
                    {quickFormStatus === 'sending' ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      'Перезвоните мне'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-in slide-in-from-top duration-300">
          <nav className="container py-3 flex flex-col gap-1">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">О компании</button>
            <button onClick={() => scrollToSection('process')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Регионам</button>
            <button onClick={() => scrollToSection('turnkey')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Под ключ</button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors flex items-center gap-2">
              <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Отзывы
            </button>
            <div className="flex gap-2 mt-2">
              <Button className="flex-1" variant="outline" onClick={() => { setMobileMenuOpen(false); setQuickConsultOpen(true); }}>
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Написать
              </Button>
              <Button className="flex-1" onClick={() => window.location.href = 'tel:+79202520352'}>
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Позвонить
              </Button>
            </div>
          </nav>
        </div>
      )}

      <Dialog open={fullFormOpen} onOpenChange={setFullFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">Отправить заявку</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          
          {formStatus === 'success' && (
            <div className="p-3 bg-primary/10 text-primary rounded-md text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <Icon name="CheckCircle2" className="h-5 w-5 flex-shrink-0" />
              <span>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
            </div>
          )}
          {formStatus === 'error' && (
            <div className="p-3 bg-destructive/10 text-destructive rounded-md text-sm">
              Ошибка отправки. Попробуйте позже или позвоните нам напрямую.
            </div>
          )}

          <form className="space-y-3 sm:space-y-4" onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium mb-2">
                  Ваше имя <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="modal-name" 
                  placeholder="Иван Иванов" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium mb-2">
                  Телефон <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="modal-phone" 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  required 
                  minLength={18}
                  maxLength={18}
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value, setFormData, formData)}
                  disabled={formStatus === 'sending'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-detail" className="block text-sm font-medium mb-2">
                Какую деталь нужно восстановить?
              </label>
              <Input 
                id="modal-detail" 
                placeholder="Например: вал раздатки Hyundai"
                value={formData.detail}
                onChange={(e) => setFormData({...formData, detail: e.target.value})}
                disabled={formStatus === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium mb-2">
                Дополнительная информация
              </label>
              <textarea 
                id="modal-message"
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Состояние детали, сроки..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={formStatus === 'sending'}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? (
                <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Icon name="Send" className="mr-2 h-5 w-5" />
              )}
              {formStatus === 'sending' ? 'Отправка...' : 'Отправить заявку'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
};