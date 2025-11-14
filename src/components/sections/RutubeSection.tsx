import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const RutubeSection = () => {
  return (
    <section id="video" className="py-6 md:py-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center space-y-1 mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold">Видео наших работ</h2>
          <p className="text-xs md:text-sm text-muted-foreground">Смотрите процесс восстановления деталей</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://rutube.ru/play/embed/a2c345d99a6b40181efac28a33770cb9/"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://rutube.ru/play/embed/5a6ae8d4fe853385c5407283678149ed/"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </Card>
          </div>

          <div className="mt-3 md:mt-4 text-center">
            <a
              href="https://rutube.ru/channel/28967026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Icon name="Video" className="h-4 w-4 md:h-5 md:w-5" />
              Больше видео на нашем канале Rutube
              <Icon name="ExternalLink" className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};