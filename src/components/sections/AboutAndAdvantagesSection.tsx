import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const AboutAndAdvantagesSection = () => {
  return (
    <>
      <section id="about" className="py-8 border-t">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">О компании</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">Мега Шлиц<sup>®</sup></span> — производственная компания, специализирующаяся на восстановлении шлицевых соединений деталей трансмиссии. 
                    Работаем с автосервисами и дилерскими центрами по всей России. Используем оборудование с ЧПУ, 
                    специальный металл с добавлением титана для долговечного шлицевого соединения, применяем термообработку 
                    и запатентованные технологии восстановления.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <Icon name="Award" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Патент РФ № 2829377</h4>
                      <p className="text-sm text-muted-foreground">
                        Способ восстановления шлицевого соединения на полноприводных автомобилях
                      </p>
                    </div>
                  </div>

                  <div className="relative group max-w-2xl mx-auto">
                    <div className="overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg group-hover:border-primary/40 transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/bd4c62cb-eb60-4650-bf0c-77c2bbd65ed0.jpg"
                        alt="Патент РФ № 2829377"
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              <Card className="text-center p-3">
                <Icon name="Award" className="h-8 w-8 mx-auto text-primary mb-1" />
                <h3 className="text-base font-bold">3+ лет</h3>
                <p className="text-xs text-muted-foreground">опыта работы</p>
              </Card>
              <Card className="text-center p-3">
                <Icon name="Car" className="h-8 w-8 mx-auto text-primary mb-1" />
                <h3 className="text-base font-bold">3000+</h3>
                <p className="text-xs text-muted-foreground">восстановленных деталей</p>
              </Card>
              <Card className="text-center p-3">
                <Icon name="Shield" className="h-8 w-8 mx-auto text-primary mb-1" />
                <h3 className="text-base font-bold">Гарантия</h3>
                <p className="text-xs text-muted-foreground">18 месяцев без ограничения пробега</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-8 border-t">
        <div className="container">
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Преимущества нашей технологии</h2>
            <p className="text-muted-foreground">Почему восстановление выгоднее покупки новой детали</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="DollarSign" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Экономия до 70%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Восстановление обходится в 3-5 раз дешевле покупки новых деталей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ремонт от 1-5 дней. Не нужно ждать заказа запчастей из-за границы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Высокая прочность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Используется легированная титаном сталь с дальнейшей термообработкой</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Recycle" className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Безопасно для узлов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Сохраняем оригинальные детали без замены дорогостоящих узлов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-8 border-t bg-muted/30">
        <div className="container">
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Как мы работаем</h2>
            <p className="text-muted-foreground">
              Порядок работы восстановления
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Send" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <CardTitle className="text-xl">Заявка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оставьте заявку на сайте или позвоните нам для консультации
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Truck" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <CardTitle className="text-xl">Доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отправьте деталь через СДЭК или привезите лично в цех
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Tag" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <CardTitle className="text-xl">Маркировка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Принимаем деталь, маркируем и проводим диагностику
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Settings" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <CardTitle className="text-xl">Восстановление</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Восстановление шлицевого соединения с термообработкой </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="Banknote" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <CardTitle className="text-xl">Оплата</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оплата после выполнения работ любым удобным способом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                      <Icon name="PackageCheck" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      6
                    </div>
                  </div>
                  <CardTitle className="text-xl">Отправка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отправляем восстановленную деталь обратно через СДЭК
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-8 border-t">
        <div className="container">
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Частые вопросы</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { q: 'Как понять, что шлицы изношены?', a: 'Вибрация при разгоне, металлический стук при трогании, рывки при переключении передач, гул со стороны раздатки.', icon: 'AlertCircle' },
                { q: 'Сколько времени занимает восстановление?', a: 'От 1 до 5 рабочих дней. Обычно справляемся за 2 дня.', icon: 'Clock' },
                { q: 'Можно ли восстановить сильно изношенные шлицы?', a: 'Наша технология позволяет восстанавливать даже критически изношенные шлицы.', icon: 'CheckCircle' },
                { q: 'Какая гарантия на восстановленные детали?', a: 'Гарантия 18 месяцев без ограничения пробега с официальным талоном.', icon: 'Shield' },
                { q: 'Нужно ли снимать детали самостоятельно?', a: 'Да, мы работаем только с уже снятыми деталями. Привезите их к нам или отправьте через СДЭК.', icon: 'Package' },
                { q: 'Работаете со всеми марками?', a: 'Восстанавливаем шлицы на всех полноприводных моделях. Звоните — проконсультируем.', icon: 'Car' },
              ].map((faq, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="relative mx-auto mb-2">
                      <div className="w-16 h-16 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mx-auto">
                        <Icon name={faq.icon} className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-base">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};