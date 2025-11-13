import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const TurnkeySection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="turnkey" className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Ремонт под ключ</h2>
          <p className="text-muted-foreground text-lg">
            Полный цикл работ — от диагностики до установки восстановленных деталей
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name="Wrench" className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Что входит в услугу?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Диагностика полного привода и раздаточной коробки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Демонтаж неисправных деталей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Восстановление шлицевых соединений по запатентованной технологии</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Установка восстановленных деталей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Замена всех расходных комплектующих: сальники, фильтр, масло</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Тест-драйв и проверка работы полного привода</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="ListOrdered" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Этапы работы</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">1</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Консультация и диагностика</h4>
                            <p className="text-xs text-muted-foreground">Записываетесь на приём, привозите автомобиль. Мастер проводит диагностику и называет точную стоимость</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">2</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Демонтаж и восстановление</h4>
                            <p className="text-xs text-muted-foreground">Снимаем неисправные детали, восстанавливаем их по запатентованной технологии. Держим в курсе хода работ</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">3</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Установка и проверка</h4>
                            <p className="text-xs text-muted-foreground">Устанавливаем восстановленные детали, меняем расходники, заправляем маслом. Проводим тест-драйв</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">4</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Выдача автомобиля</h4>
                            <p className="text-xs text-muted-foreground">Передаём вам готовый автомобиль с гарантией 18 месяцев и всеми документами</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Сроки</h4>
                        <p className="text-sm text-muted-foreground">1 день</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Гарантия</h4>
                        <p className="text-sm text-muted-foreground">18 месяцев на все работы</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Percent" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Экономия</h4>
                        <p className="text-sm text-muted-foreground">До 70% от новых деталей</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingDown" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Экономия до 70% по сравнению с покупкой новых деталей</h3>
                      <p className="text-sm text-muted-foreground">
                        Новая раздаточная коробка для Hyundai/Kia стоит от 250 000 ₽, а восстановление с установкой — всего от 69 990 ₽. 
                        Вы получаете такое же качество, полную гарантию 18 месяцев и экономите более 180 000 рублей!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Car" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Примеры цен для популярных моделей</h3>
                      <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
                        <div className="bg-background rounded-lg p-4 border hover:border-primary/30 transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-sm">Hyundai / Kia с АКПП</h4>
                            <span className="text-primary font-bold text-lg">от 69 990 ₽</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Восстановление вала + дифференциал с установкой</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-4 border hover:border-primary/30 transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-sm">Hyundai / Kia с МКПП</h4>
                            <span className="text-primary font-bold text-lg">от 79 990 ₽</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Восстановление вала + дифференциал с установкой</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-4 border hover:border-primary/30 transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-sm">Volkswagen Tiguan</h4>
                            <span className="text-primary font-bold text-lg">от 34 990 ₽</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Комплект вал + чашка с установкой</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-xs text-muted-foreground">
                          <Icon name="Info" className="h-3 w-3 inline mr-1" />
                          Точная стоимость зависит от состояния деталей и объёма работ
                        </p>
                        <p className="text-xs text-muted-foreground">
                          <Icon name="AlertCircle" className="h-3 w-3 inline mr-1" />
                          Для МКПП требуется более сложная технология восстановления шлицевых соединений, поэтому стоимость выше
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Settings" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Работаем с марками</h3>
                      <div className="grid grid-cols-3 gap-3 max-w-md">
                        <div className="bg-background rounded-lg p-3 border text-center hover:border-primary/30 transition-all">
                          <span className="font-semibold text-sm">Hyundai</span>
                        </div>
                        <div className="bg-background rounded-lg p-3 border text-center hover:border-primary/30 transition-all">
                          <span className="font-semibold text-sm">Kia</span>
                        </div>
                        <div className="bg-background rounded-lg p-3 border text-center hover:border-primary/30 transition-all">
                          <span className="font-semibold text-sm">Volkswagen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="CreditCard" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Способы оплаты</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 bg-background rounded-lg p-3 border">
                          <Icon name="Banknote" className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">Наличные</span>
                        </div>
                        <div className="flex items-center gap-3 bg-background rounded-lg p-3 border">
                          <Icon name="CreditCard" className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">Банковская карта</span>
                        </div>
                        <div className="flex items-center gap-3 bg-background rounded-lg p-3 border">
                          <Icon name="Building" className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">Безналичный расчёт</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="HelpCircle" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Часто задаваемые вопросы</h3>
                      <div className="space-y-4">
                        <div className="bg-background rounded-lg p-4 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Можно ли оставить автомобиль у вас на время ремонта?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Да, автомобиль остаётся у нас на весь срок ремонта. Стандартный ремонт проходит в течение дня, сложные случаи могут занять 3-7 дней. Вы можете забрать автомобиль в удобное время после завершения работ.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-4 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Что делать, если проблема повторится?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">На все работы действует гарантия 18 месяцев. Если проблема повторится в течение гарантийного срока — устраним бесплатно.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-4 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Нужно ли мне самому снимать детали?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Нет, это услуга под ключ. Мы сами демонтируем неисправные детали, восстанавливаем их и устанавливаем обратно.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-4 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Можно ли приехать из другого региона?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Да, принимаем клиентов из любых регионов. Для удалённых клиентов можем организовать восстановление деталей с доставкой СДЭК — вы снимаете детали сами.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">Для кого подходит?</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Идеально для тех, кто хочет получить полностью готовый автомобиль без необходимости 
                        самостоятельно заниматься снятием и установкой деталей.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Важно:</span> Услуга доступна для клиентов из Нижнего Новгорода 
                        и ближайших регионов. Для остальных регионов предлагаем восстановление деталей с доставкой СДЭК.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col md:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto"
                    onClick={() => window.location.href = 'tel:+79202520352'}
                  >
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Позвонить сейчас
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full md:w-auto"
                    onClick={scrollToContacts}
                  >
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};