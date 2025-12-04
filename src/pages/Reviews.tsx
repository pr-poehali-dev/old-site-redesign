import { ArrowLeft, Star, Calendar, Quote } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Вернуться на главную
        </Link>

        {/* Заголовок с градиентом */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Quote size={200} className="text-primary" />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4">
              Отзывы наших клиентов
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Реальные истории автовладельцев, которые доверили нам восстановление своих автомобилей
            </p>
            
            {/* Статистика в красивых карточках */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-7 w-7 fill-yellow-400 text-yellow-400 drop-shadow-sm" 
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
                    <div className="text-sm text-gray-600 font-medium">Средняя оценка</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl p-6 text-white hover:scale-105 transition-all hover:shadow-2xl">
                <div className="text-5xl font-bold mb-1">50</div>
                <div className="text-sm font-medium opacity-90">отзывов на Авито</div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl font-bold text-primary mb-1">{totalReviews}</div>
                <div className="text-sm text-gray-600 font-medium">на этой странице</div>
              </div>
            </div>
          </div>
        </div>

        {/* Список отзывов в одну колонку */}
        <div className="max-w-5xl mx-auto space-y-6 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Цветная полоска сверху */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>
              
              <div className="p-6">
                {/* Шапка с аватаром */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/20">
                        {review.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-500 font-medium">{review.car}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="whitespace-nowrap">{review.date.split(' ')[0]} {review.date.split(' ')[1]}</span>
                  </div>
                </div>

                {/* Рейтинг */}
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Бейдж услуги */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-primary/20">
                  <Icon name="Wrench" size={14} />
                  {review.service}
                </div>

                {/* Текст отзыва с кавычками */}
                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/10" />
                  <p className="text-gray-700 leading-relaxed pl-6 italic">
                    {review.text}
                  </p>
                </div>

                {/* Футер с лайками */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1 bg-primary/5 px-3 py-1 rounded-full">
                      <Icon name="ThumbsUp" size={14} className="text-primary" />
                      <span className="font-semibold text-primary">{review.helpful}</span>
                    </div>
                    <span className="text-xs">человек нашли полезным</span>
                  </div>
                  <Icon name="CheckCircle2" size={20} className="text-green-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ссылка на Авито */}
        <div className="text-center mb-12">
          <a 
            href="https://www.avito.ru/brands/i366874101/all?sellerId=84ca6aad385f8193bb13b75db9fe17ae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Icon name="ExternalLink" size={24} />
            Посмотреть все 50 отзывов на Авито
          </a>
        </div>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Станьте одним из наших довольных клиентов!
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
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
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Icon name="Phone" size={24} />
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
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Icon name="MessageCircle" size={24} />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Reviews;