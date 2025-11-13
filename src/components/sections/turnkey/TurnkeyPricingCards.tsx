import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const TurnkeyPricingCards = () => {
  return (
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
  );
};
