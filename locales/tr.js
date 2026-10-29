export const tr = {
  "nav": {
    "about": "Hakkımda",
    "projects": "Projeler",
    "experience": "Deneyim",
    "contact": "İletişim",
    "education": "Eğitim",
    "label": "Ana menü",
    "menu": "Menü",
    "close": "Kapat",
    "sectionsLabel": "Bölümler"
  },
  "hero": {
    "greeting": "Merhaba, ben",
    "name": "Buğra Berat Kök",
    "title": "Yazılım Mühendisliği Öğrencisi ve Full-Stack Geliştirici",
    "tagline": "Yazılım mimarisini merkeze alarak full-stack uygulamalar, backend sistemleri ve yapay zekâ entegrasyonları geliştiriyorum.",
    "viewWork": "Projeleri keşfet",
    "downloadResume": "Özgeçmişi indir",
    "photoAlt": "Buğra Berat Kök’ün fotoğrafı",
    "currentCompany": "Ailways",
    "currentRole": "Yazılım Geliştirme Stajyeri",
    "focus": [
      "Full-stack geliştirme",
      "Backend geliştirme",
      "Yazılım mimarisi",
      "AI entegre sistemler"
    ]
  },
  "about": {
    "title": "Hakkımda",
    "p1": "Sistemi tasarlayan, yapay zekâ araçlarını yöneten ve ortaya çıkan işi doğrulayan yeni nesil bir yazılım mühendisi olmak için kendimi geliştiriyorum.",
    "p2": "En güçlü olduğum alan yazılım mimarisi. Yazılıma oyun geliştirerek başladım; Unity projeleriyle başlayan bu yol, sıfırdan yazdığım bir C++ oyun motoruna kadar uzandı.",
    "skillsTitle": "Yetkinlikler",
    "p3": "",
    "skillGroups": [
      {
        "title": "Mimari",
        "description": "Net modül sınırları ve kolay genişleyen bir yapı.",
        "items": [
          "Modüler ve katmanlı mimari",
          "REST API tasarımı",
          "Tasarım desenleri"
        ]
      },
      {
        "title": "Backend",
        "description": "Veritabanından API’ye kadar sunucu tarafı.",
        "items": [
          "Java",
          "Spring Boot",
          "Node.js, Express",
          "PHP, WordPress",
          "PostgreSQL"
        ]
      },
      {
        "title": "Frontend",
        "description": "Responsive ve erişilebilir web arayüzleri.",
        "items": [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS"
        ]
      },
      {
        "title": "Yapay zekâ ve entegrasyon",
        "description": "Yapay zekâ ajanlarını ve API’leri gerçek ürün akışlarına bağlamak.",
        "items": [
          "n8n",
          "Yapay zekâ ajanları",
          "LLM entegrasyonu",
          "Supabase",
          "MCP"
        ]
      },
      {
        "title": "Test",
        "description": "Arayüz, API ve yük testlerinin otomasyonu.",
        "items": [
          "Selenium",
          "JUnit",
          "Postman",
          "JMeter",
          "Jira"
        ]
      },
      {
        "title": "Araçlar ve dağıtım",
        "description": "Sürüm kontrolü, otomatik derleme ve yayınlama.",
        "items": [
          "Git",
          "GitHub Actions",
          "Docker",
          "Vercel"
        ]
      },
      {
        "title": "Oyun ve grafik",
        "description": "Oyun motorları, render ve gerçek zamanlı döngüler.",
        "items": [
          "C++",
          "SDL2",
          "C#",
          "Unity",
          "Unreal Engine (Blueprints)"
        ]
      }
    ]
  },
  "projects": {
    "title": "Projeler",
    "items": [
      {
        "title": "Smart Chores Tracker",
        "description": "Ev işlerini paylaştırmak, ilerlemeyi takip etmek ve emeği ödüllendirmek için geliştirdiğim full-stack platform.",
        "tags": [
          "Spring Boot",
          "React / TypeScript",
          "PostgreSQL"
        ],
        "github": "https://github.com/bugraberatkok/SmartChoresTracker",
        "images": [
          {
            "src": "/projects/smart-chores-tracker-1.png",
            "alt": "Smart Chores Tracker’da bir ev üyesinin günlük görev paneli: puanlar, seri ve haftalık takvim"
          },
          {
            "src": "/projects/smart-chores-tracker-2.png",
            "alt": "Haftalık ilerleme grafiği, tamamlanan görevler ve toplam puan"
          },
          {
            "src": "/projects/smart-chores-tracker-3.png",
            "alt": "Rozet dolabı: kazanılan ve sıradaki başarımlar"
          }
        ],
        "category": "Bitirme projesi",
        "shortTitle": "Smart Chores Tracker",
        "highlights": [
          "Modüler mimari, kimlik doğrulama ve yetkilendirme",
          "CI ile otomatik test ve yayınlama"
        ]
      },
      {
        "title": "Şifa — Yapay Zekâ Sağlık Asistanı",
        "description": "Bir ana ajanla uzman alt ajanların birlikte çalıştığı, sohbet tabanlı sağlık asistanı.",
        "tags": [
          "n8n",
          "LLM",
          "Supabase / PostgreSQL"
        ],
        "github": "",
        "images": [
          {
            "src": "/projects/sifa-1.png",
            "alt": "Şifa randevu akışı: boş saatler veritabanından geliyor, seçilen saatle randevu oluşturuluyor (sentetik kullanıcı)"
          },
          {
            "src": "/projects/sifa-2.png",
            "alt": "Semptom analizi: Şifa önce yaş ve geçmişi öğrenip profile kaydediyor, ardından aciliyeti belirliyor"
          },
          {
            "src": "/projects/sifa-3.png",
            "alt": "Acil durum: kritik bir ifadede asistan kullanıcıyı hemen 112'ye yönlendiriyor"
          }
        ],
        "category": "Ailways · Yapay zekâ ajanları",
        "shortTitle": "Şifa AI Asistanı",
        "highlights": [
          "Ajanlar arası görev dağılımı ve sohbet bağlamının korunması",
          "Doğrulama ve otomatik testler"
        ]
      },
      {
        "title": "WordPress Multisite Yönetim Platformu",
        "description": "Birbirinden bağımsız siteleri ortak içerik araçları ve canlı düzenlemeyle tek merkezden yöneten platform.",
        "tags": [
          "WordPress Multisite",
          "Content Studio",
          "MCP denemeleri"
        ],
        "github": "",
        "images": [
          {
            "src": "/projects/wordpress-1.png",
            "alt": "İçerik Stüdyosu: soldaki alanlar düzenlenirken ortada sitenin canlı önizlemesi güncelleniyor (örnek site)"
          },
          {
            "src": "/projects/wordpress-2.png",
            "alt": "Aynı panelden başka tasarımdaki bir sitenin kartları düzenleniyor (örnek site)"
          },
          {
            "src": "/projects/wordpress-3.png",
            "alt": "SEO ve GEO sayfası: arama sonucu önizlemesi, uyumluluk puanı ve eksik bilgiler listesi"
          }
        ],
        "category": "Ailways · Altyapı",
        "shortTitle": "WordPress Multisite",
        "highlights": [
          "Farklı tasarımlardaki siteler için ortak altyapı",
          "Tek merkezden düzenleme ve yönetim"
        ]
      },
      {
        "title": "Football Analyzer AI",
        "description": "Canlı futbol istatistiklerini toplayıp Gemini ile maç öncesi taktik raporlar hazırlayan analiz sistemi.",
        "tags": [
          "Spring Boot",
          "React",
          "Gemini"
        ],
        "github": "https://github.com/bugraberatkok/football-analyzer-ai",
        "category": "Maç analizi",
        "shortTitle": "Football Analyzer AI",
        "highlights": [
          "Farklı API’lerden gelen verilerin birleştirilmesi",
          "MVC, Facade ve Strategy desenleri"
        ]
      },
      {
        "title": "Focus — C++ ile Yazılmış Oyun Motoru",
        "description": "Üzerinde iki oynanabilir oyun geliştirdiğim, sıfırdan yazılmış 2D oyun motoru.",
        "tags": [
          "C++",
          "SDL2"
        ],
        "github": "https://github.com/bugraberatkok/Focus-GameEngine-and-Two-Playable-Games",
        "images": [
          {
            "src": "/projects/focus-1.webp",
            "alt": "Apple Collector oynanışı: oyuncu kendi rengindeki elmaları toplayıp puan kazanıyor"
          },
          {
            "src": "/projects/focus-2.webp",
            "alt": "Cat Chase oynanışı: kedi peşindeki köpeklerden kaçarken fareleri yakalıyor"
          }
        ],
        "category": "C++ · Oyun motoru",
        "shortTitle": "Focus Oyun Motoru",
        "highlights": [
          "Render, girdi ve çarpışma sistemleri",
          "Tekrar kullanılabilir motor mimarisi"
        ]
      },
      {
        "title": "FitTrack — Antrenman ve Beslenme Takibi",
        "description": "Antrenmanları ve beslenmeyi takip etmek için geliştirdiğim full-stack uygulama.",
        "tags": [
          "Spring Boot",
          "React",
          "H2"
        ],
        "github": "https://github.com/bugraberatkok/fitness-web-app",
        "images": [
          {
            "src": "/projects/fittrack-1.png",
            "alt": "FitTrack panelinde günün kalori özeti, ilerleme halkası ve son aktiviteler"
          },
          {
            "src": "/projects/fittrack-2.png",
            "alt": "Haftalık antrenman takvimi ve kaydedilen hareketler"
          },
          {
            "src": "/projects/fittrack-3.png",
            "alt": "Öğün kayıtları ve kalori toplamları"
          }
        ],
        "category": "Sağlık ve fitness",
        "shortTitle": "FitTrack",
        "highlights": [
          "Kimlik doğrulama ve kişisel takip paneli",
          "Beslenme, antrenman ve aktivite geçmişi"
        ]
      }
    ],
    "intro": "Tasarladığım, geliştirdiğim ve test ettiğim sistemlerden bazıları.",
    "viewSource": "Kodu GitHub’da gör",
    "architectureTitle": "Smart Chores Tracker mimarisi",
    "interfaceLabel": "Arayüz",
    "apiLabel": "API ve erişim",
    "dataLabel": "Veri katmanı",
    "households": "Evler",
    "chores": "Görevler",
    "rewards": "Ödüller",
    "deploymentLabel": "Dağıtım",
    "prev": "Önceki proje",
    "next": "Sonraki proje",
    "screenshot": "Ekran görüntüsü",
    "enlarge": "Ekran görüntüsünü büyüt",
    "prevShot": "Önceki görsel",
    "nextShot": "Sonraki görsel",
    "close": "Kapat"
  },
  "experience": {
    "title": "Deneyim",
    "certTitle": "Sertifikalar",
    "issuer": "Veren Kurum:",
    "date": "Veriliş Tarihi:",
    "viewCert": "Sertifikayı Görüntüle (PDF)",
    "jobs": [
      {
        "company": "Ailways",
        "title": "Yazılım Geliştirme Stajyeri",
        "date": "Eylül 2026 – Devam ediyor",
        "summary": "Yapay zekâ ajanlarıyla çalışan iş akışlarını ve bunların mimarisini geliştiriyorum.",
        "description": [
          "n8n üzerinde çoklu ajan iş akışları tasarlıyor, görevlerin ajanlar arasında nasıl paylaşılacağını belirliyorum.",
          "Farklı LLM’leri ürün akışlarına entegre ediyorum. Ajan prompt’larını veritabanında tutuyor, token kullanımını ve yanıt süresini ayrı bir test akışında ölçüyorum.",
          "Mimari kararları belgeliyor, test ve canlı ortamları birbirinden ayrı tutuyorum.",
          "Bu görevde geliştirdiğim projeler: Şifa ve WordPress Multisite platformu (Projeler bölümünde)."
        ]
      },
      {
        "company": "Egemsoft",
        "title": "Yazılım Testi ve Test Otomasyonu Stajyeri",
        "date": "Temmuz – Ağustos 2026",
        "summary": "Arayüz, API ve performans tarafında manuel ve otomatik testler.",
        "description": [
          "Agile ve Waterfall süreçlerinde fonksiyonel, entegrasyon, UAT, regresyon ve pozitif/negatif test senaryoları hazırladım.",
          "Hata yaşam döngüsünü ve test planlarını Jira üzerinden yönettim, verileri SQL sorgularıyla doğruladım.",
          "Selenium ve Java ile arayüz testlerini otomatikleştirdim, API’leri Postman ile test ettim.",
          "JMeter ile performans ve yük testleri yaptım."
        ]
      },
      {
        "company": "TNC Group",
        "title": "Proje Tabanlı Yazılım Mühendisliği Eğitimi",
        "date": "Temmuz – Ağustos 2026",
        "summary": "Web, mobil, veritabanı ve backend modüllerinin her birinde bir proje geliştirdim.",
        "description": [
          "Web, mobil, veritabanı ve backend konularını kapsayan proje tabanlı bir programı tamamladım.",
          "Her modülde bir uygulama ödevi ve bir teknik proje teslim ettim.",
          "Web tarafında JavaScript, mobilde Android ve iOS, ayrıca SQL ve backend teknolojileriyle çalıştım."
        ]
      },
      {
        "company": "IdeaSoft",
        "title": "Frontend Geliştirme Stajyeri",
        "date": "Mart – Eylül 2025",
        "summary": "Responsive WordPress siteleri ve tekrar kullanılabilir arayüz bileşenleri.",
        "description": [
          "WordPress ve Elementor ile responsive web sayfaları oluşturup özelleştirdim.",
          "HTML, CSS ve JavaScript ile tekrar kullanılabilir arayüz bileşenleri, animasyonlu bölümler ve etkileşimli sayfa öğeleri geliştirdim.",
          "Sayfa içi SEO iyileştirmeleri yaptım.",
          "Günlük toplantılar, görev planlaması ve düzenli tasarım güncellemeleriyle ekiple birlikte çalıştım."
        ]
      }
    ],
    "certificates": [
      {
        "id": 1,
        "title": "Frontend Okulu",
        "issuer": "Coderspace",
        "date": "2024",
        "file": "/certificates/frontend-school.pdf"
      },
      {
        "id": 2,
        "title": "Yazılım Testine Giriş",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/software-testing.pdf"
      },
      {
        "id": 3,
        "title": "API ve API Testi",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/api-testing.pdf"
      },
      {
        "id": 4,
        "title": "Web Servislerine Giriş",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/web-services.pdf"
      },
      {
        "id": 5,
        "title": "Jenkins ile DevOps Çözümleri",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/jenkins.pdf"
      },
      {
        "id": 6,
        "title": "Veritabanlarına Giriş",
        "issuer": "BTK Akademi",
        "date": "2026",
        "file": "/certificates/databases.pdf"
      }
    ],
    "current": "Şu an burada",
    "details": "Ayrıntılar"
  },
  "contact": {
    "title": "Bana ulaşın",
    "description": "Junior yazılım mühendisi pozisyonlarına ve stajlara açığım. En hızlı e-postayla dönüş yapıyorum.",
    "name": "İsim",
    "email": "E-posta",
    "message": "Mesaj",
    "send": "Mesaj Gönder",
    "footer": "Next.js ile oluşturulmuştur.",
    "emailAction": "E-posta",
    "write": "E-posta gönder",
    "copy": "Kopyala",
    "copied": "Kopyalandı",
    "openProfile": "Profili aç",
    "resume": "Özgeçmiş",
    "download": "PDF olarak indir"
  },
  "education": {
    "title": "Eğitim ve Diller",
    "items": [
      {
        "institution": "Bahçeşehir Üniversitesi",
        "degree": "Yazılım Mühendisliği (Lisans)",
        "date": "Mezuniyet: Ocak 2027",
        "description": ""
      },
      {
        "institution": "Bahçeşehir Üniversitesi",
        "degree": "Bilgisayar ve Öğretim Teknolojileri Eğitimi (Çift Anadal)",
        "date": "Haziran 2026’da tamamlandı",
        "description": ""
      },
      {
        "institution": "Universidad San Jorge, İspanya",
        "degree": "Erasmus Öğrenci Değişimi, Zaragoza",
        "date": "2025–2026",
        "description": ""
      }
    ],
    "languagesTitle": "Diller",
    "languages": [
      "Türkçe (ana dil)",
      "İngilizce (ileri)",
      "İspanyolca (A1 sertifikalı)"
    ]
  },
  "certificates": {
    "title": "Sertifikalar",
    "view": "Belgeyi görüntüle",
    "verify": "Doğrula"
  },
  "workbench": {
    "choose": "Bir kartuş seç",
    "loaded": "Yüklendi",
    "insert": "Yerleştir",
    "hint": "Bir proje seç. Gerisini makineye bırak.",
    "companion": "Proje yol arkadaşın",
    "online": "ÇEVRİMİÇİ",
    "ready": "HAZIR",
    "standby": "İyi fikirler.\nÇalışan sistemler.",
    "standbyHint": "Keşfetmek için bir proje yerleştir.",
    "eject": "Projeyi çıkar",
    "footer": "Biraz eğlence. Bolca mühendislik."
  }
};
