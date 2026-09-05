import React, { useState, useEffect } from 'react';
import { translations } from './translations';

export default function App() {
  // Accessibility & State Hooks
  const [lang, setLang] = useState('en');
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [readingRuler, setReadingRuler] = useState(false);
  const [rulerTop, setRulerTop] = useState(100);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  // Navigation & Dropdown States
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  // Section Filter States
  const [directoryFilter, setDirectoryFilter] = useState('all'); // 'all', 'centres', 'autonomous', 'enterprises'
  const [selectedModel, setSelectedModel] = useState('pslv');
  const [activePosterIdx, setActivePosterIdx] = useState(0);

  // Modals & Interactive Popovers
  const [activeMissionKey, setActiveMissionKey] = useState(null);
  const [activePortalKey, setActivePortalKey] = useState(null);
  const [liveVideoModalOpen, setLiveVideoModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openNewsAccordion, setOpenNewsAccordion] = useState(0);
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [tendersModalOpen, setTendersModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [askExpertModalOpen, setAskExpertModalOpen] = useState(false);
  const [rtiModalOpen, setRtiModalOpen] = useState(false);

  // Notification feedback toast for user actions
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Dynamic Bilingual Content Resolution
  const t = translations[lang] || translations.en;
  const flashList = t.flash.items;
  const newsFeed = t.news.items;
  const posterSlides = t.poster.slides;
  const missionData = t.missionData;
  const vehicleModelsData = t.vehicleModelsData;
  const portalsList = t.portalsList;
  const programmesList = t.programmesList;
  const directoryItems = t.directoryItems;

  const [flashIdx, setFlashIdx] = useState(0);

  // Central In-Page Redirection Handler
  const handleNavigate = (sectionId, options = {}) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    // Apply any context modifications
    if (options.model && vehicleModelsData[options.model]) {
      setSelectedModel(options.model);
    }
    if (options.dirFilter) {
      setDirectoryFilter(options.dirFilter);
    }
    if (options.missionKey) {
      setActiveMissionKey(options.missionKey);
    }
    if (options.portalKey) {
      setActivePortalKey(options.portalKey);
    }
    if (options.modal === 'careers') {
      setCareersModalOpen(true);
    }
    if (options.modal === 'tenders') {
      setTendersModalOpen(true);
    }
    if (options.modal === 'feedback') {
      setFeedbackModalOpen(true);
    }
    if (options.modal === 'expert') {
      setAskExpertModalOpen(true);
    }
    if (options.modal === 'rti') {
      setRtiModalOpen(true);
    }

    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try {
          window.history.pushState(null, '', `#${sectionId}`);
        } catch (e) {
          // ignore in restricted iframe
        }
      }
    }
  };

  // Listen to URL hash on initial mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Mouse Listener for Reading Ruler
  useEffect(() => {
    const handleMouse = (e) => {
      if (readingRuler) setRulerTop(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [readingRuler]);

  // Adjust root HTML font size dynamically
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Auto-advance Special Highlights Poster every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePosterIdx((prev) => (prev + 1) % posterSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [posterSlides.length]);

  const filteredDirectory = directoryFilter === 'all'
    ? directoryItems
    : directoryItems.filter(item => item.cat === directoryFilter);

  return (
    <div id="body-root" className={`text-base antialiased selection:bg-isro-blue selection:text-white ${dyslexiaFont ? 'accessibility-dyslexia' : ''} ${highContrast ? 'contrast-125' : ''}`}>

      {/* Reading Ruler Overlay */}
      {readingRuler && (
        <div
          id="reading-ruler"
          className="fixed left-0 w-full h-8 bg-sky-400/30 border-y-2 border-sky-500 pointer-events-none z-50"
          style={{ top: `${rulerTop}px` }}
        />
      )}

      {/* Toast Notification Notification Popup */}
      {toastMessage && (
        <div className="fixed top-14 right-6 z-50 bg-isro-blue-dark text-white border border-isro-steel/40 shadow-2xl px-4 py-2.5 rounded-none flex items-center gap-3 text-xs font-mono animate-in slide-in-from-top-2 duration-200">
          <i className="fa-solid fa-circle-check text-green-400"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Accessibility & Official Utility Bar */}
      <div className="bg-isro-dark border-b border-white/10 text-white text-xs py-2 px-3 sm:px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3 font-mono text-[10px] sm:text-[11px] tracking-wider text-slate-400 flex-wrap">
            <span>{t.topBar.gov}</span>
            <span>•</span>
            <span>{t.topBar.dos}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-isro-steel font-bold hidden sm:inline">{t.topBar.isro}</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switcher - Fully dynamic English/Hindi toggle */}
            <div className="flex items-center space-x-1 border-r border-white/20 pr-2 sm:pr-3">
              <button
                onClick={() => {
                  setLang('en');
                  showToast("Language switched to English");
                }}
                className={`px-2 py-0.5 rounded-none font-bold text-[11px] sm:text-xs cursor-pointer transition ${lang === 'en' ? 'bg-isro-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                title="Switch website to English"
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLang('hi');
                  showToast("भाषा बदलकर आधिकारिक हिंदी कर दी गई है");
                }}
                className={`px-2 py-0.5 rounded-none font-bold text-[11px] sm:text-xs cursor-pointer transition ${lang === 'hi' ? 'bg-isro-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                title="वेबसाइट को हिंदी में बदलें"
              >
                हिंदी
              </button>
            </div>

            {/* In-Page Quick Section Redirection Links */}
            <div className="hidden md:flex items-center space-x-3 text-[11px] font-mono text-slate-300 border-r border-white/20 pr-3">
              <button onClick={() => handleNavigate('features', { modal: 'careers' })} className="hover:text-isro-orange transition cursor-pointer">{t.topBar.careers}</button>
              <span>|</span>
              <button onClick={() => handleNavigate('features', { modal: 'tenders' })} className="hover:text-isro-orange transition cursor-pointer">{t.topBar.tenders}</button>
              <span>|</span>
              <button onClick={() => handleNavigate(null, { modal: 'rti' })} className="hover:text-isro-orange transition cursor-pointer">{t.topBar.rti}</button>
              <span>|</span>
              <button onClick={() => handleNavigate('contact')} className="hover:text-isro-orange transition cursor-pointer">{t.topBar.contact}</button>
            </div>

            {/* Font Scaling */}
            <div className="flex items-center space-x-1 border-r border-white/20 pr-2 sm:pr-3">
              <button onClick={() => setFontSize(Math.max(12, fontSize - 1))} className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded-none text-xs font-bold cursor-pointer" title={t.topBar.fontSizeDecrease}>A-</button>
              <button onClick={() => setFontSize(16)} className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded-none text-xs font-bold cursor-pointer" title={t.topBar.fontSizeReset}>A</button>
              <button onClick={() => setFontSize(Math.min(22, fontSize + 1))} className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded-none text-xs font-bold cursor-pointer" title={t.topBar.fontSizeIncrease}>A+</button>
            </div>

            {/* Accessibility Tools */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <button onClick={() => setHighContrast(!highContrast)} className="px-1.5 sm:px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded-none flex items-center gap-1 cursor-pointer" title={t.topBar.highContrast}>
                <i className="fa-solid fa-circle-half-stroke"></i>
              </button>
              <button onClick={() => setReadingRuler(!readingRuler)} className="px-1.5 sm:px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded-none flex items-center gap-1 cursor-pointer" title={t.topBar.readingRuler}>
                <i className="fa-solid fa-ruler-horizontal"></i>
              </button>
              <button onClick={() => setDyslexiaFont(!dyslexiaFont)} className="px-1.5 sm:px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded-none flex items-center gap-1 cursor-pointer" title={t.topBar.friendlyFont}>
                <i className="fa-solid fa-font"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom-Right Quick Action Menu */}
      <div className="fixed right-4 sm:right-5 bottom-4 sm:bottom-5 z-50 flex flex-col items-end">
        {quickMenuOpen && (
          <div className="mb-3 flex flex-col gap-2 animate-in slide-in-from-bottom-2 duration-200">
            <button
              onClick={() => handleNavigate('news')}
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer"
            >
              <img src="https://www.isro.gov.in/media_isro/image/favicon.png.webp" alt="ISRO Logo" className="w-4 h-4 object-contain brightness-0 invert" />
              <span>{t.quickMenu.nspd}</span>
            </button>
            <button
              onClick={() => handleNavigate(null, { modal: 'expert' })}
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer"
            >
              <i className="fa-solid fa-comments text-white text-sm"></i>
              <span>{t.quickMenu.expert}</span>
            </button>
            <button
              onClick={() => handleNavigate(null, { modal: 'feedback' })}
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer"
            >
              <i className="fa-solid fa-pen-to-square text-white text-sm"></i>
              <span>{t.quickMenu.feedback}</span>
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer"
            >
              <i className="fa-solid fa-location-dot text-white text-sm"></i>
              <span>{t.quickMenu.contact}</span>
            </button>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          onClick={() => setQuickMenuOpen(!quickMenuOpen)}
          className="w-12 h-12 bg-isro-blue hover:bg-isro-blue-dark text-white rounded-none shadow-2xl flex items-center justify-center border-2 border-white transition transform hover:scale-105 active:scale-95 cursor-pointer"
          title="Quick Services & Redirections"
        >
          <i className={`fa-solid ${quickMenuOpen ? 'fa-xmark' : 'fa-universal-access'} text-xl text-white`}></i>
        </button>
      </div>

      {/* Outer Swiss Canvas Frame */}
      <div className="max-w-[1440px] mx-auto my-0 sm:my-6 px-0 sm:px-4">
        <div className="bg-isro-cream rounded-none shadow-2xl overflow-hidden border border-isro-border relative">

          {/* TOP BLUE HEADER BANNER & OFFICIAL NAV */}
          <header id="hero" className="bg-isro-blue text-white relative overflow-hidden pb-12 md:pb-16 pt-6 px-4 sm:px-8 md:px-12 border-b border-isro-blue-dark">
            <div className="absolute inset-0 wireframe-grid opacity-20 pointer-events-none"></div>

            {/* Official Brand Header Row */}
            <div className="relative z-10 flex flex-wrap justify-between items-center pb-6 border-b border-white/20 gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button onClick={() => handleNavigate('hero')} className="bg-white p-1.5 rounded-none shadow-md flex items-center justify-center border border-isro-border hover:opacity-90 transition cursor-pointer shrink-0">
                  <img
                    src="https://www.isro.gov.in/media_isro/image/favicon.png.webp"
                    alt="Official ISRO Logo Emblem"
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                  />
                </button>
                <div>
                  <div className="font-display font-black text-lg sm:text-xl leading-tight uppercase tracking-wider">
                    {t.hero.orgName}
                  </div>
                  <div className="text-xs text-isro-steel font-mono">
                    {t.hero.orgSub}
                  </div>
                </div>
              </div>

              {/* Search Button Trigger & Mobile Hamburger */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button onClick={() => setSearchOpen(true)} className="bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-2 rounded-none flex items-center space-x-2 text-xs font-mono uppercase transition border border-white/20 cursor-pointer">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span>{t.nav.searchPlaceholder}</span>
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden bg-white/10 hover:bg-white/20 text-white p-2 rounded-none text-lg border border-white/20 cursor-pointer" title="Toggle Navigation Menu">
                  <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
              </div>
            </div>

            {/* Multi-Level In-Page Section Navigation Dropdowns */}
            <nav className="relative z-20 mt-4 pb-4 border-b border-white/10">
              <ul className="hidden md:flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider font-display">

                {/* Home */}
                <li>
                  <button onClick={() => handleNavigate('hero')} className="hover:text-isro-steel py-1 transition flex items-center gap-1 cursor-pointer">
                    <i className="fa-solid fa-house text-[10px]"></i>
                    <span>{t.nav.home}</span>
                  </button>
                </li>

                {/* About Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1 cursor-pointer"
                  >
                    <span>{t.nav.about}</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'about' && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-isro-dark text-white border border-isro-steel/30 rounded-none shadow-2xl p-3 z-50 font-body text-xs space-y-1 uppercase">
                      <button onClick={() => handleNavigate('about')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.orgProfile}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('about')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.visionMission}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('about')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.chairman}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'centres' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 cursor-pointer">
                        <span>{t.nav.dosCentres}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'autonomous' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 cursor-pointer">
                        <span>{t.nav.autonomousBodies}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('launchers')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.timeline}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('contact')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.contactHq}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </li>

                {/* Activities Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'activities' ? null : 'activities')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1 cursor-pointer"
                  >
                    <span>{t.nav.activities}</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'activities' && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-isro-dark text-white border border-isro-steel/30 rounded-none shadow-2xl p-3 z-50 font-body text-xs space-y-1 uppercase">
                      <button onClick={() => handleNavigate('missions')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.missionsAccomplished}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('missions')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.upcomingMissions}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('launchers')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 font-bold cursor-pointer">
                        <span>{t.nav.launchVehiclesFleet}</span>
                        <i className="fa-solid fa-rocket text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('missions', { missionKey: 'gaganyaan' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.gaganyaanBrief}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('missions', { missionKey: 'aditya' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.adityaBrief}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'enterprises' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.inspaceAuth}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </li>

                {/* Services Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1 cursor-pointer"
                  >
                    <span>{t.nav.services}</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-isro-dark text-white border border-isro-steel/30 rounded-none shadow-2xl p-3 z-50 font-body text-xs space-y-1 uppercase">
                      <button onClick={() => handleNavigate('launchers')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.commercialLaunch}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('portals', { portalKey: 'bhuvan' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 cursor-pointer">
                        <span>{t.nav.bhuvanService}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('portals', { portalKey: 'bhoonidhi' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.bhoonidhiService}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('portals', { portalKey: 'mosdac' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.mosdacService}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('portals', { portalKey: 'ndem' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.ndemService}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </li>

                {/* Launch Vehicles Direct Nav */}
                <li>
                  <button onClick={() => handleNavigate('launchers')} className="hover:text-isro-steel py-1 transition flex items-center gap-1 cursor-pointer">
                    <i className="fa-solid fa-rocket text-[10px]"></i>
                    <span>{t.nav.launchers}</span>
                  </button>
                </li>

                {/* Programmes Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'programmes' ? null : 'programmes')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1 cursor-pointer"
                  >
                    <span>{t.nav.programmes}</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'programmes' && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-isro-dark text-white border border-isro-steel/30 rounded-none shadow-2xl p-3 z-50 font-body text-xs space-y-1 uppercase">
                      <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 font-bold cursor-pointer">
                        <span>{t.nav.yuvikaProg}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.unnatiProg}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.studentSatsProg}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.spaceTutors}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.merchandiseProg}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </li>

                {/* Centres Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'centres' ? null : 'centres')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1 cursor-pointer"
                  >
                    <span>{t.nav.centres}</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'centres' && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-isro-dark text-white border border-isro-steel/30 rounded-none shadow-2xl p-3 z-50 font-body text-xs space-y-1 uppercase">
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'all' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.allCentres}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'centres' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 cursor-pointer">
                        <span>{t.nav.majorCentres}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'autonomous' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.autonomousBodies}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'enterprises' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between text-yellow-300 font-bold cursor-pointer">
                        <span>{t.nav.enterprises}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </li>

                {/* Engagements Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'engagements' ? null : 'engagements')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1 cursor-pointer"
                  >
                    <span>{t.nav.engagements}</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'engagements' && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-isro-dark text-white border border-isro-steel/30 rounded-none shadow-2xl p-3 z-50 font-body text-xs space-y-1 uppercase">
                      <button onClick={() => handleNavigate('features', { modal: 'careers' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.icrbRecruit}</span>
                        <i className="fa-solid fa-briefcase text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('features', { modal: 'tenders' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.procurement}</span>
                        <i className="fa-solid fa-file-contract text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('news')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.pressMedia}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.stemStudents}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                      <button onClick={() => handleNavigate('centres', { dirFilter: 'enterprises' })} className="w-full text-left p-2 hover:bg-isro-blue rounded-none transition flex items-center justify-between cursor-pointer">
                        <span>{t.nav.industryPartners}</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </li>

              </ul>

              {/* Responsive Mobile Drawer */}
              {mobileMenuOpen && (
                <div className="md:hidden mt-3 p-4 bg-isro-dark/95 border border-white/20 rounded-none space-y-2 text-xs uppercase font-mono animate-in slide-in-from-top-2">
                  <button onClick={() => handleNavigate('hero')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.nav.home}</span>
                    <i className="fa-solid fa-house text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('features')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.features.tag.replace('// ', '')}</span>
                    <i className="fa-solid fa-briefcase text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('news')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.news.title}</span>
                    <i className="fa-solid fa-newspaper text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('missions')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.missions.tag.replace('// ', '')}</span>
                    <i className="fa-solid fa-satellite text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('launchers')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between text-yellow-300 font-bold cursor-pointer">
                    <span>{t.launchers.title}</span>
                    <i className="fa-solid fa-rocket text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('portals')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.portals.title}</span>
                    <i className="fa-solid fa-earth-asia text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('programmes')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.programmes.title}</span>
                    <i className="fa-solid fa-graduation-cap text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('centres')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.centres.title}</span>
                    <i className="fa-solid fa-building-columns text-[10px]"></i>
                  </button>
                  <button onClick={() => handleNavigate('about')} className="w-full text-left p-2 hover:bg-isro-blue rounded-none flex items-center justify-between cursor-pointer">
                    <span>{t.nav.about}</span>
                    <i className="fa-solid fa-info text-[10px]"></i>
                  </button>
                </div>
              )}
            </nav>

            {/* Banner Subhead & Callouts */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-start">
              <div className="md:col-span-5 text-xs text-slate-200 leading-relaxed font-normal">
                <p>
                  {t.hero.desc}
                </p>
              </div>

              {/* Chandrayaan Callout Card */}
              <button
                onClick={() => handleNavigate('missions', { missionKey: 'ch3' })}
                className="md:col-span-3 bg-white/10 border border-white/20 p-2.5 rounded-none flex items-center space-x-3 text-left hover:bg-white/20 transition cursor-pointer"
              >
                <div className="w-12 h-12 bg-isro-blue-dark rounded-none flex items-center justify-center text-isro-orange text-xl font-bold shrink-0">
                  <i className="fa-solid fa-moon"></i>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white uppercase">{t.hero.ch3Badge}</div>
                  <div className="text-slate-300 text-[10px]">{t.hero.ch3Sub}</div>
                </div>
              </button>

              {/* Aditya-L1 Callout Card */}
              <button
                onClick={() => handleNavigate('missions', { missionKey: 'aditya' })}
                className="md:col-span-4 bg-white/10 border border-white/20 p-2.5 rounded-none flex items-center space-x-3 text-left hover:bg-white/20 transition cursor-pointer"
              >
                <div className="w-12 h-12 bg-isro-blue-dark rounded-none flex items-center justify-center text-yellow-400 text-xl font-bold shrink-0">
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white uppercase">{t.hero.adityaBadge}</div>
                  <div className="text-slate-300 text-[10px]">{t.hero.adityaSub}</div>
                </div>
              </button>
            </div>

            {/* DUAL TYPOGRAPHY DISPLAY HEADER (ISRO SCIENCE) */}
            <div className="relative z-10 mt-8 sm:mt-12 mb-4">
              <h1 className="font-display font-black text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight sm:leading-none text-white tracking-tight uppercase break-words">
                {t.hero.displayTitle1}
              </h1>
              <h1 className="font-display font-black text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight sm:leading-none text-outline-white tracking-tight uppercase -mt-2 sm:-mt-6 md:-mt-8 lg:-mt-10 opacity-90 select-none break-words">
                {t.hero.displayTitle2}
              </h1>
            </div>

            {/* Video Box - Flow in place on mobile, absolute overlap on desktop to prevent layout clipping */}
            <div
              onClick={() => setLiveVideoModalOpen(true)}
              className="relative mt-8 md:mt-0 md:absolute md:-right-6 lg:-right-8 md:-bottom-16 lg:-bottom-20 w-full max-w-sm md:w-[380px] lg:w-[420px] mx-auto md:mx-0 z-30 group shadow-2xl cursor-pointer"
              title={t.hero.videoClickTitle}
            >
              <div className="bg-isro-cream p-2 sm:p-3 border border-isro-border rounded-none transform transition-transform duration-500 group-hover:-translate-y-2 relative">
                <div className="relative w-full aspect-video bg-isro-dark overflow-hidden rounded-none border border-isro-border">
                  <video
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://www.isro.gov.in/media_isro/image/poster_IMG/lvm3m6.jpg"
                  >
                    <source src="https://www.isro.gov.in/media_isro/video/LVM3M6_Lift_off_video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Overlay Button on Hover */}
                  <div className="absolute inset-0 bg-isro-blue/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-none bg-white/90 text-isro-blue flex items-center justify-center shadow-lg border border-white transform group-hover:scale-110 transition">
                      <i className="fa-solid fa-play text-lg ml-1"></i>
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-none uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                    <div className="w-1.5 h-1.5 rounded-none bg-white animate-pulse"></div> {t.hero.liveBroadcast}
                  </div>
                </div>

                <div className="mt-2.5 flex justify-between items-center px-1">
                  <div className="text-[10px] sm:text-[11px] font-mono text-isro-blue font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span>{t.hero.videoTitle}</span>
                    <i className="fa-solid fa-expand text-[9px] text-isro-steel group-hover:text-isro-blue transition"></i>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-isro-steel font-semibold tracking-wide">{t.hero.videoCenter}</div>
                </div>
              </div>
            </div>
          </header>

          {/* FLASH NEWS TICKER */}
          <div className="bg-isro-charcoal text-white text-xs py-3 px-4 sm:px-8 md:px-12 flex items-center justify-between gap-3 border-b border-isro-border">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0 overflow-hidden">
              <span className="bg-red-600 text-white font-black px-2 py-0.5 uppercase tracking-widest text-[9px] sm:text-[10px] shrink-0 rounded-none">
                {t.flash.label}
              </span>
              <button
                onClick={() => {
                  const item = flashList[flashIdx];
                  handleNavigate(item.target, { missionKey: item.missionKey, portalKey: item.portalKey });
                }}
                className="truncate text-yellow-300 hover:underline font-mono text-left cursor-pointer text-[11px] sm:text-xs"
              >
                {flashList[flashIdx].title}
              </button>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
              <button onClick={() => setFlashIdx((prev) => (prev - 1 + flashList.length) % flashList.length)} className="w-6 h-6 rounded-none bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 cursor-pointer" title="Previous News">
                <i className="fa-solid fa-chevron-left text-[10px]"></i>
              </button>
              <button onClick={() => setFlashIdx((prev) => (prev + 1) % flashList.length)} className="w-6 h-6 rounded-none bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 cursor-pointer" title="Next News">
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>

          {/* WHITE SECTION 1: OFFICIAL QUICK FEATURES ACTION GRID */}
          <section id="features" className="bg-white border-b border-isro-border p-6 sm:px-12 scroll-mt-12">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs font-mono font-bold text-isro-steel uppercase tracking-widest">
                {t.features.tag}
              </div>
              <span className="text-[11px] font-mono text-isro-steel">{t.features.sub}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Press Release */}
              <div
                onClick={() => handleNavigate('news')}
                className="border border-isro-border p-4 rounded-none bg-isro-cream hover:border-isro-blue transition swiss-card cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase group-hover:text-isro-orange transition">{t.features.press.title}</span>
                  <i className="fa-solid fa-newspaper text-isro-steel group-hover:text-isro-blue transition"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">{t.features.press.desc}</p>
                <div className="text-xs font-bold text-isro-blue group-hover:text-isro-orange flex items-center gap-1 uppercase">
                  <span>{t.features.press.btn}</span> <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </div>
              </div>

              {/* Careers */}
              <div
                onClick={() => handleNavigate(null, { modal: 'careers' })}
                className="border border-isro-border p-4 rounded-none bg-isro-cream hover:border-isro-blue transition swiss-card cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase group-hover:text-isro-orange transition">{t.features.careers.title}</span>
                  <i className="fa-solid fa-briefcase text-isro-steel group-hover:text-isro-blue transition"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">{t.features.careers.desc}</p>
                <div className="text-xs font-bold text-isro-blue group-hover:text-isro-orange flex items-center gap-1 uppercase">
                  <span>{t.features.careers.btn}</span> <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </div>
              </div>

              {/* Students */}
              <div
                onClick={() => handleNavigate('programmes')}
                className="border border-isro-border p-4 rounded-none bg-isro-cream hover:border-isro-blue transition swiss-card cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase group-hover:text-isro-orange transition">{t.features.students.title}</span>
                  <i className="fa-solid fa-graduation-cap text-isro-steel group-hover:text-isro-blue transition"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">{t.features.students.desc}</p>
                <div className="text-xs font-bold text-isro-blue group-hover:text-isro-orange flex items-center gap-1 uppercase">
                  <span>{t.features.students.btn}</span> <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </div>
              </div>

              {/* Tenders */}
              <div
                onClick={() => handleNavigate(null, { modal: 'tenders' })}
                className="border border-isro-border p-4 rounded-none bg-isro-cream hover:border-isro-blue transition swiss-card cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase group-hover:text-isro-orange transition">{t.features.tenders.title}</span>
                  <i className="fa-solid fa-file-contract text-isro-steel group-hover:text-isro-blue transition"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">{t.features.tenders.desc}</p>
                <div className="text-xs font-bold text-isro-blue group-hover:text-isro-orange flex items-center gap-1 uppercase">
                  <span>{t.features.tenders.btn}</span> <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </div>
              </div>
            </div>
          </section>

          {/* WHITE SECTION 2: LATEST NEWS FEED & MISSION SPOTLIGHT POSTER SLIDER */}
          <section id="news" className="p-6 sm:p-12 border-b border-isro-border bg-white scroll-mt-12">

            {/* Part 1: Official ISRO News Feed */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 pb-4 border-b border-isro-border">
              <div>
                <span className="text-xs font-mono text-isro-steel uppercase tracking-widest block">{t.news.tag}</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-isro-blue uppercase tracking-tight">
                  {t.news.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-green-700 bg-green-100 px-2.5 py-1 rounded-none font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                  {t.news.liveBadge}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-12">
              {newsFeed.map((item) => (
                <div key={item.id} className="border border-isro-border rounded-none overflow-hidden transition shadow-sm hover:border-isro-blue">
                  <button
                    onClick={() => setOpenNewsAccordion(openNewsAccordion === item.id ? null : item.id)}
                    className="w-full p-3.5 bg-isro-cream hover:bg-white text-left flex justify-between items-center font-display font-bold text-sm text-isro-blue cursor-pointer transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-none bg-isro-blue text-white uppercase shrink-0">{item.tag}</span>
                      <span className="text-xs sm:text-sm">{item.title}</span>
                    </div>
                    <i className={`fa-solid fa-chevron-${openNewsAccordion === item.id ? 'up' : 'down'} text-xs text-isro-steel shrink-0 ml-2`}></i>
                  </button>

                  {openNewsAccordion === item.id && (
                    <div className="p-4 bg-white border-t border-isro-border text-xs text-isro-charcoal leading-relaxed font-body animate-in fade-in duration-200">
                      <p className="mb-3">{item.desc}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => handleNavigate(item.section)}
                          className="text-xs font-bold text-isro-blue hover:text-isro-orange uppercase flex items-center gap-1 cursor-pointer"
                        >
                          <span>{t.news.exploreBtn}</span> <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                        </button>
                        <span className="text-slate-300">•</span>
                        <button
                          onClick={() => showToast(`Archived press release: ${item.title}`)}
                          className="text-xs font-mono text-isro-steel hover:text-isro-blue underline cursor-pointer"
                        >
                          {t.news.pdfBtn}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Part 2: Bottom Showcase: SPECIAL HIGHLIGHTS // MISSION SPOTLIGHT */}
            <div className="pt-8 border-t border-isro-border">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <span className="text-xs font-mono text-isro-steel uppercase tracking-widest block">{t.poster.tag}</span>
                  <h3 className="font-display font-black text-2xl text-isro-blue uppercase tracking-tight">
                    {t.poster.title}
                  </h3>
                </div>

                {/* Dot Slider Controls & Slide Arrows */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {posterSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePosterIdx(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activePosterIdx === idx ? 'bg-isro-blue w-8' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                        }`}
                        title={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-isro-steel font-bold pl-1">
                    0{activePosterIdx + 1} / 0{posterSlides.length}
                  </span>
                  <div className="flex gap-1.5 pl-2">
                    <button
                      onClick={() => setActivePosterIdx((prev) => (prev - 1 + posterSlides.length) % posterSlides.length)}
                      className="w-8 h-8 rounded-none border border-isro-border bg-white text-isro-blue hover:bg-isro-blue hover:text-white flex items-center justify-center transition cursor-pointer shadow-sm"
                      title="Previous Spotlight"
                    >
                      <i className="fa-solid fa-chevron-left text-xs"></i>
                    </button>
                    <button
                      onClick={() => setActivePosterIdx((prev) => (prev + 1) % posterSlides.length)}
                      className="w-8 h-8 rounded-none border border-isro-border bg-white text-isro-blue hover:bg-isro-blue hover:text-white flex items-center justify-center transition cursor-pointer shadow-sm"
                      title="Next Spotlight"
                    >
                      <i className="fa-solid fa-chevron-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* POSTER DISPLAY AREA - SEAMLESS WIREFRAME GRID WITH NO ROUNDED CORNERS */}
              <div className="relative bg-white py-6 sm:py-10 md:py-12 px-2 sm:px-6 md:px-8 overflow-hidden wireframe-grid min-h-[480px] flex flex-col justify-between transition-all duration-300 border border-isro-border rounded-none">
                <div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-isro-steel uppercase tracking-widest mb-6 sm:mb-8">
                    {posterSlides[activePosterIdx].tag}
                  </div>

                  {/* 4 Distinct Headline Lines */}
                  <div className="space-y-2 sm:space-y-3.5 mb-8 sm:mb-12 select-none">
                    {posterSlides[activePosterIdx].lines.map((line, lIdx) => (
                      <div key={lIdx} className="leading-none">
                        <span
                          className={`${
                            line.highlight
                              ? 'bg-isro-blue text-white px-2.5 sm:px-5 py-1 sm:py-2.5 rounded-none shadow-sm'
                              : 'text-isro-blue px-0 sm:px-1'
                          } font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-none inline-block break-words`}
                        >
                          {line.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row with Button and Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-isro-border/40">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <button
                      onClick={() => {
                        const current = posterSlides[activePosterIdx];
                        if (current.toast) showToast(current.toast);
                        handleNavigate(current.target, {
                          missionKey: current.missionKey,
                          portalKey: current.portalKey,
                          dirFilter: current.dirFilter
                        });
                      }}
                      className="bg-isro-blue hover:bg-isro-blue-dark text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-none shadow transition cursor-pointer flex items-center gap-2.5"
                    >
                      <span>{posterSlides[activePosterIdx].buttonText}</span>
                      <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </button>

                    <span className="text-xs sm:text-sm font-mono text-isro-steel font-semibold">
                      {posterSlides[activePosterIdx].meta}
                    </span>
                  </div>

                  {/* Quick Category Tab Selectors */}
                  <div className="hidden lg:flex items-center gap-1.5">
                    {posterSlides.map((slide, sIdx) => (
                      <button
                        key={slide.id}
                        onClick={() => setActivePosterIdx(sIdx)}
                        className={`text-[11px] font-mono px-3 py-1 rounded-none transition cursor-pointer ${
                          activePosterIdx === sIdx
                            ? 'bg-isro-blue text-white font-bold shadow-sm'
                            : 'bg-white text-isro-steel hover:text-isro-blue border border-isro-border'
                        }`}
                      >
                        {slide.tabLabel}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ISRO KEY SCIENCE MISSIONS */}
          <section id="missions" className="p-6 sm:p-12 border-b border-isro-border bg-white scroll-mt-12">
            <div className="text-xs font-mono font-bold text-isro-blue uppercase tracking-widest mb-6">
              {t.missions.tag}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.missions.cards.map((card) => {
                const isBlue = card.isInverted;
                return (
                  <div
                    key={card.key}
                    className={`${
                      isBlue
                        ? 'bg-isro-blue text-white shadow-md hover:bg-isro-blue-dark'
                        : 'border border-slate-200/80 bg-white shadow-sm hover:border-isro-blue text-isro-charcoal'
                    } p-6 rounded-none transition flex flex-col justify-between`}
                  >
                    <div>
                      <div className={`text-[10px] font-mono ${isBlue ? 'text-slate-300' : 'text-slate-400'} font-bold uppercase tracking-wider mb-2`}>
                        {card.category}
                      </div>
                      <h3 className={`font-display font-bold text-xl ${isBlue ? 'text-white' : 'text-isro-blue'} mb-3`}>
                        {card.title}
                      </h3>
                      <p className={`text-xs ${isBlue ? 'text-slate-200' : 'text-slate-600'} leading-relaxed mb-6 font-normal`}>
                        {card.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveMissionKey(card.key)}
                      className={`self-start text-xs font-bold font-mono ${isBlue ? 'text-yellow-300 hover:text-white' : 'text-isro-blue hover:text-isro-orange'} flex items-center gap-1.5 uppercase tracking-wider cursor-pointer`}
                    >
                      <span>{isBlue ? t.missions.telemetryBtn : t.missions.briefBtn}</span>
                      <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* WHITE SECTION 3: LAUNCH VEHICLES INTERACTIVE MODEL VIEWER */}
          <section id="launchers" className="p-6 sm:p-12 border-b border-isro-border bg-white scroll-mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <span className="text-xs font-mono text-isro-steel uppercase tracking-widest block">{t.launchers.tag}</span>
                <h3 className="font-display font-bold text-3xl text-isro-blue uppercase tracking-tight">
                  {t.launchers.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-isro-charcoal">
                {t.launchers.subtitle}
              </div>
            </div>

            {/* Vehicle Model Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(vehicleModelsData).map((key) => {
                const vehicle = vehicleModelsData[key];
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedModel(key)}
                    className={`px-4 py-2 rounded-none font-display font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 ${selectedModel === key ? 'bg-isro-blue text-white shadow-md' : 'bg-isro-cream text-isro-blue border border-isro-border hover:bg-slate-100'}`}
                  >
                    <i className="fa-solid fa-rocket text-[10px]"></i>
                    <span>{vehicle.code}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Vehicle Specs Showcase */}
            {vehicleModelsData[selectedModel] && (
              <div className="bg-isro-cream border border-isro-border rounded-none p-6 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold bg-isro-blue text-white px-2.5 py-0.5 rounded-none uppercase">
                      {vehicleModelsData[selectedModel].code}
                    </span>
                    <span className="text-xs font-mono text-green-700 font-bold">
                      {vehicleModelsData[selectedModel].status}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-2xl sm:text-3xl text-isro-blue uppercase mb-1">
                    {vehicleModelsData[selectedModel].name}
                  </h4>
                  <p className="text-xs font-mono text-isro-orange font-bold uppercase mb-4">
                    {vehicleModelsData[selectedModel].tagline}
                  </p>

                  <p className="text-xs text-isro-charcoal leading-relaxed mb-6 font-normal">
                    {vehicleModelsData[selectedModel].desc}
                  </p>

                  <div className="border-t border-isro-border pt-4">
                    <div className="text-[11px] font-mono font-bold text-isro-steel uppercase mb-2">
                      {t.launchers.milestonesLabel}
                    </div>
                    <ul className="space-y-1.5 text-xs text-isro-charcoal font-mono">
                      {vehicleModelsData[selectedModel].milestones.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-green-600 text-[10px] mt-0.5"></i>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specs Data Grid */}
                <div className="lg:col-span-5 bg-white border border-isro-border rounded-none p-4 space-y-3 font-mono text-xs shadow-inner">
                  <div className="border-b border-isro-border pb-2 flex justify-between items-center gap-2">
                    <span className="text-isro-steel text-[10px] sm:text-[11px]">{t.launchers.firstLaunchLabel}</span>
                    <span className="font-bold text-isro-blue text-right">{vehicleModelsData[selectedModel].firstLaunch}</span>
                  </div>
                  <div className="border-b border-isro-border pb-2 flex justify-between items-center gap-2">
                    <span className="text-isro-steel text-[10px] sm:text-[11px]">{t.launchers.heightLabel}</span>
                    <span className="font-bold text-isro-blue text-right">{vehicleModelsData[selectedModel].height}</span>
                  </div>
                  <div className="border-b border-isro-border pb-2 flex justify-between items-center gap-2">
                    <span className="text-isro-steel text-[10px] sm:text-[11px]">{t.launchers.massLabel}</span>
                    <span className="font-bold text-isro-blue text-right">{vehicleModelsData[selectedModel].liftOffMass}</span>
                  </div>
                  <div className="border-b border-isro-border pb-2 flex justify-between items-center gap-2">
                    <span className="text-isro-steel text-[10px] sm:text-[11px]">{t.launchers.payloadLabel}</span>
                    <span className="font-bold text-isro-blue text-right max-w-[180px] sm:max-w-[200px]">{vehicleModelsData[selectedModel].payload}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-isro-steel text-[10px] sm:text-[11px] block mb-1">{t.launchers.stagingLabel}</span>
                    <span className="font-bold text-isro-blue text-[11px]">{vehicleModelsData[selectedModel].stages}</span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-isro-border flex justify-end">
                    <button
                      onClick={() => handleNavigate('missions')}
                      className="text-xs font-bold text-isro-blue hover:text-isro-orange uppercase flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.launchers.viewMissionsBtn}</span>
                      <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* BLUE SECTION 2: ISRO DIGITAL PORTALS */}
          <section id="portals" className="p-6 sm:p-10 border-b border-isro-blue-dark bg-isro-blue text-white scroll-mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <span className="text-[11px] font-mono text-isro-steel uppercase tracking-widest block">{t.portals.tag}</span>
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">{t.portals.title}</h3>
              </div>
              <div className="text-[11px] font-mono text-slate-300">
                {t.portals.subtitle}
              </div>
            </div>

            {/* Compact Grid for Digital Portals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {portalsList.map((portal) => (
                <div
                  key={portal.key}
                  onClick={() => setActivePortalKey(portal.key)}
                  className="bg-white/10 border border-white/15 p-3 rounded-none text-center hover:bg-white hover:text-isro-blue transition cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <i className={`${portal.icon} text-xl mb-1.5 text-isro-steel group-hover:text-isro-blue transition`}></i>
                  <h4 className="font-display font-bold text-xs uppercase tracking-tight leading-tight">{portal.title}</h4>
                  <p className="text-[10px] opacity-75 mt-0.5 font-mono truncate">{portal.category}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WHITE SECTION 4: PROGRAMMES & OUTREACH - STRICTLY ISRO BLUE & WHITE */}
          <section id="programmes" className="p-6 sm:p-12 border-b border-isro-border bg-white scroll-mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <span className="text-xs font-mono text-isro-steel uppercase tracking-widest block">{t.programmes.tag}</span>
                <h3 className="font-display font-bold text-3xl text-isro-blue uppercase tracking-tight">
                  {t.programmes.title}
                </h3>
              </div>
              <button
                onClick={() => handleNavigate(null, { modal: 'expert' })}
                className="text-xs font-mono font-bold text-isro-blue hover:text-isro-blue-dark uppercase flex items-center gap-1 cursor-pointer"
              >
                <span>{t.programmes.askExpertBtn}</span>
                <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmesList.map((prog) => (
                <div key={prog.id} className="swiss-card border border-isro-border rounded-none p-5 bg-white hover:bg-isro-cream flex flex-col justify-between shadow-sm hover:border-isro-blue transition">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-mono font-bold bg-isro-blue text-white px-2 py-0.5 rounded-none uppercase">
                        {prog.code}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">{prog.badge}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-isro-blue uppercase mb-1">{prog.title}</h4>
                    <p className="text-xs font-mono text-isro-steel font-bold uppercase mb-3">{prog.tagline}</p>
                    <p className="text-xs text-isro-charcoal leading-relaxed mb-4">{prog.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-isro-border flex justify-between items-center">
                    <button
                      onClick={() => showToast(`Opening application details for ${prog.title}`)}
                      className="text-xs font-bold text-isro-blue hover:text-isro-blue-dark uppercase flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.programmes.regBtn}</span>
                      <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BLUE SECTION 3: ISRO CENTRES & RESEARCH INSTITUTES */}
          <section id="centres" className="p-6 sm:p-10 border-b border-isro-blue-dark bg-isro-blue text-white scroll-mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <span className="text-[11px] font-mono text-isro-steel uppercase tracking-widest block">{t.centres.tag}</span>
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                  {t.centres.title}
                </h3>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setDirectoryFilter('all')}
                  className={`px-3 py-1 rounded-none text-[11px] font-bold uppercase transition cursor-pointer ${directoryFilter === 'all' ? 'bg-white text-isro-blue shadow' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {t.centres.all} ({directoryItems.length})
                </button>
                <button
                  onClick={() => setDirectoryFilter('centres')}
                  className={`px-3 py-1 rounded-none text-[11px] font-bold uppercase transition cursor-pointer ${directoryFilter === 'centres' ? 'bg-white text-isro-blue shadow' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {t.centres.isroCentres} (14)
                </button>
                <button
                  onClick={() => setDirectoryFilter('autonomous')}
                  className={`px-3 py-1 rounded-none text-[11px] font-bold uppercase transition cursor-pointer ${directoryFilter === 'autonomous' ? 'bg-white text-isro-blue shadow' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {t.centres.autonomous} (4)
                </button>
                <button
                  onClick={() => setDirectoryFilter('enterprises')}
                  className={`px-3 py-1 rounded-none text-[11px] font-bold uppercase transition cursor-pointer ${directoryFilter === 'enterprises' ? 'bg-white text-isro-blue shadow' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {t.centres.enterprises} (2)
                </button>
              </div>
            </div>

            {/* Compact Grid with Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {filteredDirectory.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 border border-white/15 p-3 rounded-none text-center hover:bg-white hover:text-isro-blue transition cursor-pointer group shadow-sm hover:shadow-md flex flex-col items-center justify-center min-h-[92px]"
                  title={`${item.name} (${item.location}) - Official Website`}
                >
                  <i className={`${item.icon} text-xl mb-1.5 text-isro-steel group-hover:text-isro-blue transition block`}></i>
                  <h4 className="font-display font-bold text-xs uppercase tracking-tight leading-tight group-hover:text-isro-blue">{item.code}</h4>
                  <p className="text-[10px] opacity-75 mt-0.5 font-mono truncate w-full group-hover:text-isro-blue/80">{item.location}</p>
                </a>
              ))}
            </div>
          </section>

          {/* FOOTER SECTION WITH OFFICIAL ADDRESS & POLICIES */}
          <footer id="about" className="bg-isro-charcoal text-white p-6 sm:p-12 border-t border-isro-border relative z-10 scroll-mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">

              {/* Col 1: Headquarters & Contact */}
              <div id="contact" className="scroll-mt-12">
                <div className="flex items-center space-x-2 mb-3">
                  <img
                    src="https://www.isro.gov.in/media_isro/image/favicon.png.webp"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://www.isro.gov.in/media_isro/image/isro_logo.png";
                    }}
                    alt="ISRO Emblem Logo"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="bg-white text-isro-blue font-display font-black text-xl px-2.5 py-0.5 rounded-none shadow-sm">{t.footer.hqTitle}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3 whitespace-pre-line">
                  {t.footer.hqAddress}
                </p>
                <div className="text-[11px] font-mono text-isro-steel space-y-1">
                  <div>{t.footer.phone}</div>
                  <div>{t.footer.email}</div>
                </div>
              </div>

              {/* Col 2: Quick In-Site Redirections */}
              <div className="text-xs space-y-2 font-mono">
                <h4 className="font-display font-bold text-sm text-isro-steel uppercase mb-3 font-body">{t.footer.quickLinks}</h4>
                <div><button onClick={() => handleNavigate('missions')} className="hover:text-isro-steel text-left cursor-pointer">{t.missions.tag.replace('// ', '')}</button></div>
                <div><button onClick={() => handleNavigate('launchers')} className="hover:text-isro-steel text-left cursor-pointer">{t.launchers.title}</button></div>
                <div><button onClick={() => handleNavigate('portals')} className="hover:text-isro-steel text-left cursor-pointer">{t.portals.title}</button></div>
                <div><button onClick={() => handleNavigate('programmes')} className="hover:text-isro-steel text-left cursor-pointer">{t.programmes.title}</button></div>
                <div><button onClick={() => handleNavigate('centres')} className="hover:text-isro-steel text-left cursor-pointer">{t.centres.title}</button></div>
                <div><button onClick={() => handleNavigate('features', { modal: 'careers' })} className="hover:text-isro-steel text-left cursor-pointer">{t.topBar.careers}</button></div>
              </div>

              {/* Col 3: Website Policies & RTI */}
              <div className="text-xs space-y-2 font-mono">
                <h4 className="font-display font-bold text-sm text-isro-steel uppercase mb-3 font-body">{t.footer.policies}</h4>
                <div><button onClick={() => showToast("Indian Space Policy: Approved by Cabinet.")} className="hover:text-isro-steel cursor-pointer text-left">India Space Policy</button></div>
                <div><button onClick={() => showToast("Website Security: ISO 27001 & STQC compliant.")} className="hover:text-isro-steel cursor-pointer text-left">Website Security Policy</button></div>
                <div><button onClick={() => showToast("Copyright: Images and data are public domain with attribution.")} className="hover:text-isro-steel cursor-pointer text-left">Copyright Policy</button></div>
                <div><button onClick={() => handleNavigate(null, { modal: 'rti' })} className="hover:text-isro-steel cursor-pointer text-left">{t.topBar.rti}</button></div>
                <div><button onClick={() => handleNavigate(null, { modal: 'feedback' })} className="hover:text-isro-steel cursor-pointer text-left">{t.quickMenu.feedback}</button></div>
              </div>

              {/* Col 4: Connect & Official Seals */}
              <div className="text-xs">
                <h4 className="font-display font-bold text-sm text-isro-steel uppercase mb-3">{t.footer.connect}</h4>
                <div className="flex space-x-3 text-lg mb-4">
                  <a
                    href="https://twitter.com/isro"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm"
                    title="X (Twitter)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/ISRO" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.youtube.com/channel/UCw5hEVOTfz_AfzsNFWyNlNg" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                  <a href="https://www.instagram.com/isro.dos" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="bg-white/5 border border-white/10 p-2 rounded-none text-[10px] text-slate-300 font-mono space-y-1">
                  <div>{t.footer.dept}</div>
                  <div className="text-yellow-400">{t.footer.chairman}</div>
                  <div>{t.footer.stqc}</div>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 font-mono gap-2">
              <div>{t.footer.copyright}</div>
              <div>{t.footer.lastUpdated}</div>
            </div>
          </footer>

        </div>
      </div>

      {/* MODAL: MISSION DETAILS */}
      {activeMissionKey && missionData[activeMissionKey] && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-2xl w-full rounded-none shadow-2xl overflow-hidden p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setActiveMissionKey(null)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>

            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{missionData[activeMissionKey].category}</div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-isro-blue uppercase mb-3">{missionData[activeMissionKey].title}</h3>

            <div className="bg-white border border-isro-border p-4 rounded-none mb-4">
              <p className="text-xs text-isro-charcoal leading-relaxed">{missionData[activeMissionKey].desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono mb-6">
              <div className="bg-slate-100 p-2 rounded-none border border-slate-200">
                <span className="text-isro-steel block text-[10px]">{t.modals.mission.launchVehicle}</span>
                <span className="font-bold text-isro-blue">{missionData[activeMissionKey].vehicle}</span>
              </div>
              <div className="bg-slate-100 p-2 rounded-none border border-slate-200">
                <span className="text-isro-steel block text-[10px]">{t.modals.mission.orbit}</span>
                <span className="font-bold text-isro-blue">{missionData[activeMissionKey].orbit}</span>
              </div>
              <div className="bg-slate-100 p-2 rounded-none border border-slate-200">
                <span className="text-isro-steel block text-[10px]">{t.modals.mission.status}</span>
                <span className="font-bold text-green-700">{missionData[activeMissionKey].status}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <button
                onClick={() => {
                  setActiveMissionKey(null);
                  handleNavigate('launchers');
                }}
                className="px-4 py-2 border border-isro-blue text-isro-blue text-xs font-bold uppercase tracking-wider rounded-none hover:bg-isro-blue/10 cursor-pointer"
              >
                {t.modals.mission.inspectRocket}
              </button>
              <button onClick={() => setActiveMissionKey(null)} className="bg-isro-blue text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-none hover:bg-isro-blue-dark cursor-pointer">
                {t.modals.mission.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PORTAL QUICK VIEW */}
      {activePortalKey && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-lg w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setActivePortalKey(null)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.portal.label}</div>
            {portalsList.find(p => p.key === activePortalKey) && (
              <>
                <h3 className="font-display font-bold text-2xl text-isro-blue uppercase mb-2">
                  {portalsList.find(p => p.key === activePortalKey).title}
                </h3>
                <p className="text-xs text-isro-charcoal leading-relaxed mb-6">
                  {portalsList.find(p => p.key === activePortalKey).desc}
                </p>
                <div className="flex justify-end space-x-3">
                  <button onClick={() => setActivePortalKey(null)} className="px-4 py-2 rounded-none text-xs font-bold uppercase border border-isro-border cursor-pointer">{t.modals.portal.cancel}</button>
                  <button
                    onClick={() => {
                      window.open(portalsList.find(p => p.key === activePortalKey).url, '_blank');
                      setActivePortalKey(null);
                    }}
                    className="bg-isro-blue text-white px-5 py-2 rounded-none text-xs font-bold uppercase cursor-pointer hover:bg-isro-blue-dark"
                  >
                    {t.modals.portal.launch}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MODAL: CAREERS RECRUITMENT NOTICES */}
      {careersModalOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-xl w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setCareersModalOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.careers.label}</div>
            <h3 className="font-display font-black text-2xl text-isro-blue uppercase mb-3">{t.modals.careers.title}</h3>

            <div className="space-y-3 max-h-72 overflow-y-auto mb-6">
              <div className="p-3 bg-white border border-isro-border rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-isro-blue uppercase">{t.modals.careers.item1Title}</span>
                  <span className="text-[10px] bg-green-100 text-green-800 font-mono font-bold px-2 py-0.5 rounded-none">{t.modals.careers.item1Badge}</span>
                </div>
                <p className="text-[11px] text-isro-charcoal">{t.modals.careers.item1Desc}</p>
              </div>

              <div className="p-3 bg-white border border-isro-border rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-isro-blue uppercase">{t.modals.careers.item2Title}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 font-mono font-bold px-2 py-0.5 rounded-none">{t.modals.careers.item2Badge}</span>
                </div>
                <p className="text-[11px] text-isro-charcoal">{t.modals.careers.item2Desc}</p>
              </div>

              <div className="p-3 bg-white border border-isro-border rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-isro-blue uppercase">{t.modals.careers.item3Title}</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-mono font-bold px-2 py-0.5 rounded-none">{t.modals.careers.item3Badge}</span>
                </div>
                <p className="text-[11px] text-isro-charcoal">{t.modals.careers.item3Desc}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button onClick={() => setCareersModalOpen(false)} className="px-4 py-2 rounded-none text-xs font-bold uppercase border border-isro-border cursor-pointer">{t.modals.careers.close}</button>
              <button
                onClick={() => {
                  window.open('https://www.isro.gov.in/Careers.html', '_blank');
                  setCareersModalOpen(false);
                }}
                className="bg-isro-blue text-white px-5 py-2 rounded-none text-xs font-bold uppercase cursor-pointer hover:bg-isro-blue-dark"
              >
                {t.modals.careers.officialBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: TENDERS & PROCUREMENT */}
      {tendersModalOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-xl w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setTendersModalOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.tenders.label}</div>
            <h3 className="font-display font-black text-2xl text-isro-blue uppercase mb-3">{t.modals.tenders.title}</h3>

            <div className="space-y-3 max-h-72 overflow-y-auto mb-6">
              <div className="p-3 bg-white border border-isro-border rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-isro-blue uppercase">{t.modals.tenders.item1Title}</span>
                  <span className="text-[10px] font-mono text-slate-500">{t.modals.tenders.item1Loc}</span>
                </div>
                <p className="text-[11px] text-isro-charcoal">{t.modals.tenders.item1Desc}</p>
              </div>

              <div className="p-3 bg-white border border-isro-border rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-isro-blue uppercase">{t.modals.tenders.item2Title}</span>
                  <span className="text-[10px] font-mono text-slate-500">{t.modals.tenders.item2Loc}</span>
                </div>
                <p className="text-[11px] text-isro-charcoal">{t.modals.tenders.item2Desc}</p>
              </div>

              <div className="p-3 bg-white border border-isro-border rounded-none">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs text-isro-blue uppercase">{t.modals.tenders.item3Title}</span>
                  <span className="text-[10px] font-mono text-slate-500">{t.modals.tenders.item3Loc}</span>
                </div>
                <p className="text-[11px] text-isro-charcoal">{t.modals.tenders.item3Desc}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button onClick={() => setTendersModalOpen(false)} className="px-4 py-2 rounded-none text-xs font-bold uppercase border border-isro-border cursor-pointer">{t.modals.tenders.close}</button>
              <button
                onClick={() => {
                  window.open('https://eproc.vssc.gov.in', '_blank');
                  setTendersModalOpen(false);
                }}
                className="bg-isro-blue text-white px-5 py-2 rounded-none text-xs font-bold uppercase cursor-pointer hover:bg-isro-blue-dark"
              >
                {t.modals.tenders.eprocBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: RIGHT TO INFORMATION (RTI) */}
      {rtiModalOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-lg w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setRtiModalOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.rti.label}</div>
            <h3 className="font-display font-black text-2xl text-isro-blue uppercase mb-3">{t.modals.rti.title}</h3>

            <div className="space-y-3 mb-6 text-xs text-isro-charcoal leading-relaxed font-mono">
              <div className="p-3 bg-white border border-isro-border rounded-none">
                <span className="font-bold text-isro-blue block mb-1">{t.modals.rti.cpioTitle}</span>
                <p>{t.modals.rti.cpioAddr}</p>
                <p className="text-[11px] text-slate-500 mt-1">{t.modals.rti.cpioContact}</p>
              </div>
              <div className="p-3 bg-white border border-isro-border rounded-none">
                <span className="font-bold text-isro-blue block mb-1">{t.modals.rti.appellateTitle}</span>
                <p>{t.modals.rti.appellateDesc}</p>
              </div>
              <p className="text-[11px]">
                {t.modals.rti.portalInfo} <strong className="text-isro-blue">rtionline.gov.in</strong> {t.modals.rti.selectDos}
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <button onClick={() => setRtiModalOpen(false)} className="px-4 py-2 rounded-none text-xs font-bold uppercase border border-isro-border cursor-pointer">{t.modals.rti.close}</button>
              <button
                onClick={() => {
                  window.open('https://rtionline.gov.in', '_blank');
                  setRtiModalOpen(false);
                }}
                className="bg-isro-blue text-white px-5 py-2 rounded-none text-xs font-bold uppercase cursor-pointer hover:bg-isro-blue-dark"
              >
                {t.modals.rti.portalBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: FEEDBACK FORM */}
      {feedbackModalOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-lg w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setFeedbackModalOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.feedback.label}</div>
            <h3 className="font-display font-black text-2xl text-isro-blue uppercase mb-3">{t.modals.feedback.title}</h3>

            <div className="space-y-3 mb-6">
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.feedback.name}</label>
                <input type="text" placeholder={t.modals.feedback.namePlaceholder} className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.feedback.email}</label>
                <input type="email" placeholder={t.modals.feedback.emailPlaceholder} className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.feedback.category}</label>
                <select className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white">
                  <option>{t.modals.feedback.cat1}</option>
                  <option>{t.modals.feedback.cat2}</option>
                  <option>{t.modals.feedback.cat3}</option>
                  <option>{t.modals.feedback.cat4}</option>
                  <option>{t.modals.feedback.cat5}</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.feedback.message}</label>
                <textarea rows={3} placeholder={t.modals.feedback.msgPlaceholder} className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white" />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button onClick={() => setFeedbackModalOpen(false)} className="px-4 py-2 rounded-none text-xs font-bold uppercase border border-isro-border cursor-pointer">{t.modals.feedback.cancel}</button>
              <button
                onClick={() => {
                  setFeedbackModalOpen(false);
                  showToast(t.modals.feedback.successToast);
                }}
                className="bg-isro-blue text-white px-5 py-2 rounded-none text-xs font-bold uppercase cursor-pointer hover:bg-isro-blue-dark"
              >
                {t.modals.feedback.submit}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ASK AN EXPERT */}
      {askExpertModalOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-lg w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setAskExpertModalOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.expert.label}</div>
            <h3 className="font-display font-black text-2xl text-isro-blue uppercase mb-3">{t.modals.expert.title}</h3>

            <p className="text-xs text-isro-charcoal leading-relaxed mb-4">
              {t.modals.expert.desc}
            </p>

            <div className="space-y-3 mb-6">
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.expert.affiliation}</label>
                <input type="text" placeholder={t.modals.expert.affilPlaceholder} className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.expert.domain}</label>
                <select className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white">
                  <option>{t.modals.expert.dom1}</option>
                  <option>{t.modals.expert.dom2}</option>
                  <option>{t.modals.expert.dom3}</option>
                  <option>{t.modals.expert.dom4}</option>
                  <option>{t.modals.expert.dom5}</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">{t.modals.expert.question}</label>
                <textarea rows={3} placeholder={t.modals.expert.qPlaceholder} className="w-full px-3 py-2 text-xs border border-isro-border rounded-none bg-white" />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button onClick={() => setAskExpertModalOpen(false)} className="px-4 py-2 rounded-none text-xs font-bold uppercase border border-isro-border cursor-pointer">{t.modals.expert.cancel}</button>
              <button
                onClick={() => {
                  setAskExpertModalOpen(false);
                  showToast(t.modals.expert.successToast);
                }}
                className="bg-isro-blue text-white px-5 py-2 rounded-none text-xs font-bold uppercase cursor-pointer hover:bg-isro-blue-dark"
              >
                {t.modals.expert.submit}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: LIVE SEARCH */}
      {searchOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-start justify-center pt-20 p-4">
          <div className="bg-isro-cream border border-isro-border max-w-xl w-full rounded-none shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setSearchOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold cursor-pointer">×</button>
            <h3 className="font-display font-bold text-lg text-isro-blue uppercase mb-3">{t.modals.search.title}</h3>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.modals.search.placeholder}
              className="w-full px-4 py-3 text-sm border border-isro-border rounded-none focus:outline-none focus:border-isro-blue mb-4 bg-white"
              autoFocus
            />

            <div className="max-h-60 overflow-y-auto space-y-2 text-xs">
              {!searchQuery ? (
                <>
                  <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('missions', { missionKey: 'ch3' }); }}>
                    <span className="font-bold text-isro-blue">{missionData.ch3.title}</span>
                    <p className="text-slate-500 text-[11px]">{missionData.ch3.desc.slice(0, 80)}...</p>
                  </div>
                  <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('launchers', { model: 'lvm3' }); }}>
                    <span className="font-bold text-isro-blue">{vehicleModelsData.lvm3.name}</span>
                    <p className="text-slate-500 text-[11px]">{vehicleModelsData.lvm3.tagline}</p>
                  </div>
                  <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('portals', { portalKey: 'bhuvan' }); }}>
                    <span className="font-bold text-isro-blue">{portalsList[0].title}</span>
                    <p className="text-slate-500 text-[11px]">{portalsList[0].desc.slice(0, 80)}...</p>
                  </div>
                  <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('programmes'); }}>
                    <span className="font-bold text-isro-blue">{programmesList[0].title}</span>
                    <p className="text-slate-500 text-[11px]">{programmesList[0].tagline}</p>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  {searchQuery.toLowerCase().includes('launch') || searchQuery.toLowerCase().includes('rocket') || searchQuery.toLowerCase().includes('pslv') || searchQuery.toLowerCase().includes('lvm') || searchQuery.toLowerCase().includes('प्रक्षेपक') || searchQuery.toLowerCase().includes('रॉकेट') ? (
                    <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('launchers'); }}>
                      <span className="font-bold text-isro-blue">{t.launchers.title}</span>
                      <p className="text-slate-500 text-[11px]">{t.launchers.subtitle}</p>
                    </div>
                  ) : null}
                  {searchQuery.toLowerCase().includes('port') || searchQuery.toLowerCase().includes('bhuvan') || searchQuery.toLowerCase().includes('data') || searchQuery.toLowerCase().includes('पोर्टल') || searchQuery.toLowerCase().includes('भुवन') ? (
                    <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('portals'); }}>
                      <span className="font-bold text-isro-blue">{t.portals.title}</span>
                      <p className="text-slate-500 text-[11px]">{t.portals.subtitle}</p>
                    </div>
                  ) : null}
                  {searchQuery.toLowerCase().includes('career') || searchQuery.toLowerCase().includes('job') || searchQuery.toLowerCase().includes('recruit') || searchQuery.toLowerCase().includes('करियर') || searchQuery.toLowerCase().includes('भर्ती') ? (
                    <div className="p-2.5 bg-white border border-isro-border rounded-none hover:bg-slate-50 cursor-pointer" onClick={() => { setSearchOpen(false); handleNavigate('features', { modal: 'careers' }); }}>
                      <span className="font-bold text-isro-blue">{t.modals.careers.title}</span>
                      <p className="text-slate-500 text-[11px]">{t.modals.careers.label}</p>
                    </div>
                  ) : null}
                  <div className="p-3 bg-white border border-isro-border rounded-none">
                    <span className="font-bold text-isro-blue">{t.modals.search.resultsFor} &quot;{searchQuery}&quot;:</span>
                    <p className="text-slate-600 text-xs mt-1">{t.modals.search.directing}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: LIVE BROADCAST VIDEO PLAYER */}
      {liveVideoModalOpen && (
        <div
          className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4 sm:p-6 bg-isro-dark/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLiveVideoModalOpen(false);
          }}
        >
          <div className="bg-isro-cream p-3 sm:p-4 border-2 border-isro-border rounded-none shadow-2xl w-full max-w-2xl mx-auto relative overflow-hidden flex flex-col gap-3">
            {/* Header Info Bar */}
            <div className="flex justify-between items-center border-b border-isro-border pb-2.5">
              <div className="flex items-center space-x-2.5">
                <div className="bg-red-600 text-white text-[9px] sm:text-[10px] font-bold font-mono px-2 py-0.5 rounded-none uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-none bg-white animate-pulse"></div> {t.modals.video.liveBadge}
                </div>
                <div>
                  <h3 className="font-display font-black text-base sm:text-xl text-isro-blue uppercase leading-none">
                    {t.modals.video.title}
                  </h3>
                  <p className="text-[10px] font-mono text-isro-steel font-semibold uppercase mt-0.5">
                    {t.modals.video.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setLiveVideoModalOpen(false)}
                className="w-7 h-7 rounded-none bg-white border border-isro-border text-isro-charcoal hover:text-red-600 hover:border-red-400 flex items-center justify-center text-base font-bold transition shadow-sm shrink-0 cursor-pointer"
                title="Close Broadcast"
              >
                ×
              </button>
            </div>

            {/* Video Player Window Frame */}
            <div className="relative w-full aspect-video bg-isro-dark rounded-none overflow-hidden border border-isro-border shadow-inner">
              <video
                className="w-full h-full object-cover bg-black"
                controls
                autoPlay
                playsInline
                poster="https://www.isro.gov.in/media_isro/image/poster_IMG/lvm3m6.jpg"
              >
                <source src="https://www.isro.gov.in/media_isro/video/LVM3M6_Lift_off_video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Telemetry & Metadata Footer Bar */}
            <div className="bg-white border border-isro-border rounded-none p-2.5 flex flex-wrap justify-between items-center gap-2 text-[11px] font-mono text-isro-charcoal">
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <span className="text-isro-steel block text-[9px]">{t.modals.video.missionLabel}</span>
                  <span className="font-bold text-isro-blue">{t.modals.video.missionVal}</span>
                </div>
                <div className="hidden sm:block border-r border-slate-200 h-5"></div>
                <div>
                  <span className="text-isro-steel block text-[9px]">{t.modals.video.payloadLabel}</span>
                  <span className="font-bold text-isro-blue">{t.modals.video.payloadVal}</span>
                </div>
                <div className="hidden sm:block border-r border-slate-200 h-5"></div>
                <div>
                  <span className="text-isro-steel block text-[9px]">{t.modals.video.statusLabel}</span>
                  <span className="font-bold text-green-700 uppercase">{t.modals.video.statusVal}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setLiveVideoModalOpen(false);
                    handleNavigate('launchers', { model: 'lvm3' });
                  }}
                  className="bg-isro-blue text-white hover:bg-isro-blue-dark px-2.5 py-1 rounded-none text-[10px] font-bold uppercase tracking-wider transition flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.modals.video.specsBtn}</span>
                  <i className="fa-solid fa-rocket text-[8px]"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
