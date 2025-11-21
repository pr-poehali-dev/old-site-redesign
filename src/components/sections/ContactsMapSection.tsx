import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export const ContactsMapSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://functions.poehali.dev/fd96c7e7-0adf-485f-a51a-abcd609b660d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          detail: 'Форма из раздела контактов',
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacts" className="py-8 md:py-12 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Контакты</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Мы находимся в Нижнем Новгороде
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-sm text-muted-foreground">
                    г. Нижний Новгород,<br />
                    Восточный проезд, 11/1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-sm text-muted-foreground">
                    Пн-Пт: 9:30 - 17:30<br />
                    Сб-Вс: выходной
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефоны</h3>
                  <a href="tel:+79202520352" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +7 (920) 252-03-52
                  </a>
                  <a href="tel:+78312601123" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +7 (831) 260-11-23 (производство)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:megashlic@yandex.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    megashlic@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="MessageSquare" className="h-5 w-5 text-primary" />
                Обратная связь
              </h3>

              {formStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-600/10 text-green-600 rounded-md text-sm">
                  ✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
                  Ошибка отправки. Позвоните нам: +7 (920) 252-03-52
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>
                <div>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm"
                    placeholder="Ваш вопрос или комментарий..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={formStatus === 'sending'}>
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  {formStatus === 'sending' ? 'Отправка...' : 'Отправить'}
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden border-2 shadow-lg">
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
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
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