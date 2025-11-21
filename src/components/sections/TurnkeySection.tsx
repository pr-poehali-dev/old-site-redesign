import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TurnkeySectionProps {
  onFormOpen: () => void;
}

export const TurnkeySection = ({ onFormOpen }: TurnkeySectionProps) => {
  return (
    <section id="turnkey" className="py-6 md:py-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center space-y-1 mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold">Ремонт под ключ</h2>
          <p className="text-muted-foreground text-xs md:text-sm">
            Полный цикл работ — от диагностики до установки восстановленных деталей
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          <div className="grid md:grid-cols-3 gap-3">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">1 день</h3>
                  <p className="text-sm text-muted-foreground">Средний срок ремонта под ключ</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">12 месяцев</h3>
                  <p className="text-sm text-muted-foreground">Гарантия без ограничения пробега</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                  <Icon name="Wrench" className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">Всё включено</h3>
                  <p className="text-sm text-muted-foreground">Работа, детали и расходники</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Что входит в ремонт под ключ?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms' }}>
                <CardContent className="p-3 pt-3 pb-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Search" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Диагностика</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Полная проверка трансмиссии и раздаточной коробки</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-3 pt-3 pb-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Wrench" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Демонтаж</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Снятие неисправных узлов и деталей</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-3 pt-3 pb-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Settings" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Восстановление</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Ремонт шлицев по запатентованной технологии</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-3 pt-3 pb-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Droplet" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Замена расходников</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Новые сальники, фильтр и масло</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
                <CardContent className="p-3 pt-3 pb-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="Package" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      5
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Установка</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Монтаж восстановленных деталей</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '500ms' }}>
                <CardContent className="p-3 pt-3 pb-3">
                  <div className="relative mx-auto mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <Icon name="CheckCircle" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      6
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Тест-драйв</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Проверка работы полного привода</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Стоимость ремонта под ключ</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Icon name="Car" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Hyundai / Kia</h4>
                      <p className="text-xs text-muted-foreground">Полный привод 4WD</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">от</span>
                      <span className="text-3xl font-bold text-primary">35 000</span>
                      <span className="text-sm text-muted-foreground">₽</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Tucson, Sportage, Santa Fe, Sorento, ix35, Creta и другие модели
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Icon name="Car" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Volkswagen Tiguan</h4>
                      <p className="text-xs text-muted-foreground">4Motion</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">от</span>
                      <span className="text-3xl font-bold text-primary">45 000</span>
                      <span className="text-sm text-muted-foreground">₽</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Tiguan 1 и 2 поколения с муфтой Haldex
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-4 md:p-6 text-center space-y-3">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">Нужен ремонт под ключ?</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Оставьте заявку — мастер проведёт диагностику и назовёт точную стоимость ремонта
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <Button 
                  size="lg"
                  className="flex-1"
                  onClick={onFormOpen}
                >
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Оставить заявку
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.location.href = 'tel:+79202520352'}
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Позвонить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};