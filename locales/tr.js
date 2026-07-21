export const tr = {
  // Navbar
  nav: {
    about: "Hakkımda",
    projects: "Projeler",
    experience: "Deneyim",
    contact: "İletişim"
  },

  // Hero
  hero: {
    greeting: "Merhaba, ben",
    name: "Buğra Berat Kök",
    title: "Yazılım Mühendisliği Öğrencisi & Geliştirici",
    tagline: "Sistemler oluşturmaktan, problem çözmekten ve her yinelemede işleri geliştirmekten keyif alıyorum. Çalışmalarım (backend) geliştirme, yazılım testi, web uygulamaları ve oyun teknolojilerini kapsıyor.",
    viewWork: "Projelerimi Gör",
    downloadResume: "Özgeçmişimi İndir",
    photoAlt: "Buğra Berat Kök"
  },

  // About
  about: {
    title: "Hakkımda",
    p1: "Merhaba! Ben Buğra, sistemlerin nasıl çalıştığını anlamaktan, fikirleri işlevsel projelere dönüştürmekten ve teknik problemlere pratik çözümler bulmaktan keyif alan dördüncü sınıf bir Yazılım Mühendisliği öğrencisiyim.",
    p2: "Deneyimlerim backend geliştirme, web uygulamaları, yazılım testi, veritabanları ve oyun teknolojilerini kapsıyor. Şu anda test otomasyonu, oyun geliştirme ve backend teknolojileri gibi alanları keşfederken, proje tabanlı eğitimlerle yeteneklerimi güçlendiriyorum.",
    skillsTitle: "Profesyonel Yeteneklerim ve Deneyimlerim"
  },

  // Projects
  projects: {
    title: "Öne Çıkan Projeler",
    items: [
      {
        title: "Focus — Özel 2D Oyun Motoru",
        description: "C++ ile sıfırdan oluşturulmuş modüler bir 2D oyun motoru. Yeniden kullanılabilir render, fizik, girdi ve sahne sistemleri aracılığıyla iki oynanabilir oyunu desteklemektedir.",
        tags: ["C++", "SDL", "OpenGL", "OOP"],
        github: "https://github.com/bugraberatkok/Focus-GameEngine-and-Two-Playable-Games"
      },
      {
        title: "Doomsday — 3D Uzay Koşucusu",
        description: "Özel geometri, dinamik zorluk, obje havuzlama (object pooling), çarpışma algılama ve akıcı sinematik kamera hareketi içeren 3 boyutlu bir uzay koşu ve nişancı oyunu.",
        tags: ["Java", "Processing", "P3D", "OOP"],
        github: "https://github.com/bugraberatkok/ProcessingGameProject"
      },
      {
        title: "Football Analyzer AI",
        description: "Gerçek zamanlı futbol istatistiklerini toplayan ve yapılandırılmış taktiksel raporlar oluşturmak için Gemini yapay zekasını kullanan tam yığın (full-stack) maç öncesi analiz platformu.",
        tags: ["Java", "Spring Boot", "React", "Gemini API", "RapidAPI"],
        github: "https://github.com/bugraberatkok/football-analyzer-ai"
      },
      {
        title: "FitTrack — Fitness ve Beslenme Paneli",
        description: "Günlük öğünleri, kalorileri, antrenmanları, egzersiz gelişimini ve haftalık antrenman tutarlılığını takip etmek için güvenli tam yığın kontrol paneli.",
        tags: ["Java", "Spring Boot", "React", "H2"],
        github: "https://github.com/bugraberatkok/fitness-web-app"
      },
      {
        title: "The Lost & Found Pet System",
        description: "Kalıcı yerel depolama özellikli grafik arayüzü aracılığıyla kayıp veya bulunan evcil hayvanları kaydetmek, yönetmek ve takip etmek için bir masaüstü uygulaması.",
        tags: ["Python", "Tkinter", "SQLite", "Git"],
        github: "https://github.com/bengisusagir/TheLostFoundPetSystem"
      },
      {
        title: "Instrument Duel",
        description: "Müzikal zamanlama, duyarlı girdiler, ses tabanlı mekanikler ve özel bir JavaScript oyun döngüsü etrafında inşa edilmiş tarayıcı tabanlı bir ritim ve tepki oyunu.",
        tags: ["JavaScript", "HTML5", "CSS3", "MIDI"],
        github: "https://github.com/bugraberatkok/Instrument-Duel"
      }
    ]
  },

  // Experience
  experience: {
    title: "Deneyim & Eğitim",
    certTitle: "Sertifikalar",
    issuer: "Veren Kurum:",
    date: "Veriliş Tarihi:",
    viewCert: "Sertifikayı Görüntüle (PDF)",
    jobs: [
      {
        company: "Ideasoft",
        title: "Frontend Geliştirici Stajyeri",
        date: "Mar 2025 – Ağu 2025",
        description: [
          "WordPress ve Elementor kullanarak duyarlı web sayfaları oluşturuldu ve özelleştirildi.",
          "Yeniden kullanılabilir kullanıcı arayüzü bileşenleri, animasyonlu bölümler ve etkileşimli sayfa elemanları geliştirildi.",
          "Sayfa içi SEO iyileştirmeleri uygulandı ve devam eden ön yüz geliştirme görevlerine destek verildi.",
          "Günlük toplantılar, görev planlaması ve düzenli tasarım güncellemeleri yoluyla ekiple işbirliği yapıldı."
        ]
      },
      {
        company: "Egemsoft",
        title: "Test Mühendisliği Staj Programı",
        date: "Tem 2026 – Ağu 2026 | Devam Ediyor",
        description: [
          "Yazılım testi temelleri, SDLC, Çevik (Agile) ve Şelale (Waterfall) test süreçleri üzerine yoğun eğitim alınıyor.",
          "İşlevsel, entegrasyon, UAT, regresyon, pozitif ve negatif test senaryoları tasarlanıyor.",
          "Hata (defect) yaşam döngüsü yönetimi, test planlaması, Jira iş akışları, Postman ile API testi ve SQL sorguları uygulanıyor.",
          "Mobil test, Java ile Selenium, test otomasyonu ve performans testi modüllerine doğru ilerleniyor."
        ]
      },
      {
        company: "TNC Group",
        title: "Proje Tabanlı Yazılım Mühendisliği Eğitimi",
        date: "Tem 2026 – Ağu 2026 | Devam Ediyor",
        description: [
          "Web, mobil, veritabanı ve backend geliştirmeyi kapsayan proje tabanlı bir yazılım mühendisliği programına katılım sağlanıyor.",
          "Her modül için pratik ödevler ve teknik projeler tamamlanıyor.",
          "JavaScript web geliştirme, Android ve iOS uygulama geliştirme, SQL ve backend teknolojileri üzerinde çalışılıyor.",
          "Uygulamalı çalışmalarla problem çözme, yazılım tasarımı ve uçtan uca geliştirme becerileri güçlendiriliyor."
        ]
      }
    ],
    certificates: [
      { id: 1, title: "Frontend Okulu", issuer: "Coderspace", date: "2024", file: "/certificates/frontend-school.pdf" },
      { id: 2, title: "Yazılım Testine Giriş", issuer: "BTK Akademi", date: "2026", file: "/certificates/software-testing.pdf" },
      { id: 3, title: "API ve API Testi", issuer: "BTK Akademi", date: "2026", file: "/certificates/api-testing.pdf" },
      { id: 4, title: "Web Servislerine Giriş", issuer: "BTK Akademi", date: "2026", file: "/certificates/web-services.pdf" },
      { id: 5, title: "Jenkins ile DevOps Çözümleri", issuer: "BTK Akademi", date: "2026", file: "/certificates/jenkins.pdf" },
      { id: 6, title: "Veritabanlarına Giriş", issuer: "BTK Akademi", date: "2026", file: "/certificates/databases.pdf" }
    ]
  },

  // Contact
  contact: {
    title: "İletişime Geç",
    description: "Staj, junior geliştirici ve yazılım testi fırsatlarına açığım. Bana e-posta veya LinkedIn üzerinden ulaşmaktan çekinmeyin.",
    name: "İsim",
    email: "E-posta",
    message: "Mesaj",
    send: "Mesaj Gönder",
    footer: "Next.js ile oluşturulmuştur."
  }
};
