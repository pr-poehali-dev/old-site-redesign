import { ArrowLeft, Star, ThumbsUp, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  car: string;
  service: string;
  text: string;
  helpful: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Антон",
    date: "26 ноября 2024",
    rating: 5,
    car: "Раздатка / Угловой редуктор",
    service: "Кia / Хендай / Тигуан",
    text: "Сделка состоялась, продавец все посоветовал, отправил по адресу, всегда был на связи. Раздатки и чашка дифференциала как новые. Продавец очень хороший.",
    helpful: 12
  },
  {
    id: 2,
    name: "Руслан Маммадов",
    date: "18 ноября 2024",
    rating: 5,
    car: "Hyundai Tucson",
    service: "Вал раздатки hyundai kia",
    text: "Отправлял вал углового редуктора на Хундай Туксон на восстановление, все сделали отлично, машина катается и радует своего хозяина.",
    helpful: 8
  },
  {
    id: 3,
    name: "Игорь",
    date: "16 ноября 2024",
    rating: 5,
    car: "Kia Sportage",
    service: "Вал раздатки hyundai kia",
    text: "Ребята, профессионалы своего дела. Отправлял Т.К. (вал раздатки) Кия Спортейдж восстановили в идеал. Огромное спасибо Александру, по телефону всё объяснил, рассказал, что нужно сделать. Мою проблему решили за один день. 👍",
    helpful: 15
  },
  {
    id: 4,
    name: "Илья",
    date: "15 ноября 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    service: "Корпус чашка дифференциала АКПП",
    text: "Брал угловой редуктор на Тигуан, шлицы идеал, сальники поменяны, отмыта. Александру и ребятам огромное спасибо.",
    helpful: 9
  },
  {
    id: 5,
    name: "Алексей Вроооде",
    date: "23 октября 2024",
    rating: 5,
    car: "Различные модели",
    service: "Вал раздатки hyundai kia",
    text: "Очень оперативно сделали свою работу 👍. Отправил свою деталь, вернули как новую.",
    helpful: 7
  },
  {
    id: 6,
    name: "Ренат",
    date: "25 сентября 2024",
    rating: 5,
    car: "Преодолел 700 км",
    service: "Вал раздатки hyundai kia",
    text: "По отзывам с Авито приехал к ним преодолев 700 км. Было много вариантов. При осмотре и после разбора цена ремонта изменилась. Но к этому я в принципе был готов. Главное мне объяснили что если этого не сделать то цена после 20-30 т. пробега изменится, выбор за вами. Отношение хорошее, после выдачи авто предложили набрать в термос кипятка в дорогу. Дали очень важные рекомендации по уходу привода. Однозначно рекомендую данный сервис. Дают гарантию, значит знают свою работу.",
    helpful: 24
  },
  {
    id: 7,
    name: "Вячеслав",
    date: "24 сентября 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    service: "Раздатка и дифференциал",
    text: "Брал раздатку и дифференциал на Фольксваген Тигуан, цена + залог, всё пришло в срок, установил без проблем. Отправил изношенные раздатку и дифференциал вернули залог! Продавца рекомендую!!!",
    helpful: 18
  },
  {
    id: 8,
    name: "Игорь",
    date: "16 сентября 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    service: "Раздатка под ключ",
    text: "Всё быстро и оперативно получилось. Купил детали, оставил деньги + залог, получил детали (буквально 2 дня) демонтировали старые узлы, отправил их в Мегашлиц, задаток вернули. Насчет качества - визуально всё хорошо сделано. Время эксплуатации покажет надежность. Спасибо МегаШлиц, уже советую знакомым их услуги. Молодцы!",
    helpful: 22
  },
  {
    id: 9,
    name: "Роман",
    date: "14 августа 2024",
    rating: 5,
    car: "Hyundai / Kia",
    service: "Ремонт Муфты Корзины Лазером",
    text: "Всё отлично! А самое главное очень оперативно! 20 минут и корзина стала лучше, чем с завода! Фото до и после прилагаю. Однозначно рекомендую мастера!👍💪",
    helpful: 31
  },
  {
    id: 10,
    name: "Максим",
    date: "25 июля 2024",
    rating: 5,
    car: "Другой город (300 км)",
    service: "Раздатка под ключ VW Tiguan",
    text: "100% советую данную компанию, созвонились, все подробно объяснили, предложили несколько вариантов, я выбрал под ключ! Хоть сам из другого города но 300 км не помеха. За сутки машина была готова!!!! Двигаемся дальше, полный привод работает так как и должен работать! Александр всегда держит обратную связь!!! Ещё раз спасибо!!!",
    helpful: 28
  },
  {
    id: 11,
    name: "Андрей",
    date: "14 июля 2024",
    rating: 5,
    car: "Hyundai / Kia",
    service: "Ремонт Муфты Корзины Лазером",
    text: "Восстановили корзину фрикционов после некачественной сварки аргоном, варили лазером, весь ремонт занял не более 15 минут, проварено с двух сторон, очень качественно, дали гарантию 5 лет или 100000 км пробега, рекомендую.",
    helpful: 19
  },
  {
    id: 12,
    name: "Артём",
    date: "1 февраля 2024",
    rating: 5,
    car: "Volkswagen Tiguan",
    service: "Восстановление шлицевой",
    text: "Ребята-профессионалы! Без опаски доверили им восстановление шлицевой Тигуан, работа выполнена в лучшем виде, качественно и быстро, рекомендую 👍, цена самая адекватная по России.",
    helpful: 25
  }
];

const Reviews = () => {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Вернуться на главную
        </Link>

        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Реальные отзывы клиентов с Авито о восстановлении шлицевых соединений
          </p>
          <p className="text-sm text-primary font-semibold">
            Рейтинг 5.0 ⭐ • 50 отзывов на Авито
          </p>
          
          {/* Общая статистика */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-6 w-6 ${star <= averageRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">{totalReviews}</span> отзывов от реальных клиентов
            </div>
          </div>
        </div>

        {/* Список отзывов */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Шапка отзыва */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.car}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {review.date}
                </div>
              </div>

              {/* Рейтинг */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {review.rating}.0
                </span>
              </div>

              {/* Услуга */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {review.service}
              </div>

              {/* Текст отзыва */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Полезность */}
              <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
                <ThumbsUp className="h-4 w-4" />
                <span>Полезно: {review.helpful}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Хотите так же?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Восстановим шлицевые соединения вашего автомобиля с гарантией 12 месяцев. 
            Работаем со всей Россией. Цены в 2-3 раза ниже покупки новых деталей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+79202520352"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(96856709, 'reachGoal', 'phone_click');
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Icon name="Phone" size={20} />
              +7 (920) 252-03-52
            </a>
            <a 
              href="https://wa.me/79202520352"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(96856709, 'reachGoal', 'whatsapp_click');
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;