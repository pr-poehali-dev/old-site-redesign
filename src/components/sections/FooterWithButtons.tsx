import Icon from '@/components/ui/icon';

interface FooterWithButtonsProps {
  viewCount: number;
  showScrollTop: boolean;
}

export const FooterWithButtons = ({ viewCount, showScrollTop }: FooterWithButtonsProps) => {
  return (
    <>
      <footer className="border-t py-4 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/95ca077b-94b5-42c3-a7a7-f99244c50369.jpg" alt="Мега Шлиц" className="h-10 w-10 object-contain" />
              <span className="font-extrabold">Мега Шлиц<sup className="text-xs ml-0.5">®</sup></span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-secondary-foreground/80">
                © 2024 Мега Шлиц. Восстановление шлицевых соединений.
              </p>
              <div className="flex items-center gap-2 text-xs text-secondary-foreground/60">
                <Icon name="Eye" className="h-4 w-4" />
                <span>Просмотров: {viewCount.toLocaleString('ru-RU')}</span>
              </div>
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