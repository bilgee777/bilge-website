/**
 * Projects & case studies.
 *
 * Confidentiality (KargoIO, AI Road Assistant — YÜKSİ; Port Operations Simulation — Solon Yazılım):
 *   no real screenshots, no source code, no API endpoints, no customer/courier data,
 *   no internal links, no confidential technical details, no "official product" tone.
 *   To hide a case study until publication is approved, set `visibility: "draft"`.
 *
 * Problem / Solution texts marked DRAFT are derived only from the confirmed
 * descriptions — review them. Engineering decisions and key learnings are left as
 * todo() because they were not provided.
 */
import { todo } from "./todo";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "kargoio",
    name: { tr: "KargoIO", en: "KargoIO" },
    category: { tr: "Profesyonel · Mobil Uygulama", en: "Professional · Mobile Application" },
    role: { tr: "Mobil Uygulama Geliştirici", en: "Mobile Application Developer" },
    context: { tr: "YÜKSİ", en: "YÜKSİ" },
    team: { tr: "Ekip projesi", en: "Team project" },
    summary: {
      tr: "Kurye operasyonlarını ve lojistik dağıtım süreçlerini yönetmek için geliştirilen mobil uygulama platformu.",
      en: "Mobile application platform for managing courier operations and logistics distribution workflows.",
    },
    status: {
      kind: "employment",
      note: { tr: "Kamuya açık yayın durumu doğrulanmadı", en: "Public release unconfirmed" },
    },
    confidential: true,
    visibility: "public", // TODO: confirm with YÜKSİ that this general description may be public.
    cover: "logistics",
    caseStudy: {
      overview: [
        {
          tr: "KargoIO, kurye operasyonlarını ve lojistik dağıtım süreçlerini yönetmek için geliştirilen bir mobil uygulama platformudur. YÜKSİ ekibinin bir parçası olarak kuryelerin kullandığı mobil uygulama üzerinde çalıştım.",
          en: "KargoIO is a mobile application platform for managing courier operations and logistics distribution. As part of the YÜKSİ team, I worked on the courier-facing mobile app.",
        },
        {
          tr: "Aşağıdaki özelliklerin bir kısmı ekip arkadaşlarımla birlikte geliştirildi. Bu sayfa projenin tamamını değil, benim katkılarımı anlatır.",
          en: "Several of the features below were built in collaboration with teammates. This page describes my contributions, not the work of the whole team.",
        },
      ],
      // DRAFT
      problem: {
        tr: "Kuryelerin vardiyalarını, toplama ve dağıtım görevlerini, zimmet devirlerini ve teslimat doğrulamalarını sahada tek bir mobil uygulamadan, harita ve rota desteğiyle yönetebilmesi gerekiyordu.",
        en: "Couriers needed a single mobile app to manage shifts, pickup and delivery tasks, package handovers and delivery verification in the field, supported by maps and routes.",
      },
      // DRAFT
      solution: {
        tr: "React Native ve Expo ile geliştirilen, platforma REST API'ler ve JWT tabanlı kimlik doğrulamayla bağlanan; vardiya, görev, barkod ve teslimat doğrulama akışlarını ve harita tabanlı rota deneyimini bir araya getiren bir mobil uygulama.",
        en: "A React Native and Expo app connected to the platform through REST APIs with JWT-based authentication, bringing together shift, task, barcode and delivery-verification flows with a map-based routing experience.",
      },
      contributions: [
        { tr: "Kurye ana sayfası ve vardiya yönetimi", en: "Courier home screen and shift management" },
        { tr: "Toplama ve dağıtım görevleri, görev detay ekranları", en: "Pickup and delivery tasks, including task detail screens" },
        { tr: "Barkod doğrulama akışları", en: "Barcode verification flows" },
        { tr: "Zimmet alma ve devretme işlemleri", en: "Receiving and handing over package custody" },
        { tr: "Bayiden kurye atama talepleri", en: "Dealer-to-courier assignment requests" },
        { tr: "Teslimat doğrulama, OTP ve teslimat fotoğrafı akışları", en: "Delivery verification with OTP and delivery-photo flows" },
        { tr: "Başarısız teslimat senaryoları", en: "Failed-delivery scenarios" },
        { tr: "Harita ve rota deneyimi: durak pinleri, harita etkileşimleri ve trafik görünümü", en: "Map and route experience: stop pins, map interactions and traffic view" },
        { tr: "Kazanç ekranları", en: "Earnings screens" },
        { tr: "Kurye profil ve hesap işlemleri", en: "Courier profile and account management" },
        { tr: "API entegrasyonları ve mobil kullanıcı deneyimi", en: "API integrations and overall mobile user experience" },
        { tr: "Müşteri kargo takip sayfasına yönelik geliştirme çalışmaları", en: "Development work toward the customer shipment-tracking page" },
      ],
      technologies: ["React Native", "Expo", "REST APIs", "JWT", "Maps", "Git"],
      engineeringDecisions: todo("Technical decisions you can share publicly (no confidential details)"),
      keyLearnings: todo("What you learned on this project"),
      screenshots: [], // Confidential — none.
    },
    links: [],
  },
  {
    slug: "ai-road-assistant",
    name: { tr: "AI Yol Asistanı", en: "AI Road Assistant" },
    category: { tr: "Profesyonel · Yapay Zekâ", en: "Professional · Artificial Intelligence" },
    role: { tr: "Geliştirici (ekip çalışması)", en: "Developer (collaborative)" },
    context: { tr: "YÜKSİ", en: "YÜKSİ" },
    team: { tr: "Bir geliştiriciyle birlikte", en: "Built with one other developer" },
    summary: {
      tr: "Kurye uygulaması kapsamında, sürücüye yolculuk sırasında bağlamsal yardım sağlamayı hedefleyen yapay zekâ destekli asistan.",
      en: "AI-powered assistant within the courier app, designed to give drivers contextual help during their trips.",
    },
    status: todo("Project status (e.g. developed during employment / release unconfirmed)"),
    confidential: true,
    visibility: "public", // TODO: confirm with YÜKSİ that this general description may be public.
    cover: "ai",
    caseStudy: {
      overview: [
        {
          tr: "Kurye uygulaması kapsamında geliştirilen, sürücüye yolculuk sırasında bağlamsal yardım sağlamayı hedefleyen yapay zekâ destekli bir asistan. Proje, bir geliştirici arkadaşımla birlikte ekip hâlinde geliştirildi.",
          en: "An AI-powered assistant developed as part of the courier app, aiming to give drivers contextual help during their trips. It was built as a team with one other developer.",
        },
        {
          tr: "Asistan, OpenAI'ın mevcut GPT-4o mini modeli üzerine kuruludur. Çalışmalarım modelin ürüne entegrasyonuna odaklandı; herhangi bir model eğitilmedi.",
          en: "The assistant is built on OpenAI's existing GPT-4o mini model. My work focused on integrating the model into the product — no model was trained.",
        },
      ],
      // DRAFT
      problem: {
        tr: "Sürücülerin, uygulamadan ayrılmadan o anki yolculuklarıyla ilgili hızlı ve bağlama uygun yardıma ulaşabilmesi gerekiyordu.",
        en: "Drivers needed quick, context-aware help related to their current trip without leaving the courier app.",
      },
      // DRAFT
      solution: {
        tr: "Mobil uygulamaya entegre edilen, konum ve rota bilgileri gibi yolculuk bağlamını kullanarak doğal dilde yanıt veren ve sesli asistan deneyimine yönelik çalışmalar içeren, LLM tabanlı bir asistan.",
        en: "An LLM-based assistant integrated into the mobile app that responds in natural language using trip context such as location and route information, with work toward a voice-assistant experience.",
      },
      contributions: [
        { tr: "LLM entegrasyonu", en: "LLM integration" },
        { tr: "Kullanıcıyla doğal dil etkileşimi", en: "Natural-language interaction with the user" },
        { tr: "Yolculuk bağlamına dayalı yanıtlar", en: "Responses grounded in trip context" },
        { tr: "Konum ve rota bilgileriyle ilişkili asistan deneyimi", en: "Assistant experience tied to location and route information" },
        { tr: "Mobil uygulama entegrasyonu", en: "Integration into the mobile app" },
        { tr: "Sesli asistan deneyimine yönelik çalışmalar", en: "Work toward a voice-assistant experience" },
      ],
      technologies: ["OpenAI GPT-4o mini", "LLM API Integration", "React Native", "REST APIs"],
      engineeringDecisions: todo("Technical decisions you can share publicly (no confidential details)"),
      keyLearnings: todo("What you learned on this project"),
      screenshots: [], // Confidential — none.
    },
    links: [],
  },
  {
    slug: "port-operations-simulation",
    name: { tr: "Liman Operasyon Simülasyonu", en: "Port Operations Simulation" },
    category: { tr: "Profesyonel · Simülasyon Geliştirme", en: "Professional · Simulation Development" },
    role: { tr: "Tek geliştirici", en: "Solo Developer" },
    context: { tr: "Solon Yazılım", en: "Solon Yazılım" },
    summary: {
      tr: "Unity ve C# ile geliştirilmiş, liman operasyonlarını 3D ortamda görselleştiren etkileşimli simülasyon.",
      en: "Interactive 3D simulation that visualises port operations, built with Unity and C#.",
    },
    status: { kind: "completed" },
    confidential: true, // Company project — only use visuals Solon Yazılım has approved.
    visibility: "public",
    cover: "simulation",
    caseStudy: {
      overview: [
        {
          tr: "Unity ve C# kullanılarak geliştirilmiş, liman operasyonlarını 3D ortamda görselleştiren etkileşimli bir simülasyon. Bu projeyi Solon Yazılım'daki görevim sırasında tek başıma geliştirdim.",
          en: "An interactive simulation that visualises port operations in a 3D environment, built with Unity and C#. I developed it on my own during my time at Solon Yazılım.",
        },
      ],
      // DRAFT
      problem: {
        tr: "Araç giriş-çıkışları, terminal etkileşimleri ve saha düzeni gibi liman süreçlerinin kolay takip edilebilir ve keşfedilebilir bir şekilde sunulması gerekiyordu.",
        en: "Port processes such as vehicle entries and exits, terminal interactions and the site layout needed to be presented in a way that is easy to follow and explore.",
      },
      // DRAFT
      solution: {
        tr: "Liman sahasının Unity'de modellendiği; kamera kontrolleri, etkileşimli operasyon ekranları, animasyonlu araç akışları ve video entegrasyonları içeren etkileşimli bir 3D simülasyon.",
        en: "An interactive 3D simulation of the port site in Unity, with camera controls, interactive operation screens, animated vehicle flows and embedded video.",
      },
      contributions: [
        { tr: "Liman sahası modelleme", en: "Port site modelling" },
        { tr: "3D çevre düzeni", en: "3D environment layout" },
        { tr: "Kamera hareketleri ve kontrolleri", en: "Camera movement and controls" },
        { tr: "Etkileşimli operasyon ekranları", en: "Interactive operation screens" },
        { tr: "Araç giriş ve çıkış senaryoları", en: "Vehicle entry and exit scenarios" },
        { tr: "Liman süreçlerinin görselleştirilmesi", en: "Visualisation of port processes" },
        { tr: "Animasyon sistemleri", en: "Animation systems" },
        { tr: "Video entegrasyonları", en: "Video integrations" },
        { tr: "Kullanıcı etkileşimleri", en: "User interactions" },
      ],
      technologies: ["Unity", "C#", "ProBuilder", "Terrain", "Animator", "VideoPlayer", "Git"],
      engineeringDecisions: todo("Technical decisions (e.g. scene structure, camera system) you can share"),
      keyLearnings: todo("What you learned on this project"),
      screenshots: todo("Add only screenshots Solon Yazılım has approved for publication"),
    },
    links: [],
  },
  {
    slug: "truck-parking-simulator",
    name: { tr: "Tır Park Etme Simülasyonu", en: "Truck Parking Simulator" },
    category: { tr: "Akademik · Bitirme Projesi", en: "Academic · Graduation Project" },
    role: { tr: "Tek geliştirici", en: "Solo Developer" },
    context: { tr: "Bilgisayar Mühendisliği bitirme projesi", en: "Computer Engineering graduation project" },
    platform: "PC",
    summary: {
      tr: "Bilgisayar mühendisliği bitirme projesi kapsamında Unity ve C# ile geliştirdiğim PC tabanlı tır park etme simülasyonu.",
      en: "PC-based truck parking simulation I built with Unity and C# as my Computer Engineering graduation project.",
    },
    status: { kind: "completed" },
    confidential: false,
    visibility: "public",
    cover: "game",
    caseStudy: {
      overview: [
        {
          tr: "Bilgisayar mühendisliği bitirme projesi kapsamında Unity ve C# ile geliştirdiğim PC tabanlı bir tır park etme simülasyonu. Bu benim bireysel bitirme projemdir.",
          en: "A PC-based truck parking simulation I built with Unity and C# for my Computer Engineering graduation project. It is my individual graduation project.",
        },
      ],
      problem: todo("The problem or goal the graduation project addressed"),
      // DRAFT — derived from the confirmed feature list.
      solution: {
        tr: "Oyuncunun bir tırı kontrol ederek park etme senaryolarını tamamladığı, Unity ile geliştirilmiş 3D bir oyun ortamı.",
        en: "A 3D game environment built in Unity where the player controls a truck and completes parking scenarios.",
      },
      contributions: [
        { tr: "3D oyun ortamı", en: "3D game environment" },
        { tr: "Araç kontrol sistemi", en: "Vehicle control system" },
        { tr: "Park etme senaryoları", en: "Parking scenarios" },
        { tr: "Kullanıcı etkileşimleri", en: "User interactions" },
        { tr: "Oyun mantığı", en: "Game logic" },
      ],
      technologies: ["Unity", "C#"],
      engineeringDecisions: todo("Technical decisions (e.g. vehicle control approach) — only real ones"),
      keyLearnings: todo("What you learned on this project"),
      screenshots: todo("Screenshots from your own build (add to public/projects/truck-parking-simulator/)"),
    },
    links: todo("Video / repository link, if you want to share one"),
  },
  {
    slug: "framelab",
    name: { tr: "FrameLab", en: "FrameLab" },
    category: { tr: "Kişisel · Native iOS", en: "Personal · Native iOS" },
    role: { tr: "Tek geliştirici", en: "Solo Developer" },
    summary: {
      tr: "Native iOS geliştirme becerilerimi sergilemek amacıyla tasarladığım fotoğraf düzenleme uygulaması. Geliştirme aşamasında.",
      en: "Photo editing app I designed to showcase my native iOS development skills. Currently in development.",
    },
    // Keep until it actually ships.
    status: { kind: "in-development" },
    confidential: false,
    visibility: "public",
    cover: "ios",
    caseStudy: {
      overview: [
        {
          tr: "FrameLab, native iOS geliştirme becerilerimi sergilemek amacıyla tasarladığım bir fotoğraf düzenleme uygulaması. Proje henüz tamamlanmadı; aşağıdaki özellikler planlanan özelliklerdir.",
          en: "FrameLab is a photo editing app I designed to showcase my native iOS development skills. The project is not finished yet — the features below are planned.",
        },
      ],
      problem: todo("Optional: the problem FrameLab sets out to solve"),
      solution: todo("Optional: the approach, once implemented"),
      contributions: todo("What has actually been implemented so far"),
      plannedFeatures: [
        { tr: "Fotoğraf seçimi", en: "Photo selection" },
        { tr: "Görüntü filtreleri", en: "Image filters" },
        { tr: "Fotoğraf ayarları", en: "Photo adjustments" },
        { tr: "Önce / sonra karşılaştırması", en: "Before / after comparison" },
        { tr: "Dışa aktarma seçenekleri", en: "Export options" },
        { tr: "Modern native iOS arayüzü", en: "Modern native iOS UI" },
      ],
      technologies: todo("Technologies already used in the code (move them from planned)"),
      plannedTechnologies: ["Swift", "SwiftUI", "UIKit", "MVVM", "Core Image", "Swift Concurrency"],
      engineeringDecisions: todo("Architecture decisions, once made"),
      keyLearnings: todo("Learnings, once there are some"),
      screenshots: todo("Screenshots once the UI exists"),
    },
    links: [],
  },
];
