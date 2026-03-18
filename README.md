# 🎓 Form Analiz Aracı

**Sosyal Bilgiler Öğretmen Adayı — 7 Boyutlu AI Destekli Değerlendirme Platformu**

Bu araç, sosyal bilgiler öğretmen adaylarının Bilişim Teknolojileri dersi kapsamında yapay zekâ araçlarıyla hazırladıkları dijital içeriklere ait haftalık değerlendirme formlarını analiz eder ve profesyonel PDF geri dönüt raporları üretir.

---

## 📋 Değerlendirme Boyutları

| # | Boyut | Kaynak | Puan |
|---|-------|--------|------|
| 1 | 🔐 YZ Etik Farkındalığı & Eleştirel Tutum | Ölçek 1 (18 madde) | 10p |
| 2 | 🧠 YZ Destekli Öğrenme & Öz-Düzenleme | Ölçek 2 (22 madde) | 10p |
| 3 | ⚙️ Materyal Geliştirme Süreci | Yansıtma Formu S.8–14, S.17–18 | 10p |
| 4 | 📚 Pedagojik Tasarım Kalitesi | Yansıtma Formu S.3, S.11, S.15–16 | 10p |
| 5 | 🗺️ Kazanım & İçerik Uyumu | Yansıtma Formu S.2–7 | 10p |
| 6 | ✍️ Prompt Mühendisliği Kalitesi | Yansıtma Formu S.18 | Nitel |
| 7 | 📝 Form Yapısal Analizi | Her iki ölçek + form | Nitel |

**Toplam: 50 puan + 2 nitel boyut**

## 🚀 GitHub Pages'te Yayınlama (Adım Adım)

### 1. Repoyu Oluşturun

```bash
# GitHub'da yeni bir repo oluşturun, adı:
form-analiz-araci
```

> ⚠️ Repo adını değiştirirseniz `vite.config.js` dosyasındaki `base` değerini de güncelleyin.

### 2. Dosyaları Yükleyin

```bash
git clone https://github.com/KULLANICI_ADINIZ/form-analiz-araci.git
cd form-analiz-araci

# Bu projedeki tüm dosyaları klasöre kopyalayın
git add .
git commit -m "İlk yayın"
git push origin main
```

### 3. GitHub Pages'i Etkinleştirin

1. GitHub repo sayfasında **Settings** → **Pages** bölümüne gidin
2. **Source** olarak **"GitHub Actions"** seçin
3. Kaydedin

### 4. İlk Deploy

`main` branch'e push yaptığınızda GitHub Actions otomatik olarak:
- `npm install` çalıştırır
- `npm run build` ile projeyi derler
- `dist/` klasörünü GitHub Pages'e yayınlar

Birkaç dakika sonra siteniz şu adreste hazır olur:
```
https://KULLANICI_ADINIZ.github.io/form-analiz-araci/
```

---

## 💻 Yerel Geliştirme

```bash
# Bağımlılıkları kurun
npm install

# Geliştirme sunucusunu başlatın (http://localhost:5173)
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

---

## 🔑 API Anahtarı Hakkında

Bu uygulama, **Claude.ai** üzerinden çalıştırıldığında oturum kimlik bilgilerini otomatik kullanır — ayrıca API anahtarı gerekmez.

Uygulamayı **kendi GitHub Pages sitenizde** yayınlıyorsanız, Anthropic API anahtarınızı doğrudan uygulamaya eklemeniz gerekir. Bunu yapmak için `src/App.jsx` dosyasında `analyzeForm` fonksiyonundaki `fetch` çağrısını aşağıdaki gibi güncelleyin:

```js
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "sk-ant-...",          // ← API anahtarınız
    "anthropic-version": "2023-06-01",  // ← Bu satırı ekleyin
  },
  ...
});
```

> ⚠️ API anahtarını kaynak koduna yazmak **güvenlik riski** oluşturur. Üretim ortamında bir backend proxy (örn. Cloudflare Worker, Vercel Serverless Function) kullanmanız önerilir.

---

## 📁 Proje Yapısı

```
form-analiz-araci/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions otomatik deploy
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx              # React giriş noktası
│   └── App.jsx               # Ana uygulama bileşeni
├── index.html
├── package.json
├── vite.config.js            # ⚠️ base değerini repo adıyla eşleştirin
└── README.md
```

---

## 📦 Kullanılan Teknolojiler

- **React 18** — UI framework
- **Vite 5** — Build aracı
- **xlsx (SheetJS)** — Excel/CSV dosya okuma
- **Claude API (claude-sonnet-4)** — AI analiz motoru

---

## 👥 Proje Ekibi

Bu araç, aşağıdaki araştırma projesi kapsamında geliştirilmiştir:

> *"Sosyal Bilgiler Öğretmen Adaylarının Yapay Zekâ Temelli Dijital Materyal Geliştirme Deneyimleri"*

- Prof. Dr. İlker DERE
- Doç. Dr. Erhan YAYLAK
- Ar. Gör. Ceren HATİPOĞLU
