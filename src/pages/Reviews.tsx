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
    name: "Алексей М.",
    date: "28 ноября 2024",
    rating: 5,
    car: "Hyundai Santa Fe 2015",
    service: "Восстановление вала раздатки",
    text: "Обратился с проблемой вибрации на полном приводе. Диагностика показала износ шлицов на валу раздатки. Ребята восстановили деталь за 2 дня, работают очень аккуратно. После установки - никаких вибраций! Гарантию дали на год. Цена адекватная, работой доволен на все 100%.",
    helpful: 24
  },
  {
    id: 2,
    name: "Дмитрий К.",
    date: "15 ноября 2024",
    rating: 5,
    car: "Kia Sorento 2018",
    service: "Восстановление шлицев дифференциала",
    text: "Сначала думал покупать новый дифференциал (цена космическая), но друг посоветовал этих ребят. Восстановили шлицы, всё работает отлично! Экономия вышла раза в 3. Мастера знают своё дело, объяснили всё понятно. Рекомендую!",
    helpful: 18
  },
  {
    id: 3,
    name: "Сергей В.",
    date: "3 ноября 2024",
    rating: 5,
    car: "Volkswagen Tiguan 2016",
    service: "Ремонт под ключ (вал + муфта)",
    text: "Привёз машину с хрустом при включении полного привода. Сделали полную диагностику, нашли проблему в шлицах вала и муфты. Восстановили обе детали под ключ - забрал через 3 дня. Работает как новая! Цена оказалась в 2 раза дешевле покупки новых запчастей. Спасибо огромное!",
    helpful: 31
  },
  {
    id: 4,
    name: "Андрей П.",
    date: "20 октября 2024",
    rating: 5,
    car: "Mazda CX-7 2014",
    service: "Восстановление вала раздатки",
    text: "Отличная работа! Приехал из Казани специально к этим ребятам по рекомендации. Не пожалел - сделали быстро, качественно, с гарантией. Вал восстановили за день, сразу установили. Теперь езжу без проблем. Всем рекомендую!",
    helpful: 15
  },
  {
    id: 5,
    name: "Михаил Т.",
    date: "8 октября 2024",
    rating: 5,
    car: "Hyundai Tucson 2017",
    service: "Восстановление шлицев раздатки",
    text: "Машина начала дёргаться при разгоне на полном приводе. Диагностика показала износ шлицов. Восстановили деталь, всё объяснили, показали фото до и после. Работают профессионально, чисто, аккуратно. Гарантия 12 месяцев - это внушает доверие. Очень доволен!",
    helpful: 22
  },
  {
    id: 6,
    name: "Владимир С.",
    date: "25 сентября 2024",
    rating: 5,
    car: "Kia Sportage 2016",
    service: "Восстановление вала + диагностика",
    text: "Ехал из Москвы в отпуск, начались проблемы с полным приводом. Остановился в Нижнем, нашёл этих ребят. За день сделали диагностику и восстановили вал. Очень оперативно! Цена честная, работа качественная. Уже полгода езжу - всё отлично работает.",
    helpful: 19
  },
  {
    id: 7,
    name: "Игорь Н.",
    date: "12 сентября 2024",
    rating: 5,
    car: "Mazda CX-5 2015",
    service: "Ремонт под ключ (раздатка)",
    text: "Обратился с полным комплексом проблем - раздатка гудела, был люфт. Сделали диагностику, восстановили все изношенные детали под ключ. Работа заняла 4 дня (предупредили сразу). Результат превзошёл ожидания - машина едет как новая! Отдельное спасибо за консультации и профессионализм.",
    helpful: 28
  },
  {
    id: 8,
    name: "Роман Л.",
    date: "1 сентября 2024",
    rating: 5,
    car: "Hyundai ix35 2013",
    service: "Восстановление шлицев вала",
    text: "Искал мастеров по всему Нижнему, кто занимается именно восстановлением шлицов. Нашёл этих ребят - не прогадал! Работают с патентованной технологией, дают гарантию. Вал восстановили за 2 дня, цена в 3 раза дешевле нового. Рекомендую всем!",
    helpful: 16
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
            Реальные отзывы автовладельцев о восстановлении шлицевых соединений
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
