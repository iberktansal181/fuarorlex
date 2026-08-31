/* ORLEX Fuar Kayıt — çevrimdışı katmanı
   Uygulamayı güncelledikten sonra SURUM'u bir artırın (1.0 -> 1.1).
   Aksi halde tabletler eski sürümü göstermeye devam eder. */
const SURUM = "1.0";
const CACHE = "orlex-fuar-" + SURUM;

const DOSYALAR = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(DOSYALAR))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((k) => Promise.all(k.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* Önce önbellek: internet olmasa da açılır.
   Arka planda tazeler, böylece bir sonraki açılışta güncel sürüm gelir. */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then((bulunan) => {
      const agdan = fetch(e.request)
        .then((cevap) => {
          if (cevap && cevap.status === 200 && cevap.type === "basic") {
            const kopya = cevap.clone();
            caches.open(CACHE).then((c) => c.put(e.request, kopya));
          }
          return cevap;
        })
        .catch(() => bulunan);

      return bulunan || agdan;
    })
  );
});
