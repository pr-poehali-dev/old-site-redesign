import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export const ContactsMapSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formOpen, setFormOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadingPhotos, setUploadingPhotos] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    let formatted = '+7';
    if (cleaned.length > 1) {
      const withoutCountryCode = cleaned.startsWith('7') || cleaned.startsWith('8') ? cleaned.slice(1) : cleaned;
      if (withoutCountryCode.length > 0) {
        formatted += ' (' + withoutCountryCode.slice(0, 3);
      }
      if (withoutCountryCode.length >= 4) {
        formatted += ') ' + withoutCountryCode.slice(3, 6);
      }
      if (withoutCountryCode.length >= 7) {
        formatted += '-' + withoutCountryCode.slice(6, 8);
      }
      if (withoutCountryCode.length >= 9) {
        formatted += '-' + withoutCountryCode.slice(8, 10);
      }
    }
    return formatted;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 5);
      const oversizedFiles: string[] = [];
      const validFiles = files.filter(file => {
        const isImage = file.type.startsWith('image/');
        const isUnder10MB = file.size <= 10 * 1024 * 1024;
        
        if (isImage && !isUnder10MB) {
          const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
          oversizedFiles.push(`${file.name} (${sizeMB} МБ)`);
        }
        
        return isImage && isUnder10MB;
      });
      
      if (oversizedFiles.length > 0) {
        alert(`⚠️ Следующие файлы слишком большие (макс. 10 МБ):\n\n${oversizedFiles.join('\n')}`);
      }
      
      setSelectedFiles(validFiles);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const openPreview = (index: number) => {
    setPreviewIndex(index);
    setPreviewImage(URL.createObjectURL(selectedFiles[index]));
  };

  const navigatePreview = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (previewIndex - 1 + selectedFiles.length) % selectedFiles.length
      : (previewIndex + 1) % selectedFiles.length;
    setPreviewIndex(newIndex);
    setPreviewImage(URL.createObjectURL(selectedFiles[newIndex]));
  };

  useEffect(() => {
    if (!previewImage || selectedFiles.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigatePreview('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigatePreview('next');
      } else if (e.key === 'Escape') {
        setPreviewImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, previewIndex, selectedFiles.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(1);
    
    if (totalSize > 50 * 1024 * 1024) {
      alert(`⚠️ Общий размер файлов слишком большой: ${totalSizeMB} МБ\nМаксимум: 50 МБ`);
      return;
    }
    
    setFormStatus('sending');
    setUploadingPhotos(true);
    setUploadProgress(selectedFiles.map(() => 0));

    const photos = await Promise.all(
      selectedFiles.map(async (file, index) => {
        setUploadProgress(prev => {
          const newProgress = [...prev];
          newProgress[index] = 50;
          return newProgress;
        });

        return new Promise<{ name: string; data: string }>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = (reader.result as string).split(',')[1];
            setUploadProgress(prev => {
              const newProgress = [...prev];
              newProgress[index] = 100;
              return newProgress;
            });
            resolve({ name: file.name, data: base64 });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );

    let messageText = formData.message || '';
    if (selectedFiles.length > 0) {
      messageText += `\n\n📎 Прикреплено фото: ${selectedFiles.length} шт.`;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/9b6ada36-da84-4729-b828-3e41115b8136', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Контактная форма',
          name: formData.name,
          phone: formData.phone,
          message: messageText,
          photos
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setSelectedFiles([]);
      setUploadProgress([]);
      setUploadingPhotos(false);
      setTimeout(() => {
        setFormStatus('idle');
        setFormOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending form:', error);
      setFormStatus('error');
      setUploadingPhotos(false);
      setUploadProgress([]);
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacts" className="py-6 md:py-8 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Контакты</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Мы находимся в Нижнем Новгороде
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 items-start">
          <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm h-full flex flex-col">
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-sm text-muted-foreground">
                    г. Нижний Новгород,<br />
                    Восточный проезд, 11/1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-sm text-muted-foreground">
                    Пн-Пт: 9:30 - 17:30<br />
                    Сб-Вс: выходной
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефоны</h3>
                  <a href="tel:+79202520352" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +7 (920) 252-03-52
                  </a>
                  <a href="tel:+78312601123" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +7 (831) 260-11-23 (производство)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:megashlic@yandex.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    megashlic@yandex.ru
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t space-y-3">
              <h3 className="font-semibold text-center mb-3">Свяжитесь с нами</h3>
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = 'tel:+79202520352'}
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Позвонить
                </Button>
                <Button 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/79202520352', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setFormOpen(true)}
                >
                  <Icon name="Mail" className="mr-2 h-5 w-5" />
                  Написать на Email
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 h-full">
            <div className="flex-1 rounded-lg overflow-hidden border-2 shadow-lg min-h-[350px] md:min-h-[400px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=43.915409%2C56.253487&z=16&l=map&pt=43.915409,56.253487,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              ></iframe>
            </div>

            <a 
              href="https://yandex.ru/maps/?rtext=~56.253487,43.915409&rtt=auto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                <Icon name="Navigation" className="mr-2 h-5 w-5" />
                Проложить маршрут
              </Button>
            </a>
          </div>
        </div>
      </div>
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оставить заявку</DialogTitle>
            <DialogDescription>
              Заполните форму и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={formStatus === 'sending'}
            />
            <Input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              required
              disabled={formStatus === 'sending'}
            />
            <Textarea
              placeholder="Ваше сообщение (необязательно)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={formStatus === 'sending'}
              rows={4}
            />
            
            <div>
              <label className="block text-sm font-medium mb-2">
                📷 Прикрепить фото (до 5 штук, макс 10 МБ каждое)
              </label>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                disabled={formStatus === 'sending'}
                className="cursor-pointer"
              />
              {selectedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {selectedFiles.map((file, index) => {
                      const imageUrl = URL.createObjectURL(file);
                      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
                      
                      return (
                        <div key={index} className="relative group">
                          <div 
                            className="aspect-square rounded-lg overflow-hidden border-2 border-muted bg-muted cursor-pointer hover:border-primary transition-colors"
                            onClick={() => openPreview(index)}
                          >
                            <img
                              src={imageUrl}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            disabled={formStatus === 'sending'}
                            className="absolute top-1 right-1 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          >
                            <Icon name="X" className="h-4 w-4" />
                          </Button>
                          
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 pointer-events-none">
                            <div className="truncate">{file.name}</div>
                            <div className="text-[10px] text-white/70 flex items-center justify-between">
                              <span>{fileSizeMB} МБ</span>
                              {uploadProgress[index] > 0 && uploadProgress[index] < 100 && (
                                <span className="flex items-center gap-1">
                                  <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                                  {uploadProgress[index]}%
                                </span>
                              )}
                              {uploadProgress[index] === 100 && (
                                <span className="text-green-400 flex items-center gap-1">
                                  <Icon name="CheckCircle" className="h-3 w-3" />
                                  Загружено
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground text-center">
                      {selectedFiles.length} {selectedFiles.length === 1 ? 'файл' : 'файла'} • {(selectedFiles.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024)).toFixed(1)} МБ / 50 МБ
                    </div>
                    {uploadProgress.length > 0 && uploadProgress.some(p => p > 0) && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Загрузка фото...</span>
                          <span className="font-medium">
                            {Math.round(uploadProgress.reduce((sum, p) => sum + p, 0) / uploadProgress.length)}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-primary h-full transition-all duration-300 ease-out"
                            style={{ 
                              width: `${uploadProgress.reduce((sum, p) => sum + p, 0) / uploadProgress.length}%` 
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={formStatus === 'sending' || uploadingPhotos}
            >
              {uploadingPhotos && uploadProgress.some(p => p < 100) ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                  Подготовка фото...
                </>
              ) : formStatus === 'sending' ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                  Отправка...
                </>
              ) : formStatus === 'success' ? (
                <>
                  <Icon name="CheckCircle" className="mr-2 h-5 w-5" />
                  Отправлено!
                </>
              ) : formStatus === 'error' ? (
                <>
                  <Icon name="AlertCircle" className="mr-2 h-5 w-5" />
                  Ошибка
                </>
              ) : (
                <>
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={previewImage !== null} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          <div className="relative bg-black">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 z-10 h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white"
            >
              <Icon name="X" className="h-5 w-5" />
            </Button>
            
            {selectedFiles.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigatePreview('prev')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-black/50 hover:bg-black/70 text-white"
                >
                  <Icon name="ChevronLeft" className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigatePreview('next')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-black/50 hover:bg-black/70 text-white"
                >
                  <Icon name="ChevronRight" className="h-6 w-6" />
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {previewIndex + 1} / {selectedFiles.length}
                </div>
              </>
            )}
            
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};