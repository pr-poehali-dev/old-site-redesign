import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const TurnkeyPricingCards = () => {
  return (
    <div className="border-t border-dashed border-primary/20 pt-3 md:pt-4 mt-3 md:mt-4">
      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-center">Примеры цен для популярных моделей</h3>
      <div className="grid md:grid-cols-3 gap-3 md:gap-4 items-center">
        <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-3 md:p-5 border-2 border-primary/20 hover:border-primary/40 transition-all text-center">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
            <Icon name="Car" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <h4 className="font-bold text-xs md:text-sm">Hyundai / Kia АКПП</h4>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">69 990 ₽</div>
          <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2">ремонт под ключ</p>
          <div className="flex items-center justify-center gap-1 text-[10px] md:text-xs text-muted-foreground mt-2 md:mt-3 pt-2 md:pt-3 border-t">
            <Icon name="Users" className="h-3 w-3" />
            <span>Более 200 клиентов</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-3 md:p-5 border-2 border-primary/20 hover:border-primary/40 transition-all text-center">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
            <Icon name="Car" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <h4 className="font-bold text-xs md:text-sm">Hyundai / Kia МКПП</h4>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">79 990 ₽</div>
          <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2">ремонт под ключ</p>
          <div className="flex items-center justify-center gap-1 text-[10px] md:text-xs text-muted-foreground mt-2 md:mt-3 pt-2 md:pt-3 border-t">
            <Icon name="Users" className="h-3 w-3" />
            <span>Более 50 клиентов</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-3 md:p-5 border-2 border-primary/20 hover:border-primary/40 transition-all text-center">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
            <Icon name="Car" className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <h4 className="font-bold text-xs md:text-sm">Volkswagen Tiguan</h4>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">114 990 ₽</div>
          <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2">ремонт под ключ</p>
          <div className="flex items-center justify-center gap-1 text-[10px] md:text-xs text-muted-foreground mt-2 md:mt-3 pt-2 md:pt-3 border-t">
            <Icon name="Users" className="h-3 w-3" />
            <span>Более 80 клиентов</span>
          </div>
        </div>
      </div>
      <p className="text-[10px] md:text-xs text-muted-foreground text-center mt-3 md:mt-4">
        <Icon name="Info" className="h-3 w-3 inline mr-1" />
        Точная стоимость зависит от состояния деталей и объёма работ
      </p>
    </div>
  );
};