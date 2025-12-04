import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  car: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Антон",
    date: "26 ноября 2024",
    rating: 5,
    car: "Раздатка / Угловой редуктор",
    text: "Сделка состоялась, продавец все посоветовал, отправил по адресу, всегда был на связи. Раздатки и чашка дифференциала как новые. Продавец очень хороший.",
  },
  {
    id: 2,
    name: "Руслан Маммадов",
    date: "18 ноября 2024",
    rating: 5,
    car: "Hyundai Tucson",
    text: "Отправлял вал углового редуктора на Хундай Туксон на восстановление, все сделали отлично, машина катается и радует своего хозяина.",
  },
  {
    id: 3,
    name: "Игорь",
    date: "16 ноября 2024",
    rating: 5,
    car: "Kia Sportage",
    text: "Ребята, профессионалы своего дела. Отправлял Т.К. (вал раздатки) Кия Спортейдж восстановили в идеал. Огромное спасибо Александру, по телефону всё объяснил, рассказал, что нужно сделать. Мою проблему решили за один день. 👍",
  },
  {
    id: 4,
    name: "Илья",
    date: "15 ноября 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    text: "Брал угловой редуктор на Тигуан, шлицы идеал, сальники поменяны, отмыта. Александру и ребятам огромное спасибо.",
  },
  {
    id: 5,
    name: "Алексей Вроооде",
    date: "23 октября 2024",
    rating: 5,
    car: "Различные модели",
    text: "Очень оперативно сделали свою работу 👍. Отправил свою деталь, вернули как новую.",
  },
  {
    id: 6,
    name: "Ренат",
    date: "25 сентября 2024",
    rating: 5,
    car: "Преодолел 700 км",
    text: "По отзывам с Авито приехал к ним преодолев 700 км. Было много вариантов. При осмотре и после разбора цена ремонта изменилась. Но к этому я в принципе был готов. Главное мне объяснили что если этого не сделать то цена после 20-30 т. пробега изменится, выбор за вами. Отношение хорошее, после выдачи авто предложили набрать в термос кипятка в дорогу. Дали очень важные рекомендации по уходу привода. Однозначно рекомендую данный сервис. Дают гарантию, значит знают свою работу.",
  },
  {
    id: 7,
    name: "Вячеслав",
    date: "24 сентября 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    text: "Брал раздатку и дифференциал на Фольксваген Тигуан, цена + залог, всё пришло в срок, установил без проблем. Отправил изношенные раздатку и дифференциал вернули залог! Продавца рекомендую!!!",
  },
  {
    id: 8,
    name: "Игорь",
    date: "16 сентября 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    text: "Всё быстро и оперативно получилось. Купил детали, оставил деньги + залог, получил детали (буквально 2 дня) демонтировали старые узлы, отправил их в Мегашлиц, задаток вернули. Насчет качества - визуально всё хорошо сделано. Время эксплуатации покажет надежность. Спасибо МегаШлиц, уже советую знакомым их услуги. Молодцы!",
  },
  {
    id: 9,
    name: "Роман",
    date: "14 августа 2024",
    rating: 5,
    car: "Hyundai / Kia",
    text: "Всё отлично! А самое главное очень оперативно! 20 минут и корзина стала лучше, чем с завода! Фото до и после прилагаю. Однозначно рекомендую мастера!👍💪",
  },
  {
    id: 10,
    name: "Максим",
    date: "25 июля 2024",
    rating: 5,
    car: "Другой город (300 км)",
    text: "100% советую данную компанию, созвонились, все подробно объяснили, предложили несколько вариантов, я выбрал под ключ! Хоть сам из другого города но 300 км не помеха. За сутки машина была готова!!!! Двигаемся дальше, полный привод работает так как и должен работать! Александр всегда держит обратную связь!!! Ещё раз спасибо!!!",
  },
  {
    id: 11,
    name: "Андрей",
    date: "14 июля 2024",
    rating: 5,
    car: "Hyundai / Kia",
    text: "Восстановили корзину фрикционов после некачественной сварки аргоном, варили лазером, весь ремонт занял не более 15 минут, проварено с двух сторон, очень качественно, дали гарантию 5 лет или 100000 км пробега, рекомендую.",
  },
  {
    id: 12,
    name: "Артём",
    date: "1 февраля 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    text: "Ребята-профессионалы! Без опаски доверили им восстановление шлицевой Тигуан, работа выполнена в лучшем виде, качественно и быстро, рекомендую 👍, цена самая адекватная по России.",
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Вернуться на главную
          </Link>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Отзывы клиентов
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
              </div>
              <span>•</span>
              <span>50 отзывов на Авито</span>
            </div>
          </div>

          {/* Отзывы в одну колонку */}
          <div className="space-y-4 mb-8">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
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
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  {review.text}
                </p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Ссылка на Авито */}
          <div className="text-center">
            <a 
              href="https://www.avito.ru/brands/i366874101/all?sellerId=84ca6aad385f8193bb13b75db9fe17ae"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Посмотреть все отзывы на Авито →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
