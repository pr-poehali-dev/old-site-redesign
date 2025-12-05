import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  formData: { name: string; phone: string; detail: string; message: string };
  setFormData: (value: { name: string; phone: string; detail: string; message: string }) => void;
  formStatus: 'idle' | 'sending' | 'success' | 'error';
  handleFormSubmit: (e: React.FormEvent) => void;
  handlePhoneChange: (value: string, setter: (data: any) => void, currentData: any) => void;
}

export const ContactsSection = ({
  formData,
  setFormData,
  formStatus,
  handleFormSubmit,
  handlePhoneChange,
}: ContactsSectionProps) => {


  return (
    <section id="contacts" className="py-6 md:py-8 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Оставить заявку</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Заполните форму или позвоните нам
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
          <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
            <CardContent className="pt-4 md:pt-5 p-3 md:p-5">
              {formStatus === 'success' && (
                <div className="mb-3 p-2 bg-primary/10 text-primary rounded-md text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Icon name="CheckCircle2" className="h-4 w-4 flex-shrink-0" />
                  <span>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-3 p-2 bg-destructive/10 text-destructive rounded-md text-xs">
                  Ошибка отправки. Попробуйте позже или позвоните нам напрямую.
                </div>
              )}
              <form className="space-y-3" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Ваше имя <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={formStatus === 'sending'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Телефон <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="phone" 
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
                  <label htmlFor="detail" className="block text-sm font-medium mb-1">
                    Какую деталь нужно восстановить?
                  </label>
                  <Input 
                    id="detail" 
                    placeholder="Например: вал раздатки Hyundai"
                    value={formData.detail}
                    onChange={(e) => setFormData({...formData, detail: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Дополнительная информация
                  </label>
                  <textarea 
                    id="message"
                    rows={2}
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
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            <a 
              href="tel:+79202520352"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(96856709, 'reachGoal', 'phone_click');
                }
              }}
              className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Phone" className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-center">Позвонить</span>
            </a>

            <a 
              href="https://web.telegram.org/a/#777000"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(96856709, 'reachGoal', 'telegram_click');
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img src="https://cdn.poehali.dev/files/f2871fc3-49b5-405a-9d41-3a4448fdf56b.png" alt="Telegram" className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-center">Telegram</span>
            </a>

            <a 
              href="mailto:megashlic@yandex.ru"
              className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Mail" className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-center">Написать</span>
            </a>
          </div>

          <div className="space-y-2 md:space-y-3">
            <div className="w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden border-2 shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=43.915409%2C56.253487&z=16&l=map&pt=43.915409,56.253487,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              ></iframe>
            </div>

            <a 
              href="https://yandex.ru/maps/?rtext=~56.253487,43.915409&rtt=auto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full" size="lg">
                <Icon name="Navigation" className="mr-2 h-5 w-5" />
                Проложить маршрут
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};