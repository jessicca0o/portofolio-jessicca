// 1. Custom Tailwind Theme Configuration for Pastel Palette
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          cream: '#FFFDFB',
          charcoal: '#2B2D42',
          slateMuted: '#5C6075',
          pastelPink: '#FAD2E1',
          pastelPinkSoft: '#FFF0F5',
          pastelLavender: '#DFD3F2',
          pastelLavenderSoft: '#F5F0FC',
          pastelMint: '#D8F3DC',
          pastelMintSoft: '#EFFAF1',
          pastelPeach: '#FDE2E4',
          pastelPeachSoft: '#FFF4F5',
          pastelSky: '#DBEAFE',
        },
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          display: ['"Outfit"', 'sans-serif'],
        },
        boxShadow: {
          pastel: '0 12px 32px -8px rgba(43, 45, 66, 0.06)',
          pastelHover: '0 18px 40px -10px rgba(223, 211, 242, 0.55)',
        }
      }
    }
  };
}

// 2. Bilingual Translation Dictionary (Bahasa Indonesia & English)
const translations = {
  id: {
    navAbout: 'Tentang Saya',
    navProjects: 'Projek',
    navCertificates: 'Sertifikat',
    navSkills: 'Keahlian',
    navContact: 'Kontak',
    heroWelcome: 'Selamat Datang di Portofolio Saya',
    heroIntroLabel: 'Halo, Saya',
    heroSubtitle: 'Pelajar Teknik Jaringan Komputer dan Telekomunikasi (TJKT) — SMKN 1 Blitar',
    heroDescription: 'Bersemangat mengeksplorasi infrastruktur jaringan komputer, pengelolaan basis data (database), serta pengembangan aplikasi praktis yang rapi dan mudah digunakan.',
    heroBtnProjects: 'Lihat Projek Saya',
    heroBtnContact: 'Hubungi Saya',
    aboutBadge: 'Tentang Saya',
    aboutTitle: 'Pelajar TJKT di SMKN 1 Blitar',
    aboutP1: 'Halo! Saya <strong class="text-charcoal font-semibold">Jesscca Dian</strong>, seorang pelajar aktif di <strong class="text-charcoal font-semibold">SMKN 1 Blitar</strong> yang menempuh pendidikan pada jurusan <strong class="text-charcoal font-semibold">Teknik Jaringan Komputer dan Telekomunikasi (TJKT)</strong>.',
    aboutP2: 'Selama belajar di TJKT, saya mendalami instalasi dan konfigurasi jaringan komputer, administrasi server dasar, perancangan basis data (database), hingga pembuatan aplikasi fungsional seperti sistem kasir. Saya selalu antusias mempelajari teknologi baru dan menyelesaikan tantangan secara teliti.',
    aboutCardSchoolLabel: 'Sekolah',
    aboutCardMajorLabel: 'Jurusan',
    aboutCardMajorValue: 'Teknik Jaringan Komputer & Telekomunikasi (TJKT)',
    projectsBadge: 'Portofolio Karya',
    projectsTitle: 'Projek Pilihan',
    projectsSubtitle: 'Dokumentasi hasil pengerjaan projek perancangan basis data dan aplikasi kasir. Klik gambar untuk memperbesar.',
    zoomLabel: 'Perbesar',
    proj1Title: 'Projek Database',
    proj1Desc: 'Perancangan struktur tabel relasional, normalisasi data, serta pengelolaan query SQL untuk memastikan penyimpanan informasi yang terstruktur, cepat, dan akurat.',
    tagDataMgmt: 'Manajemen Data',
    proj2Title: 'Projek Aplikasi Kasir',
    proj2Desc: 'Aplikasi kasir untuk membantu pencatatan barang, perhitungan total transaksi otomatis, pengelolaan stok, dan pembuatan ringkasan pembayaran dengan antarmuka yang ramah pengguna.',
    tagCashier: 'Aplikasi Kasir',
    tagTransaction: 'Sistem Transaksi',
    certBadge: 'Pencapaian & Kompetensi',
    certTitle: 'Sertifikat UTK & Perlombaan',
    certSubtitle: 'Bukti uji kompetensi kejuruan dan partisipasi dalam kompetisi bidang teknologi. Klik sertifikat untuk melihat detail.',
    cert1Tag: 'Uji Tingkat Kompetensi',
    cert1Title: 'Sertifikat UTK',
    cert1Desc: 'Sertifikat kelulusan Uji Tingkat Kompetensi (UTK) pada bidang keahlian Teknik Jaringan Komputer dan Telekomunikasi di SMKN 1 Blitar.',
    cert2Tag: 'Kompetisi & Lomba',
    cert2Title: 'Sertifikat Perlombaan',
    cert2Desc: 'Sertifikat penghargaan dan keikutsertaan dalam ajang perlombaan untuk mengasah kemampuan teknis, kreativitas, dan ketangkasan pemecahan masalah.',
    skillsBadge: 'Kompetensi Utama',
    skillsTitle: 'Keahlian & Keterampilan',
    skillsSubtitle: 'Bidang teknis jaringan komputer, pengelolaan basis data, dan keterampilan pendukung yang saya kuasai.',
    skillCat1Title: 'Jaringan & Infrastruktur (TJKT)',
    skill1_1: 'Konfigurasi Jaringan LAN & WLAN',
    skill1_2: 'Crimping & Pengkabelan UTP',
    skill1_3: 'Dasar MikroTik & Routing',
    skill1_4: 'Troubleshooting Hardware & Software',
    skillCat2Title: 'Database & Pengembangan Aplikasi',
    skill2_1: 'Perancangan Database (SQL)',
    skill2_2: 'Sistem Aplikasi Kasir (POS)',
    skill2_3: 'HTML & CSS Dasar',
    skill2_4: 'Manajemen & Validasi Data',
    skillCat3Title: 'Soft Skills & Etos Kerja',
    skill3_1: 'Kerja Sama Tim',
    skill3_2: 'Pemecahan Masalah',
    skill3_3: 'Ketelitian & Dokumentasi',
    skill3_4: 'Komunikasi Efektif',
    contactBadge: 'Mari Terhubung',
    contactTitle: 'Kontak Saya',
    contactSubtitle: 'Jangan ragu untuk menghubungi saya melalui email atau pesan langsung di Instagram pribadi untuk diskusi maupun kolaborasi.',
    contactEmailLabel: 'Email',
    contactEmailHint: 'Respon cepat untuk pertanyaan & kolaborasi projek',
    btnSendEmail: 'Kirim Email',
    contactIgLabel: 'Instagram Pribadi',
    contactIgHint: 'Ikuti aktivitas & kirim Direct Message (DM)',
    btnOpenIg: 'Buka Instagram',
    btnCopy: 'Salin',
    footerSubtitle: 'Pelajar Teknik Jaringan Komputer dan Telekomunikasi (TJKT) — SMKN 1 Blitar',
    backToTop: 'Kembali ke Atas ↑',
    copiedToast: 'Berhasil disalin ke papan klip!'
  },
  en: {
    navAbout: 'About Me',
    navProjects: 'Projects',
    navCertificates: 'Certificates',
    navSkills: 'Skills',
    navContact: 'Contact',
    heroWelcome: 'Welcome to My Portfolio',
    heroIntroLabel: 'Hello, I am',
    heroSubtitle: 'Computer and Network Engineering (TJKT) Student — SMKN 1 Blitar',
    heroDescription: 'Passionate about exploring computer network infrastructure, relational database management, and building clean, user-friendly software applications.',
    heroBtnProjects: 'View My Projects',
    heroBtnContact: 'Contact Me',
    aboutBadge: 'About Me',
    aboutTitle: 'TJKT Student at SMKN 1 Blitar',
    aboutP1: 'Hello! I am <strong class="text-charcoal font-semibold">Jesscca Dian</strong>, an active student at <strong class="text-charcoal font-semibold">SMKN 1 Blitar</strong> majoring in <strong class="text-charcoal font-semibold">Computer and Network Engineering (TJKT)</strong>.',
    aboutP2: 'Throughout my studies in TJKT, I have focused on computer network installation and configuration, basic server administration, relational database design, and practical applications such as cashier (POS) systems. I am always eager to learn new technologies and solve problems thoroughly.',
    aboutCardSchoolLabel: 'School',
    aboutCardMajorLabel: 'Major',
    aboutCardMajorValue: 'Computer & Network Engineering (TJKT)',
    projectsBadge: 'Featured Work',
    projectsTitle: 'Selected Projects',
    projectsSubtitle: 'Documentation of my relational database design and cashier application projects. Click an image to enlarge.',
    zoomLabel: 'Enlarge',
    proj1Title: 'Database Project',
    proj1Desc: 'Relational table structure design, data normalization, and SQL query management to ensure structured, fast, and accurate information storage.',
    tagDataMgmt: 'Data Management',
    proj2Title: 'Cashier (POS) Application Project',
    proj2Desc: 'A cashier application designed to streamline item logging, automated transaction calculations, inventory tracking, and receipt summaries with an intuitive interface.',
    tagCashier: 'Cashier App',
    tagTransaction: 'Transaction System',
    certBadge: 'Achievements & Competency',
    certTitle: 'UTK & Competition Certificates',
    certSubtitle: 'Proof of vocational competency assessment and participation in technology competitions. Click a certificate to inspect.',
    cert1Tag: 'Competency Assessment',
    cert1Title: 'UTK Certificate',
    cert1Desc: 'Certificate of Competency Assessment (Uji Tingkat Kompetensi) in Computer and Network Engineering at SMKN 1 Blitar.',
    cert2Tag: 'Competition & Contest',
    cert2Title: 'Competition Certificate',
    cert2Desc: 'Certificate of recognition and participation in technical competitions to sharpen engineering skills, creativity, and problem-solving agility.',
    skillsBadge: 'Core Competencies',
    skillsTitle: 'Skills & Expertise',
    skillsSubtitle: 'Technical computer networking domains, database management, and supportive interpersonal skills.',
    skillCat1Title: 'Networking & Infrastructure (TJKT)',
    skill1_1: 'LAN & WLAN Network Configuration',
    skill1_2: 'UTP Cabling & Crimping',
    skill1_3: 'MikroTik & Routing Fundamentals',
    skill1_4: 'Hardware & Software Troubleshooting',
    skillCat2Title: 'Database & Application Development',
    skill2_1: 'Database Design (SQL)',
    skill2_2: 'Cashier (POS) Application Systems',
    skill2_3: 'HTML & CSS Fundamentals',
    skill2_4: 'Data Management & Validation',
    skillCat3Title: 'Soft Skills & Work Ethic',
    skill3_1: 'Teamwork & Collaboration',
    skill3_2: 'Problem Solving',
    skill3_3: 'Attention to Detail & Documentation',
    skill3_4: 'Effective Communication',
    contactBadge: 'Let’s Connect',
    contactTitle: 'Contact Me',
    contactSubtitle: 'Feel free to reach out via email or send a direct message on my personal Instagram for discussions or collaborations.',
    contactEmailLabel: 'Email',
    contactEmailHint: 'Quick response for inquiries & project collaboration',
    btnSendEmail: 'Send Email',
    contactIgLabel: 'Personal Instagram',
    contactIgHint: 'Follow updates & send a Direct Message (DM)',
    btnOpenIg: 'Open Instagram',
    btnCopy: 'Copy',
    footerSubtitle: 'Computer and Network Engineering (TJKT) Student — SMKN 1 Blitar',
    backToTop: 'Back to Top ↑',
    copiedToast: 'Copied to clipboard!'
  }
};

let currentLang = 'id';

// 3. Apply Language Function
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');

  if (lang === 'id') {
    btnId.classList.add('bg-pastelPink', 'text-charcoal', 'shadow-xs');
    btnId.classList.remove('text-slateMuted');
    btnEn.classList.remove('bg-pastelPink', 'text-charcoal', 'shadow-xs');
    btnEn.classList.add('text-slateMuted');
  } else {
    btnEn.classList.add('bg-pastelPink', 'text-charcoal', 'shadow-xs');
    btnEn.classList.remove('text-slateMuted');
    btnId.classList.remove('bg-pastelPink', 'text-charcoal', 'shadow-xs');
    btnId.classList.add('text-slateMuted');
  }

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  try {
    localStorage.setItem('jesscca_portfolio_lang', lang);
  } catch (e) {
    // Ignore storage restrictions
  }
}

// 4. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-menu-open');
const iconClose = document.getElementById('icon-menu-close');

mobileMenuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden', !isHidden);
  iconClose.classList.toggle('hidden', isHidden);
  mobileMenuBtn.setAttribute('aria-expanded', String(isHidden));
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

// 5. Lightbox Modal for Projects & Certificates
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxContent = document.getElementById('lightbox-content');

function openLightbox(triggerEl) {
  const caption = triggerEl.getAttribute(`data-caption-${currentLang}`) || '';
  lightboxCaption.textContent = caption;
  lightboxContent.innerHTML = '';

  const img = triggerEl.querySelector('img');
  if (img && img.style.display !== 'none' && img.complete && img.naturalWidth > 0) {
    const clonedImg = document.createElement('img');
    clonedImg.src = img.src;
    clonedImg.alt = img.alt;
    clonedImg.className = 'max-h-[70vh] w-auto object-contain rounded-xl';
    lightboxContent.appendChild(clonedImg);
  } else {
    const fallbackDiv = triggerEl.querySelector('div');
    if (fallbackDiv) {
      const clonedFallback = fallbackDiv.cloneNode(true);
      clonedFallback.classList.remove('hidden');
      clonedFallback.classList.add('py-14', 'w-full');
      lightboxContent.appendChild(clonedFallback);
    }
  }

  lightboxModal.classList.remove('hidden');
  lightboxModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxModal.classList.add('hidden');
  lightboxModal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightboxModal.classList.contains('hidden')) {
    closeLightbox();
  }
});

// 6. Copy to Clipboard with Custom Toast Notification
let toastTimeout;
function copyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showToast(`${translations[currentLang].copiedToast} (${text})`);
  } catch (err) {
    showToast(text);
  } finally {
    document.body.removeChild(textarea);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2600);
}

// 7. Initialize Saved Language on Load
window.addEventListener('DOMContentLoaded', () => {
  try {
    const savedLang = localStorage.getItem('jesscca_portfolio_lang');
    if (savedLang === 'en' || savedLang === 'id') {
      setLanguage(savedLang);
    }
  } catch (e) {
    setLanguage('id');
  }
});