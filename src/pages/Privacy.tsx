import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Политика конфиденциальности — Мега Шлиц";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Политика конфиденциальности и защиты персональных данных клиентов компании Мега Шлиц. Обработка данных в соответствии с законодательством РФ.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Вернуться на главную
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Политика конфиденциальности
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">
            Последнее обновление: 31 декабря 2025 г.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта <strong>megashlic.ru</strong> (далее — «Сайт»).
            </p>
            <p>
              Используя Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности. 
              Если вы не согласны с условиями, пожалуйста, не используйте Сайт.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Какие данные мы собираем
            </h2>
            <p>При использовании Сайта мы можем собирать следующую информацию:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Контактная информация:</strong> имя, номер телефона, адрес электронной почты (при заполнении форм обратной связи)</li>
              <li><strong>Технические данные:</strong> IP-адрес, тип браузера, операционная система, время посещения</li>
              <li><strong>Данные о поведении:</strong> страницы, которые вы посещаете, время на сайте, источник перехода</li>
              <li><strong>Cookies:</strong> файлы cookie для улучшения работы Сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Как мы используем ваши данные
            </h2>
            <p>Мы используем собранные данные для следующих целей:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Обработка заявок и обратной связи</li>
              <li>Связь с вами по вопросам предоставления услуг</li>
              <li>Улучшение работы Сайта и пользовательского опыта</li>
              <li>Анализ посещаемости и эффективности рекламных кампаний</li>
              <li>Отправка информационных сообщений (при вашем согласии)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Передача данных третьим лицам
            </h2>
            <p>
              Мы не передаём ваши персональные данные третьим лицам, за исключением следующих случаев:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Яндекс.Метрика:</strong> для анализа посещаемости сайта</li>
              <li><strong>Calltouch:</strong> для коллтрекинга и записи звонков</li>
              <li><strong>По требованию закона:</strong> если это необходимо в соответствии с законодательством РФ</li>
            </ul>
            <p>
              Все третьи лица обязаны соблюдать конфиденциальность ваших данных в соответствии 
              с их политиками конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Защита данных
            </h2>
            <p>
              Мы применяем технические и организационные меры для защиты ваших персональных данных 
              от несанкционированного доступа, изменения, раскрытия или уничтожения:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL-шифрование для защиты данных при передаче</li>
              <li>Ограниченный доступ к персональным данным для сотрудников</li>
              <li>Регулярное обновление систем безопасности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Cookies (файлы cookie)
            </h2>
            <p>
              Сайт использует cookies для улучшения пользовательского опыта и анализа посещаемости. 
              Cookies — это небольшие текстовые файлы, которые сохраняются на вашем устройстве.
            </p>
            <p>
              Вы можете отключить cookies в настройках браузера, но это может ограничить 
              функциональность Сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Ваши права
            </h2>
            <p>В соответствии с законодательством РФ вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получить информацию о хранящихся персональных данных</li>
              <li>Запросить исправление неточных данных</li>
              <li>Запросить удаление ваших данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Ограничить обработку ваших данных</li>
            </ul>
            <p>
              Для реализации ваших прав свяжитесь с нами по телефону: 
              <strong> +7 (920) 252-03-52</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Хранение данных
            </h2>
            <p>
              Мы храним ваши персональные данные в течение срока, необходимого для достижения целей, 
              указанных в настоящей Политике, или в соответствии с требованиями законодательства РФ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Изменения в Политике конфиденциальности
            </h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Все изменения вступают в силу с момента публикации новой версии на Сайте.
            </p>
            <p>
              Рекомендуем периодически проверять эту страницу для получения актуальной информации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Контактная информация
            </h2>
            <p>
              Если у вас есть вопросы по Политике конфиденциальности или обработке персональных данных, 
              свяжитесь с нами:
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mt-4">
              <p className="font-semibold text-gray-900">Мега Шлиц</p>
              <p className="text-gray-700 mt-2">
                <strong>Телефон:</strong> +7 (920) 252-03-52
              </p>
              <p className="text-gray-700">
                <strong>Адрес:</strong> г. Нижний Новгород, ул. Академика Сахарова, 107
              </p>
              <p className="text-gray-700">
                <strong>График работы:</strong> Пн-Пт: 09:30 - 17:30
              </p>
            </div>
          </section>

          <section className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2025 Мега Шлиц. Все права защищены. Настоящая Политика конфиденциальности соответствует 
              требованиям Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;