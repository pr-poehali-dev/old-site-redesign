import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Review {
  id?: number;
  name: string;
  date: string;
  car?: string;
  text: string;
  rating?: string;
}

const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "Антон",
    date: "26 ноября 2024",
    car: "Раздатка / Угловой редуктор",
    text: "Сделка состоялась, продавец все посоветовал, отправил по адресу, всегда был на связи. Раздатки и чашка дифференциала как новые. Продавец очень хороший.",
  },
  {
    id: 2,
    name: "Руслан Маммадов",
    date: "18 ноября 2024",
    car: "Hyundai Tucson",
    text: "Отправлял вал углового редуктора на Хундай Туксон на восстановление, все сделали отлично, машина катается и радует своего хозяина.",
  },
  {
    id: 3,
    name: "Игорь",
    date: "16 ноября 2024",
    car: "Kia Sportage",
    text: "Ребята, профессионалы своего дела. Отправлял Т.К. (вал раздатки) Кия Спортейдж восстановили в идеал. Огромное спасибо Александру, по телефону всё объяснил, рассказал, что нужно сделать. Мою проблему решили за один день. 👍",
  },
  {
    id: 4,
    name: "Илья",
    date: "15 ноября 2024",
    car: "Volkswagen Tiguan",
    text: "Брал угловой редуктор на Тигуан, шлицы идеал, сальники поменяны, отмыта. Александру и ребятам огромное спасибо.",
  },
  {
    id: 5,
    name: "Алексей Вроооде",
    date: "23 октября 2024",
    car: "Различные модели",
    text: "Очень оперативно сделали свою работу 👍. Отправил свою деталь, вернули как новую.",
  },
  {
    id: 6,
    name: "Ренат",
    date: "25 сентября 2024",
    car: "Преодолел 700 км",
    text: "По отзывам с Авито приехал к ним преодолев 700 км. Было много вариантов. При осмотре и после разбора цена ремонта изменилась. Но к этому я в принципе был готов. Главное мне объяснили что если этого не сделать то цена после 20-30 т. пробега изменится, выбор за вами. Отношение хорошее, после выдачи авто предложили набрать в термос кипятка в дорогу. Дали очень важные рекомендации по уходу привода. Однозначно рекомендую данный сервис. Дают гарантию, значит знают свою работу.",
  },
];

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [isLoading, setIsLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/493bf302-2718-4771-8fa1-8d6463379db3');
        if (response.ok) {
          const data = await response.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews.slice(0, 6).map((review: Review, index: number) => ({
              ...review,
              id: index + 1,
              car: review.car || 'Клиент',
            })));
          }
        }
      } catch (error) {
        console.log('Используются статичные отзывы');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-700">Рейтинг 5.0 на Авито</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Более 50 довольных клиентов оставили отзывы о качестве нашей работы
            </p>
          </div>

          {/* Карусель на мобильных, сетка на десктопе */}
          <div className="mb-12">
            {/* Мобильная карусель */}
            <div className="md:hidden relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {reviews.map((review, index) => (
                    <div 
                      key={review.id}
                      className="flex-[0_0_85%] min-w-0"
                    >
                      <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                        {/* Звезды */}
                        <div className="flex items-center gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                            />
                          ))}
                        </div>

                        {/* Текст отзыва */}
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                          "{review.text}"
                        </p>

                        {/* Автор */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                              {review.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm text-gray-900">{review.name}</h3>
                              <p className="text-xs text-gray-500">{review.car}</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Кнопки навигации карусели */}
              <div className="flex justify-center gap-3 mt-6">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all shadow-md"
                  aria-label="Previous review"
                >
                  <Icon name="ChevronLeft" className="h-5 w-5" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all shadow-md"
                  aria-label="Next review"
                >
                  <Icon name="ChevronRight" className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Десктопная сетка */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={review.id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: '600ms' }}
                >
                  {/* Звезды */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform group-hover:scale-110" 
                        style={{ transitionDelay: `${star * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Текст отзыва */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    "{review.text}"
                  </p>

                  {/* Автор */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900">{review.name}</h3>
                        <p className="text-xs text-gray-500">{review.car}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reviews" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <Icon name="Star" className="mr-2 h-5 w-5" />
                Все отзывы
              </Button>
            </Link>
            <a 
              href="https://www.avito.ru/brands/i366874101/all?sellerId=84ca6aad385f8193bb13b75db9fe17ae"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all"
              >
                <Icon name="ExternalLink" className="mr-2 h-5 w-5" />
                Отзывы на Авито
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};