import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ContactsSection = () => {
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
                onClick={() => window.location.href = 'tel:+78312601123'}
                className="gap-2"
              >
                <Icon name="Phone" className="h-5 w-5" />
                Позвонить
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Icon name="MapPin" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Производственный цех</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Нижний Новгород, Восточный проезд, 11/1</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Phone" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (831) 260-11-23</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Mail" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">megashlic@yandex.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="MessageCircle" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (920) 252-03-52</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Clock" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>График работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб: 10:00 - 15:00</p>
                  <p>Вс: выходной</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Truck" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Работаем с транспортными компаниями по всей России</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};