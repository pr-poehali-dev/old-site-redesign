import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  formData: { name: string; phone: string; detail: string; message: string };
  setFormData: (value: { name: string; phone: string; detail: string; message: string }) => void;
  formStatus: 'idle' | 'sending' | 'success' | 'error';
  handleFormSubmit: (e: React.FormEvent) => void;
}

export const ContactForm = ({
  formData,
  setFormData,
  formStatus,
  handleFormSubmit,
}: ContactFormProps) => {
  return (
    <section className="py-8 border-t bg-gradient-to-br from-primary/5 to-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-1 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Отправить заявку</h2>
            <p className="text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              {formStatus === 'success' && (
                <div className="mb-4 p-4 bg-primary/10 text-primary rounded-md">
                  ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-md">
                  Ошибка отправки. Попробуйте позже или позвоните нам напрямую.
                </div>
              )}
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="detail" className="block text-sm font-medium mb-2">
                    Какую деталь нужно восстановить?
                  </label>
                  <Input 
                    id="detail" 
                    placeholder="Например: полуось переднего моста Land Cruiser"
                    value={formData.detail}
                    onChange={(e) => setFormData({...formData, detail: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Дополнительная информация
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Опишите состояние детали, сроки, способ доставки..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={formStatus === 'sending'}>
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  {formStatus === 'sending' ? 'Отправка...' : 'Отправить заявку'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};