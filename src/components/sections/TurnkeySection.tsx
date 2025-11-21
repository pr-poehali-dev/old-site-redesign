import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { TurnkeyPricingDiagram } from './turnkey/TurnkeyPricingDiagram';
import { TurnkeyPricingCards } from './turnkey/TurnkeyPricingCards';
import { TurnkeyFAQ } from './turnkey/TurnkeyFAQ';

export const TurnkeySection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="turnkey" className="py-6 md:py-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center space-y-1 mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold">Ремонт под ключ</h2>
          <p className="text-muted-foreground text-xs md:text-sm">
            Полный цикл работ — от диагностики до установки восстановленных деталей
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
          <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-3 md:p-5">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">Что входит в услугу?</h3>
                    <div className="grid md:grid-cols-3 gap-2 md:gap-3">
                      <div className="bg-muted/30 rounded-lg p-2 md:p-3 border">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Search" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Диагностика</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Полная проверка привода и раздаточной коробки</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-2 md:p-3 border">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Settings" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Демонтаж</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Снятие всех неисправных деталей</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-2 md:p-3 border">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Zap" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Восстановление</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Ремонт шлицев по запатентованной технологии</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-2 md:p-3 border">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Package" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Замена расходников</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Новые сальники, фильтр, масло</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-2 md:p-3 border">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Wrench" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Установка</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Монтаж восстановленных деталей</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-2 md:p-3 border">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="CheckCircle" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Тест-драйв</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Проверка работы полного привода</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-primary/20 pt-3 md:pt-4 mt-3 md:mt-4">
                  <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="ListOrdered" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">Этапы работы</h3>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-[10px] md:text-xs">1</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Консультация и диагностика</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Записываетесь на приём, привозите автомобиль. Мастер проводит диагностику и называет точную стоимость</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-[10px] md:text-xs">2</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Демонтаж и восстановление</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Снимаем неисправные детали, восстанавливаем их по запатентованной технологии. Держим в курсе хода работ</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-[10px] md:text-xs">3</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Установка и проверка</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Устанавливаем восстановленные детали, меняем расходники, заправляем маслом. Проводим тест-драйв</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-[10px] md:text-xs">4</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Выдача автомобиля</h4>
                            <p className="text-[10px] md:text-xs text-muted-foreground">Передаём вам готовый автомобиль с гарантией 18 месяцев и всеми документами</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-primary/20 pt-3 md:pt-4 mt-3 md:mt-4">
                  <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Сроки</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">1 день (стандарт) / 3-7 дней (сложные случаи)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Гарантия</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">12 месяцев без ограничения пробега</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Percent" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs md:text-sm mb-0.5 md:mb-1">Экономия</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">До 70% от новых деталей</p>
                      </div>
                    </div>
                  </div>
                </div>

                <TurnkeyPricingDiagram scrollToContacts={scrollToContacts} />

                <TurnkeyPricingCards />

                <div className="border-t border-dashed border-primary/20 pt-3 md:pt-4 mt-3 md:mt-4">
                  <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">Работаем с марками</h3>
                      <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-md">
                        <div className="bg-background rounded-lg p-2 md:p-3 border text-center hover:border-primary/30 transition-all">
                          <span className="font-semibold text-xs md:text-sm">Hyundai</span>
                        </div>
                        <div className="bg-background rounded-lg p-2 md:p-3 border text-center hover:border-primary/30 transition-all">
                          <span className="font-semibold text-xs md:text-sm">Kia</span>
                        </div>
                        <div className="bg-background rounded-lg p-2 md:p-3 border text-center hover:border-primary/30 transition-all">
                          <span className="font-semibold text-xs md:text-sm">Volkswagen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-primary/20 pt-3 md:pt-4 mt-3 md:mt-4">
                  <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="CreditCard" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">Способы оплаты</h3>
                      <div className="grid md:grid-cols-3 gap-2 md:gap-4">
                        <div className="flex items-center gap-2 md:gap-3 bg-background rounded-lg p-2 md:p-3 border">
                          <Icon name="Banknote" className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                          <span className="text-xs md:text-sm">Наличные</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 bg-background rounded-lg p-2 md:p-3 border">
                          <Icon name="CreditCard" className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                          <span className="text-xs md:text-sm">Банковская карта</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 bg-background rounded-lg p-2 md:p-3 border">
                          <Icon name="Building" className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                          <span className="text-xs md:text-sm">Безналичный расчёт</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <TurnkeyFAQ />

                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
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

                <div className="pt-4 flex justify-center">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700"
                    onClick={() => window.location.href = 'tel:+79202520352'}
                  >
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Позвонить для консультации
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