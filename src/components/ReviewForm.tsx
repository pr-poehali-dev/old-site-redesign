import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Star } from "lucide-react";

interface ReviewFormProps {
  onSuccess?: () => void;
}

export const ReviewForm = ({ onSuccess }: ReviewFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    car: "",
    text: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://functions.poehali.dev/080f0a56-0c76-4937-9436-f8416b3b1da9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rating,
          date: new Date().toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        }),
      });

      if (response.ok) {
        setFormData({ name: "", car: "", text: "" });
        setRating(5);
        setIsOpen(false);
        onSuccess?.();
        alert("Спасибо за ваш отзыв! Он появится на сайте после модерации.");
      } else {
        alert("Произошла ошибка при отправке отзыва. Попробуйте еще раз.");
      }
    } catch (error) {
      alert("Произошла ошибка при отправке отзыва. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="text-center">
        <Button
          onClick={() => setIsOpen(true)}
          size="default"
          className="gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900"
        >
          <Icon name="MessageSquarePlus" className="h-4 w-4" />
          Оставить отзыв
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Оставьте отзыв</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Закрыть форму"
        >
          <Icon name="X" className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Оценка */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ваша оценка
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Имя */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Иван Иванов"
          />
        </div>

        {/* Автомобиль */}
        <div>
          <label htmlFor="car" className="block text-sm font-semibold text-gray-700 mb-2">
            Автомобиль или услуга
          </label>
          <select
            id="car"
            value={formData.car}
            onChange={(e) => setFormData({ ...formData, car: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Выберите автомобиль</option>
            <option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
            <option value="Hyundai Tucson">Hyundai Tucson</option>
            <option value="Kia Sportage">Kia Sportage</option>
            <option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
            <option value="Kia Sorento">Kia Sorento</option>
            <option value="Mazda CX-7">Mazda CX-7</option>
            <option value="Mazda CX-9">Mazda CX-9</option>
            <option value="Volvo XC90">Volvo XC90</option>
            <option value="Land Rover Freelander">Land Rover Freelander</option>
            <option value="Ford Kuga">Ford Kuga</option>
            <option value="Haval F7">Haval F7</option>
            <option value="Другое">Другое</option>
          </select>
        </div>

        {/* Текст отзыва */}
        <div>
          <label htmlFor="text" className="block text-sm font-semibold text-gray-700 mb-2">
            Ваш отзыв
          </label>
          <textarea
            id="text"
            required
            rows={4}
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Расскажите о вашем опыте работы с нами..."
          />
        </div>

        {/* Кнопки */}
        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? "Отправка..." : "Отправить отзыв"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isSubmitting}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};