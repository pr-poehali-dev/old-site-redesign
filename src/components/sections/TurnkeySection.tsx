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
                  <h3 className="font-bold text-lg mb-1">3-5 дней</h3>
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

          <Card className="border-2">
            <CardContent className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Что входит в ремонт под ключ?</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Search" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Диагностика</h4>
                    <p className="text-xs text-muted-foreground">Полная проверка трансмиссии и раздаточной коробки</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Демонтаж</h4>
                    <p className="text-xs text-muted-foreground">Снятие неисправных узлов и деталей</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Восстановление</h4>
                    <p className="text-xs text-muted-foreground">Ремонт шлицев по запатентованной технологии</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Package" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Замена расходников</h4>
                    <p className="text-xs text-muted-foreground">Новые сальники, фильтр и масло</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Установка</h4>
                    <p className="text-xs text-muted-foreground">Монтаж восстановленных деталей</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Тест-драйв</h4>
                    <p className="text-xs text-muted-foreground">Проверка работы полного привода</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
