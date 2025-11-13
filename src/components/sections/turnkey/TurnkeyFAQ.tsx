import Icon from '@/components/ui/icon';

export const TurnkeyFAQ = () => {
  return (
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
  );
};
