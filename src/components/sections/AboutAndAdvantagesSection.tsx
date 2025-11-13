import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const AboutAndAdvantagesSection = () => {
  return (
    <>
      <section id="about" className="py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">О компании</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <CardContent className="p-5">
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
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
                      <h4 className="font-bold text-sm">Патент РФ № 2829377</h4>
                      <p className="text-xs text-muted-foreground">
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
              <Card className="text-center p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-0.5">3+ лет</h3>
                <p className="text-xs text-muted-foreground">опыта работы</p>
              </Card>
              <Card className="text-center p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="Car" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-0.5">3000+</h3>
                <p className="text-xs text-muted-foreground">восстановленных деталей</p>
              </Card>
              <Card className="text-center p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-0.5">Гарантия</h3>
                <p className="text-xs text-muted-foreground">18 месяцев без ограничения пробега</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Преимущества нашей технологии</h2>
            <p className="text-muted-foreground text-sm">Почему восстановление выгоднее покупки новой детали</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="DollarSign" className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-base">Экономия до 70%</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Восстановление обходится в 3-5 раз дешевле покупки новых деталей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Zap" className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ремонт от 1-5 дней. Не нужно ждать заказа запчастей из-за границы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Wrench" className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Высокая прочность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Используется легированная титаном сталь с дальнейшей термообработкой
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Recycle" className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Безопасно для узлов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Сохраняем оригинальные детали без замены дорогостоящих узлов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-8 bg-background">
        <div className="container">
          <div className="text-center space-y-1 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Как мы работаем</h2>
            <p className="text-muted-foreground text-sm">
              Простой и понятный процесс восстановления
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms' }}>
                <CardHeader className="pb-2">
                  <div className="relative mx-auto mb-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Send" className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                  </div>
                  <CardTitle className="text-base mb-1">Заявка</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Оставьте заявку на сайте или позвоните нам для консультации
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Truck" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-md">
                      2
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">Доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Отправьте деталь через СДЭК или привезите лично в цех
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Tag" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-md">
                      3
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">Маркировка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Принимаем деталь, маркируем и проводим диагностику
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Settings" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-md">
                      4
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">Восстановление</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Восстановление шлицевого соединения с термообработкой
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="Banknote" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-md">
                      5
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">Оплата</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Оплата после выполнения работ любым удобным способом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="PackageCheck" className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-md">
                      6
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">Отправка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Отправляем восстановленную деталь обратно через СДЭК
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mt-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="Truck" className="h-5 w-5 text-primary" />
                    Рассчитать доставку СДЭК
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-3">📦 Типичные параметры деталей для расчета:</p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Icon name="Package" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Вал раздатки</div>
                          <div>3-5 кг, 40×15×15 см</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Package" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Дифференциал</div>
                          <div>3-5 кг, 35×35×25 см</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Package" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Раздатка в сборе</div>
                          <div>18-25 кг, 50×40×35 см</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Package" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Корзина фрикционов</div>
                          <div>300 г, 25×25×10 см</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="https://www.cdek.ru/ru/calculate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="w-full" size="lg">
                        <Icon name="ExternalLink" className="mr-2 h-5 w-5" />
                        Открыть калькулятор СДЭК
                      </Button>
                    </a>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p className="font-medium">Для расчета укажите:</p>
                      <p>• Откуда: Нижний Новгород, 603000</p>
                      <p>• Используйте параметры деталей выше</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о восстановлении</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: 'Как понять, что шлицы изношены?', a: 'Вибрация при разгоне, стук при трогании, рывки при переключении передач, гул со стороны раздатки.', icon: 'TriangleAlert' },
                { q: 'Сколько времени занимает восстановление?', a: 'От 1 до 5 рабочих дней. Обычно справляемся за 2 дня.', icon: 'Clock' },
                { q: 'Можно ли восстановить сильно изношенные шлицы?', a: 'Наша технология восстанавливает даже критически изношенные шлицы.', icon: 'Wrench' },
                { q: 'Какая гарантия на восстановленные детали?', a: '18 месяцев без ограничения пробега с официальным талоном.', icon: 'ShieldCheck' },
                { q: 'Нужно ли снимать детали самостоятельно?', a: 'Работаем с уже снятыми деталями. Привезите к нам или отправьте через СДЭК.', icon: 'Truck' },
                { q: 'Работаете со всеми марками?', a: 'Восстанавливаем шлицы на всех полноприводных моделях.', icon: 'Car' },
              ].map((faq, index) => (
                <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="relative mx-auto mb-3">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto shadow-lg">
                        <Icon name={faq.icon} className="h-9 w-9 text-primary" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm shadow-md">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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