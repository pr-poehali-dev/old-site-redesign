import { useState, useEffect } from 'react';

export default function PushNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
      
      const hasAsked = localStorage.getItem('notification-asked');
      if (!hasAsked && Notification.permission === 'default') {
        setTimeout(() => setShowPrompt(true), 5000);
      }
    }
  }, []);

  const requestPermission = async () => {
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      localStorage.setItem('notification-asked', 'true');
      setShowPrompt(false);

      if (result === 'granted' && 'serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            'BEl62iUYgUivxIkv69yViEuiBIa-Ib37J8-fanoTkQ8'
          )
        });
      }
    } catch (error) {
      console.error('Push notification error:', error);
      setShowPrompt(false);
    }
  };

  const closePrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('notification-asked', 'true');
  };

  if (!showPrompt || permission !== 'default') {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-lg shadow-2xl p-4 z-50 border-2 border-green-500 animate-slideUp">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-2xl">🔔</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">
            Получайте спецпредложения
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Узнавайте первыми о скидках и акциях на восстановление шлицев
          </p>
          <div className="flex gap-2">
            <button
              onClick={requestPermission}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Разрешить
            </button>
            <button
              onClick={closePrompt}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Позже
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
