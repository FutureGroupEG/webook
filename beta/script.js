function onPromptClick() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        registerServiceWorker();
      } else if (permission === 'denied') {
        console.warn('Notification permission denied.');
      }
    });
  }
}
const publicVapidKey = "BK1jXf3NDb7OqK_gEawVtQ-NmKtHMTT3plEL2nrHWTunE1Tv3IqPaujkH9XVnAEWwdd2mw0XollAyScSGtuxXT8";
async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("./service-worker.js", {
        scope: "./",
    });
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });
    await fetch("./subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
if ("serviceWorker" in navigator && "PushManager" in window) {
    registerServiceWorker().catch((err) => console.error(err));
}
