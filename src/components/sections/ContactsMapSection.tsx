import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export const ContactsMapSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    let formatted = '+7';
    if (cleaned.length > 1) {
      const withoutCountryCode = cleaned.startsWith('7') || cleaned.startsWith('8') ? cleaned.slice(1) : cleaned;
      if (withoutCountryCode.length > 0) {
        formatted += ' (' + withoutCountryCode.slice(0, 3);
      }
      if (withoutCountryCode.length >= 4) {
        formatted += ') ' + withoutCountryCode.slice(3, 6);
      }
      if (withoutCountryCode.length >= 7) {
        formatted += '-' + withoutCountryCode.slice(6, 8);
      }
      if (withoutCountryCode.length >= 9) {
        formatted += '-' + withoutCountryCode.slice(8, 10);
      }
    }
    return formatted;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const TELEGRAM_BOT_TOKEN = '7788513036:AAGqjdHnrPZNQfKkrO7DXvzwWgldbxhpXP4';
    const TELEGRAM_CHAT_ID = '1312732538';

    const message = `🔔 Новая заявка с сайта!\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n💬 Сообщение: ${formData.message || 'Не указано'}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm h-full flex flex-col">
            <div className="space-y-4 flex-1">
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

            <div className="mt-6 pt-6 border-t space-y-3">
              <h3 className="font-semibold text-center mb-3">Свяжитесь с нами</h3>
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = 'tel:+79202520352'}
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Позвонить
                </Button>
                <Button 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/79202520352', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <a href="mailto:megashlic@yandex.ru" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full"
                  >
                    <Icon name="Mail" className="mr-2 h-5 w-5" />
                    Написать на Email
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t space-y-3">
              <h3 className="font-semibold text-center mb-3">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={formStatus === 'sending'}
                />
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  disabled={formStatus === 'sending'}
                />
                <Textarea
                  placeholder="Ваше сообщение (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={formStatus === 'sending'}
                  rows={3}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                      Отправка...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Icon name="CheckCircle" className="mr-2 h-5 w-5" />
                      Отправлено!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <Icon name="AlertCircle" className="mr-2 h-5 w-5" />
                      Ошибка
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2 h-5 w-5" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-3 h-full">
            <div className="flex-1 rounded-lg overflow-hidden border-2 shadow-lg min-h-[350px] md:min-h-[400px]">
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