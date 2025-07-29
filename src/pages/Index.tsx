import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Mountain" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-secondary">ЭВИЛ ОДНИ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-secondary hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors">О нас</a>
              <a href="#licenses" className="text-secondary hover:text-primary transition-colors">Лицензии</a>
              <a href="#careers" className="text-secondary hover:text-primary transition-colors">Вакансии</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  Лидер отрасли с 1995 года
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Золотодобывающая компания
                  <span className="text-primary block">ЭВИЛ ОДНИ</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Профессиональная добыча золота с соблюдением высочайших стандартов безопасности 
                  и экологической ответственности. Более 25 лет опыта в горнодобывающей отрасли.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Наши лицензии
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Users" className="mr-2" size={20} />
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/7317e4c4-0a2d-434a-9585-8accf189cdba.jpg" 
                alt="Горнодобывающий комплекс"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Активных лицензий</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Сотрудников</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Экологичность</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">О компании ЭВИЛ ОДНИ</h2>
            <p className="text-xl text-muted-foreground">
              Мы — ведущая золотодобывающая компания России, специализирующаяся на разведке, 
              добыче и переработке золотосодержащих руд с применением современных технологий.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/a607e791-a8ab-46a8-b718-0b0bb46e27b7.jpg" 
                alt="Команда профессионалов"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Безопасность превыше всего</h3>
                    <p className="text-muted-foreground">
                      Строгое соблюдение международных стандартов безопасности труда и промышленной безопасности.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Leaf" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Экологическая ответственность</h3>
                    <p className="text-muted-foreground">
                      Применение экологически чистых технологий добычи и рекультивация земель.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
                    <p className="text-muted-foreground">
                      Золото высшей пробы, соответствующее международным стандартам качества.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Лицензии и разрешения</h2>
            <p className="text-xl text-muted-foreground">
              Все виды деятельности компании лицензированы и соответствуют требованиям российского законодательства.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="FileText" className="text-primary" size={24} />
                  <span>Лицензия на разведку</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Лицензия на геологическое изучение недр, включая поиски и оценку месторождений.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Номер:</strong> РЗД-001-2024</div>
                  <div><strong>Действительна до:</strong> 15.08.2029</div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Активна</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Pickaxe" className="text-primary" size={24} />
                  <span>Лицензия на добычу</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Лицензия на добычу полезных ископаемых на участке "Золотой ключ".
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Номер:</strong> ДБЧ-003-2024</div>
                  <div><strong>Действительна до:</strong> 20.12.2034</div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Активна</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Settings" className="text-primary" size={24} />
                  <span>Промышленная безопасность</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Лицензия на эксплуатацию взрывопожароопасных и химически опасных производственных объектов.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Номер:</strong> ПБ-045-2024</div>
                  <div><strong>Действительна до:</strong> 10.06.2027</div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Активна</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Leaf" className="text-primary" size={24} />
                  <span>Экологическое разрешение</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Разрешение на выбросы загрязняющих веществ в атмосферный воздух.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Номер:</strong> ЭКО-012-2024</div>
                  <div><strong>Действительна до:</strong> 30.09.2027</div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Активна</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Droplets" className="text-primary" size={24} />
                  <span>Водопользование</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Решение о предоставлении водного объекта в пользование.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Номер:</strong> ВД-078-2024</div>
                  <div><strong>Действительна до:</strong> 25.04.2029</div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Активна</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span>Землепользование</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Право пользования участком недр для целей, не связанных с добычей полезных ископаемых.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Номер:</strong> ЗМ-156-2024</div>
                  <div><strong>Действительна до:</strong> 18.11.2032</div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Активна</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Вакансии</h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к команде профессионалов. Мы предлагаем стабильную работу, 
              достойную заработную плату и возможности для карьерного роста.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Горный инженер</span>
                  <Badge className="bg-primary text-secondary">Полная занятость</Badge>
                </CardTitle>
                <CardDescription>Участок добычи "Золотой ключ"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Требования:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Высшее техническое образование</li>
                      <li>• Опыт работы от 3 лет</li>
                      <li>• Знание нормативов безопасности</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Заработная плата:</h4>
                    <p className="text-lg font-semibold text-primary">от 120 000 ₽</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Откликнуться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Геолог</span>
                  <Badge className="bg-primary text-secondary">Полная занятость</Badge>
                </CardTitle>
                <CardDescription>Отдел разведки и геологии</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Требования:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Высшее геологическое образование</li>
                      <li>• Опыт полевых работ</li>
                      <li>• Владение ГИС-технологиями</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Заработная плата:</h4>
                    <p className="text-lg font-semibold text-primary">от 100 000 ₽</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Откликнуться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Машинист экскаватора</span>
                  <Badge className="bg-primary text-secondary">Вахтовый метод</Badge>
                </CardTitle>
                <CardDescription>Добычной участок</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Требования:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Среднее профессиональное образование</li>
                      <li>• Удостоверение машиниста</li>
                      <li>• Опыт работы от 2 лет</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Заработная плата:</h4>
                    <p className="text-lg font-semibold text-primary">от 90 000 ₽</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Откликнуться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Инженер по безопасности</span>
                  <Badge className="bg-primary text-secondary">Полная занятость</Badge>
                </CardTitle>
                <CardDescription>Служба промышленной безопасности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Требования:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Высшее техническое образование</li>
                      <li>• Сертификат по промышленной безопасности</li>
                      <li>• Опыт работы от 5 лет</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Заработная плата:</h4>
                    <p className="text-lg font-semibold text-primary">от 110 000 ₽</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Откликнуться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для получения дополнительной информации о нашей деятельности.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес головного офиса</h3>
                  <p className="text-muted-foreground">
                    115230, г. Москва, Варшавское шоссе, д. 47, к. 4<br />
                    БЦ "Золотые ворота", этаж 12
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефоны</h3>
                  <p className="text-muted-foreground">
                    Приёмная: +7 (495) 123-45-67<br />
                    Отдел кадров: +7 (495) 123-45-68<br />
                    Пресс-служба: +7 (495) 123-45-69
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    Общие вопросы: info@evilodni.ru<br />
                    Трудоустройство: hr@evilodni.ru<br />
                    Пресс-служба: press@evilodni.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Clock" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Понедельник - Пятница: 9:00 - 18:00<br />
                    Суbbота: 10:00 - 16:00<br />
                    Воскресенье: выходной
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Написать нам</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none" 
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-secondary">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Mountain" className="text-primary" size={28} />
                <span className="text-xl font-bold">ЭВИЛ ОДНИ</span>
              </div>
              <p className="text-secondary-foreground/70 mb-4">
                Ведущая золотодобывающая компания России с многолетним опытом и безупречной репутацией.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#licenses" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#careers" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Деятельность</h3>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li>Геологоразведка</li>
                <li>Добыча золота</li>
                <li>Переработка руды</li>
                <li>Экологический мониторинг</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@evilodni.ru</li>
                <li>г. Москва, Варшавское шоссе, 47к4</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-secondary-foreground/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/70 text-sm">
              © 2024 ЭВИЛ ОДНИ. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}