import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const [calcCity, setCalcCity] = useState('');
  const [calcWeight, setCalcWeight] = useState('5');
  const [showCalc, setShowCalc] = useState(false);

  return (
    <section id="contacts" className="py-8 border-t">
      <div className="container">
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
          <p className="text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <CardTitle className="text-xl">Оставить заявку</CardTitle>
              <p className="text-sm text-muted-foreground">Заполните форму и мы свяжемся с вами</p>
            </CardHeader>
            <CardContent>
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
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
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
                  <label htmlFor="detail" className="block text-sm font-medium mb-2">
                    Какую деталь нужно восстановить?
                  </label>
                  <Input 
                    id="detail" 
                    placeholder="Например: полуось переднего моста Land Cruiser"
                    value={formData.detail}
                    onChange={(e) => setFormData({...formData, detail: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Дополнительная информация
                  </label>
                  <textarea 
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Опишите состояние детали, сроки, способ доставки..."
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">Производственный цех</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">г. Нижний Новгород, Восточный проезд, 11/1</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">Телефон</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:+79202520352" className="text-sm text-primary hover:underline">
                  +7 (920) 252-03-52
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:megashlic@yandex.ru" className="text-sm text-primary hover:underline">
                  megashlic@yandex.ru
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="MessageCircle" className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">WhatsApp</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  +7 (920) 252-03-52
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Clock" className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">График работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Пн-Пт: 9:30 - 17:30</p>
                  <p>Сб-Вс: выходной</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Truck" className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">Доставка</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">СДЭК по всей России</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowCalc(!showCalc)}
                  className="w-full"
                >
                  <Icon name="Calculator" className="mr-2 h-4 w-4" />
                  Рассчитать
                </Button>
              </CardContent>
            </Card>
          </div>

          {showCalc && (
            <Card className="animate-in slide-in-from-top duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calculator" className="h-6 w-6 text-primary" />
                  Калькулятор доставки СДЭК
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваш город</label>
                    <Input 
                      placeholder="Например: Москва"
                      value={calcCity}
                      onChange={(e) => setCalcCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Вес посылки (кг)</label>
                    <Select value={calcWeight} onValueChange={setCalcWeight}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">До 1 кг</SelectItem>
                        <SelectItem value="5">До 5 кг</SelectItem>
                        <SelectItem value="10">До 10 кг</SelectItem>
                        <SelectItem value="20">До 20 кг</SelectItem>
                        <SelectItem value="30">Более 20 кг</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://www.cdek.ru/ru/calculate', '_blank')}
                >
                  <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                  Рассчитать на сайте СДЭК
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            <div className="w-full h-[400px] rounded-lg overflow-hidden border shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=43.915409%2C56.253487&z=16&l=map&pt=43.915409,56.253487,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              ></iframe>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://yandex.ru/maps/-/CLCXuB~N', '_blank')}
                className="gap-2"
              >
                <Icon name="Navigation" className="h-5 w-5" />
                Построить маршрут
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:+79202520352'}
                className="gap-2"
              >
                <Icon name="Phone" className="h-5 w-5" />
                Позвонить
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'mailto:megashlic@yandex.ru'}
                className="gap-2"
              >
                <Icon name="Mail" className="h-5 w-5" />
                Написать Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};