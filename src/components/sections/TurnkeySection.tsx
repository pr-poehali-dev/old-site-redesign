import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState, useEffect, useRef } from 'react';

export const TurnkeySection = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (diagramRef.current && !diagramRef.current.contains(event.target as Node)) {
        setActiveTooltip(null);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [activeTooltip]);
  
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="turnkey" className="py-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ремонт под ключ</h2>
          <p className="text-muted-foreground text-sm">
            Полный цикл работ — от диагностики до установки восстановленных деталей
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-5">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3">Что входит в услугу?</h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-muted/30 rounded-lg p-3 border">
                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Search" className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Диагностика</h4>
                            <p className="text-xs text-muted-foreground">Полная проверка привода и раздаточной коробки</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-3 border">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Settings" className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Демонтаж</h4>
                            <p className="text-xs text-muted-foreground">Снятие всех неисправных деталей</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-3 border">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Zap" className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Восстановление</h4>
                            <p className="text-xs text-muted-foreground">Ремонт шлицев по запатентованной технологии</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-3 border">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Package" className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Замена расходников</h4>
                            <p className="text-xs text-muted-foreground">Новые сальники, фильтр, масло</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-3 border">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Wrench" className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Установка</h4>
                            <p className="text-xs text-muted-foreground">Монтаж восстановленных деталей</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-3 border">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="CheckCircle" className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Тест-драйв</h4>
                            <p className="text-xs text-muted-foreground">Проверка работы полного привода</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-primary/20 pt-4 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="ListOrdered" className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-3">Этапы работы</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-xs">1</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Консультация и диагностика</h4>
                            <p className="text-xs text-muted-foreground">Записываетесь на приём, привозите автомобиль. Мастер проводит диагностику и называет точную стоимость</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-xs">2</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Демонтаж и восстановление</h4>
                            <p className="text-xs text-muted-foreground">Снимаем неисправные детали, восстанавливаем их по запатентованной технологии. Держим в курсе хода работ</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-xs">3</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">Установка и проверка</h4>
                            <p className="text-xs text-muted-foreground">Устанавливаем восстановленные детали, меняем расходники, заправляем маслом. Проводим тест-драйв</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-xs">4</span>
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

                <div className="border-t border-dashed border-primary/20 pt-4 mt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Сроки</h4>
                        <p className="text-sm text-muted-foreground">1 день (стандарт) / 3-7 дней (сложные случаи)</p>
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

                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border-2 border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingDown" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2">Экономия от 68 000 до 203 000 ₽ по сравнению с новыми деталями</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-semibold">Hyundai/Kia с АКПП:</span> Новая раздаточная коробка (473003B630) стоит 138 000 ₽, восстановление с установкой — от 69 990 ₽. 
                          <span className="text-primary font-semibold"> Экономия 68 000 ₽!</span>
                        </p>
                        <p>
                          <span className="font-semibold">Hyundai/Kia с МКПП:</span> Новая раздаточная коробка (473003B620) стоит 248 000 ₽, восстановление с установкой — от 79 990 ₽. 
                          <span className="text-primary font-semibold"> Экономия 168 000 ₽!</span>
                        </p>
                        <p>
                          <span className="font-semibold">Volkswagen Tiguan:</span> Новая раздаточная коробка (0AU409053T) стоит 318 000 ₽, восстановление с установкой — от 114 990 ₽. 
                          <span className="text-primary font-semibold"> Экономия 203 000 ₽!</span>
                        </p>
                        <p className="text-xs pt-2 border-t">
                          Вы получаете такое же качество работы, полную гарантию 18 месяцев и существенную экономию!
                        </p>
                      </div>
                      
                      <div className="mt-6 relative" ref={diagramRef}>
                        {activeTooltip !== null && (
                          <div className="absolute inset-0 -m-6 bg-black/20 rounded-lg animate-in fade-in duration-300 pointer-events-none" />
                        )}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Icon name="MousePointerClick" className="h-3.5 w-3.5 text-primary animate-pulse" />
                              <span className="font-medium">Нажмите на диаграмму для деталей</span>
                            </div>
                          </div>
                        <div className="space-y-4">
                        <div className={`space-y-2 animate-in slide-in-from-left duration-700 relative transition-all duration-300 ${activeTooltip === 1 ? 'z-20' : 'z-0'}`}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-semibold">Hyundai/Kia АКПП</span>
                            <span className="text-green-600 font-bold">-68 000 ₽</span>
                          </div>
                          <div 
                            className="flex gap-2 items-center relative"
                            onClick={() => setActiveTooltip(activeTooltip === 1 ? null : 1)}
                          >
                            <div className="flex-1 bg-red-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-red-700 transition-all duration-1000 ease-out hover:bg-red-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '43.4%'}}>
                              138 000 ₽ новая
                            </div>
                            <div className="flex-1 bg-green-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-green-700 transition-all duration-1000 ease-out delay-200 hover:bg-green-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '22%'}}>
                              69 990 ₽ восст.
                            </div>
                          </div>
                          {activeTooltip === 1 && (
                            <div className="absolute -bottom-20 left-0 right-0 bg-primary text-primary-foreground rounded-lg p-3 shadow-lg z-10 animate-in slide-in-from-top duration-300">
                              <div className="flex items-start gap-2">
                                <Icon name="TrendingDown" className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <div className="text-xs">
                                  <p className="font-bold mb-1">Экономия 68 000 ₽ (49%)</p>
                                  <p className="opacity-90">473003B630 • Новая 138 000 ₽ → Восст. 69 990 ₽</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className={`space-y-2 animate-in slide-in-from-left duration-700 delay-150 relative transition-all duration-300 ${activeTooltip === 2 ? 'z-20' : 'z-0'}`}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-semibold">Hyundai/Kia МКПП</span>
                            <span className="text-green-600 font-bold">-168 000 ₽</span>
                          </div>
                          <div 
                            className="flex gap-2 items-center relative"
                            onClick={() => setActiveTooltip(activeTooltip === 2 ? null : 2)}
                          >
                            <div className="flex-1 bg-red-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-red-700 transition-all duration-1000 ease-out delay-150 hover:bg-red-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '78%'}}>
                              248 000 ₽ новая
                            </div>
                            <div className="flex-1 bg-green-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-green-700 transition-all duration-1000 ease-out delay-300 hover:bg-green-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '25%'}}>
                              79 990 ₽ восст.
                            </div>
                          </div>
                          {activeTooltip === 2 && (
                            <div className="absolute -bottom-20 left-0 right-0 bg-primary text-primary-foreground rounded-lg p-3 shadow-lg z-10 animate-in slide-in-from-top duration-300">
                              <div className="flex items-start gap-2">
                                <Icon name="TrendingDown" className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <div className="text-xs">
                                  <p className="font-bold mb-1">Экономия 168 000 ₽ (68%)</p>
                                  <p className="opacity-90">473003B620 • Новая 248 000 ₽ → Восст. 79 990 ₽</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className={`space-y-2 animate-in slide-in-from-left duration-700 delay-300 relative transition-all duration-300 ${activeTooltip === 3 ? 'z-20' : 'z-0'} bg-primary/5 rounded-lg p-3 border-2 border-primary/20 group`}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-base">Volkswagen Tiguan 🔥</span>
                              <Badge className="text-[10px] py-0 px-1.5 h-4 animate-pulse group-hover:animate-none">
                                <Icon name="Star" className="h-2.5 w-2.5 mr-0.5" />
                                Популярное
                              </Badge>
                            </div>
                            <span className="text-green-600 font-bold text-sm">-203 000 ₽</span>
                          </div>
                          <div 
                            className="flex gap-2 items-center relative"
                            onClick={() => setActiveTooltip(activeTooltip === 3 ? null : 3)}
                          >
                            <div className="flex-1 bg-red-100 rounded-full h-7 flex items-center px-3 text-xs font-semibold text-red-700 transition-all duration-1000 ease-out delay-300 hover:bg-red-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '100%'}}>
                              318 000 ₽ новая
                            </div>
                            <div className="flex-1 bg-green-100 rounded-full h-7 flex items-center px-3 text-xs font-semibold text-green-700 transition-all duration-1000 ease-out delay-500 hover:bg-green-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '36%'}}>
                              114 990 ₽ восст.
                            </div>
                          </div>
                          {activeTooltip === 3 && (
                            <div className="absolute -bottom-20 left-0 right-0 bg-primary text-primary-foreground rounded-lg p-3 shadow-lg z-10 animate-in slide-in-from-top duration-300">
                              <div className="flex items-start gap-2">
                                <Icon name="TrendingDown" className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <div className="text-xs">
                                  <p className="font-bold mb-1">Экономия 203 000 ₽ (64%)</p>
                                  <p className="opacity-90">0AU409053T • Новая 318 000 ₽ → Восст. 114 990 ₽</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-lg p-4 border-2 border-primary/30 animate-in fade-in duration-500 delay-700">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 animate-pulse">
                              <Icon name="Star" className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-bold text-sm">Volkswagen Tiguan — самый популярный!</p>
                              <p className="text-xs text-muted-foreground">Экономия 203 000 ₽ • Более 80 довольных клиентов</p>
                            </div>
                          </div>
                          <Button 
                            size="sm"
                            onClick={scrollToContacts}
                            className="flex-shrink-0"
                          >
                            <Icon name="Phone" className="mr-1.5 h-4 w-4" />
                            Записаться
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-primary/20 pt-4 mt-4">
                  <h3 className="text-lg font-bold mb-3 text-center">Примеры цен для популярных моделей</h3>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-5 border-2 border-primary/20 hover:border-primary/40 transition-all text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon name="Car" className="h-5 w-5 text-primary" />
                        <h4 className="font-bold">Hyundai / Kia АКПП</h4>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">69 990 ₽</div>
                      <p className="text-xs text-muted-foreground mb-2">ремонт под ключ</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-3 pt-3 border-t">
                        <Icon name="Users" className="h-3 w-3" />
                        <span>Более 200 клиентов</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-5 border-2 border-primary/20 hover:border-primary/40 transition-all text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon name="Car" className="h-5 w-5 text-primary" />
                        <h4 className="font-bold">Hyundai / Kia МКПП</h4>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">79 990 ₽</div>
                      <p className="text-xs text-muted-foreground mb-2">ремонт под ключ</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-3 pt-3 border-t">
                        <Icon name="Users" className="h-3 w-3" />
                        <span>Более 50 клиентов</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border-2 border-primary/30 hover:border-primary/50 transition-all text-center relative md:scale-105 shadow-lg animate-pulse hover:animate-none">
                      <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 shadow-md">
                        <Icon name="Star" className="h-3 w-3 mr-1" />
                        Популярное
                      </Badge>
                      <div className="flex items-center justify-center gap-2 mb-2 mt-2">
                        <Icon name="Car" className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-base">Volkswagen Tiguan</h4>
                      </div>
                      <div className="text-4xl font-bold text-primary mb-1">114 990 ₽</div>
                      <p className="text-xs text-muted-foreground mb-2">ремонт под ключ</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-primary/70 mt-3 pt-3 border-t border-primary/20">
                        <Icon name="Users" className="h-3 w-3" />
                        <span className="font-semibold">Более 80 клиентов</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    <Icon name="Info" className="h-3 w-3 inline mr-1" />
                    Точная стоимость зависит от состояния деталей и объёма работ
                  </p>
                </div>

                <div className="border-t border-dashed border-primary/20 pt-4 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-3">Работаем с марками</h3>
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

                <div className="border-t border-dashed border-primary/20 pt-4 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="CreditCard" className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-3">Способы оплаты</h3>
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

                <div className="border-t border-dashed border-primary/20 pt-4 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="HelpCircle" className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-3">Часто задаваемые вопросы</h3>
                      <div className="space-y-3">
                        <div className="bg-background rounded-lg p-3 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Можно ли оставить автомобиль у вас на время ремонта?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Да, автомобиль остаётся у нас на весь срок ремонта. Стандартный ремонт проходит в течение дня, сложные случаи могут занять 3-7 дней. Вы можете забрать автомобиль в удобное время после завершения работ.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-3 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Что такое стандартный и сложный ремонт?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6 mb-2">
                            <span className="font-semibold">Стандартный (1 день):</span> восстановление вала или дифференциала, замена корзины фрикционов, установка деталей на обмен.
                          </p>
                          <p className="text-xs text-muted-foreground pl-6">
                            <span className="font-semibold">Сложный (3-7 дней):</span> восстановление МКПП, одновременное восстановление вала + дифференциала, ремонт при сильном износе корпуса.
                          </p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-3 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Что делать, если проблема повторится?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">На все работы действует гарантия 18 месяцев. Если проблема повторится в течение гарантийного срока — устраним бесплатно.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-3 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Нужно ли мне самому снимать детали?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Нет, это услуга под ключ. Мы сами демонтируем неисправные детали, восстанавливаем их и устанавливаем обратно.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-3 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Можно ли приехать из другого региона?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Да, принимаем клиентов из любых регионов. Для удалённых клиентов можем организовать восстановление деталей с доставкой СДЭК — вы снимаете детали сами.</p>
                        </div>
                        
                        <div className="bg-background rounded-lg p-3 border">
                          <h4 className="font-bold text-sm mb-2 flex items-start gap-2">
                            <Icon name="MessageCircle" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            Как я буду узнавать о ходе работ?
                          </h4>
                          <p className="text-xs text-muted-foreground pl-6">Мастер звонит вам по телефону и сообщает о каждом важном этапе: завершение диагностики с финальной стоимостью, начало восстановления, готовность к установке и завершение всех работ. Вы всегда в курсе, на какой стадии находится ваш автомобиль.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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