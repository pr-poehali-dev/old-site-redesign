import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect, useRef } from 'react';

interface TurnkeyPricingDiagramProps {
  scrollToContacts: () => void;
}

export const TurnkeyPricingDiagram = ({ scrollToContacts }: TurnkeyPricingDiagramProps) => {
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

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-3 md:p-4 border-2 border-primary/20">
      <div className="flex items-start gap-2 md:gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon name="TrendingDown" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm md:text-base font-bold mb-1.5 md:mb-2">Экономия от 68 000 до 203 000 ₽ по сравнению с новыми деталями</h3>
          <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
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
            <p className="text-[10px] md:text-xs pt-1.5 md:pt-2 border-t">
              Вы получаете такое же качество работы, полную гарантию 12 месяцев без ограничения пробега и существенную экономию!
            </p>
          </div>
          
          <div className="mt-4 md:mt-6 relative" ref={diagramRef}>
            {activeTooltip !== null && (
              <div className="absolute inset-0 -m-6 bg-black/20 rounded-lg animate-in fade-in duration-300 pointer-events-none" />
            )}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-muted-foreground">
                  <Icon name="MousePointerClick" className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary animate-pulse" />
                  <span className="font-medium">Нажмите на диаграмму для деталей</span>
                </div>
              </div>
            <div className="space-y-3 md:space-y-4">
            <div className={`space-y-2 relative transition-all duration-300 ${activeTooltip === 1 ? 'z-20' : 'z-0'}`}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold">Hyundai/Kia АКПП</span>
                <span className="text-green-600 font-bold">-68 000 ₽</span>
              </div>
              <div 
                className="flex gap-2 items-center relative"
                onClick={() => setActiveTooltip(activeTooltip === 1 ? null : 1)}
              >
                <div className="flex-1 bg-red-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-red-700 hover:bg-red-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '43.4%'}}>
                  138 000 ₽ новая
                </div>
                <div className="flex-1 bg-green-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-green-700 hover:bg-green-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '22%'}}>
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
            
            <div className={`space-y-2 relative transition-all duration-300 ${activeTooltip === 2 ? 'z-20' : 'z-0'}`}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold">Hyundai/Kia МКПП</span>
                <span className="text-green-600 font-bold">-168 000 ₽</span>
              </div>
              <div 
                className="flex gap-2 items-center relative"
                onClick={() => setActiveTooltip(activeTooltip === 2 ? null : 2)}
              >
                <div className="flex-1 bg-red-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-red-700 hover:bg-red-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '78%'}}>
                  248 000 ₽ новая
                </div>
                <div className="flex-1 bg-green-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-green-700 hover:bg-green-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '25%'}}>
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
            
            <div className={`space-y-2 relative transition-all duration-300 ${activeTooltip === 3 ? 'z-20' : 'z-0'}`}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold">Volkswagen Tiguan</span>
                <span className="text-green-600 font-bold">-203 000 ₽</span>
              </div>
              <div 
                className="flex gap-2 items-center relative"
                onClick={() => setActiveTooltip(activeTooltip === 3 ? null : 3)}
              >
                <div className="flex-1 bg-red-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-red-700 hover:bg-red-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '100%'}}>
                  318 000 ₽ новая
                </div>
                <div className="flex-1 bg-green-100 rounded-full h-6 flex items-center px-3 text-xs font-semibold text-green-700 hover:bg-green-200 hover:scale-105 hover:shadow-md cursor-pointer" style={{width: '36%'}}>
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
        </div>
      </div>
    </div>
  );
};