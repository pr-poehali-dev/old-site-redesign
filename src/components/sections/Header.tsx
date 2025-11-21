import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
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
  fullFormOpen: boolean;
  setFullFormOpen: (value: boolean) => void;
  formData: { name: string; phone: string; detail: string; message: string };
  setFormData: (value: { name: string; phone: string; detail: string; message: string }) => void;
  formStatus: 'idle' | 'sending' | 'success' | 'error';
  handleFormSubmit: (e: React.FormEvent) => void;
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
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
          <img src="https://cdn.poehali.dev/files/39a50b29-6e3c-455b-b374-e7e4555f1875.jpg" alt="Мега Шлиц" className="h-10 w-10 md:h-14 md:w-14 object-contain transition-transform duration-300 group-hover:scale-110" />
          <span className="text-base md:text-xl font-extrabold text-secondary group-hover:text-primary transition-colors duration-300">Мега Шлиц<sup className="text-[10px] md:text-xs ml-0.5">®</sup></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          <button onClick={() => scrollToSection('hero')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Главная</button>
          <button onClick={() => scrollToSection('services')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('about')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">О компании</button>
          <button onClick={() => scrollToSection('turnkey')} className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Под ключ</button>
        </nav>

        <div className="flex items-center gap-1.5 md:gap-2">
          <Button 
            className="hidden lg:flex text-xs"
            size="sm"
            onClick={() => window.open('https://wa.me/79202520352', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-1.5 h-3.5 w-3.5" />
            WhatsApp
          </Button>
          <Button 
            className="hidden md:flex text-xs"
            size="sm"
            onClick={() => setQuickConsultOpen(!quickConsultOpen)}
          >
            <Icon name="Headphones" className="mr-1.5 h-3.5 w-3.5" />
            Консультация
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
          <nav className="container py-3 flex flex-col gap-1">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">О компании</button>
            <button onClick={() => scrollToSection('turnkey')} className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors">Под ключ</button>
            <Button className="mt-2" onClick={() => setQuickConsultOpen(true)}>
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Написать
            </Button>
          </nav>
        </div>
      )}

      <Dialog open={fullFormOpen} onOpenChange={setFullFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Отправить заявку</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          
          {formStatus === 'success' && (
            <div className="p-3 bg-primary/10 text-primary rounded-md text-sm">
              ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="p-3 bg-destructive/10 text-destructive rounded-md text-sm">
              Ошибка отправки. Попробуйте позже или позвоните нам напрямую.
            </div>
          )}

          <form className="space-y-4" onSubmit={handleFormSubmit}>
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
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
              <Icon name="Send" className="mr-2 h-5 w-5" />
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