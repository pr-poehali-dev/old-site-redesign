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
}

export const ContactsSection = ({
  formData,
  setFormData,
  formStatus,
  handleFormSubmit,
}: ContactsSectionProps) => {


  return (
    <section id="contacts" className="py-12 border-t bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Оставить заявку</h2>
          <p className="text-muted-foreground text-lg">
            Заполните форму или позвоните нам
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              {formStatus === 'success' && (
                <div className="mb-4 p-3 bg-primary/10 text-primary rounded-md text-sm">
                  ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
                  Ошибка отправки. Попробуйте позже или позвоните нам напрямую.
                </div>
              )}
              <form className="space-y-4" onSubmit={handleFormSubmit}>
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
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  {formStatus === 'sending' ? 'Отправка...' : 'Отправить заявку'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="tel:+79202520352"
              className="flex flex-col items-center gap-3 p-5 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-lg">
                <Icon name="Phone" className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-center">Позвонить</span>
            </a>

            <a 
              href="https://wa.me/79202520352"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-lg">
                <Icon name="MessageCircle" className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-center">WhatsApp</span>
            </a>

            <a 
              href="mailto:megashlic@yandex.ru"
              className="flex flex-col items-center gap-3 p-5 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-lg">
                <Icon name="Mail" className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-center">Email</span>
            </a>

            <button 
              onClick={() => {
                const element = document.querySelector('iframe');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex flex-col items-center gap-3 p-5 rounded-lg border-2 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-lg">
                <Icon name="MapPin" className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-center">Адрес</span>
            </button>
          </div>

          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>г. Нижний Новгород, Восточный проезд, 11/1</p>
            <p>Пн-Пт: 9:30 - 17:30 | Сб-Вс: выходной</p>
          </div>

          <div className="w-full h-[300px] rounded-lg overflow-hidden border">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=43.915409%2C56.253487&z=16&l=map&pt=43.915409,56.253487,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
            ></iframe>
          </div>


        </div>
      </div>
    </section>
  );
};