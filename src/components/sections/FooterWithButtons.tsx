import Icon from '@/components/ui/icon';

interface FooterWithButtonsProps {
  viewCount: number;
  showScrollTop: boolean;
}

export const FooterWithButtons = ({ viewCount, showScrollTop }: FooterWithButtonsProps) => {
  return (
    <>
      <footer className="border-t py-8 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center shadow-lg">
                  <img src="https://cdn.poehali.dev/files/c116f9e4-e2c2-4aa5-884f-61b41ae2b38d.jpg" alt="Мега Шлиц" className="h-full w-full object-contain" />
                </div>
                <span className="text-lg font-extrabold">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
              </div>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                Восстановление шлицевых соединений деталей трансмиссии с использованием запатентованной технологии
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base mb-3">Контакты</h3>
              <a href="tel:+79202520352" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Phone" className="h-4 w-4 flex-shrink-0" />
                +7 (920) 252-03-52
              </a>
              <a href="tel:+78312601123" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Phone" className="h-4 w-4 flex-shrink-0" />
                +7 (831) 260-11-23 <span className="text-xs text-secondary-foreground/60">(производство)</span>
              </a>
              <a href="mailto:megashlic@yandex.ru" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="Mail" className="h-4 w-4 flex-shrink-0" />
                megashlic@yandex.ru
              </a>
              <a href="https://wa.me/79202520352" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Icon name="MessageCircle" className="h-4 w-4 flex-shrink-0" />
                WhatsApp
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base mb-3">Адрес и режим работы</h3>
              <div className="flex items-start gap-2 text-sm">
                <Icon name="MapPin" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>г. Нижний Новгород,<br />Восточный проезд, 11/1</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Icon name="Clock" className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Пн-Пт: 9:30 - 17:30</div>
                  <div className="text-secondary-foreground/60">Сб-Вс: выходной</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-secondary-foreground/70">
              © 2024 Мега Шлиц. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-foreground/60">
              <Icon name="Eye" className="h-4 w-4" />
              <span>Просмотров: {viewCount.toLocaleString('ru-RU')}</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+79202520352"
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Позвонить"
        >
          <Icon name="Phone" className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Позвонить
          </span>
        </a>

        <a
          href="https://wa.me/79202520352"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Написать в WhatsApp
          </span>
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-28 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Вернуться наверх"
        >
          <Icon name="ArrowUp" className="h-6 w-6" />
        </button>
      )}
    </>
  );
};