# ORLEX Fuar Kayıt

Fuarlarda tablet üzerinden ziyaretçi kaydı almak için hazırlanmış, tek sayfalık web uygulaması.
İnternet olmadan çalışır, veriler tabletin kendi hafızasında tutulur, gün sonunda Excel'e aktarılır.

---

## 1. Yayına alma (bir kere yapılır)

1. GitHub'da yeni bir repo aç. **Public** olmalı — private repo'da GitHub Pages ücretli plan ister.
2. Bu klasördeki tüm dosyaları repo'ya yükle:

   ```
   index.html
   sw.js
   manifest.json
   icon-192.png
   icon-512.png
   apple-touch-icon.png
   ```

   Dosyalar **kök dizinde** olmalı, alt klasöre koyma.

3. Repo → **Settings** → sol menüden **Pages**.
4. *Source* kısmında **Deploy from a branch**, branch olarak **main**, klasör olarak **/ (root)** seç, **Save** de.
5. Bir iki dakika bekle. Aynı sayfada adresin çıkacak:

   ```
   https://KULLANICI-ADIN.github.io/REPO-ADI/
   ```

Bu adresi bir yere kaydet. **Bir daha değiştirme** — sebebini aşağıda anlattım.

---

## 2. Tablete kurma

### iPad / iPhone
1. **Safari** ile adresi aç. (Chrome değil — iOS'ta ana ekrana ekleme sadece Safari'de düzgün çalışır.)
2. Alttaki **Paylaş** simgesi → **Ana Ekrana Ekle** → **Ekle**.
3. Ana ekranda ORLEX simgesiyle çıkar. Buradan aç, tarayıcı çubuğu görünmez.

### Android
1. **Chrome** ile adresi aç.
2. Sağ üstteki üç nokta → **Ana ekrana ekle** / **Uygulamayı yükle**.

**Kurduktan sonra bir kere internetli açın.** İlk açılışta uygulama kendini tablete kopyalar; sonrasında uçak modunda bile açılır.

---

## 3. Günlük kullanım

1. **Ana sayfa** → üstten fuarı seç (gün başında bir kere).
2. **Yeni kişi** → alanları doldur. Yıldızlı alanlar zorunlu, eksikse kaydetmez.
   Ürünlerde yazı yazmıyorsun, etiketlere dokunuyorsun.
3. **Kaydet** → ana sayfaya döner, yeşil onay çıkar. Sıradaki ziyaretçi için tekrar Yeni kişi.
4. Hata varsa **Kayıtlar** → satıra dokun → düzelt → Kaydet.
5. **Gün sonunda: Kayıtlar → Excel'e aktar.** İnen CSV Excel'de düzgün açılır, Türkçe karakterler bozulmaz.

---

## 4. Bilinmesi gerekenler

**Adres değişmemeli.** Kayıtlar tarayıcıda o adrese bağlı olarak saklanır. Repo adını veya
kullanıcı adını değiştirirsen adres de değişir ve eski kayıtlar görünmez olur. Yayına almadan önce
repo adına karar ver.

**Kayıtlar tablette durur, bulutta değil.** Aynı fuarda iki tablet kullanırsanız her biri kendi
listesini tutar; akşam ikisinden ayrı ayrı Excel alıp birleştirmen gerekir.

**Tarayıcı verilerini silmeyin.** "Geçmişi ve site verilerini temizle" dersen kayıtlar gider.
Gizli sekmede de açmayın. Bu yüzden her akşam Excel'e aktarma alışkanlığı önemli — o dosya
tabletten bağımsızdır.

**Veri kaybına karşı:** uygulama her değişikliği anında tablete yazar, kaydedilmemiş bir şey
varken sayfayı kapatmaya çalışırsan tarayıcı uyarır.

---

## 5. Güncelleme yaparken

`index.html` içinde bir değişiklik yaptıysan **`sw.js` dosyasındaki `SURUM` değerini de artır**
(örneğin `"1.0"` → `"1.1"`). Bunu yapmazsan tabletler önbellekteki eski sürümü göstermeye
devam eder ve neden değişmediğini anlamazsın.

Tabletlerde yeni sürüm, uygulama kapatılıp yeniden açıldığında gelir.
Ana sayfanın en altındaki "Sürüm" yazısından hangi sürümün yüklü olduğunu görebilirsin.

---

## 6. Özelleştirme

`index.html` içinde, `<script>` bloğunun başında düzenlemesi kolay üç liste var:

| Değişken | Ne işe yarar |
|---|---|
| `FUARLAR` | Ana sayfadaki fuar seçim listesi |
| `ULKELER` | Formdaki ülke listesi |
| `URUNLER` | İlgilenilen ürün etiketleri |
| `ZORUNLU` | Zorunlu alanlar. Bir alanı isteğe bağlı yapmak için satırını sil |

Değişiklikten sonra 5. maddedeki sürüm artırmayı unutma.
