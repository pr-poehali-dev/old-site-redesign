import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  image: string;
  unit: string;
}

const products: Product[] = [
  { id: 1, name: 'Цемент М500', category: 'Цемент', price: 350, inStock: true, image: '/placeholder.svg', unit: 'мешок 50кг' },
  { id: 2, name: 'Песок строительный', category: 'Песок', price: 800, inStock: true, image: '/placeholder.svg', unit: 'м³' },
  { id: 3, name: 'Щебень гранитный', category: 'Щебень', price: 1200, inStock: true, image: '/placeholder.svg', unit: 'м³' },
  { id: 4, name: 'Кирпич керамический', category: 'Кирпич', price: 25, inStock: true, image: '/placeholder.svg', unit: 'шт' },
  { id: 5, name: 'Блок газобетонный', category: 'Блоки', price: 180, inStock: true, image: '/placeholder.svg', unit: 'шт' },
  { id: 6, name: 'Арматура А500С', category: 'Металл', price: 45000, inStock: true, image: '/placeholder.svg', unit: 'тонна' },
  { id: 7, name: 'Доска обрезная', category: 'Пиломатериалы', price: 8500, inStock: false, image: '/placeholder.svg', unit: 'м³' },
  { id: 8, name: 'Утеплитель минеральный', category: 'Утеплители', price: 450, inStock: true, image: '/placeholder.svg', unit: 'упаковка' },
  { id: 9, name: 'Гипсокартон ГКЛ', category: 'Отделка', price: 320, inStock: true, image: '/placeholder.svg', unit: 'лист' },
  { id: 10, name: 'Профиль для ГКЛ', category: 'Металл', price: 85, inStock: true, image: '/placeholder.svg', unit: 'шт' },
  { id: 11, name: 'Шпаклёвка финишная', category: 'Отделка', price: 420, inStock: true, image: '/placeholder.svg', unit: 'мешок 25кг' },
  { id: 12, name: 'Грунтовка глубокого проникновения', category: 'Отделка', price: 280, inStock: true, image: '/placeholder.svg', unit: '10л' },
];

const categories = ['Все категории', ...Array.from(new Set(products.map(p => p.category)))];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [priceRange, setPriceRange] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('catalog');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Все категории' || product.category === selectedCategory;
      const matchesStock = stockFilter === 'all' || (stockFilter === 'in-stock' && product.inStock) || (stockFilter === 'out-of-stock' && !product.inStock);
      
      let matchesPrice = true;
      if (priceRange === 'low') matchesPrice = product.price < 500;
      else if (priceRange === 'medium') matchesPrice = product.price >= 500 && product.price < 5000;
      else if (priceRange === 'high') matchesPrice = product.price >= 5000;

      return matchesSearch && matchesCategory && matchesStock && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange, stockFilter]);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-secondary">МегаШлиц</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">Вопросы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>

          <Button>
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Строительные материалы для профессионалов
            </h1>
            <p className="text-xl text-muted-foreground">
              Полный ассортимент качественных материалов с доставкой по всему региону
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('catalog')}>
                Перейти в каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">О компании</h2>
            <p className="text-lg text-muted-foreground">
              МегаШлиц — ведущий поставщик строительных материалов с 2005 года. 
              Мы работаем с крупными застройщиками и частными заказчиками, 
              обеспечивая стабильные поставки качественной продукции.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Icon name="Award" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">18 лет</h3>
                <p className="text-muted-foreground">на рынке</p>
              </div>
              <div className="space-y-2">
                <Icon name="Users" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">2000+</h3>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div className="space-y-2">
                <Icon name="Package" className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">5000+</h3>
                <p className="text-muted-foreground">наименований товаров</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Каталог товаров</h2>
              <p className="text-lg text-muted-foreground">
                Найдите всё необходимое для вашего строительства
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-4">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Поиск по названию..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Цена" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая цена</SelectItem>
                  <SelectItem value="low">До 500 ₽</SelectItem>
                  <SelectItem value="medium">500 - 5000 ₽</SelectItem>
                  <SelectItem value="high">Более 5000 ₽</SelectItem>
                </SelectContent>
              </Select>

              <Select value={stockFilter} onValueChange={setStockFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Наличие" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все товары</SelectItem>
                  <SelectItem value="in-stock">В наличии</SelectItem>
                  <SelectItem value="out-of-stock">Под заказ</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Все категории');
                  setPriceRange('all');
                  setStockFilter('all');
                }}
              >
                <Icon name="X" className="mr-2 h-4 w-4" />
                Сбросить
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center overflow-hidden">
                      <Icon name="Package" className="h-20 w-20 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">{product.category}</Badge>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="text-sm">{product.unit}</CardDescription>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{product.price.toLocaleString('ru-RU')}</span>
                        <span className="text-sm text-muted-foreground">₽</span>
                      </div>
                      {product.inStock ? (
                        <Badge className="bg-green-500">
                          <Icon name="Check" className="mr-1 h-3 w-3" />
                          В наличии
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <Icon name="Clock" className="mr-1 h-3 w-3" />
                          Под заказ
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Заказать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Package" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Портфолио проектов</h2>
            <p className="text-lg text-muted-foreground">
              Наши материалы используются в крупнейших строительных проектах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'ЖК "Северный"', description: 'Поставка материалов для строительства жилого комплекса на 500 квартир', icon: 'Building' },
              { title: 'Торговый центр "Метро"', description: 'Полное обеспечение материалами для возведения ТЦ площадью 15000 м²', icon: 'Store' },
              { title: 'Школа №42', description: 'Комплексная поставка материалов для реконструкции школы', icon: 'School' },
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={project.icon as any} className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Какие способы оплаты вы принимаете?', a: 'Мы принимаем оплату наличными, банковским переводом и по картам. Для юридических лиц возможна отсрочка платежа.' },
                { q: 'Осуществляете ли вы доставку?', a: 'Да, мы доставляем товары по всему региону. Стоимость доставки рассчитывается индивидуально в зависимости от объёма и расстояния.' },
                { q: 'Есть ли у вас система скидок?', a: 'Для постоянных клиентов и при заказе больших объёмов действует гибкая система скидок.' },
                { q: 'Можно ли забрать товар самовывозом?', a: 'Конечно! У нас есть склад с удобным подъездом, где вы можете самостоятельно забрать заказ.' },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <Icon name="HelpCircle" className="h-5 w-5 text-primary mt-0.5" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-8">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 border-t">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Icon name="MapPin" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Строительная, д. 42</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Phone" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Mail" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@megashlic.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Clock" className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00<br />Сб-Вс: 9:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Building2" className="h-6 w-6" />
              <span className="font-bold">МегаШлиц</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              © 2024 МегаШлиц. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
