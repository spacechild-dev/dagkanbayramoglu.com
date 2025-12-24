# 🚀 cult-ui Sitenizi Güncelleme Rehberi

## Site Bilgileri
- **Production URL:** https://cult-ui.pages.dev
- **GitHub Repo:** https://github.com/spacechild-dev/cult-ui
- **Cloudflare Dashboard:** https://dash.cloudflare.com/pages

---

## 🎯 Otomatik Güncelleme Nasıl Çalışır?

Siteniz **Cloudflare Pages** ve **GitHub** entegrasyonu ile çalışıyor. Bu demek oluyor ki:

1. GitHub repo'nuzda bir değişiklik yaptığınızda
2. Cloudflare otomatik olarak yeni bir build başlatır
3. Birkaç dakika içinde siteniz güncellenir

**Hiçbir manuel deployment yapmanıza gerek yok!**

---

## 📝 Site İçeriğini Nasıl Güncellerim?

### Yöntem 1: GitHub Web Üzerinden (En Kolay)

1. **GitHub'a gidin:** https://github.com/spacechild-dev/cult-ui

2. **Düzenlemek istediğiniz dosyayı bulun**
   - Dokümantasyon dosyaları: `apps/www/content/docs/` klasöründe
   - Component'ler: `apps/www/registry/` klasöründe

3. **Dosyaya tıklayın** → **Sağ üstteki kalem ikonuna (✏️) tıklayın**

4. **Değişikliklerinizi yapın**

5. **Commit changes** butonuna tıklayın

6. **Commit message** yazın (örn: "Ana sayfayı güncelle")

7. **Commit directly to the main branch** seçili olsun

8. **Commit changes** butonuna tıklayın

✅ **İşlem tamam!** Cloudflare otomatik olarak sitenizi 2-3 dakika içinde güncelleyecek.

---

### Yöntem 2: GitHub Desktop (Daha Gelişmiş)

1. **GitHub Desktop'ı indirin:** https://desktop.github.com/

2. **Repo'nuzu clone edin:**
   - File → Clone Repository
   - `spacechild-dev/cult-ui` seçin

3. **Dosyaları düzenleyin** (VS Code, Sublime Text, vs.)

4. **GitHub Desktop'ta değişiklikleri görün**

5. **Summary** yazın (örn: "Dokümantasyon güncellendi")

6. **Commit to main** butonuna tıklayın

7. **Push origin** butonuna tıklayın

✅ **İşlem tamam!** Değişiklikler GitHub'a gönderildi ve site otomatik güncellenecek.

---

## 🔍 Deployment Durumunu Nasıl Kontrol Ederim?

### GitHub'dan:
1. Repo'nuza gidin: https://github.com/spacechild-dev/cult-ui
2. Yukarıda ✅ veya 🔴 simgesi göreceksiniz
3. Tıklayın → **Details** → Build loglarını görün

### Cloudflare'dan:
1. https://dash.cloudflare.com/pages adresine gidin
2. **cult-ui** projesine tıklayın
3. **View build** → Logları görün

---

## ⚙️ Teknik Detaylar (İleri Düzey)

### Proje Yapısı:
```
cult-ui/
├── apps/
│   └── www/              # Website (Next.js)
│       ├── app/          # Next.js App Router
│       ├── content/      # Dokümantasyon içeriği
│       └── registry/     # Component registry
├── packages/
│   └── cli/              # cult-ui CLI paketi
└── wrangler.toml         # Cloudflare Pages ayarları
```

### Build Ayarları:
- **Framework:** Next.js (Static HTML Export)
- **Build command:** `cd apps/www && pnpm install && pnpm build`
- **Build output:** `apps/www/out`
- **Node version:** 20

### GitHub → Cloudflare Akışı:
1. GitHub'a push → Webhook tetiklenir
2. Cloudflare Pages build başlatır
3. Dependencies yüklenir (`pnpm install`)
4. Next.js build edilir (`pnpm build`)
5. Static HTML'ler export edilir (`apps/www/out`)
6. Cloudflare CDN'e deploy edilir
7. Site yayına alınır

---

## 🆘 Sık Karşılaşılan Sorunlar

### Build Başarısız Oluyor
1. Cloudflare Dashboard → Deployment logs'a bakın
2. Hata mesajını okuyun
3. Genellikle syntax hatası veya eksik bağımlılıktır

### Site Güncellenmedi
1. GitHub'da commit başarılı mı kontrol edin
2. Cloudflare'da yeni deployment başladı mı bakın
3. Tarayıcı cache'ini temizleyin (Ctrl+Shift+R veya Cmd+Shift+R)

### 404 Hatası Alıyorum
1. URL doğru mu kontrol edin
2. Build output directory `apps/www/out` olmalı
3. next.config.mjs'de `output: 'export'` olmalı

---

## 🔗 Faydalı Linkler

- **Site:** https://cult-ui.pages.dev
- **GitHub Repo:** https://github.com/spacechild-dev/cult-ui
- **Orijinal Repo:** https://github.com/nolly-studio/cult-ui
- **Cloudflare Pages:** https://dash.cloudflare.com/pages
- **Next.js Docs:** https://nextjs.org/docs

---

## 💡 İpuçları

1. **Küçük değişiklikler yapın:** Her commit'te az şey değiştirin
2. **Anlamlı commit mesajları yazın:** "fix" yerine "Ana sayfa başlığını düzelt"
3. **Preview deployment'leri kullanın:** Her branch için otomatik preview URL'leri oluşturulur
4. **Cache'i temizleyin:** Değişiklikleri göremiyorsanız hard refresh yapın

---

**Sorularınız için:** GitHub Issues'da soru açabilir veya Cloudflare support'a başvurabilirsiniz.

Başarılar! 🎉
