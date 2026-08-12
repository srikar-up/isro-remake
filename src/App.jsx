import React, { useState, useEffect } from 'react';

export default function App() {
  // Accessibility & State Hooks
  const [lang, setLang] = useState('en');
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [readingRuler, setReadingRuler] = useState(false);
  const [rulerTop, setRulerTop] = useState(100);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  // Floating Bottom-Right Quick Action Menu Toggle
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  // Navigation Dropdown & Active Filter States
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [directoryFilter, setDirectoryFilter] = useState('all'); // 'all', 'centres', 'autonomous', 'enterprises'
  const [selectedModel, setSelectedModel] = useState('pslv');

  // Modals & Interactive Popovers
  const [activeMissionKey, setActiveMissionKey] = useState(null);
  const [activePortalKey, setActivePortalKey] = useState(null);
  const [liveVideoModalOpen, setLiveVideoModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openNewsAccordion, setOpenNewsAccordion] = useState(0);

  // Flash News List
  const flashList = [
    { title: "NISAR S-Band SAR Data Products Release Available on Bhoonidhi", link: "https://www.isro.gov.in/NISARS_Band_SAR_Data_Products_Release.html" },
    { title: "Bharatiya Antariksh Hackathon (BAH) 2026 Shortlisted Teams for Grand Finale at NRSC Hyderabad", link: "https://www.isro.gov.in/media_isro/pdf/BAH_2026_Shortlisted_Teams_16072026_Publication.pdf" },
    { title: "Aditya-L1 SUIT Instrument Observes Solar Flare Coronal Ejection", link: "https://www.isro.gov.in/Iron_Fluorescence_on_Sun_Aditya-L1_Observation.html" },
    { title: "Gaganyaan Integrated Main Parachute Air Drop Test (IMAT) Successfully Qualified", link: "https://www.isro.gov.in/Integrated_Main_Parachute_Air_Drop_Test.html" },
    { title: "YUVIKA 2026 Second Selection List Announced for Young Scientists", link: "https://www.isro.gov.in/media_isro/pdf/YUVIKA_2026_2nd_Selection_List.pdf" }
  ];
  const [flashIdx, setFlashIdx] = useState(0);

  // Latest Official News Feed
  const newsFeed = [
    {
      id: 0,
      title: "ISRO Conducts START Capacity Building Workshop-2026 at IIRS, Dehradun",
      desc: "Space Science and Technology Awareness Training (START) capacity building workshop brought together over 500 undergraduate and postgraduate students for deep-space science mentorship.",
      tag: "TRAINING & OUTREACH"
    },
    {
      id: 1,
      title: "NISAR S-Band SAR Data Products Release for Global Research",
      desc: "Dual-frequency Synthetic Aperture Radar data products released on Bhoonidhi portal for ecosystem structure, ice sheet dynamics, and land deformation mapping.",
      tag: "EARTH OBSERVATION"
    },
    {
      id: 2,
      title: "Bharatiya Antariksh Hackathon (BAH) – 2026 Grand Finale at NRSC Hyderabad",
      desc: "30 shortlisted student teams prepare for 36-hour continuous hackathon developing geospatial AI models and satellite imagery analysis applications.",
      tag: "HACKATHON 2026"
    },
    {
      id: 3,
      title: "First National Workshop on Microgravity Research for Space Biology",
      desc: "ISRO convenes national scientists to formulate payload experiments for future Bharatiya Antariksh Station (BAS) and Gaganyaan microgravity modules.",
      tag: "MICROGRAVITY"
    },
    {
      id: 4,
      title: "Aditya-L1 Mission: Announcement of Opportunity (AO) for 3rd Cycle Observations",
      desc: "Soliciting observational proposals from international astronomy community for VELC, SUIT, and ASPEX payloads on Sun-Earth L1 halo orbit.",
      tag: "SOLAR PHYSICS"
    },
    {
      id: 5,
      title: "ISRO Conducts Successful Hot Test of Semicryogenic Engine Power Head Article",
      desc: "Achieved higher thrust level qualification test at IPRC Mahendragiri for upcoming Next Generation Launch Vehicle (NGLV) propulsion systems.",
      tag: "PROPULSION"
    }
  ];

  // ISRO Digital Portals (High-Density Compact Grid)
  const portalsList = [
    {
      key: "bhuvan",
      title: "BHUVAN",
      category: "Indian Geo-Platform",
      icon: "fa-solid fa-earth-asia",
      desc: "Geospatial platform providing 2D/3D satellite imagery, thematic mapping, and disaster management services.",
      url: "https://bhuvan.nrsc.gov.in"
    },
    {
      key: "bhoonidhi",
      title: "BHOONIDHI",
      category: "EO Data Hub",
      icon: "fa-solid fa-database",
      desc: "Open access portal for browsing and downloading IRS and NISAR Earth Observation satellite datasets.",
      url: "https://bhoonidhi.nrsc.gov.in"
    },
    {
      key: "vedas",
      title: "VEDAS",
      category: "EO Visualisation",
      icon: "fa-solid fa-layer-group",
      desc: "Visualisation of Earth Observation Data and Archival System for climate and land research.",
      url: "https://vedas.sac.gov.in"
    },
    {
      key: "mosdac",
      title: "MOSDAC",
      category: "Meteorology Data",
      icon: "fa-solid fa-cloud-sun-rain",
      desc: "Meteorological & Oceanographic Satellite Data Archival Centre hosting INSAT & OceanSat data.",
      url: "https://www.mosdac.gov.in"
    },
    {
      key: "issdc",
      title: "ISSDC",
      category: "Science Data Center",
      icon: "fa-solid fa-server",
      desc: "Indian Space Science Data Center archiving raw and processed payload telemetry from planetary missions.",
      url: "https://www.issdc.gov.in"
    },
    {
      key: "spark",
      title: "SPARK",
      category: "Virtual Space Museum",
      icon: "fa-solid fa-vr-cardboard",
      desc: "ISRO's interactive 3D virtual museum showcasing launch vehicles, satellites, and space history.",
      url: "https://www.isro.gov.in/Virtual_Space_Museum.html"
    },
    {
      key: "stem",
      title: "ISRO STEM",
      category: "Student Outreach",
      icon: "fa-solid fa-graduation-cap",
      desc: "Space science educational initiatives, online courses, and YUVIKA young scientist registrations.",
      url: "https://www.isro.gov.in/Students.html"
    },
    {
      key: "igrasp",
      title: "I-GRASP",
      category: "Research Grants",
      icon: "fa-solid fa-hand-holding-hand",
      desc: "Grant-in-Aid Scheme for supporting space technology research projects across Indian universities.",
      url: "https://www.isro.gov.in"
    },
    {
      key: "ndem",
      title: "NDEM",
      category: "Disaster Management",
      icon: "fa-solid fa-shield-halved",
      desc: "National Database for Emergency Management enabling rapid decision support during flood & weather disasters.",
      url: "https://ndem.nrsc.gov.in"
    }
  ];

  // Directory Items Strictly for ISRO Centres, Autonomous Bodies, and IN-SPACe & NSIL
  const directoryItems = [
    // ISRO Centres & Units (14 items)
    { code: "ISRO HQ", location: "BENGALURU", name: "ISRO Headquarters", cat: "centres", link: "https://www.isro.gov.in" },
    { code: "VSSC", location: "THIRUVANANTHAPURAM", name: "Vikram Sarabhai Space Centre", cat: "centres", link: "https://www.vssc.gov.in" },
    { code: "SDSC SHAR", location: "SRIHARIKOTA", name: "Satish Dhawan Space Centre", cat: "centres", link: "https://www.shar.gov.in" },
    { code: "URSC", location: "BENGALURU", name: "U R Rao Satellite Centre", cat: "centres", link: "https://www.ursc.gov.in" },
    { code: "SAC", location: "AHMEDABAD", name: "Space Applications Centre", cat: "centres", link: "https://www.sac.gov.in" },
    { code: "NRSC", location: "HYDERABAD", name: "National Remote Sensing Centre", cat: "centres", link: "https://www.nrsc.gov.in" },
    { code: "HSFC", location: "BENGALURU", name: "Human Space Flight Centre", cat: "centres", link: "https://www.isro.gov.in/Gaganyaan.html" },
    { code: "IPRC", location: "MAHENDRAGIRI", name: "ISRO Propulsion Complex", cat: "centres", link: "https://www.iprc.gov.in" },
    { code: "IISU", location: "THIRUVANANTHAPURAM", name: "ISRO Inertial Systems Unit", cat: "centres", link: "https://www.isro.gov.in/isro_centre.html" },
    { code: "LPSC", location: "VALIAMALA / BENGALURU", name: "Liquid Propulsion Systems Centre", cat: "centres", link: "https://www.lpsc.gov.in" },
    { code: "ISTRAC", location: "BENGALURU", name: "ISRO Telemetry Tracking & Command", cat: "centres", link: "https://www.istrac.gov.in" },
    { code: "MCF", location: "HASSAN / BHOPAL", name: "Master Control Facility", cat: "centres", link: "https://www.mcf.gov.in" },
    { code: "LEOS", location: "BENGALURU", name: "Laboratory for Electro-Optics Systems", cat: "centres", link: "https://www.isro.gov.in" },
    { code: "IIRS", location: "DEHRADUN", name: "Indian Institute of Remote Sensing", cat: "centres", link: "https://www.iirs.gov.in" },

    // Autonomous Bodies (4 items)
    { code: "PRL", location: "AHMEDABAD", name: "Physical Research Laboratory", cat: "autonomous", link: "https://www.prl.res.in" },
    { code: "NARL", location: "GADANKI", name: "National Atmospheric Research Lab", cat: "autonomous", link: "https://www.narl.gov.in" },
    { code: "NESAC", location: "SHILLONG", name: "North Eastern Space Applications Centre", cat: "autonomous", link: "https://www.nesac.gov.in" },
    { code: "IIST", location: "THIRUVANANTHAPURAM", name: "Indian Institute of Space Tech", cat: "autonomous", link: "https://www.iist.ac.in" },

    // Enterprises & Regulators (2 items)
    { code: "IN-SPACe", location: "AHMEDABAD", name: "IN-SPACe Authorization Centre", cat: "enterprises", link: "https://www.inspace.gov.in" },
    { code: "NSIL", location: "BENGALURU", name: "NewSpace India Limited", cat: "enterprises", link: "https://www.nsilindia.co.in" }
  ];

  // Detailed Missions Data
  const missionData = {
    ch3: {
      title: "Chandrayaan-3 Lunar Mission",
      category: "Lunar Exploration • Soft Landing",
      desc: "Chandrayaan-3 successfully accomplished a soft landing near the Lunar South Pole on August 23, 2023. The Vikram Lander and Pragyan Rover conducted first-ever in-situ measurements of thermal properties and elemental composition near Shiv Shakti point.",
      vehicle: "LVM3-M4 Rocket",
      orbit: "Lunar Polar Orbit",
      status: "SUCCESS • DATA ACTIVE"
    },
    gaganyaan: {
      title: "Gaganyaan Human Spaceflight",
      category: "Human Spaceflight Programme",
      desc: "Gaganyaan project envisions demonstrating human spaceflight capability to Low Earth Orbit (LEO) with a 3-member crew for a 3-day mission. Human-rated LVM3 vehicle and Crew Module atmospheric re-entry deceleration qualified.",
      vehicle: "Human Rated LVM3 (HLVM3)",
      orbit: "Low Earth Orbit (400 km)",
      status: "QUALIFICATION TESTS ACTIVE"
    },
    aditya: {
      title: "Aditya-L1 Solar Observatory",
      category: "Solar Heliophysics",
      desc: "India's first solar space observatory stationed at Sun-Earth Lagrange Point 1 (L1). Equipped with 7 payloads including VELC, SUIT, and ASPEX to observe solar corona, flares, and coronal mass ejections continuously without eclipses.",
      vehicle: "PSLV-C57",
      orbit: "Halo Orbit at L1 (1.5M km)",
      status: "OPERATIONAL TELEMETRY ACTIVE"
    },
    nisar: {
      title: "NISAR Radar Satellite",
      category: "Joint NASA-ISRO Earth Observation",
      desc: "NISAR is a dual-frequency Synthetic Aperture Radar satellite payload jointly developed by NASA and ISRO. It maps global land surface changes, glacier collapse, volcanic activity, and forest biomass every 12 days.",
      vehicle: "GSLV-F16",
      orbit: "Sun-Synchronous LEO (747 km)",
      status: "SCIENCE PHASE"
    },
    xposat: {
      title: "XPoSat X-Ray Polarimetry",
      category: "Space Astronomy Observatory",
      desc: "XPoSat (X-ray Polarimeter Satellite) is dedicated to studying polarimetric properties of cosmic X-rays from intense astronomical sources such as neutron stars, pulsar wind nebulae, and black hole binaries.",
      vehicle: "PSLV-C58",
      orbit: "Low Earth Orbit (650 km)",
      status: "OBSERVATION PHASE ACTIVE"
    },
    vom: {
      title: "Venus Orbiter Mission (Shukrayaan)",
      category: "Interplanetary Venus Exploration",
      desc: "Upcoming planetary orbiter designed to study Venus's dense atmosphere, volcanic activity, ionosphere, and interaction with the solar wind using synthetic aperture radar and spectroscopic payloads.",
      vehicle: "LVM3 Launch Vehicle",
      orbit: "Elliptical Venusian Orbit",
      status: "PLANNING PHASE"
    }
  };

  // Launch Vehicle Models Data (Timeline / Models Section)
  const vehicleModelsData = {
    pslv: {
      code: 'PSLV',
      name: 'Polar Satellite Launch Vehicle',
      tagline: 'The Reliable Workhorse of ISRO',
      firstLaunch: 'October 20, 1994',
      stages: '4 Stages (Solid - Liquid - Solid - Liquid)',
      height: '44 m',
      liftOffMass: '320 tonnes',
      payload: '1,750 kg to Sun-Synchronous Orbit (SSO)',
      status: 'OPERATIONAL • 59+ FLIGHTS',
      desc: 'PSLV is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. PSLV has earned the title "Workhorse of ISRO" by consistently delivering various Indian and international payloads to polar and planetary orbits.',
      milestones: [
        'Chandrayaan-1 Lunar Mission (2008)',
        'Mars Orbiter Mission / Mangalyaan (2013)',
        'Record 104 Satellites in a single flight (PSLV-C37, 2017)',
        'Aditya-L1 Solar Observatory (2023)'
      ]
    },
    gslv: {
      code: 'GSLV',
      name: 'Geosynchronous Satellite Launch Vehicle',
      tagline: 'Communication & Geosynchronous Payload Carrier',
      firstLaunch: 'April 18, 2001',
      stages: '3 Stages (Solid Core + Liquid Strapons - Liquid - Cryogenic CUS)',
      height: '51.7 m',
      liftOffMass: '414 tonnes',
      payload: '2,250 kg to Geosynchronous Transfer Orbit (GTO)',
      status: 'OPERATIONAL • CRYOGENIC CUS',
      desc: 'GSLV is a three-stage launch vehicle with solid booster, liquid second stage, and an indigenous Cryogenic Upper Stage (CUS). It is primarily designed to launch heavy communication and meteorological satellites into GTO.',
      milestones: [
        'GSAT Communication Satellite Constellation',
        'GISAT-1 Earth Observation Satellite',
        'INSAT-3DS Climate & Weather Monitoring (2024)',
        'NVS-01 NaVIC Second Generation Navigation Satellite'
      ]
    },
    lvm3: {
      code: 'LVM3',
      name: 'Launch Vehicle Mark-3 (GSLV Mk III)',
      tagline: "India's Heaviest & Most Powerful Rocket",
      firstLaunch: 'December 18, 2014 (CARE Flight)',
      stages: '3 Stages (2 x S200 Solid Boosters - L110 Liquid Core - C25 Cryogenic)',
      height: '43.5 m',
      liftOffMass: '640 tonnes',
      payload: '4,000 kg to GTO / 10,000 kg to LEO',
      status: 'HUMAN-RATED (HLVM3) • 100% SUCCESS',
      desc: 'LVM3 is ISRO\'s heaviest launch vehicle, designed to carry 4-tonne class satellites into GTO or human crew modules to Low Earth Orbit. It features twin massive S200 solid rocket boosters and high-thrust C25 cryogenic stage.',
      milestones: [
        'Chandrayaan-2 Lunar Orbiter & Lander (2019)',
        'Chandrayaan-3 Lunar South Pole Soft Landing (2023)',
        'OneWeb India-1 & India-2 (72 Commercial Satellites Launched)',
        'Gaganyaan Human Spaceflight Qualification Flights'
      ]
    },
    sslv: {
      code: 'SSLV',
      name: 'Small Satellite Launch Vehicle',
      tagline: 'Rapid-Turnaround Low-Cost Small Sat Launcher',
      firstLaunch: 'August 7, 2022',
      stages: '3 Solid Stages + Velocity Trimming Module (VTM)',
      height: '34 m',
      liftOffMass: '120 tonnes',
      payload: '500 kg to 500 km Low Earth Orbit (LEO)',
      status: 'OPERATIONAL • COMMERCIAL DEMAND',
      desc: 'SSLV was developed to meet the growing commercial demand for launching small micro/nano satellites. It requires minimal launch infrastructure, reduced team size, and can be integrated within just 7 days.',
      milestones: [
        'EOS-07 & AzaadiSAT Launch (SSLV-D2)',
        'Demonstrated 7-day launch integration capability',
        'Commercial constellation deployment platform'
      ]
    },
    rlv: {
      code: 'RLV-TD',
      name: 'Reusable Launch Vehicle Tech Demonstrator',
      tagline: 'Winged Two-Stage-To-Orbit Spaceplane Concept',
      firstLaunch: 'May 23, 2016 (HEX-01)',
      stages: 'Winged Body Spaceplane + HS9 Solid Booster',
      height: '6.5 m (Fuselage length)',
      liftOffMass: '1.75 tonnes (Spaceplane)',
      payload: 'Reusable Payload Return & Gliding Landing',
      status: 'AUTONOMOUS LANDING TEST QUALIFIED',
      desc: 'RLV-TD is a technology demonstrator toward a fully reusable spaceplane. ISRO successfully accomplished high-speed hypersonic re-entry (HEX) and autonomous pin-point runway landing tests (LEX-01, LEX-02, LEX-03) at ATR Chitradurga.',
      milestones: [
        'HEX-01 Hypersonic Flight Experiment (2016)',
        'LEX-01 Autonomous Runway Landing from Helicopter (2023)',
        'LEX-02 & LEX-03 Autonomous Precision Landings (2024)'
      ]
    },
    nglv: {
      code: 'NGLV',
      name: 'Next Generation Launch Vehicle (Soorya)',
      tagline: 'Future Heavy-Lift & Reusable Station Carrier',
      firstLaunch: 'Targeted 2030',
      stages: 'Modular 3-Stage Semi-Cryogenic (Liquid Oxygen + Kerosene / Methane)',
      height: '75+ m',
      liftOffMass: '800+ tonnes',
      payload: '30,000 kg to LEO / Reusable 1st Stage',
      status: 'DEVELOPMENT & ENGINE HOT TESTS ACTIVE',
      desc: 'NGLV (Soorya) is ISRO\'s upcoming modular launcher equipped with eco-friendly semi-cryogenic propulsion. Designed with a reusable first stage, NGLV will construct the Bharatiya Antariksh Station (BAS) and power deep-space crewed missions.',
      milestones: [
        'Hot Qualification Tests of 2000 kN Semi-Cryo Engine at IPRC',
        'Primary launch vehicle for Bharatiya Antariksh Station (BAS) modules',
        'Designed for low-cost payload delivery to LEO & Lunar Orbit'
      ]
    }
  };

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

      {/* Top Accessibility & Official Utility Bar */}
      <div className="bg-isro-dark border-b border-white/10 text-white text-xs py-2 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 font-mono text-[11px] tracking-wider text-slate-400">
            <span>GOVERNMENT OF INDIA</span>
            <span>•</span>
            <span>DEPARTMENT OF SPACE</span>
            <span>•</span>
            <span className="text-isro-steel font-bold">INDIAN SPACE RESEARCH ORGANISATION</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 border-r border-white/20 pr-3">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded font-bold ${lang === 'en' ? 'bg-isro-blue text-white' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded font-bold ${lang === 'hi' ? 'bg-isro-blue text-white' : 'text-slate-400 hover:text-white'}`}
              >
                हिंदी
              </button>
            </div>

            {/* Quick Portal Links */}
            <div className="hidden md:flex items-center space-x-3 text-[11px] font-mono text-slate-300 border-r border-white/20 pr-3">
              <a href="https://www.isro.gov.in/Careers.html" target="_blank" rel="noreferrer" className="hover:text-isro-orange">Careers</a>
              <span>|</span>
              <a href="https://www.isro.gov.in/Tenders.html" target="_blank" rel="noreferrer" className="hover:text-isro-orange">Tenders</a>
              <span>|</span>
              <a href="https://www.isro.gov.in/RTI.html" target="_blank" rel="noreferrer" className="hover:text-isro-orange">RTI</a>
              <span>|</span>
              <a href="https://www.isro.gov.in/contact.html" target="_blank" rel="noreferrer" className="hover:text-isro-orange">Contact</a>
            </div>

            {/* Font Scaling */}
            <div className="flex items-center space-x-1 border-r border-white/20 pr-3">
              <button onClick={() => setFontSize(Math.max(12, fontSize - 1))} className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded text-xs font-bold" title="Decrease Font Size">A-</button>
              <button onClick={() => setFontSize(16)} className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded text-xs font-bold" title="Reset Font Size">A</button>
              <button onClick={() => setFontSize(Math.min(22, fontSize + 1))} className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded text-xs font-bold" title="Increase Font Size">A+</button>
            </div>

            {/* Accessibility Tools */}
            <div className="flex items-center space-x-2">
              <button onClick={() => setHighContrast(!highContrast)} className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded flex items-center gap-1" title="High Contrast">
                <i className="fa-solid fa-circle-half-stroke"></i>
              </button>
              <button onClick={() => setReadingRuler(!readingRuler)} className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded flex items-center gap-1" title="Toggle Reading Ruler">
                <i className="fa-solid fa-ruler-horizontal"></i>
              </button>
              <button onClick={() => setDyslexiaFont(!dyslexiaFont)} className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded flex items-center gap-1" title="Friendly Font">
                <i className="fa-solid fa-font"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom-Right Quick Action Menu (No Black Container Box, Sharp Royal Blue Buttons, Pure White Text & Icons, No Yellow) */}
      <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end">
        {quickMenuOpen && (
          <div className="mb-3 flex flex-col gap-2 animate-in slide-in-from-bottom-2 duration-200">
            <a 
              href="https://www.isro.gov.in/NSPD2025/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition"
            >
              <img src="https://www.isro.gov.in/media_isro/image/favicon.png.webp" alt="ISRO Logo" className="w-4 h-4 object-contain brightness-0 invert" />
              <span>NSpD-2026 PORTAL</span>
            </a>
            <a 
              href="https://www.isro.gov.in/ISROAPP/login.jsp" 
              target="_blank" 
              rel="noreferrer"
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition"
            >
              <i className="fa-solid fa-comments text-white text-sm"></i>
              <span>ASK AN EXPERT</span>
            </a>
            <a 
              href="https://www.isro.gov.in/ISROAPP/fFBF" 
              target="_blank" 
              rel="noreferrer"
              className="bg-isro-blue hover:bg-isro-blue-dark text-white px-4 py-2.5 rounded-none border border-white/30 shadow-2xl flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition"
            >
              <i className="fa-solid fa-pen-to-square text-white text-sm"></i>
              <span>FEEDBACK FORM</span>
            </a>
          </div>
        )}

        {/* Trigger Floating Action Button - Royal Blue Circle with Pure White Icon (No Yellow) */}
        <button 
          onClick={() => setQuickMenuOpen(!quickMenuOpen)}
          className="w-12 h-12 bg-isro-blue hover:bg-isro-blue-dark text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white transition transform hover:scale-105 active:scale-95"
          title="Quick Services & Portals"
        >
          <i className={`fa-solid ${quickMenuOpen ? 'fa-xmark' : 'fa-universal-access'} text-xl text-white`}></i>
        </button>
      </div>

      {/* Outer Swiss Canvas Frame */}
      <div className="max-w-[1440px] mx-auto my-0 sm:my-6 px-0 sm:px-4">
        {/* Floating Cream Sheet Outer Container */}
        <div className="bg-isro-cream rounded-none sm:rounded-xl shadow-2xl overflow-hidden border border-isro-border relative">

          {/* TOP BLUE HEADER BANNER & OFFICIAL NAV */}
          <header className="bg-isro-blue text-white relative overflow-hidden pb-16 pt-6 px-6 sm:px-12 border-b border-isro-blue-dark">
            <div className="absolute inset-0 wireframe-grid opacity-20 pointer-events-none"></div>

            {/* Official Brand Header Row */}
            <div className="relative z-10 flex flex-wrap justify-between items-center pb-6 border-b border-white/20 gap-4">
              <div className="flex items-center space-x-4">
                {/* Official ISRO Emblem Image */}
                <div className="bg-white p-1.5 rounded-lg shadow-md flex items-center justify-center border border-isro-border">
                  <img
                    src="https://www.isro.gov.in/media_isro/image/favicon.png.webp"
                    alt="Official ISRO Logo Emblem"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <div className="font-display font-black text-xl leading-tight uppercase tracking-wider">
                    {lang === 'hi' ? 'भारतीय अंतरिक्ष अनुसंधान संगठन' : 'Indian Space Research Organisation'}
                  </div>
                  <div className="text-xs text-isro-steel font-mono">
                    {lang === 'hi' ? 'अंतरिक्ष विभाग, भारत सरकार' : 'Official Space Agency of India'}
                  </div>
                </div>
              </div>

              {/* Search Button Trigger */}
              <button onClick={() => setSearchOpen(true)} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-mono uppercase transition border border-white/20">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search Portal</span>
              </button>
            </div>

            {/* Multi-Level Official Navigation Dropdowns Bar */}
            <nav className="relative z-20 mt-4 pb-4 border-b border-white/10">
              <ul className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider font-display">
                {/* About Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1"
                  >
                    <span>About ISRO</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'about' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-isro-dark text-white border border-isro-steel/30 rounded-lg shadow-2xl p-3 z-50 font-body text-xs space-y-2 uppercase">
                      <a href="https://www.isro.gov.in/profile.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Organisation Profile</a>
                      <a href="https://www.isro.gov.in/Vision-Mission-Objectives.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Vision, Mission & Objectives</a>
                      <a href="https://www.isro.gov.in/organisation.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Organisational Structure</a>
                      <a href="https://www.isro.gov.in/leadership.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Secretary DoS / Chairman ISRO</a>
                      <a href="https://www.isro.gov.in/isro_centre.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">DoS Centres & Units</a>
                      <a href="https://www.isro.gov.in/Timeline.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Space Exploration Timeline</a>
                    </div>
                  )}
                </li>

                {/* Activities Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'activities' ? null : 'activities')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1"
                  >
                    <span>Activities</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'activities' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-isro-dark text-white border border-isro-steel/30 rounded-lg shadow-2xl p-3 z-50 font-body text-xs space-y-2 uppercase">
                      <a href="https://www.isro.gov.in/Mission.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Missions Accomplished</a>
                      <a href="https://www.isro.gov.in/FutureMissions.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Upcoming Missions</a>
                      <a href="https://www.isro.gov.in/Launchers.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Launch Vehicles (LVM3, PSLV)</a>
                      <a href="https://www.isro.gov.in/Satellites.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Satellite Missions</a>
                      <a href="https://www.isro.gov.in/Gaganyaan.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Gaganyaan Human Spaceflight</a>
                      <a href="https://www.isro.gov.in/IN-SPACe.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">IN-SPACe Authorization</a>
                    </div>
                  )}
                </li>

                {/* Services Dropdown */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1"
                  >
                    <span>Services</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-isro-dark text-white border border-isro-steel/30 rounded-lg shadow-2xl p-3 z-50 font-body text-xs space-y-2 uppercase">
                      <a href="https://www.isro.gov.in/launchservices.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Commercial Launch Services</a>
                      <a href="https://bhuvan.nrsc.gov.in/" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Bhuvan & Bhoonidhi EO Services</a>
                      <a href="https://www.isro.gov.in/SatelliteNavigationServices.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">NaVIC Satellite Navigation</a>
                      <a href="https://www.mosdac.gov.in" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">MOSDAC Meteorological Data</a>
                      <a href="https://www.isro.gov.in/DisasterManagementNationalInternational.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Disaster Management Services</a>
                    </div>
                  )}
                </li>

                {/* Programmes Dropdown (Opens Inward using right-0) */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'programmes' ? null : 'programmes')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1"
                  >
                    <span>Programmes</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'programmes' && (
                    <div className="absolute top-full left-0 sm:left-auto sm:right-0 mt-2 w-64 bg-isro-dark text-white border border-isro-steel/30 rounded-lg shadow-2xl p-3 z-50 font-body text-xs space-y-2 uppercase">
                      <a href="https://www.isro.gov.in/YUVIKA.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">YUVIKA Scientist Programme</a>
                      <a href="https://www.isro.gov.in/UNNATI.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">UNNATI Nano-satellite Training</a>
                      <a href="https://www.isro.gov.in/Student_Program_Satellite.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Student Satellites Initiative</a>
                      <a href="https://www.isro.gov.in/spacetutor.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Space Tutor Registration</a>
                      <a href="https://www.isro.gov.in/Merchandise.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Official Space Merchandise</a>
                    </div>
                  )}
                </li>

                {/* Resources Dropdown (Opens Inward using right-0) */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1"
                  >
                    <span>Resources</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'resources' && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-isro-dark text-white border border-isro-steel/30 rounded-lg shadow-2xl p-3 z-50 font-body text-xs space-y-2 uppercase">
                      <a href="https://www.isro.gov.in/Sciencedata.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Science Data Archives</a>
                      <a href="https://www.isro.gov.in/River_Basin_Atlas.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">River Basin Atlases</a>
                      <a href="https://feast.vssc.gov.in/" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">FEAST Simulation Tool</a>
                      <a href="https://www.isro.gov.in/publications.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">DOS Publications & Reports</a>
                    </div>
                  )}
                </li>

                {/* Engagements Dropdown (Opens Inward using right-0) */}
                <li className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'engagements' ? null : 'engagements')}
                    className="flex items-center gap-1 hover:text-isro-steel py-1"
                  >
                    <span>Engagements</span> <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </button>
                  {activeDropdown === 'engagements' && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-isro-dark text-white border border-isro-steel/30 rounded-lg shadow-2xl p-3 z-50 font-body text-xs space-y-2 uppercase">
                      <a href="https://www.isro.gov.in/Careers.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Careers & Join ISRO</a>
                      <a href="https://www.isro.gov.in/Press.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Press Releases & Media</a>
                      <a href="https://www.isro.gov.in/Industry.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Industry Partnerships</a>
                      <a href="https://www.isro.gov.in/Start_ups.html" target="_blank" rel="noreferrer" className="block p-1.5 hover:bg-isro-blue rounded">Space Start-ups Hub</a>
                    </div>
                  )}
                </li>
              </ul>
            </nav>

            {/* Banner Subhead & Callouts */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-start">
              <div className="md:col-span-5 text-xs text-slate-200 leading-relaxed font-normal">
                <p>
                  ISRO Science seeks to discover the secrets of the universe, search for water and ice in the lunar polar regions, study solar coronal dynamics, and protect and improve life on Earth through space applications.
                </p>
              </div>

              {/* Chandrayaan Callout Card */}
              <div className="md:col-span-3 bg-white/10 border border-white/20 p-2.5 rounded flex items-center space-x-3">
                <div className="w-12 h-12 bg-isro-blue-dark rounded flex items-center justify-center text-isro-orange text-xl font-bold">
                  <i className="fa-solid fa-moon"></i>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white uppercase">Chandrayaan-3</div>
                  <div className="text-slate-300 text-[10px]">Shiv Shakti Point Regolith Data</div>
                </div>
              </div>

              {/* Aditya-L1 Callout Card */}
              <div className="md:col-span-4 bg-white/10 border border-white/20 p-2.5 rounded flex items-center space-x-3">
                <div className="w-12 h-12 bg-isro-blue-dark rounded flex items-center justify-center text-yellow-400 text-xl font-bold">
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white uppercase">Aditya-L1 Observatory</div>
                  <div className="text-slate-300 text-[10px]">Sun Halo Orbit Telemetry Active</div>
                </div>
              </div>
            </div>

            {/* DUAL TYPOGRAPHY DISPLAY HEADER (ISRO SCIENCE) */}
            <div className="relative z-10 mt-12 mb-4">
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-white tracking-tighter uppercase">
                ISRO SCIENCE
              </h1>
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-outline-white tracking-tighter uppercase -mt-4 sm:-mt-8 md:-mt-10 opacity-90 select-none">
                ISRO SCIENCE
              </h1>
            </div>

            {/* Video Box Overlapping Header - Clickable for Live Broadcast Modal Popup */}
            <div
              onClick={() => setLiveVideoModalOpen(true)}
              className="absolute -right-2 -bottom-8 sm:-right-8 sm:-bottom-16 md:-bottom-24 w-[260px] sm:w-80 md:w-[420px] z-30 group shadow-2xl cursor-pointer"
              title="Click to view Live Broadcast in full window"
            >
              <div className="bg-isro-cream p-2 sm:p-3 border border-isro-border rounded-sm transform transition-transform duration-500 group-hover:-translate-y-2 relative">
                <div className="relative w-full aspect-video bg-isro-dark overflow-hidden rounded-sm border border-isro-border">
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
                    <div className="w-12 h-12 rounded-full bg-white/90 text-isro-blue flex items-center justify-center shadow-lg border border-white transform group-hover:scale-110 transition">
                      <i className="fa-solid fa-play text-lg ml-1"></i>
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div> Live Broadcast
                  </div>
                </div>

                <div className="mt-2.5 flex justify-between items-center px-1">
                  <div className="text-[10px] sm:text-[11px] font-mono text-isro-blue font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span>LVM3-M6 Lift Off</span>
                    <i className="fa-solid fa-expand text-[9px] text-isro-steel group-hover:text-isro-blue transition"></i>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-isro-steel font-semibold tracking-wide">SDSC SHAR</div>
                </div>
              </div>
            </div>
          </header>

          {/* FLASH NEWS TICKER */}
          <div className="bg-isro-charcoal text-white text-xs py-3 px-6 sm:px-12 flex flex-wrap items-center justify-between gap-4 border-b border-isro-border">
            <div className="flex items-center space-x-3 w-full sm:w-auto overflow-hidden">
              <span className="bg-red-600 text-white font-black px-2 py-0.5 uppercase tracking-widest text-[10px] shrink-0">
                FLASH NEWS
              </span>
              <a
                href={flashList[flashIdx].link}
                target="_blank"
                rel="noreferrer"
                className="truncate text-yellow-300 hover:underline font-mono"
              >
                {flashList[flashIdx].title}
              </a>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <button onClick={() => setFlashIdx((prev) => (prev - 1 + flashList.length) % flashList.length)} className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300">
                <i className="fa-solid fa-chevron-left text-[10px]"></i>
              </button>
              <button onClick={() => setFlashIdx((prev) => (prev + 1) % flashList.length)} className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300">
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>

          {/* OFFICIAL QUICK FEATURES ACTION GRID */}
          <section className="bg-white border-b border-isro-border p-6 sm:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-isro-border p-4 rounded-lg bg-isro-cream hover:border-isro-blue transition swiss-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase">PRESS RELEASE</span>
                  <i className="fa-solid fa-newspaper text-isro-steel"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">Official press announcements & mission updates.</p>
                <a href="https://www.isro.gov.in/Press.html" target="_blank" rel="noreferrer" className="text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center gap-1 uppercase">
                  More Info <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </a>
              </div>

              <div className="border border-isro-border p-4 rounded-lg bg-isro-cream hover:border-isro-blue transition swiss-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase">CAREERS</span>
                  <i className="fa-solid fa-briefcase text-isro-steel"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">Recruitment notices for scientific & administrative posts.</p>
                <a href="https://www.isro.gov.in/Careers.html" target="_blank" rel="noreferrer" className="text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center gap-1 uppercase">
                  More Info <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </a>
              </div>

              <div className="border border-isro-border p-4 rounded-lg bg-isro-cream hover:border-isro-blue transition swiss-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase">STUDENTS</span>
                  <i className="fa-solid fa-graduation-cap text-isro-steel"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">STEM programs, YUVIKA, and student satellite initiatives.</p>
                <a href="https://www.isro.gov.in/Students.html" target="_blank" rel="noreferrer" className="text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center gap-1 uppercase">
                  More Info <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </a>
              </div>

              <div className="border border-isro-border p-4 rounded-lg bg-isro-cream hover:border-isro-blue transition swiss-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-sm text-isro-blue uppercase">TENDERS</span>
                  <i className="fa-solid fa-file-contract text-isro-steel"></i>
                </div>
                <p className="text-[11px] text-isro-charcoal mb-3">E-Procurement notices across all ISRO Centres.</p>
                <a href="https://www.isro.gov.in/Tenders.html" target="_blank" rel="noreferrer" className="text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center gap-1 uppercase">
                  More Info <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </a>
              </div>
            </div>
          </section>

          {/* LATEST NEWS & ANNOUNCEMENTS ACCORDION */}
          <section className="p-6 sm:p-12 border-b border-isro-border bg-white">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-xs font-mono text-isro-steel uppercase tracking-widest block">OFFICIAL ANNOUNCEMENTS</span>
                <h3 className="font-display font-bold text-2xl text-isro-blue uppercase tracking-tight">LATEST ISRO NEWS FEED</h3>
              </div>
              <span className="text-xs font-mono text-isro-steel">LIVE UPDATE</span>
            </div>

            <div className="space-y-3">
              {newsFeed.map((item) => (
                <div key={item.id} className="border border-isro-border rounded-lg overflow-hidden transition">
                  <button
                    onClick={() => setOpenNewsAccordion(openNewsAccordion === item.id ? null : item.id)}
                    className="w-full p-4 bg-isro-cream hover:bg-white text-left flex justify-between items-center font-display font-bold text-sm text-isro-blue"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-isro-blue text-white uppercase">{item.tag}</span>
                      <span>{item.title}</span>
                    </div>
                    <i className={`fa-solid fa-chevron-${openNewsAccordion === item.id ? 'up' : 'down'} text-xs text-isro-steel`}></i>
                  </button>

                  {openNewsAccordion === item.id && (
                    <div className="p-4 bg-white border-t border-isro-border text-xs text-isro-charcoal leading-relaxed font-body">
                      <p className="mb-3">{item.desc}</p>
                      <button onClick={() => alert(`Opening details for: ${item.title}`)} className="text-xs font-bold text-isro-blue hover:text-isro-orange uppercase flex items-center gap-1">
                        Read Full Announcement <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 1: 6-CARD MISSION GRID */}
          <section id="missions" className="p-6 sm:p-12 border-b border-isro-border">
            <div className="text-xs font-mono font-bold text-isro-blue uppercase tracking-widest mb-6">
              // ISRO Key Science Missions
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Chandrayaan-3 */}
              <div className="swiss-card bg-white border border-isro-border p-6 rounded flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">Lunar Exploration</div>
                  <h3 className="font-display font-bold text-xl text-isro-blue mb-3">Chandrayaan-3</h3>
                  <p className="text-xs text-isro-charcoal leading-relaxed mb-4">
                    Historic soft landing at the Lunar South Pole. Payload RAMBHA-LP and APXS discovered regolith heterogeneity and water-ice signatures.
                  </p>
                </div>
                <button onClick={() => setActiveMissionKey('ch3')} className="self-start text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center space-x-1 uppercase tracking-wider">
                  <span>Mission Brief</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>

              {/* Card 2: Gaganyaan */}
              <div className="swiss-card bg-white border border-isro-border p-6 rounded flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">Human Spaceflight</div>
                  <h3 className="font-display font-bold text-xl text-isro-blue mb-3">Gaganyaan Orbital Mission</h3>
                  <p className="text-xs text-isro-charcoal leading-relaxed mb-4">
                    Demonstrating human spaceflight capability to Low Earth Orbit (300-400 km) with 3 crew members and safe recovery in Indian waters.
                  </p>
                </div>
                <button onClick={() => setActiveMissionKey('gaganyaan')} className="self-start text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center space-x-1 uppercase tracking-wider">
                  <span>Mission Brief</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>

              {/* Card 3: Aditya-L1 */}
              <div className="swiss-card bg-isro-blue text-white border border-isro-blue-dark p-6 rounded flex flex-col justify-between shadow-lg">
                <div>
                  <div className="text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">Solar Heliophysics</div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">Aditya-L1 Solar Mission</h3>
                  <p className="text-xs text-slate-200 leading-relaxed mb-4">
                    Stationed at Sun-Earth Lagrange Point 1 (1.5M km from Earth) continuously observing the solar corona, CMEs, and magnetic storms.
                  </p>
                </div>
                <button onClick={() => setActiveMissionKey('aditya')} className="self-start text-xs font-bold text-yellow-300 hover:text-white flex items-center space-x-1 uppercase tracking-wider">
                  <span>Active Telemetry</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>

              {/* Card 4: NISAR */}
              <div className="swiss-card bg-white border border-isro-border p-6 rounded flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">Earth Science • Joint NASA-ISRO</div>
                  <h3 className="font-display font-bold text-xl text-isro-blue mb-3">NISAR Radar Satellite</h3>
                  <p className="text-xs text-isro-charcoal leading-relaxed mb-4">
                    Dual-frequency (L & S Band) Synthetic Aperture Radar mapping global land surface changes, ice sheet collapse, and ecosystems.
                  </p>
                </div>
                <button onClick={() => setActiveMissionKey('nisar')} className="self-start text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center space-x-1 uppercase tracking-wider">
                  <span>Mission Brief</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>

              {/* Card 5: XPoSat */}
              <div className="swiss-card bg-white border border-isro-border p-6 rounded flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">Astrophysics Observatory</div>
                  <h3 className="font-display font-bold text-xl text-isro-blue mb-3">XPoSat Polarimetry</h3>
                  <p className="text-xs text-isro-charcoal leading-relaxed mb-4">
                    India's first dedicated polarimetry mission studying x-ray emission polarization from neutron stars, black hole binaries, and AGNs.
                  </p>
                </div>
                <button onClick={() => setActiveMissionKey('xposat')} className="self-start text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center space-x-1 uppercase tracking-wider">
                  <span>Mission Brief</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>

              {/* Card 6: Venus Orbiter */}
              <div className="swiss-card bg-white border border-isro-border p-6 rounded flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-isro-steel font-bold uppercase mb-1">Planetary Science</div>
                  <h3 className="font-display font-bold text-xl text-isro-blue mb-3">Venus Orbiter (VOM)</h3>
                  <p className="text-xs text-isro-charcoal leading-relaxed mb-4">
                    Upcoming planetary mission to study Venusian atmosphere dynamics, subsurface radar imaging, and solar wind interactions.
                  </p>
                </div>
                <button onClick={() => setActiveMissionKey('vom')} className="self-start text-xs font-bold text-isro-blue hover:text-isro-orange flex items-center space-x-1 uppercase tracking-wider">
                  <span>Mission Brief</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </section>

          {/* SIGNATURE SWISS BLOCK-TEXT BANNER */}
          <section className="p-8 sm:p-16 bg-isro-cream border-b border-isro-border relative overflow-hidden">
            <div className="absolute inset-0 wireframe-grid opacity-30 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center sm:text-left">
              <div className="text-xs font-mono font-bold text-isro-blue uppercase tracking-widest mb-4">
                // SPECIAL ANNOUNCEMENT 2026
              </div>

              <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-tight tracking-tight text-isro-blue space-y-2">
                <div>
                  <span className="block-text-highlight">BHARATIYA ANTARIKSH</span>
                </div>
                <div>
                  HACKATHON: <span className="block-text-highlight">THROUGH THE EYES</span>
                </div>
                <div>
                  OF <span className="block-text-highlight">ISRO SCIENCE</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={() => alert('Directing to Bharatiya Antariksh Hackathon Portal (BAH-2026)')} className="bg-isro-blue text-white px-6 py-3 rounded font-display font-bold text-sm uppercase tracking-wider hover:bg-isro-blue-dark transition">
                  View Grand Finale Results
                </button>
                <span className="text-xs font-mono text-isro-charcoal">
                  NRSC Hyderabad • August 6-7, 2026
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 6: ISRO GEO-PORTALS & SERVICES GRID (COMPACT HIGH-DENSITY SWISS GRID) */}
          <section id="portals" className="p-6 sm:p-10 border-b border-isro-border bg-isro-blue text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <span className="text-[11px] font-mono text-isro-steel uppercase tracking-widest block">ONLINE APPLICATIONS</span>
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">ISRO DIGITAL PORTALS</h3>
              </div>
              <div className="text-[11px] font-mono text-slate-300">
                Geospatial • Earth Observation • Data Archives
              </div>
            </div>

            {/* Compact 6-Column Grid for Digital Portals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {portalsList.map((portal) => (
                <div
                  key={portal.key}
                  onClick={() => setActivePortalKey(portal.key)}
                  className="bg-white/10 border border-white/15 p-3 rounded-lg text-center hover:bg-white hover:text-isro-blue transition cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <i className={`${portal.icon} text-xl mb-1.5 text-isro-steel group-hover:text-isro-blue transition`}></i>
                  <h4 className="font-display font-bold text-xs uppercase tracking-tight leading-tight">{portal.title}</h4>
                  <p className="text-[10px] opacity-75 mt-0.5 font-mono truncate">{portal.category}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: ISRO CENTRES & INSTITUTES DIRECTORY (PURE WHITE CARDS WITH ISRO ROYAL BLUE TEXT) */}
          <section className="p-6 sm:p-10 border-b border-isro-border bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
              <div>
                <span className="text-[11px] font-mono text-isro-steel uppercase tracking-widest block">DEPARTMENT OF SPACE</span>
                <h3 className="font-display font-bold text-2xl text-isro-blue uppercase tracking-tight">ISRO CENTRES & RESEARCH INSTITUTES</h3>
              </div>

              {/* Swiss Filter Category Tabs */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setDirectoryFilter('all')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition ${directoryFilter === 'all' ? 'bg-isro-blue text-white shadow' : 'bg-slate-100 text-isro-charcoal hover:bg-slate-200'}`}
                >
                  All ({directoryItems.length})
                </button>
                <button
                  onClick={() => setDirectoryFilter('centres')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition ${directoryFilter === 'centres' ? 'bg-isro-blue text-white shadow' : 'bg-slate-100 text-isro-charcoal hover:bg-slate-200'}`}
                >
                  ISRO Centres (14)
                </button>
                <button
                  onClick={() => setDirectoryFilter('autonomous')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition ${directoryFilter === 'autonomous' ? 'bg-isro-blue text-white shadow' : 'bg-slate-100 text-isro-charcoal hover:bg-slate-200'}`}
                >
                  Autonomous Bodies (4)
                </button>
                <button
                  onClick={() => setDirectoryFilter('enterprises')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition ${directoryFilter === 'enterprises' ? 'bg-isro-blue text-white shadow' : 'bg-slate-100 text-isro-charcoal hover:bg-slate-200'}`}
                >
                  IN-SPACe & NSIL (2)
                </button>
              </div>
            </div>

            {/* Pure White Cards with ISRO Royal Blue Text Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {filteredDirectory.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 border border-slate-200 rounded-lg bg-white text-isro-blue shadow-sm hover:border-isro-blue hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center text-[9.5px] font-mono text-isro-steel font-bold mb-1">
                      <span className="text-isro-blue font-extrabold">{item.code}</span>
                      <span className="truncate ml-1 text-slate-500">{item.location}</span>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display font-bold text-xs text-isro-blue group-hover:text-isro-orange transition block leading-snug"
                    >
                      {item.name}
                    </a>
                  </div>

                  <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-isro-steel">
                    <span className="group-hover:text-isro-blue font-bold">VISIT SITE</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover:text-isro-orange transition"></i>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER SECTION WITH OFFICIAL ADDRESS & POLICIES */}
          <footer id="about" className="bg-isro-charcoal text-white p-6 sm:p-12 border-t border-isro-border relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">

              {/* Col 1 */}
              <div>
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
                  <span className="bg-white text-isro-blue font-display font-black text-xl px-2.5 py-0.5 rounded shadow-sm">ISRO HQ</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Indian Space Research Organisation<br />
                  Antariksh Bhavan, New BEL Road<br />
                  Bengaluru-560 094, India
                </p>
                <div className="text-[11px] font-mono text-isro-steel space-y-1">
                  <div>Phone: +91 80 22172294 / 96</div>
                  <div>Email: isropr[at]isro[dot]gov[dot]in</div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="text-xs space-y-2">
                <h4 className="font-display font-bold text-sm text-isro-steel uppercase mb-3">Government Portals</h4>
                <div><a href="https://www.india.gov.in" target="_blank" rel="noreferrer" className="hover:text-isro-steel">National Portal of India</a></div>
                <div><a href="https://www.pib.gov.in" target="_blank" rel="noreferrer" className="hover:text-isro-steel">Press Information Bureau (PIB)</a></div>
                <div><button onClick={() => alert('RTI Details')} className="hover:text-isro-steel text-left">Right to Information (RTI)</button></div>
                <div><button onClick={() => alert('Feedback Form')} className="hover:text-isro-steel text-left">Feedback & Grievances</button></div>
              </div>

              {/* Col 3 */}
              <div className="text-xs space-y-2">
                <h4 className="font-display font-bold text-sm text-isro-steel uppercase mb-3">Website Policies</h4>
                <div><span className="hover:text-isro-steel cursor-pointer">Website Policy</span></div>
                <div><span className="hover:text-isro-steel cursor-pointer">Copyright Policy</span></div>
                <div><span className="hover:text-isro-steel cursor-pointer">Hyperlinking Policy</span></div>
                <div><span className="hover:text-isro-steel cursor-pointer">Terms of Use</span></div>
              </div>

              {/* Col 4 */}
              <div className="text-xs">
                <h4 className="font-display font-bold text-sm text-isro-steel uppercase mb-3">Connect With Us</h4>
                <div className="flex space-x-3 text-lg mb-4">
                  {/* X / Twitter Vector Icon */}
                  <a
                    href="https://twitter.com/isro"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm"
                    title="X (Twitter)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/ISRO" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.youtube.com/channel/UCw5hEVOTfz_AfzsNFWyNlNg" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                  <a href="https://www.instagram.com/isro.dos" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-isro-blue text-white transition shadow-sm" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Designed with Swiss Graphic & Editorial International Typographic Style.
                </p>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 font-mono">
              <div>© Copyright 2026 ISRO. All Rights Reserved.</div>
              <div>Last Updated: August 02, 2026</div>
            </div>
          </footer>

        </div>
      </div>

      {/* MODAL: MISSION DETAILS */}
      {activeMissionKey && missionData[activeMissionKey] && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden p-6 relative">
            <button onClick={() => setActiveMissionKey(null)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold">×</button>

            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">{missionData[activeMissionKey].category}</div>
            <h3 className="font-display font-black text-3xl text-isro-blue uppercase mb-3">{missionData[activeMissionKey].title}</h3>

            <div className="bg-white border border-isro-border p-4 rounded mb-4">
              <p className="text-xs text-isro-charcoal leading-relaxed">{missionData[activeMissionKey].desc}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono mb-6">
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-isro-steel block text-[10px]">LAUNCH VEHICLE</span>
                <span className="font-bold text-isro-blue">{missionData[activeMissionKey].vehicle}</span>
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-isro-steel block text-[10px]">OPERATIONAL ORBIT</span>
                <span className="font-bold text-isro-blue">{missionData[activeMissionKey].orbit}</span>
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-isro-steel block text-[10px]">STATUS</span>
                <span className="font-bold text-green-700">{missionData[activeMissionKey].status}</span>
              </div>
            </div>

            <div className="flex justify-end">
              <button onClick={() => setActiveMissionKey(null)} className="bg-isro-blue text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded hover:bg-isro-blue-dark">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PORTAL QUICK VIEW */}
      {activePortalKey && (
        <div className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4">
          <div className="bg-isro-cream border border-isro-border max-w-lg w-full rounded-lg shadow-2xl p-6 relative">
            <button onClick={() => setActivePortalKey(null)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold">×</button>
            <div className="text-xs font-mono text-isro-steel font-bold uppercase mb-1">ISRO ONLINE PORTAL</div>
            {portalsList.find(p => p.key === activePortalKey) && (
              <>
                <h3 className="font-display font-bold text-2xl text-isro-blue uppercase mb-2">
                  {portalsList.find(p => p.key === activePortalKey).title}
                </h3>
                <p className="text-xs text-isro-charcoal leading-relaxed mb-6">
                  {portalsList.find(p => p.key === activePortalKey).desc}
                </p>
                <div className="flex justify-end space-x-3">
                  <button onClick={() => setActivePortalKey(null)} className="px-4 py-2 rounded text-xs font-bold uppercase border border-isro-border">Cancel</button>
                  <button
                    onClick={() => {
                      window.open(portalsList.find(p => p.key === activePortalKey).url, '_blank');
                      setActivePortalKey(null);
                    }}
                    className="bg-isro-blue text-white px-5 py-2 rounded text-xs font-bold uppercase"
                  >
                    Launch Portal →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MODAL: LIVE SEARCH */}
      {searchOpen && (
        <div className="fixed inset-0 glass-modal z-50 flex items-start justify-center pt-20 p-4">
          <div className="bg-isro-cream border border-isro-border max-w-xl w-full rounded-lg shadow-2xl p-6 relative">
            <button onClick={() => setSearchOpen(false)} className="absolute top-4 right-4 text-isro-charcoal hover:text-red-600 text-xl font-bold">×</button>
            <h3 className="font-display font-bold text-lg text-isro-blue uppercase mb-3">SEARCH ISRO SCIENCE DATABASE</h3>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type keyword (e.g., Chandrayaan, Gaganyaan, Tenders, NISAR)..."
              className="w-full px-4 py-3 text-sm border border-isro-border rounded focus:outline-none focus:border-isro-blue mb-4"
              autoFocus
            />

            <div className="max-h-60 overflow-y-auto space-y-2 text-xs">
              {!searchQuery ? (
                <>
                  <div className="p-2.5 bg-white border border-isro-border rounded hover:bg-slate-50 cursor-pointer" onClick={() => { setActiveMissionKey('ch3'); setSearchOpen(false); }}>
                    <span className="font-bold text-isro-blue">Chandrayaan-3 Mission Details & Data</span>
                    <p className="text-slate-500 text-[11px]">Lunar South Pole Soft Landing Telemetry & Pragyan APXS</p>
                  </div>
                  <div className="p-2.5 bg-white border border-isro-border rounded hover:bg-slate-50 cursor-pointer" onClick={() => { setActiveMissionKey('aditya'); setSearchOpen(false); }}>
                    <span className="font-bold text-isro-blue">Aditya-L1 Solar Mission Data Release</span>
                    <p className="text-slate-500 text-[11px]">Coronal Mass Ejections and SUIT Payload Observations</p>
                  </div>
                </>
              ) : (
                <div className="p-3 bg-white border border-isro-border rounded">
                  <span className="font-bold text-isro-blue">Search results matching &quot;{searchQuery}&quot;:</span>
                  <p className="text-slate-600 text-xs mt-1">Found ISRO documents, telemetry logs, and tender notices.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: LIVE BROADCAST VIDEO PLAYER WITH AESTHETIC WHITE/CREAM FRAME BORDER */}
      {liveVideoModalOpen && (
        <div 
          className="fixed inset-0 glass-modal z-50 flex items-center justify-center p-4 sm:p-6 bg-isro-dark/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLiveVideoModalOpen(false);
          }}
        >
          {/* Outer Aesthetic Swiss Cream & White Frame Border - Tightly Centered in Desktop Screen */}
          <div className="bg-isro-cream p-3 sm:p-4 border-2 border-isro-border rounded-xl shadow-2xl w-full max-w-2xl mx-auto relative overflow-hidden flex flex-col gap-3">
            
            {/* Header Info Bar */}
            <div className="flex justify-between items-center border-b border-isro-border pb-2.5">
              <div className="flex items-center space-x-2.5">
                <div className="bg-red-600 text-white text-[9px] sm:text-[10px] font-bold font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div> LIVE BROADCAST
                </div>
                <div>
                  <h3 className="font-display font-black text-base sm:text-xl text-isro-blue uppercase leading-none">
                    LVM3-M6 / ONEWEB INDIA-2 LIFT OFF
                  </h3>
                  <p className="text-[10px] font-mono text-isro-steel font-semibold uppercase mt-0.5">
                    SATISH DHAWAN SPACE CENTRE (SDSC) SHAR, SRIHARIKOTA
                  </p>
                </div>
              </div>

              <button
                onClick={() => setLiveVideoModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white border border-isro-border text-isro-charcoal hover:text-red-600 hover:border-red-400 flex items-center justify-center text-base font-bold transition shadow-sm shrink-0"
                title="Close Broadcast"
              >
                ×
              </button>
            </div>

            {/* Video Player Window Frame */}
            <div className="relative w-full aspect-video bg-isro-dark rounded-md overflow-hidden border border-isro-border shadow-inner">
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

            {/* Telemetry & Metadata Footer Bar inside White Frame */}
            <div className="bg-white border border-isro-border rounded-md p-2.5 flex flex-wrap justify-between items-center gap-2 text-[11px] font-mono text-isro-charcoal">
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <span className="text-isro-steel block text-[9px]">MISSION</span>
                  <span className="font-bold text-isro-blue">LVM3-M6 FLIGHT</span>
                </div>
                <div className="hidden sm:block border-r border-slate-200 h-5"></div>
                <div>
                  <span className="text-isro-steel block text-[9px]">PAYLOAD</span>
                  <span className="font-bold text-isro-blue">36 ONEWEB SATELLITES</span>
                </div>
                <div className="hidden sm:block border-r border-slate-200 h-5"></div>
                <div>
                  <span className="text-isro-steel block text-[9px]">STATUS</span>
                  <span className="font-bold text-green-700 uppercase">● NOMINAL</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.isro.gov.in/LVM3_M6_OneWeb.html"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-isro-blue text-white hover:bg-isro-blue-dark px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition flex items-center gap-1"
                >
                  <span>Report</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
