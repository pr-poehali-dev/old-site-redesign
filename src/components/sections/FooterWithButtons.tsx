import Icon from '@/components/ui/icon';

interface FooterWithButtonsProps {
  viewCount: number;
  showScrollTop: boolean;
  onConsultClick?: () => void;
}

export const FooterWithButtons = ({ viewCount, showScrollTop, onConsultClick }: FooterWithButtonsProps) => {
  return (
    <>
      <footer className="border-t border-zinc-800 py-4 md:py-6 bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-3 md:mb-4">
            <div className="space-y-1.5 md:space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <img src="https://cdn.poehali.dev/files/801cdf4b-ac79-4038-902c-da3dda6718fe.jpg" alt="Мега Шлиц" className="h-10 w-10 md:h-14 md:w-14 object-contain" />
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-extrabold">Мега Шлиц<sup className="text-[10px] md:text-xs ml-0.5">®</sup></span>
                  <span className="text-[10px] md:text-xs text-zinc-400">Патент РФ № 2829377</span>
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed">
                Восстановление шлицевых соединений деталей трансмиссии
              </p>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <h3 className="font-bold text-xs md:text-sm mb-1.5">Телефоны</h3>
              <a href="tel:+79202520352" className="flex items-center gap-1.5 text-[10px] md:text-xs hover:text-primary transition-colors">
                <Icon name="Phone" className="h-3.5 w-3.5 flex-shrink-0" />
                +7 (920) 252-03-52
              </a>
              <a href="tel:+78312601123" className="flex items-center gap-1.5 text-[10px] md:text-xs hover:text-primary transition-colors">
                <Icon name="Phone" className="h-3.5 w-3.5 flex-shrink-0" />
                +7 (831) 260-11-23 <span className="text-[9px] md:text-[10px] text-secondary-foreground/60">(произ.)</span>
              </a>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <h3 className="font-bold text-xs md:text-sm mb-1.5">Связь</h3>
              <a href="mailto:megashlic@yandex.ru" className="flex items-center gap-1.5 text-[10px] md:text-xs hover:text-primary transition-colors">
                <Icon name="Mail" className="h-3.5 w-3.5 flex-shrink-0" />
                Email
              </a>
              <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] md:text-xs hover:text-primary transition-colors">
                <Icon name="MessageCircle" className="h-3.5 w-3.5 flex-shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-2 md:pt-3 flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-2">
            <p className="text-[10px] md:text-xs text-zinc-400">
              © 2024 Мега Шлиц. Все права защищены.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-zinc-400">
              <Icon name="Eye" className="h-3.5 w-3.5" />
              <span>Просмотров: {viewCount.toLocaleString('ru-RU')}</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
        {onConsultClick && (
          <button
            onClick={onConsultClick}
            className="bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Написать нам"
          >
            <Icon name="Mail" className="h-5 w-5 md:h-6 md:w-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Написать нам
            </span>
          </button>
        )}

        <a
          href="tel:+79202520352"
          className="bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Позвонить"
        >
          <Icon name="Phone" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Позвонить
          </span>
        </a>

        <a
          href="https://wa.me/79202520352"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Написать в WhatsApp
          </span>
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-20 md:bottom-6 md:right-28 z-50 bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Вернуться наверх"
        >
          <Icon name="ArrowUp" className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}
    </>
  );
};