import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Review {
  id: number;
  name: string;
  date: string;
  car: string;
  text: string;
}

const reviews: Review[] = [
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
  return (
    <section id="reviews" className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Реальные отзывы клиентов</h2>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
              </div>
              <span>•</span>
              <span>50 отзывов на Авито</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {reviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationDuration: '500ms' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.car}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2 line-clamp-3">
                  {review.text}
                </p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Icon name="Star" className="mr-2 h-5 w-5" />
                Все отзывы
              </Button>
            </Link>
            <a 
              href="https://www.avito.ru/brands/i366874101/all?sellerId=84ca6aad385f8193bb13b75db9fe17ae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto">
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