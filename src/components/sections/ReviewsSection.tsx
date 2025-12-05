import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ReviewForm } from "@/components/ReviewForm";

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
    name: "Владимир Нутрихин",
    date: "4 декабря 2024",
    car: "Volkswagen Tiguan",
    text: "Раздаточную коробку получил, за что больше спасибо. При неоднократном обращении всегда отвечали и доступно разъяснили. За что большое-пребольшое спасибо. Доставка пришла быстро. Большое Вам спасибо за такую работу. Сейчас уже редко встретишь такое отношение.",
  },
  {
    id: 2,
    name: "Антон",
    date: "26 ноября 2024",
    car: "Раздатка / Угловой редуктор",
    text: "Сделка состоялась, продавец все посоветовал, отправил по адресу, всегда был на связи. Раздатки и чашка дифференциала как новые. Продавец очень хороший.",
  },
  {
    id: 3,
    name: "Руслан Маммадов",
    date: "18 ноября 2024",
    car: "Hyundai Tucson",
    text: "Отправлял вал углового редуктора на Хундай Туксон на восстановление, все сделали отлично, машина катается и радует своего хозяина.",
  },
  {
    id: 4,
    name: "Игорь",
    date: "16 ноября 2024",
    car: "Kia Sportage",
    text: "Ребята, профессионалы своего дела. Отправлял Т.К. (вал раздатки) Кия Спортейдж восстановили в идеал. Огромное спасибо Александру, по телефону всё объяснил, рассказал, что нужно сделать. Мою проблему решили за один день. 👍",
  },
  {
    id: 5,
    name: "Илья",
    date: "15 ноября 2024",
    car: "Volkswagen Tiguan",
    text: "Брал угловой редуктор на Тигуан, шлицы идеал, сальники поменяны, отмыта. Александру и ребятам огромное спасибо.",
  },
  {
    id: 6,
    name: "Алексей Вроооде",
    date: "23 октября 2024",
    car: "Различные модели",
    text: "Очень оперативно сделали свою работу 👍. Отправил свою деталь, вернули как новую.",
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

  const fetchReviews = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <section id="reviews" className="py-6 md:py-8 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Заголовок */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1.5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold text-yellow-700">5.0 на Авито</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Реальные отзывы
            </h2>
          </div>

          {/* Карусель на мобильных, сетка на десктопе */}
          <div className="mb-6">
            {/* Мобильная карусель */}
            <div className="md:hidden relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-3">
                  {reviews.map((review) => (
                    <div 
                      key={review.id}
                      className="flex-[0_0_85%] min-w-0"
                    >
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-full">
                        {/* Звезды */}
                        <div className="flex items-center gap-0.5 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" 
                            />
                          ))}
                        </div>

                        {/* Текст отзыва */}
                        <p className="text-gray-700 text-sm leading-snug mb-3 line-clamp-3">
                          {review.text}
                        </p>

                        {/* Автор */}
                        <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {review.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-xs text-gray-900 truncate">{review.name}</h3>
                            <p className="text-[10px] text-gray-500 truncate">{review.car}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Кнопки навигации карусели */}
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-all"
                  aria-label="Previous review"
                >
                  <Icon name="ChevronLeft" className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-all"
                  aria-label="Next review"
                >
                  <Icon name="ChevronRight" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Десктопная карусель */}
            <div className="hidden md:block relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {reviews.map((review) => (
                    <div 
                      key={review.id}
                      className="flex-[0_0_calc(33.333%-11px)] min-w-0 group bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      {/* Звезды */}
                      <div className="flex items-center gap-0.5 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" 
                          />
                        ))}
                      </div>

                      {/* Текст отзыва */}
                      <p className="text-gray-700 text-sm leading-snug mb-3 line-clamp-3">
                        {review.text}
                      </p>

                      {/* Автор */}
                      <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-xs text-gray-900 truncate">{review.name}</h3>
                          <p className="text-[10px] text-gray-500 truncate">{review.car}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Кнопки навигации для десктопа */}
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-all"
                  aria-label="Previous review"
                >
                  <Icon name="ChevronLeft" className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-all"
                  aria-label="Next review"
                >
                  <Icon name="ChevronRight" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <ReviewForm onSuccess={fetchReviews} />
            <a 
              href="https://www.avito.ru/brands/i366874101/all?sellerId=84ca6aad385f8193bb13b75db9fe17ae"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="default" 
                className="w-full sm:w-auto"
              >
                <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                Отзывы на Авито
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};