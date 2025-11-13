import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export const ContactsSection = () => {
  const [calcCity, setCalcCity] = useState('');
  const [calcWeight, setCalcWeight] = useState('5');
  const [showCalc, setShowCalc] = useState(false);

  return (
    <section id="contacts" className="py-20 border-t">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами для консультации или отправки заявки
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '0ms' }}>
              <CardHeader>
                <Icon name="MapPin" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Производственный цех</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Нижний Новгород, Восточный проезд, 11/1</p>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <Icon name="Phone" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (920) 252-03-52</p>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <Icon name="Mail" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">megashlic@yandex.ru</p>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <Icon name="MessageCircle" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (920) 252-03-52</p>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <Icon name="Clock" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>График работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p>Пн-Пт: 9:30 - 17:30</p>
                  <p>Сб-Вс: выходной</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '500ms' }}>
              <CardHeader>
                <Icon name="Truck" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Работаем с транспортной компанией СДЭК по всей России</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowCalc(!showCalc)}
                  className="w-full"
                >
                  <Icon name="Calculator" className="mr-2 h-4 w-4" />
                  {showCalc ? 'Скрыть калькулятор' : 'Рассчитать доставку'}
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
                <p className="text-xs text-muted-foreground text-center">
                  Точный расчет стоимости и сроков доставки на официальном сайте СДЭК
                </p>
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