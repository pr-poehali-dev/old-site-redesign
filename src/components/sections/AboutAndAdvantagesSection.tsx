import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';


export const AboutAndAdvantagesSection = () => {
  return (
    <>
      <section id="about" className="py-6 md:py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">О компании</h2>
            <p className="text-sm md:text-base text-muted-foreground">Производство и технологии восстановления</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-2 md:space-y-3">
            <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <CardContent className="p-3 md:p-4">
                <div className="space-y-2 md:space-y-3">
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4 items-center">
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center">Мега Шлиц<sup className="text-sm">®</sup></h3>
                      
                      <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-semibold text-center">
                        Производственная компания, специализирующаяся на восстановлении шлицевых соединений деталей трансмиссии. 
                        Работаем с автосервисами и дилерскими центрами по всей России.
                      </p>
                      
                      <div className="space-y-3 pt-2">
                        <div className="space-y-2">
                          <h4 className="text-sm md:text-base font-bold text-center">Как добиться качества</h4>
                          <div className="grid gap-1.5">
                            <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Icon name="Settings2" className="h-4 w-4 text-primary" />
                              </div>
                              <p className="text-xs md:text-sm font-medium">Оборудование с ЧПУ для высокоточной обработки</p>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Icon name="Zap" className="h-4 w-4 text-primary" />
                              </div>
                              <p className="text-xs md:text-sm font-medium">Металл с добавлением титана для долговечности</p>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Icon name="Flame" className="h-4 w-4 text-primary" />
                              </div>
                              <p className="text-xs md:text-sm font-medium">Термообработка для улучшения прочности</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 pt-1">
                          <h4 className="text-sm md:text-base font-bold text-center">Производственный процесс</h4>
                          <p className="text-xs md:text-sm text-foreground/80 text-center">
                            Восстановление деталей — это сложный технологический процесс. Каждый этап требует значительных временных и трудовых затрат.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col items-center gap-1 p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Icon name="Cog" className="h-4 w-4 text-primary" />
                              </div>
                              <h5 className="font-bold text-xs text-center">ЧПУ обработка</h5>
                              <p className="text-[10px] text-muted-foreground text-center">Высокая точность</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Icon name="Scale" className="h-4 w-4 text-primary" />
                              </div>
                              <h5 className="font-bold text-xs text-center">Балансировка</h5>
                              <p className="text-[10px] text-muted-foreground text-center">Проверка на стенде</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Icon name="Flame" className="h-4 w-4 text-primary" />
                              </div>
                              <h5 className="font-bold text-xs text-center">Термообработка</h5>
                              <p className="text-[10px] text-muted-foreground text-center">Упрочнение металла</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Icon name="Sparkles" className="h-4 w-4 text-primary" />
                              </div>
                              <h5 className="font-bold text-xs text-center">Финишная мойка</h5>
                              <p className="text-[10px] text-muted-foreground text-center">Как новая деталь</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="order-first md:order-last">
                      <a 
                        href="https://cdn.poehali.dev/files/bd4c62cb-eb60-4650-bf0c-77c2bbd65ed0.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block relative overflow-hidden rounded-lg border-4 border-primary/50 hover:border-primary transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group bg-white"
                      >
                        <img 
                          src="https://cdn.poehali.dev/files/bd4c62cb-eb60-4650-bf0c-77c2bbd65ed0.jpg"
                          alt="Патент РФ № 2829377"
                          className="w-full h-auto min-h-[200px] object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary rounded-full p-4 shadow-lg">
                            <Icon name="ZoomIn" className="h-10 w-10 text-white" />
                          </div>
                        </div>
                      </a>
                      <p className="text-center text-sm font-bold text-primary mt-3 bg-primary/10 py-2 px-4 rounded-lg">📜 Патент РФ № 2829377 — нажмите для увеличения</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-6 md:py-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Преимущества нашей технологии</h2>
            <p className="text-sm md:text-base text-muted-foreground">Почему восстановление выгоднее покупки новой детали</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-2 pt-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="DollarSign" className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <CardTitle className="text-sm">Экономия до 70%</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Восстановление обходится в 3-5 раз дешевле покупки новых деталей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-2 pt-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="Zap" className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <CardTitle className="text-sm">Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Ремонт от 1-5 дней. Не нужно ждать заказа запчастей из-за границы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-2 pt-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="Wrench" className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <CardTitle className="text-sm">Высокая прочность</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Используется легированная титаном сталь с дальнейшей термообработкой
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-2 pt-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-2">
                  <Icon name="Recycle" className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <CardTitle className="text-sm">Безопасно для узлов</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Сохраняем оригинальные детали без замены дорогостоящих узлов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-6 md:py-8 bg-background">
        <div className="container">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Как мы работаем по всей России</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Простой и понятный процесс восстановления
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms' }}>
                <CardHeader className="pb-2 pt-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Send" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                  </div>
                  <CardTitle className="text-sm mb-1">Заявка</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Оставьте заявку на сайте или позвоните нам для консультации
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms' }}>
                <CardHeader className="pb-2 pt-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Truck" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                  </div>
                  <CardTitle className="text-sm mb-1">Доставка</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Отправьте деталь через СДЭК или привезите лично в цех
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms' }}>
                <CardHeader className="pb-2 pt-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Tag" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                  </div>
                  <CardTitle className="text-sm mb-1">Маркировка</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Принимаем деталь, маркируем и проводим диагностику
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
                <CardHeader className="pb-2 pt-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Settings" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                  </div>
                  <CardTitle className="text-sm mb-1">Восстановление</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Восстановление шлицевого соединения с термообработкой
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
                <CardHeader className="pb-2 pt-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Banknote" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      5
                    </div>
                  </div>
                  <CardTitle className="text-sm mb-1">Оплата</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Оплата после выполнения работ любым удобным способом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '500ms' }}>
                <CardHeader className="pb-2 pt-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="PackageCheck" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      6
                    </div>
                  </div>
                  <CardTitle className="text-sm mb-1">Отправка</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Отправляем восстановленную деталь обратно через СДЭК
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto mt-6">
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

      <section id="faq" className="py-6 md:py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Частые вопросы</h2>
            <p className="text-sm md:text-base text-muted-foreground">Ответы на популярные вопросы о восстановлении</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { q: 'Как понять, что шлицы изношены?', a: 'Вибрация при разгоне, стук при трогании, рывки при переключении передач, гул со стороны раздатки.', icon: 'TriangleAlert' },
                { q: 'Сколько времени занимает восстановление?', a: 'От 1 до 5 рабочих дней. Обычно справляемся за 2 дня.', icon: 'Clock' },
                { q: 'Можно ли восстановить сильно изношенные шлицы?', a: 'Наша технология восстанавливает даже критически изношенные шлицы.', icon: 'Wrench' },
                { q: 'Какая гарантия на восстановленные детали?', a: '12 месяцев без ограничения пробега с официальным талоном.', icon: 'ShieldCheck' },
                { q: 'Нужно ли снимать детали самостоятельно?', a: 'Работаем с уже снятыми деталями. Привезите к нам или отправьте через СДЭК.', icon: 'Truck' },
                { q: 'Работаете со всеми марками?', a: 'Восстанавливаем шлицы на всех полноприводных моделях.', icon: 'Car' },
              ].map((faq, index) => (
                <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="pb-2 pt-3">
                    <div className="relative mx-auto mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                        <Icon name={faq.icon} className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-sm mb-1">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
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