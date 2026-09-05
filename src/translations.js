// Official Bilingual (English & Hindi) Content Dictionary for ISRO Science Portal
// All Hindi terminology adheres strictly to official Government of India / ISRO official Hindi publications

export const translations = {
  en: {
    topBar: {
      gov: "GOVERNMENT OF INDIA",
      dos: "DEPARTMENT OF SPACE",
      isro: "INDIAN SPACE RESEARCH ORGANISATION",
      careers: "Careers",
      tenders: "Tenders",
      rti: "RTI",
      contact: "Contact",
      fontSizeDecrease: "Decrease Font Size",
      fontSizeReset: "Reset Font Size",
      fontSizeIncrease: "Increase Font Size",
      highContrast: "High Contrast",
      readingRuler: "Toggle Reading Ruler",
      friendlyFont: "Friendly Font"
    },
    nav: {
      home: "Home",
      about: "About ISRO",
      activities: "Activities",
      services: "Services",
      launchers: "Launchers",
      programmes: "Programmes",
      centres: "Centres & Units",
      engagements: "Engagements",
      searchPlaceholder: "Search Portal",
      menu: "Menu",
      // Dropdown items
      orgProfile: "Organisation Profile",
      visionMission: "Vision, Mission & Objectives",
      chairman: "Secretary DoS / Chairman ISRO",
      dosCentres: "DoS Centres & Units",
      autonomousBodies: "Autonomous Bodies (PRL, IIST)",
      timeline: "Space Exploration Timeline",
      contactHq: "Contact & Headquarters",
      missionsAccomplished: "Missions Accomplished",
      upcomingMissions: "Upcoming Space Missions",
      launchVehiclesFleet: "Launch Vehicles (LVM3, PSLV, SSLV)",
      gaganyaanBrief: "Gaganyaan Human Spaceflight",
      adityaBrief: "Aditya-L1 Solar Mission",
      inspaceAuth: "IN-SPACe Authorisations",
      commercialLaunch: "Commercial Launch Services",
      bhuvanService: "Bhuvan 2D/3D Geospatial Service",
      bhoonidhiService: "Bhoonidhi Earth Observation Hub",
      mosdacService: "MOSDAC Meteorological Data",
      ndemService: "Disaster Management (NDEM)",
      yuvikaProg: "YUVIKA Young Scientist Programme",
      unnatiProg: "UNNATI Nano-satellite Training",
      studentSatsProg: "Student Satellite Initiatives",
      spaceTutors: "Space Tutor Network",
      merchandiseProg: "Official Space Merchandise",
      allCentres: "All Centres & Labs (20)",
      majorCentres: "Major ISRO Centres (14)",
      enterprises: "IN-SPACe & NSIL",
      icrbRecruit: "Careers & ICRB Recruitment",
      procurement: "Tenders & E-Procurement",
      pressMedia: "Press Releases & Media",
      stemStudents: "Students & STEM Activities",
      industryPartners: "Industry Partnerships & Start-ups"
    },
    hero: {
      orgName: "Indian Space Research Organisation",
      orgSub: "Official Space Agency of India",
      desc: "ISRO Science seeks to discover the secrets of the universe, search for water and ice in the lunar polar regions, study solar coronal dynamics, and protect and improve life on Earth through space applications.",
      ch3Badge: "Chandrayaan-3",
      ch3Sub: "Shiv Shakti Point Regolith Data",
      adityaBadge: "Aditya-L1 Observatory",
      adityaSub: "Sun Halo Orbit Telemetry Active",
      displayTitle1: "ISRO SCIENCE",
      displayTitle2: "ISRO SCIENCE",
      liveBroadcast: "Live Broadcast",
      videoTitle: "LVM3-M6 Lift Off",
      videoCenter: "SDSC SHAR",
      videoClickTitle: "Click to view Live Broadcast in full window"
    },
    flash: {
      label: "FLASH NEWS",
      items: [
        { title: "NISAR S-Band SAR Data Products Release Available on Bhoonidhi", target: "portals", portalKey: "bhoonidhi" },
        { title: "Bharatiya Antariksh Hackathon (BAH) 2026 Shortlisted Teams for Grand Finale at NRSC Hyderabad", target: "news" },
        { title: "Aditya-L1 SUIT Instrument Observes Solar Flare Coronal Ejection", target: "missions", missionKey: "aditya" },
        { title: "Gaganyaan Integrated Main Parachute Air Drop Test (IMAT) Successfully Qualified", target: "missions", missionKey: "gaganyaan" },
        { title: "YUVIKA 2026 Second Selection List Announced for Young Scientists", target: "programmes" }
      ]
    },
    features: {
      tag: "// OFFICIAL QUICK ACCESS PORTALS",
      sub: "DIRECT REDIRECTIONS",
      press: {
        title: "PRESS RELEASE",
        desc: "Official press announcements & mission updates.",
        btn: "View News Feed"
      },
      careers: {
        title: "CAREERS",
        desc: "Recruitment notices for scientific & administrative posts.",
        btn: "Recruitment Portal"
      },
      students: {
        title: "STUDENTS",
        desc: "STEM programs, YUVIKA, and student satellite initiatives.",
        btn: "View Programmes"
      },
      tenders: {
        title: "TENDERS",
        desc: "E-Procurement notices across all ISRO Centres.",
        btn: "Procurement Notices"
      }
    },
    news: {
      tag: "// OFFICIAL ANNOUNCEMENTS",
      title: "LATEST ISRO NEWS FEED",
      liveBadge: "● LIVE OFFICIAL FEED",
      exploreBtn: "Explore Related Section",
      pdfBtn: "PDF Announcement (119 KB)",
      items: [
        {
          id: 0,
          title: "ISRO Conducts START Capacity Building Workshop-2026 at IIRS, Dehradun",
          desc: "Space Science and Technology Awareness Training (START) capacity building workshop brought together over 500 undergraduate and postgraduate students for deep-space science mentorship.",
          tag: "TRAINING & OUTREACH",
          section: "programmes"
        },
        {
          id: 1,
          title: "NISAR S-Band SAR Data Products Release for Global Research",
          desc: "Dual-frequency Synthetic Aperture Radar data products released on Bhoonidhi portal for ecosystem structure, ice sheet dynamics, and land deformation mapping.",
          tag: "EARTH OBSERVATION",
          section: "portals"
        },
        {
          id: 2,
          title: "Bharatiya Antariksh Hackathon (BAH) – 2026 Grand Finale at NRSC Hyderabad",
          desc: "30 shortlisted student teams prepare for 36-hour continuous hackathon developing geospatial AI models and satellite imagery analysis applications.",
          tag: "HACKATHON 2026",
          section: "news"
        },
        {
          id: 3,
          title: "First National Workshop on Microgravity Research for Space Biology",
          desc: "ISRO convenes national scientists to formulate payload experiments for future Bharatiya Antariksh Station (BAS) and Gaganyaan microgravity modules.",
          tag: "MICROGRAVITY",
          section: "missions"
        },
        {
          id: 4,
          title: "Aditya-L1 Mission: Announcement of Opportunity (AO) for 3rd Cycle Observations",
          desc: "Soliciting observational proposals from international astronomy community for VELC, SUIT, and ASPEX payloads on Sun-Earth L1 halo orbit.",
          tag: "SOLAR PHYSICS",
          section: "missions"
        },
        {
          id: 5,
          title: "ISRO Conducts Successful Hot Test of Semicryogenic Engine Power Head Article",
          desc: "Achieved higher thrust level qualification test at IPRC Mahendragiri for upcoming Next Generation Launch Vehicle (NGLV) propulsion systems.",
          tag: "PROPULSION",
          section: "launchers"
        }
      ]
    },
    poster: {
      tag: "// SPECIAL HIGHLIGHTS",
      title: "MISSION SPOTLIGHT",
      slides: [
        {
          id: "hackathon",
          tag: "// SPECIAL ANNOUNCEMENT 2026",
          tabLabel: "Hackathon 2026",
          lines: [
            { text: "BHARATIYA ANTARIKSH", highlight: true },
            { text: "HACKATHON:", highlight: false },
            { text: "THROUGH THE EYES", highlight: true },
            { text: "OF ISRO SCIENCE", highlight: true }
          ],
          buttonText: "VIEW GRAND FINALE RESULTS",
          meta: "NRSC Hyderabad • August 6-7, 2026",
          target: "portals",
          portalKey: "bhuvan",
          toast: "Opening Bharatiya Antariksh Hackathon results archive"
        },
        {
          id: "chandrayaan3",
          tag: "// LUNAR EXPLORATION MISSION",
          tabLabel: "Chandrayaan-3",
          lines: [
            { text: "CHANDRAYAAN-3:", highlight: true },
            { text: "LUNAR WATER ICE", highlight: false },
            { text: "AND REGOLITH", highlight: true },
            { text: "DISCOVERIES", highlight: true }
          ],
          buttonText: "EXPLORE PAYLOAD DATA",
          meta: "Shiv Shakti Point • RAMBHA-LP & APXS Science Payloads",
          target: "missions",
          missionKey: "ch3",
          toast: "Opening Chandrayaan-3 lunar science brief"
        },
        {
          id: "aditya",
          tag: "// SOLAR HELIOPHYSICS OBSERVATORY",
          tabLabel: "Aditya-L1",
          lines: [
            { text: "ADITYA-L1:", highlight: true },
            { text: "SOLAR CORONA DYNAMICS", highlight: false },
            { text: "FROM LAGRANGE", highlight: true },
            { text: "POINT L1", highlight: true }
          ],
          buttonText: "VIEW SOLAR EMISSION DATA",
          meta: "1.5 Million km from Earth • Continuous Sun Telemetry Active",
          target: "missions",
          missionKey: "aditya",
          toast: "Opening Aditya-L1 solar observatory telemetry"
        },
        {
          id: "gaganyaan",
          tag: "// HUMAN SPACEFLIGHT PROGRAMME",
          tabLabel: "Gaganyaan",
          lines: [
            { text: "GAGANYAAN:", highlight: true },
            { text: "FIRST CREWED ORBITAL", highlight: false },
            { text: "FLIGHT TO", highlight: true },
            { text: "LOW EARTH ORBIT", highlight: true }
          ],
          buttonText: "INSPECT FLIGHT ARCHITECTURE",
          meta: "400 km Low Earth Orbit • Human-Rated HLVM3 Staging",
          target: "missions",
          missionKey: "gaganyaan",
          toast: "Opening Gaganyaan human spaceflight brief"
        },
        {
          id: "nspd",
          tag: "// NATIONAL CELEBRATION 2026",
          tabLabel: "Space Day",
          lines: [
            { text: "NATIONAL SPACE DAY:", highlight: true },
            { text: "TOUCHING LIVES", highlight: false },
            { text: "WHILE TOUCHING", highlight: true },
            { text: "THE MOON", highlight: true }
          ],
          buttonText: "JOIN NSpD CELEBRATIONS",
          meta: "August 23, 2026 • Bharat Mandapam & Nationwide STEM",
          target: "programmes",
          toast: "National Space Day 2026 celebration guidelines"
        },
        {
          id: "nisar",
          tag: "// JOINT NASA-ISRO RADAR MISSION",
          tabLabel: "NISAR Radar",
          lines: [
            { text: "NISAR ORBITER:", highlight: true },
            { text: "GLOBAL ECOSYSTEM", highlight: false },
            { text: "AND CRYOSPHERE", highlight: true },
            { text: "RADAR MAPPING", highlight: true }
          ],
          buttonText: "VIEW RADAR DATA PRODUCTS",
          meta: "Dual-Frequency L & S Band SAR • Bhoonidhi Open Data",
          target: "portals",
          portalKey: "bhoonidhi",
          toast: "Directing to Bhoonidhi SAR open access portal"
        }
      ]
    },
    missions: {
      tag: "// ISRO KEY SCIENCE MISSIONS",
      briefBtn: "MISSION BRIEF",
      telemetryBtn: "ACTIVE TELEMETRY",
      cards: [
        {
          key: "ch3",
          category: "LUNAR EXPLORATION",
          title: "Chandrayaan-3",
          desc: "Historic soft landing at the Lunar South Pole. Payload RAMBHA-LP and APXS discovered regolith heterogeneity and water-ice signatures.",
          isInverted: false
        },
        {
          key: "gaganyaan",
          category: "HUMAN SPACEFLIGHT",
          title: "Gaganyaan Orbital Mission",
          desc: "Demonstrating human spaceflight capability to Low Earth Orbit (300-400 km) with 3 crew members and safe recovery in Indian waters.",
          isInverted: false
        },
        {
          key: "aditya",
          category: "SOLAR HELIOPHYSICS",
          title: "Aditya-L1 Solar Mission",
          desc: "Stationed at Sun-Earth Lagrange Point 1 (1.5M km from Earth) continuously observing the solar corona, CMEs, and magnetic storms.",
          isInverted: true
        },
        {
          key: "nisar",
          category: "EARTH SCIENCE • JOINT NASA-ISRO",
          title: "NISAR Radar Satellite",
          desc: "Dual-frequency (L & S Band) Synthetic Aperture Radar mapping global land surface changes, ice sheet collapse, and ecosystems.",
          isInverted: false
        },
        {
          key: "xposat",
          category: "ASTROPHYSICS OBSERVATORY",
          title: "XPoSat Polarimetry",
          desc: "India's first dedicated polarimetry mission studying x-ray emission polarization from neutron stars, black hole binaries, and AGNs.",
          isInverted: false
        },
        {
          key: "vom",
          category: "PLANETARY SCIENCE",
          title: "Venus Orbiter (VOM)",
          desc: "Upcoming planetary mission to study Venusian atmosphere dynamics, subsurface radar imaging, and solar wind interactions.",
          isInverted: false
        }
      ]
    },
    launchers: {
      tag: "INDIGENOUS ACCESS TO SPACE",
      title: "ISRO LAUNCH VEHICLES & ROCKETS",
      subtitle: "Interactive Operational Fleet & Future Launcher Showcase",
      milestonesLabel: "SIGNIFICANT HISTORIC MILESTONES:",
      firstLaunchLabel: "FIRST LAUNCH DATE",
      heightLabel: "VEHICLE HEIGHT",
      massLabel: "LIFT-OFF MASS",
      payloadLabel: "PAYLOAD CAPACITY",
      stagingLabel: "STAGING ARCHITECTURE",
      viewMissionsBtn: "View Supported Missions"
    },
    portals: {
      tag: "ONLINE APPLICATIONS",
      title: "ISRO DIGITAL PORTALS",
      subtitle: "Geospatial • Earth Observation • Data Archives",
      launchBtn: "Launch External Portal →",
      cancelBtn: "Cancel"
    },
    programmes: {
      tag: "// EDUCATIONAL & OUTREACH INITIATIVES",
      title: "PROGRAMMES & OUTREACH",
      askExpertBtn: "Ask a Space Scientist",
      regBtn: "Registration Guidelines"
    },
    centres: {
      tag: "DEPARTMENT OF SPACE",
      title: "ISRO CENTRES & RESEARCH INSTITUTES",
      all: "All",
      isroCentres: "ISRO Centres",
      autonomous: "Autonomous Bodies",
      enterprises: "IN-SPACe & NSIL"
    },
    footer: {
      hqTitle: "ISRO HQ",
      hqAddress: "Indian Space Research Organisation\nAntariksh Bhavan, New BEL Road\nBengaluru-560 094, India",
      phone: "Phone: +91 80 22172294 / 96",
      email: "Email: isropr[at]isro[dot]gov[dot]in",
      quickLinks: "Quick Redirections",
      policies: "Website Policies",
      connect: "Connect With Us",
      dept: "Department of Space, Govt of India",
      chairman: "Chairman: Dr. V. Narayanan",
      stqc: "Certified STQC Compliant Web Portal",
      copyright: "© Copyright 2026 ISRO. All Rights Reserved.",
      lastUpdated: "Last Updated: August 02, 2026 (IST)"
    },
    quickMenu: {
      nspd: "NSpD-2026 HIGHLIGHTS",
      expert: "ASK AN EXPERT",
      feedback: "FEEDBACK FORM",
      contact: "CONTACT US"
    },
    programmesList: [
      {
        id: "yuvika",
        code: "YUVIKA",
        title: "Yuva Vigyani Karyakram",
        tagline: "Young Scientist Residential Space Camp",
        desc: "Flagship summer initiative selecting top students from every Indian State & UT for two-week immersion at ISRO Centres covering rocket building, satellite labs, and space astronomy.",
        badge: "ANNUAL REGISTRATION ACTIVE"
      },
      {
        id: "unnati",
        code: "UNNATI",
        title: "Unispace Nanosatellite Assembly",
        tagline: "International Nano-Satellite Training",
        desc: "Capacity-building initiative hosted by URSC Bengaluru for engineers and scientists from developing nations to master nano-satellite design, integration, and environmental testing.",
        badge: "GLOBAL CAPACITY BUILDING"
      },
      {
        id: "student-sats",
        code: "STUDENT SATS",
        title: "Student Satellite Mission Support",
        tagline: "University CubeSat Launch Initiative",
        desc: "End-to-end launch opportunities and technical consultation on PSLV upper stage (POEM) for academic institutions building experimental scientific payloads.",
        badge: "UNIVERSITY ENGAGEMENT"
      },
      {
        id: "spacetutor",
        code: "SPACE TUTOR",
        title: "Registered Space Tutor Network",
        tagline: "Accredited Space Science Educators",
        desc: "Empanelled non-governmental organizations and educational bodies spreading hands-on space knowledge, rocketry workshops, and telescope stargazing across rural schools.",
        badge: "NATIONAL NETWORK"
      },
      {
        id: "space-on-wheels",
        code: "SPACE ON WHEELS",
        title: "Mobile Space Exhibition Vans",
        tagline: "Touring Interactive Science Labs",
        desc: "Custom-built air-conditioned exhibition buses equipped with working scale models of rockets, satellite mock-ups, and audio-visual displays touring districts across India.",
        badge: "DISTRICT OUTREACH"
      },
      {
        id: "merchandise",
        code: "MERCHANDISE",
        title: "Official ISRO Space Merchandise",
        tagline: "Authorized Scale Models & Collectibles",
        desc: "ISRO authorized commercial merchandise partners creating precision scale models of LVM3, PSLV, Chandrayaan, Gaganyaan astronaut memorabilia, and apparel.",
        badge: "AUTHORIZED STORES"
      }
    ],
    directoryItems: [
      { code: "ISRO HQ", location: "BENGALURU", name: "ISRO Headquarters", cat: "centres", link: "https://www.isro.gov.in", icon: "fa-solid fa-building-flag" },
      { code: "VSSC", location: "THIRUVANANTHAPURAM", name: "Vikram Sarabhai Space Centre", cat: "centres", link: "https://www.vssc.gov.in", icon: "fa-solid fa-rocket" },
      { code: "SDSC SHAR", location: "SRIHARIKOTA", name: "Satish Dhawan Space Centre", cat: "centres", link: "https://www.shar.gov.in", icon: "fa-solid fa-tower-broadcast" },
      { code: "URSC", location: "BENGALURU", name: "U R Rao Satellite Centre", cat: "centres", link: "https://www.ursc.gov.in", icon: "fa-solid fa-satellite" },
      { code: "SAC", location: "AHMEDABAD", name: "Space Applications Centre", cat: "centres", link: "https://www.sac.gov.in", icon: "fa-solid fa-satellite-dish" },
      { code: "NRSC", location: "HYDERABAD", name: "National Remote Sensing Centre", cat: "centres", link: "https://www.nrsc.gov.in", icon: "fa-solid fa-earth-asia" },
      { code: "HSFC", location: "BENGALURU", name: "Human Space Flight Centre", cat: "centres", link: "https://www.isro.gov.in/Gaganyaan.html", icon: "fa-solid fa-user-astronaut" },
      { code: "IPRC", location: "MAHENDRAGIRI", name: "ISRO Propulsion Complex", cat: "centres", link: "https://www.iprc.gov.in", icon: "fa-solid fa-fire-flame-curved" },
      { code: "IISU", location: "THIRUVANANTHAPURAM", name: "ISRO Inertial Systems Unit", cat: "centres", link: "https://www.isro.gov.in/isro_centre.html", icon: "fa-solid fa-compass" },
      { code: "LPSC", location: "VALIAMALA / BENGALURU", name: "Liquid Propulsion Systems Centre", cat: "centres", link: "https://www.lpsc.gov.in", icon: "fa-solid fa-flask-vial" },
      { code: "ISTRAC", location: "BENGALURU", name: "ISRO Telemetry Tracking & Command", cat: "centres", link: "https://www.istrac.gov.in", icon: "fa-solid fa-radar" },
      { code: "MCF", location: "HASSAN / BHOPAL", name: "Master Control Facility", cat: "centres", link: "https://www.mcf.gov.in", icon: "fa-solid fa-sliders" },
      { code: "LEOS", location: "BENGALURU", name: "Laboratory for Electro-Optics Systems", cat: "centres", link: "https://www.isro.gov.in", icon: "fa-solid fa-eye" },
      { code: "IIRS", location: "DEHRADUN", name: "Indian Institute of Remote Sensing", cat: "centres", link: "https://www.iirs.gov.in", icon: "fa-solid fa-graduation-cap" },
      { code: "PRL", location: "AHMEDABAD", name: "Physical Research Laboratory", cat: "autonomous", link: "https://www.prl.res.in", icon: "fa-solid fa-atom" },
      { code: "NARL", location: "GADANKI", name: "National Atmospheric Research Lab", cat: "autonomous", link: "https://www.narl.gov.in", icon: "fa-solid fa-wind" },
      { code: "NESAC", location: "SHILLONG", name: "North Eastern Space Applications Centre", cat: "autonomous", link: "https://www.nesac.gov.in", icon: "fa-solid fa-mountain-sun" },
      { code: "IIST", location: "THIRUVANANTHAPURAM", name: "Indian Institute of Space Tech", cat: "autonomous", link: "https://www.iist.ac.in", icon: "fa-solid fa-school" },
      { code: "IN-SPACe", location: "AHMEDABAD", name: "IN-SPACe Authorization Centre", cat: "enterprises", link: "https://www.inspace.gov.in", icon: "fa-solid fa-handshake" },
      { code: "NSIL", location: "BENGALURU", name: "NewSpace India Limited", cat: "enterprises", link: "https://www.nsilindia.co.in", icon: "fa-solid fa-briefcase" }
    ],
    vehicleModelsData: {
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
    },
    portalsList: [
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
    ],
    missionData: {
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
    },
    modals: {
      mission: {
        launchVehicle: "LAUNCH VEHICLE",
        orbit: "OPERATIONAL ORBIT",
        status: "STATUS",
        inspectRocket: "Inspect Rocket Specs",
        close: "Close Window"
      },
      portal: {
        label: "ISRO ONLINE PORTAL",
        cancel: "Cancel",
        launch: "Launch External Portal →"
      },
      careers: {
        label: "ISRO RECRUITMENT PORTAL",
        title: "CURRENT CAREERS OPPORTUNITIES",
        item1Title: "Scientist/Engineer 'SC' (Electronics & Mechanical)",
        item1Badge: "OPEN",
        item1Desc: "Recruitment through ICRB for VSSC, URSC, SAC, and SDSC SHAR centres. BE/B.Tech first class qualification.",
        item2Title: "Junior Research Fellowship (JRF) in Space Science",
        item2Badge: "PRL / NARL",
        item2Desc: "Research projects in planetary atmospheres, solar physics, and ionospheric radio wave modeling.",
        item3Title: "Graduate & Technician Apprenticeship 2026",
        item3Badge: "APPLY NOW",
        item3Desc: "One-year apprenticeship training under Apprentices Act for engineering diploma and degree holders.",
        close: "Close",
        officialBtn: "Go to Official ICRB Website →"
      },
      tenders: {
        label: "PROCUREMENT & COMMERCIAL",
        title: "ACTIVE TENDER NOTICES",
        item1Title: "VSSC/PUR/2026/041 - Cryogenic Valve Testing",
        item1Loc: "THIRUVANANTHAPURAM",
        item1Desc: "Supply and qualification testing of high-pressure cryogenic liquid propellant actuation assemblies.",
        item2Title: "SDSC/SHAR/COMM/019 - Launch Pad Maintenance",
        item2Loc: "SRIHARIKOTA",
        item2Desc: "Annual maintenance contract for umbilicals and acoustic water deluge suppression systems.",
        item3Title: "URSC/SAT/OPT/088 - Optical Sensor Calibration",
        item3Loc: "BENGALURU",
        item3Desc: "Precision alignment fixtures and thermal vacuum calibration setup for satellite earth imaging payloads.",
        close: "Close",
        eprocBtn: "Open E-Procurement Portal →"
      },
      rti: {
        label: "TRANSPARENCY & GOVERNANCE",
        title: "RIGHT TO INFORMATION (RTI)",
        cpioTitle: "CENTRAL PUBLIC INFORMATION OFFICER (CPIO)",
        cpioAddr: "ISRO Headquarters, Antariksh Bhavan, New BEL Road, Bengaluru-560 094",
        cpioContact: "Tel: 080-22172294 | cpio[at]isro[dot]gov[dot]in",
        appellateTitle: "APPELLATE AUTHORITY",
        appellateDesc: "Joint Secretary, Department of Space, Bengaluru",
        portalInfo: "Citizens can submit online RTI requests through the Government of India RTI portal at",
        selectDos: "selecting Department of Space.",
        close: "Close",
        portalBtn: "Go to RTI Online Portal →"
      },
      feedback: {
        label: "CITIZEN ENGAGEMENT",
        title: "FEEDBACK & GRIEVANCES",
        name: "Your Full Name",
        namePlaceholder: "e.g. Dr. Rajesh Sharma",
        email: "Email Address",
        emailPlaceholder: "name@domain.gov.in",
        category: "Subject / Category",
        cat1: "Website Feedback & Accessibility",
        cat2: "Mission Telemetry & Science Data",
        cat3: "Student YUVIKA Registration",
        cat4: "Recruitment & ICRB Inquiries",
        cat5: "Other Feedback",
        message: "Message / Comment",
        msgPlaceholder: "Please share your feedback or suggestions...",
        cancel: "Cancel",
        submit: "Submit Feedback",
        successToast: "Thank you! Your feedback has been recorded successfully."
      },
      expert: {
        label: "TECHNICAL CONSULTATION",
        title: "ASK AN ISRO SCIENTIST",
        desc: "Submit technical queries regarding payload development, satellite orbits, planetary data analysis, or space education. Queries will be reviewed by scientists at ISRO research centres.",
        affiliation: "Affiliation / Institution",
        affilPlaceholder: "University, College, or Research Institute",
        domain: "Domain of Query",
        dom1: "Launch Vehicle Propulsion & Aerodynamics",
        dom2: "Satellite Remote Sensing & GIS",
        dom3: "Planetary Astronomy (Moon / Mars / Venus)",
        dom4: "Space Biology & Microgravity",
        dom5: "CubeSat & Payload Engineering",
        question: "Your Technical Question",
        qPlaceholder: "Provide details about your experiment or question...",
        cancel: "Cancel",
        submit: "Send Question",
        successToast: "Your inquiry has been submitted to the scientific committee."
      },
      search: {
        title: "SEARCH ISRO SCIENCE DATABASE",
        placeholder: "Type keyword (e.g., Chandrayaan, Gaganyaan, Launchers, Tenders, Portals)...",
        resultsFor: "Search results matching",
        directing: "Directing to matching ISRO telemetry & database records."
      },
      video: {
        liveBadge: "LIVE BROADCAST",
        title: "LVM3-M6 / ONEWEB INDIA-2 LIFT OFF",
        location: "SATISH DHAWAN SPACE CENTRE (SDSC) SHAR, SRIHARIKOTA",
        missionLabel: "MISSION",
        missionVal: "LVM3-M6 FLIGHT",
        payloadLabel: "PAYLOAD",
        payloadVal: "36 ONEWEB SATELLITES",
        statusLabel: "STATUS",
        statusVal: "● NOMINAL",
        specsBtn: "Vehicle Specs"
      }
    }
  },

  // HINDI TRANSLATION (हिंदी)
  hi: {
    topBar: {
      gov: "भारत सरकार",
      dos: "अंतरिक्ष विभाग",
      isro: "भारतीय अंतरिक्ष अनुसंधान संगठन",
      careers: "करियर",
      tenders: "निविदाएं",
      rti: "आरटीआई",
      contact: "संपर्क",
      fontSizeDecrease: "फ़ॉन्ट का आकार घटाएं",
      fontSizeReset: "फ़ॉन्ट रीसेट करें",
      fontSizeIncrease: "फ़ॉन्ट का आकार बढ़ाएं",
      highContrast: "उच्च कंट्रास्ट",
      readingRuler: "पठन रूलर चालू/बंद",
      friendlyFont: "सुलभ फ़ॉन्ट"
    },
    nav: {
      home: "होम",
      about: "इसरो के बारे में",
      activities: "गतिविधियां",
      services: "सेवाएं",
      launchers: "प्रक्षेपण यान",
      programmes: "कार्यक्रम",
      centres: "केन्द्र एवं इकाइयाँ",
      engagements: "सहभागिता",
      searchPlaceholder: "पोर्टल में खोजें",
      menu: "मेनू",
      // Dropdown items
      orgProfile: "संगठन प्रोफ़ाइल",
      visionMission: "दृष्टिकोण, ध्येय एवं उद्देश्य",
      chairman: "सचिव अं.वि. / अध्यक्ष इसरो",
      dosCentres: "अं.वि. केन्द्र एवं इकाइयाँ",
      autonomousBodies: "स्वायत्त निकाय (पीआरएल, आईआईएसटी)",
      timeline: "अंतरिक्ष अन्वेषण समयरेखा",
      contactHq: "संपर्क एवं मुख्यालय",
      missionsAccomplished: "सफल अंतरिक्ष मिशन",
      upcomingMissions: "आगामी अंतरिक्ष मिशन",
      launchVehiclesFleet: "प्रक्षेपक बेड़ा (LVM3, PSLV, SSLV)",
      gaganyaanBrief: "गगनयान मानव अंतरिक्ष उड़ान",
      adityaBrief: "आदित्य-एल1 सौर मिशन",
      inspaceAuth: "इन-स्पेस (IN-SPACe) प्राधिकरण",
      commercialLaunch: "वाणिज्यिक प्रक्षेपण सेवाएं",
      bhuvanService: "भुवन 2D/3D भूस्थानिक सेवा",
      bhoonidhiService: "भूनिधि पृथ्वी अवलोकन केंद्र",
      mosdacService: "मोसडैक (MOSDAC) मौसम डेटा",
      ndemService: "आपदा प्रबंधन सहायता (NDEM)",
      yuvikaProg: "युविका युवा विज्ञानी कार्यक्रम",
      unnatiProg: "उन्नति (UNNATI) नैनो-उपग्रह प्रशिक्षण",
      studentSatsProg: "छात्र उपग्रह पहल",
      spaceTutors: "अंतरिक्ष शिक्षक (Space Tutor) नेटवर्क",
      merchandiseProg: "आधिकारिक अंतरिक्ष उत्पाद",
      allCentres: "सभी केन्द्र एवं प्रयोगशालाएं (20)",
      majorCentres: "प्रमुख इसरो केन्द्र (14)",
      enterprises: "इन-स्पेस एवं एनएसआईएल (NSIL)",
      icrbRecruit: "करियर एवं आईसीआरबी भर्ती",
      procurement: "निविदाएं एवं ई-खरीद",
      pressMedia: "प्रेस विज्ञप्तियां एवं मीडिया",
      stemStudents: "विद्यार्थी एवं स्टेम (STEM) गतिविधियां",
      industryPartners: "उद्योग साझेदारी एवं स्टार्ट-अप"
    },
    hero: {
      orgName: "भारतीय अंतरिक्ष अनुसंधान संगठन",
      orgSub: "अंतरिक्ष विभाग, भारत सरकार",
      desc: "इसरो विज्ञान का उद्देश्य ब्रह्मांड के रहस्यों की खोज करना, चंद्र ध्रुवीय क्षेत्रों में जल और बर्फ की खोज करना, सौर कोरोना की गतिशीलता का अध्ययन करना और अंतरिक्ष अनुप्रयोगों के माध्यम से पृथ्वी पर जीवन की रक्षा और सुधार करना है।",
      ch3Badge: "चंद्रयान-3",
      ch3Sub: "शिव शक्ति बिंदु रेगोलिथ डेटा",
      adityaBadge: "आदित्य-एल1 वेधशाला",
      adityaSub: "सूर्य हेलो कक्षा टेलीमेट्री सक्रिय",
      displayTitle1: "इसरो विज्ञान",
      displayTitle2: "इसरो विज्ञान",
      liveBroadcast: "सीधा प्रसारण",
      videoTitle: "एलवीएम3-एम6 उत्थापन",
      videoCenter: "एसडीएससी शार",
      videoClickTitle: "पूर्ण विंडो में सीधा प्रसारण देखने के लिए क्लिक करें"
    },
    flash: {
      label: "ताज़ा समाचार",
      items: [
        { title: "निसार (NISAR) एस-बैंड एसएआर डेटा उत्पाद भूनिधि पोर्टल पर उपलब्ध", target: "portals", portalKey: "bhoonidhi" },
        { title: "भारतीय अंतरिक्ष हैकाथॉन (BAH) 2026 ग्रैंड फिनाले एनआरएससी हैदराबाद में आयोजित", target: "news" },
        { title: "आदित्य-एल1 के सूट (SUIT) उपकरण ने सौर ज्वाला कोरोनल उत्सर्जन का अवलोकन किया", target: "missions", missionKey: "aditya" },
        { title: "गगनयान एकीकृत मुख्य पैराशूट एयर ड्रॉप परीक्षण (IMAT) सफलतापूर्वक संपन्न", target: "missions", missionKey: "gaganyaan" },
        { title: "युविका (YUVIKA) 2026 युवा वैज्ञानिकों के लिए द्वितीय चयन सूची जारी", target: "programmes" }
      ]
    },
    features: {
      tag: "// आधिकारिक त्वरित पहुँच पोर्टल",
      sub: "सीधा अनुप्रेषण",
      press: {
        title: "प्रेस विज्ञप्ति",
        desc: "आधिकारिक प्रेस घोषणाएं एवं मिशन अपडेट।",
        btn: "समाचार फ़ीड देखें"
      },
      careers: {
        title: "करियर",
        desc: "वैज्ञानिक एवं प्रशासनिक पदों के लिए भर्ती सूचनाएं।",
        btn: "भर्ती पोर्टल"
      },
      students: {
        title: "विद्यार्थी",
        desc: "स्टेम कार्यक्रम, युविका, और छात्र उपग्रह पहल।",
        btn: "कार्यक्रम देखें"
      },
      tenders: {
        title: "निविदाएं",
        desc: "सभी इसरो केन्द्रों में ई-खरीद सूचनाएं।",
        btn: "खरीद सूचनाएं"
      }
    },
    news: {
      tag: "// आधिकारिक घोषणाएं",
      title: "नवीनतम इसरो समाचार",
      liveBadge: "● सीधा आधिकारिक फ़ीड",
      exploreBtn: "संबंधित अनुभाग देखें",
      pdfBtn: "पीडीएफ घोषणा (119 KB)",
      items: [
        {
          id: 0,
          title: "इसरो ने आईआईआरएस, देहरादून में 'स्टार्ट' क्षमता निर्माण कार्यशाला-2026 आयोजित की",
          desc: "अंतरिक्ष विज्ञान और प्रौद्योगिकी जागरूकता प्रशिक्षण (START) कार्यशाला में 500 से अधिक छात्रों ने गहन अंतरिक्ष विज्ञान मार्गदर्शन प्राप्त किया।",
          tag: "प्रशिक्षण एवं आउटरीच",
          section: "programmes"
        },
        {
          id: 1,
          title: "वैश्विक अनुसंधान के लिए निसार (NISAR) एस-बैंड एसएआर डेटा उत्पाद जारी",
          desc: "पारिस्थितिकी तंत्र, बर्फ की चादरों की गतिशीलता और भूमि विरूपण मानचित्रण के लिए भूनिधि पोर्टल पर डेटा उत्पाद जारी किए गए।",
          tag: "पृथ्वी अवलोकन",
          section: "portals"
        },
        {
          id: 2,
          title: "एनआरएससी हैदराबाद में भारतीय अंतरिक्ष हैकाथॉन (BAH) – 2026 ग्रैंड फिनाले",
          desc: "30 चयनित छात्र टीमें भूस्थानिक एआई मॉडल और उपग्रह छवि विश्लेषण अनुप्रयोगों के विकास के लिए 36 घंटे के हैकाथॉन में भाग ले रही हैं।",
          tag: "हैकाथॉन 2026",
          section: "news"
        },
        {
          id: 3,
          title: "अंतरिक्ष जीव विज्ञान के लिए सूक्ष्म गुरुत्वाकर्षण अनुसंधान पर पहली राष्ट्रीय कार्यशाला",
          desc: "इसरो ने भारतीय अंतरिक्ष स्टेशन (BAS) और गगनयान मॉड्यूल के लिए पेलोड प्रयोग तैयार करने हेतु राष्ट्रीय वैज्ञानिकों की बैठक बुलाई।",
          tag: "सूक्ष्म गुरुत्वाकर्षण",
          section: "missions"
        },
        {
          id: 4,
          title: "आदित्य-एल1 मिशन: तीसरे चक्र के अवलोकनों के लिए अवसर की घोषणा (AO)",
          desc: "सूर्य-पृथ्वी एल1 हेलो कक्षा पर वीईएलसी, सूट और एस्पेक्ट्स पेलोड के लिए अंतर्राष्ट्रीय खगोल विज्ञान समुदाय से प्रस्ताव आमंत्रित।",
          tag: "सौर भौतिकी",
          section: "missions"
        },
        {
          id: 5,
          title: "इसरो ने सेमीक्रायोजेनिक इंजन पावर हेड आर्टिकल का सफल हॉट टेस्ट किया",
          desc: "आगामी नेक्स्ट जेनरेशन लॉन्च व्हीकल (NGLV) के लिए आईपीआरसी महेंद्रगिरि में उच्च थ्रस्ट स्तर योग्यता परीक्षण संपन्न हुआ।",
          tag: "प्रणोदन",
          section: "launchers"
        }
      ]
    },
    poster: {
      tag: "// विशेष मुख्य आकर्षण",
      title: "मिशन स्पॉटलाइट",
      slides: [
        {
          id: "hackathon",
          tag: "// विशेष घोषणा 2026",
          tabLabel: "हैकाथॉन 2026",
          lines: [
            { text: "भारतीय अंतरिक्ष", highlight: true },
            { text: "हैकाथॉन 2026:", highlight: false },
            { text: "इसरो विज्ञान", highlight: true },
            { text: "की नई उड़ान", highlight: true }
          ],
          buttonText: "ग्रैंड फिनाले परिणाम देखें",
          meta: "एनआरएससी हैदराबाद • 6-7 अगस्त, 2026",
          target: "portals",
          portalKey: "bhuvan",
          toast: "भारतीय अंतरिक्ष हैकाथॉन परिणाम पुरालेख खोला जा रहा है"
        },
        {
          id: "chandrayaan3",
          tag: "// चंद्र अन्वेषण मिशन",
          tabLabel: "चंद्रयान-3",
          lines: [
            { text: "चंद्रयान-3:", highlight: true },
            { text: "चंद्र जल-बर्फ", highlight: false },
            { text: "एवं रेगोलिथ", highlight: true },
            { text: "की ऐतिहासिक खोज", highlight: true }
          ],
          buttonText: "पेलोड डेटा देखें",
          meta: "शिव शक्ति पॉइंट • रंभा-एलपी एवं एपीएक्सएस विज्ञान पेलोड",
          target: "missions",
          missionKey: "ch3",
          toast: "चंद्रयान-3 चंद्र विज्ञान विवरण खोला जा रहा है"
        },
        {
          id: "aditya",
          tag: "// सौर हेलियोफिजिक्स वेधशाला",
          tabLabel: "आदित्य-एल1",
          lines: [
            { text: "आदित्य-एल1:", highlight: true },
            { text: "सौर कोरोना गतिशीलता", highlight: false },
            { text: "लाग्रेंज बिंदु", highlight: true },
            { text: "एल1 से सतत अवलोकन", highlight: true }
          ],
          buttonText: "सौर उत्सर्जन डेटा देखें",
          meta: "पृथ्वी से 15 लाख किमी दूर • निरंतर सौर टेलीमेट्री सक्रिय",
          target: "missions",
          missionKey: "aditya",
          toast: "आदित्य-एल1 सौर वेधशाला टेलीमेट्री खोली जा रही है"
        },
        {
          id: "gaganyaan",
          tag: "// मानव अंतरिक्ष उड़ान कार्यक्रम",
          tabLabel: "गगनयान",
          lines: [
            { text: "गगनयान मिशन:", highlight: true },
            { text: "प्रथम मानवयुक्त", highlight: false },
            { text: "पृथ्वी की निम्न", highlight: true },
            { text: "कक्षा में उड़ान", highlight: true }
          ],
          buttonText: "उड़ान संरचना देखें",
          meta: "400 किमी निम्न भू-कक्षा • मानव-रेटेड एचएलवीएम3 रॉकेट",
          target: "missions",
          missionKey: "gaganyaan",
          toast: "गगनयान मानव अंतरिक्ष उड़ान विवरण खोला जा रहा है"
        },
        {
          id: "nspd",
          tag: "// राष्ट्रीय उत्सव 2026",
          tabLabel: "अंतरिक्ष दिवस",
          lines: [
            { text: "राष्ट्रीय अंतरिक्ष दिवस:", highlight: true },
            { text: "छूते हुए जीवन", highlight: false },
            { text: "चांद को", highlight: true },
            { text: "स्पर्श करते हुए", highlight: true }
          ],
          buttonText: "उत्सव में शामिल हों",
          meta: "23 अगस्त, 2026 • भारत मंडपम एवं देशव्यापी स्टेम गतिविधियां",
          target: "programmes",
          toast: "राष्ट्रीय अंतरिक्ष दिवस 2026 दिशानिर्देश"
        },
        {
          id: "nisar",
          tag: "// संयुक्त नासा-इसरो रडार मिशन",
          tabLabel: "निसार रडार",
          lines: [
            { text: "निसार उपग्रह:", highlight: true },
            { text: "वैश्विक पारिस्थितिकी", highlight: false },
            { text: "एवं क्रायोस्फीयर", highlight: true },
            { text: "रडार मानचित्रण", highlight: true }
          ],
          buttonText: "रडार डेटा उत्पाद देखें",
          meta: "द्वि-आवृत्ति एल एवं एस बैंड एसएआर • भूनिधि खुला डेटा",
          target: "portals",
          portalKey: "bhoonidhi",
          toast: "भूनिधि एसएआर ओपन एक्सेस पोर्टल पर अनुप्रेषित"
        }
      ]
    },
    missions: {
      tag: "// इसरो प्रमुख विज्ञान मिशन",
      briefBtn: "मिशन विवरण",
      telemetryBtn: "सक्रिय टेलीमेट्री",
      cards: [
        {
          key: "ch3",
          category: "चंद्र अन्वेषण",
          title: "चंद्रयान-3",
          desc: "चंद्रमा के दक्षिणी ध्रुव पर ऐतिहासिक सॉफ्ट लैंडिंग। रंभा-एलपी और एपीएक्सएस पेलोड ने रेगोलिथ और जल-बर्फ के संकेतों की खोज की।",
          isInverted: false
        },
        {
          key: "gaganyaan",
          category: "मानव अंतरिक्ष उड़ान",
          title: "गगनयान कक्षीय मिशन",
          desc: "3 चालक दल के सदस्यों के साथ पृथ्वी की निचली कक्षा (300-400 किमी) में मानव अंतरिक्ष उड़ान क्षमता का प्रदर्शन और सुरक्षित वापसी।",
          isInverted: false
        },
        {
          key: "aditya",
          category: "सौर हेलियोफिजिक्स",
          title: "आदित्य-एल1 सौर मिशन",
          desc: "सूर्य-पृथ्वी लाग्रेंज बिंदु 1 (15 लाख किमी) पर स्थापित, सौर कोरोना, सीएमई और सौर तूफानों का निरंतर अवलोकन।",
          isInverted: true
        },
        {
          key: "nisar",
          category: "पृथ्वी विज्ञान • संयुक्त नासा-इसरो",
          title: "निसार रडार उपग्रह",
          desc: "द्वि-आवृत्ति सिंथेटिक एपर्चर रडार वैश्विक भूमि सतह परिवर्तन, ग्लेशियरों के पिघलने और वनों की संरचना का मानचित्रण।",
          isInverted: false
        },
        {
          key: "xposat",
          category: "खगोल भौतिकी वेधशाला",
          title: "एक्सपोसैट (XPoSat) पोलारिमेट्री",
          desc: "न्यूट्रॉन सितारों, पल्सर और ब्लैक होल से ब्रह्मांडीय एक्स-रे ध्रुवीकरण का अध्ययन करने वाला भारत का पहला समर्पित मिशन।",
          isInverted: false
        },
        {
          key: "vom",
          category: "ग्रहीय विज्ञान",
          title: "शुक्रयान (Venus Orbiter)",
          desc: "शुक्र के घने वायुमंडल की गतिशीलता, सतह के नीचे रडार इमेजिंग और सौर हवा के प्रभावों का अध्ययन करने का आगामी मिशन।",
          isInverted: false
        }
      ]
    },
    launchers: {
      tag: "अंतरिक्ष तक स्वदेशी पहुँच",
      title: "इसरो प्रक्षेपण यान और रॉकेट",
      subtitle: "संवादात्मक परिचालन बेड़ा एवं भविष्य के प्रक्षेपक",
      milestonesLabel: "महत्वपूर्ण ऐतिहासिक उपलब्धियां:",
      firstLaunchLabel: "प्रथम प्रक्षेपण तिथि",
      heightLabel: "यान की ऊंचाई",
      massLabel: "उत्थापन द्रव्यमान",
      payloadLabel: "पेलोड क्षमता",
      stagingLabel: "चरणबद्ध संरचना",
      viewMissionsBtn: "समर्थित मिशन देखें"
    },
    portals: {
      tag: "ऑनलाइन अनुप्रयोग",
      title: "इसरो डिजिटल पोर्टल",
      subtitle: "भूस्थानिक • पृथ्वी अवलोकन • डेटा अभिलेखागार",
      launchBtn: "बाहरी पोर्टल खोलें →",
      cancelBtn: "रद्द करें"
    },
    programmes: {
      tag: "// शैक्षिक एवं आउटरीच पहल",
      title: "कार्यक्रम एवं आउटरीच",
      askExpertBtn: "अंतरिक्ष वैज्ञानिक से पूछें",
      regBtn: "पंजीकरण दिशानिर्देश"
    },
    centres: {
      tag: "अंतरिक्ष विभाग",
      title: "इसरो केन्द्र एवं अनुसंधान संस्थान",
      all: "सभी",
      isroCentres: "इसरो केन्द्र",
      autonomous: "स्वायत्त निकाय",
      enterprises: "इन-स्पेस एवं एनएसआईएल"
    },
    footer: {
      hqTitle: "इसरो मुख्यालय",
      hqAddress: "भारतीय अंतरिक्ष अनुसंधान संगठन\nअंतरिक्ष भवन, न्यू बीईएल रोड\nबेंगलुरु-560 094, भारत",
      phone: "दूरभाष: +91 80 22172294 / 96",
      email: "ईमेल: isropr[at]isro[dot]gov[dot]in",
      quickLinks: "त्वरित अनुप्रेषण",
      policies: "वेबसाइट नीतियां",
      connect: "हमसे जुड़ें",
      dept: "अंतरिक्ष विभाग, भारत सरकार",
      chairman: "अध्यक्ष: डॉ. वी. नारायणन",
      stqc: "प्रमाणित एसटीक्यूसी अनुपालन वेब पोर्टल",
      copyright: "© सर्वाधिकार सुरक्षित 2026 इसरो।",
      lastUpdated: "अंतिम अद्यतन: 02 अगस्त, 2026 (भा.मा.स.)"
    },
    quickMenu: {
      nspd: "राष्ट्रीय अंतरिक्ष दिवस 2026",
      expert: "विशेषज्ञ से पूछें",
      feedback: "प्रतिक्रिया फ़ॉर्म",
      contact: "संपर्क करें"
    },
    programmesList: [
      {
        id: "yuvika",
        code: "युविका (YUVIKA)",
        title: "युवा विज्ञानी कार्यक्रम",
        tagline: "युवा वैज्ञानिक आवासीय अंतरिक्ष शिविर",
        desc: "प्रत्येक भारतीय राज्य और केंद्र शासित प्रदेश से शीर्ष छात्रों का चयन कर इसरो केंद्रों में दो सप्ताह का गहन अंतरिक्ष विज्ञान प्रशिक्षण।",
        badge: "वार्षिक पंजीकरण सक्रिय"
      },
      {
        id: "unnati",
        code: "उन्नति (UNNATI)",
        title: "यूनिस्पेस नैनोसैटेलाइट असेंबली",
        tagline: "अंतर्राष्ट्रीय नैनो-उपग्रह प्रशिक्षण",
        desc: "यूआरएससी बेंगलुरु द्वारा विकासशील देशों के इंजीनियरों और वैज्ञानिकों के लिए नैनो-उपग्रह डिजाइन, एकीकरण और परीक्षण का वैश्विक कार्यक्रम।",
        badge: "वैश्विक क्षमता निर्माण"
      },
      {
        id: "student-sats",
        code: "छात्र उपग्रह",
        title: "छात्र उपग्रह मिशन सहायता",
        tagline: "विश्वविद्यालय क्यूबसैट प्रक्षेपण पहल",
        desc: "प्रायोगिक वैज्ञानिक पेलोड का निर्माण करने वाले शैक्षणिक संस्थानों के लिए पीएसएलवी ऊपरी चरण (POEM) पर संपूर्ण प्रक्षेपण अवसर।",
        badge: "विश्वविद्यालय सहभागिता"
      },
      {
        id: "spacetutor",
        code: "स्पेस ट्यूटर",
        title: "पंजीकृत अंतरिक्ष शिक्षक नेटवर्क",
        tagline: "मान्यता प्राप्त अंतरिक्ष विज्ञान शिक्षक",
        desc: "ग्रामीण स्कूलों में व्यावहारिक अंतरिक्ष ज्ञान, रॉकेटरी कार्यशालाएं और दूरबीन से अवलोकन प्रसारित करने वाली पंजीकृत संस्थाएं।",
        badge: "राष्ट्रीय नेटवर्क"
      },
      {
        id: "space-on-wheels",
        code: "स्पेस ऑन व्हील्स",
        title: "मोबाइल अंतरिक्ष प्रदर्शनी वाहन",
        tagline: "चलंत संवादात्मक विज्ञान प्रयोगशालाएं",
        desc: "रॉकेट्स और उपग्रहों के कार्यकारी मॉडलों से सुसज्जित विशेष वातानुकूलित बसें जो भारत भर के जिलों में दौरा करती हैं।",
        badge: "जिला स्तरीय आउटरीच"
      },
      {
        id: "merchandise",
        code: "व्यापारिक उत्पाद",
        title: "आधिकारिक इसरो अंतरिक्ष उत्पाद",
        tagline: "प्राधिकृत स्केल मॉडल एवं संग्रहणीय वस्तुएं",
        desc: "एलवीएम3, पीएसएलवी, चंद्रयान, गगनयान के सटीक मॉडल, स्मृति चिन्ह और परिधान उपलब्ध कराने वाले इसरो अधिकृत भागीदार।",
        badge: "अधिकृत भंडार"
      }
    ],
    directoryItems: [
      { code: "इसरो मुख्यालय", location: "बेंगलुरु", name: "इसरो मुख्यालय (Antariksh Bhavan)", cat: "centres", link: "https://www.isro.gov.in", icon: "fa-solid fa-building-flag" },
      { code: "वीएसएससी (VSSC)", location: "तिरुवनंतपुरम", name: "विक्रम साराभाई अंतरिक्ष केंद्र", cat: "centres", link: "https://www.vssc.gov.in", icon: "fa-solid fa-rocket" },
      { code: "एसडीएससी शार", location: "श्रीहरिकोटा", name: "सतीश धवन अंतरिक्ष केंद्र", cat: "centres", link: "https://www.shar.gov.in", icon: "fa-solid fa-tower-broadcast" },
      { code: "यूआरएससी (URSC)", location: "बेंगलुरु", name: "यू आर राव उपग्रह केंद्र", cat: "centres", link: "https://www.ursc.gov.in", icon: "fa-solid fa-satellite" },
      { code: "सैक (SAC)", location: "अहमदाबाद", name: "अंतरिक्ष अनुप्रयोग केंद्र", cat: "centres", link: "https://www.sac.gov.in", icon: "fa-solid fa-satellite-dish" },
      { code: "एनआरएससी (NRSC)", location: "हैदराबाद", name: "राष्ट्रीय सुदूर संवेदन केंद्र", cat: "centres", link: "https://www.nrsc.gov.in", icon: "fa-solid fa-earth-asia" },
      { code: "एचएसएफसी (HSFC)", location: "बेंगलुरु", name: "मानव अंतरिक्ष उड़ान केंद्र", cat: "centres", link: "https://www.isro.gov.in/Gaganyaan.html", icon: "fa-solid fa-user-astronaut" },
      { code: "आईपीआरसी (IPRC)", location: "महेंद्रगिरि", name: "इसरो प्रणोदन परिसर", cat: "centres", link: "https://www.iprc.gov.in", icon: "fa-solid fa-fire-flame-curved" },
      { code: "आईआईएसयू (IISU)", location: "तिरुवनंतपुरम", name: "इसरो जड़त्वीय प्रणाली इकाई", cat: "centres", link: "https://www.isro.gov.in/isro_centre.html", icon: "fa-solid fa-compass" },
      { code: "एलपीएससी (LPSC)", location: "वलियमला / बेंगलुरु", name: "द्रव प्रणोदन प्रणाली केंद्र", cat: "centres", link: "https://www.lpsc.gov.in", icon: "fa-solid fa-flask-vial" },
      { code: "इस्ट्रैक (ISTRAC)", location: "बेंगलुरु", name: "इसरो टेलीमेट्री ट्रैकिंग और कमांड", cat: "centres", link: "https://www.istrac.gov.in", icon: "fa-solid fa-radar" },
      { code: "एमसीएफ (MCF)", location: "हासन / भोपाल", name: "मुख्य नियंत्रण सुविधा", cat: "centres", link: "https://www.mcf.gov.in", icon: "fa-solid fa-sliders" },
      { code: "लिओस (LEOS)", location: "बेंगलुरु", name: "इलेक्ट्रो-ऑप्टिक्स सिस्टम प्रयोगशाला", cat: "centres", link: "https://www.isro.gov.in", icon: "fa-solid fa-eye" },
      { code: "आईआईआरएस (IIRS)", location: "देहरादून", name: "भारतीय सुदूर संवेदन संस्थान", cat: "centres", link: "https://www.iirs.gov.in", icon: "fa-solid fa-graduation-cap" },
      { code: "पीआरएल (PRL)", location: "अहमदाबाद", name: "भौतिक अनुसंधान प्रयोगशाला", cat: "autonomous", link: "https://www.prl.res.in", icon: "fa-solid fa-atom" },
      { code: "नार्ल (NARL)", location: "गडंकी", name: "राष्ट्रीय वायुमंडलीय अनुसंधान प्रयोगशाला", cat: "autonomous", link: "https://www.narl.gov.in", icon: "fa-solid fa-wind" },
      { code: "नेसाक (NESAC)", location: "शिलांग", name: "उत्तर पूर्वी अंतरिक्ष अनुप्रयोग केंद्र", cat: "autonomous", link: "https://www.nesac.gov.in", icon: "fa-solid fa-mountain-sun" },
      { code: "आईआईएसटी (IIST)", location: "तिरुवनंतपुरम", name: "भारतीय अंतरिक्ष विज्ञान एवं प्रौद्योगिकी संस्थान", cat: "autonomous", link: "https://www.iist.ac.in", icon: "fa-solid fa-school" },
      { code: "इन-स्पेस (IN-SPACe)", location: "अहमदाबाद", name: "इन-स्पेस संवर्धन एवं प्राधिकरण केंद्र", cat: "enterprises", link: "https://www.inspace.gov.in", icon: "fa-solid fa-handshake" },
      { code: "एनएसआईएल (NSIL)", location: "बेंगलुरु", name: "न्यूस्पेस इंडिया लिमिटेड", cat: "enterprises", link: "https://www.nsilindia.co.in", icon: "fa-solid fa-briefcase" }
    ],
    vehicleModelsData: {
      pslv: {
        code: 'PSLV',
        name: 'ध्रुवीय उपग्रह प्रक्षेपण यान (PSLV)',
        tagline: 'इसरो का विश्वसनीय वर्कहॉर्स',
        firstLaunch: '20 अक्टूबर, 1994',
        stages: '4 चरण (ठोस - तरल - ठोस - तरल)',
        height: '44 मी',
        liftOffMass: '320 टन',
        payload: '1,750 किग्रा (सूर्य-समकालिक कक्षा)',
        status: 'परिचालन में • 59+ सफल उड़ानें',
        desc: 'पीएसएलवी भारत का तीसरी पीढ़ी का प्रक्षेपण यान है और तरल चरणों से सुसज्जित होने वाला पहला भारतीय यान है। इसने चंद्रयान-1, मार्स ऑर्बिटर मिशन और एक ही उड़ान में 104 उपग्रहों को सफलतापूर्वक स्थापित किया है।',
        milestones: [
          'चंद्रयान-1 चंद्र मिशन (2008)',
          'मार्स ऑर्बिटर मिशन / मंगलयान (2013)',
          'एक ही उड़ान में रिकॉर्ड 104 उपग्रह (PSLV-C37, 2017)',
          'आदित्य-एल1 सौर वेधशाला (2023)'
        ]
      },
      gslv: {
        code: 'GSLV',
        name: 'भू-समकालिक उपग्रह प्रक्षेपण यान (GSLV)',
        tagline: 'संचार एवं मौसम पेलोड वाहक',
        firstLaunch: '18 अप्रैल, 2001',
        stages: '3 चरण (ठोस + 4 तरल स्ट्रैप-ऑन - तरल - क्रायोजेनिक CUS)',
        height: '51.7 मी',
        liftOffMass: '414 टन',
        payload: '2,250 किग्रा (भू-समकालिक अंतरण कक्षा - GTO)',
        status: 'परिचालन में • स्वदेशी क्रायोजेनिक चरण',
        desc: 'जीएसएलवी एक तीन चरणों वाला प्रक्षेपण यान है जिसमें स्वदेशी क्रायोजेनिक ऊपरी चरण (सीयूएस) शामिल है। इसे मुख्य रूप से भारी संचार उपग्रहों को जीटीओ में स्थापित करने के लिए विकसित किया गया है।',
        milestones: [
          'जीसैट (GSAT) संचार उपग्रह श्रृंखला',
          'जीआईसैट-1 (GISAT-1) पृथ्वी अवलोकन उपग्रह',
          'इनसेट-3डीएस (INSAT-3DS) मौसम उपग्रह (2024)',
          'नाविक (NaVIC) दूसरी पीढ़ी का उपग्रह NVS-01'
        ]
      },
      lvm3: {
        code: 'LVM3',
        name: 'प्रक्षेपण यान मार्क-3 (LVM3 / GSLV Mk III)',
        tagline: 'भारत का सबसे शक्तिशाली और भारी रॉकेट',
        firstLaunch: '18 दिसंबर, 2014 (CARE उड़ान)',
        stages: '3 चरण (2 x S200 ठोस बूस्टर - L110 तरल कोर - C25 क्रायोजेनिक)',
        height: '43.5 मी',
        liftOffMass: '640 टन',
        payload: '4,000 किग्रा GTO / 10,000 किग्रा LEO',
        status: 'मानव-रेटेड (HLVM3) • 100% सफलता',
        desc: 'एलवीएम3 इसरो का सबसे भारी प्रक्षेपण यान है, जो 4-टन वर्ग के उपग्रहों को जीटीओ में और गगनयान मानव मॉड्यूल को निम्न भू-कक्षा में ले जाने में सक्षम है।',
        milestones: [
          'चंद्रयान-2 चंद्र ऑर्बिटर एवं लैंडर (2019)',
          'चंद्रयान-3 चंद्र दक्षिण ध्रुव सॉफ्ट लैंडिंग (2023)',
          'वनवेब इंडिया-1 एवं इंडिया-2 (72 उपग्रह प्रक्षेपित)',
          'गगनयान मानव अंतरिक्ष उड़ान योग्यता उड़ानें'
        ]
      },
      sslv: {
        code: 'SSLV',
        name: 'लघु उपग्रह प्रक्षेपण यान (SSLV)',
        tagline: 'त्वरित एवं कम लागत वाला प्रक्षेपक',
        firstLaunch: '07 अगस्त, 2022',
        stages: '3 ठोस चरण + वेग ट्रिमिंग मॉड्यूल (VTM)',
        height: '34 मी',
        liftOffMass: '120 टन',
        payload: '500 किग्रा (500 किमी निम्न भू-कक्षा)',
        status: 'परिचालन में • व्यावसायिक मांग',
        desc: 'एसएसएलवी को छोटे और सूक्ष्म उपग्रहों की बढ़ती मांग को पूरा करने के लिए विकसित किया गया है। इसे केवल 7 दिनों के भीतर एकीकृत किया जा सकता है।',
        milestones: [
          'ईओएस-07 एवं आजादीसैट प्रक्षेपण (SSLV-D2)',
          '7 दिनों में प्रक्षेपण एकीकरण क्षमता का प्रदर्शन',
          'व्यावसायिक उपग्रह समूह नियोजन मंच'
        ]
      },
      rlv: {
        code: 'RLV-TD',
        name: 'पुनर्प्रयोज्य प्रक्षेपण यान (RLV-TD)',
        tagline: 'पंखयुक्त दो-चरणीय अंतरिक्ष यान अवधारणा',
        firstLaunch: '23 मई, 2016 (HEX-01)',
        stages: 'पंखयुक्त अंतरिक्ष यान + HS9 ठोस बूस्टर',
        height: '6.5 मी (फ्यूजलेज)',
        liftOffMass: '1.75 टन',
        payload: 'पुनर्प्रयोज्य पेलोड वापसी एवं ग्लाइडिंग लैंडिंग',
        status: 'स्वायत्त रनवे लैंडिंग में सफल',
        desc: 'आरएलवी-टीडी पूरी तरह से पुन: प्रयोज्य अंतरिक्ष यान के विकास की दिशा में एक प्रौद्योगिकी प्रदर्शक है, जिसने चित्रदुर्ग में सफल स्वचालित लैंडिंग परीक्षण संपन्न किए हैं।',
        milestones: [
          'एचईएक्स-01 हाइपरसोनिक उड़ान प्रयोग (2016)',
          'हेलिकॉप्टर से लेक्स-01 स्वायत्त रनवे लैंडिंग (2023)',
          'लेक्स-02 एवं लेक्स-03 सटीक स्वायत्त लैंडिंग (2024)'
        ]
      },
      nglv: {
        code: 'NGLV',
        name: 'अगली पीढ़ी का प्रक्षेपण यान (सूर्या - NGLV)',
        tagline: 'भविष्य का भारी-लिफ्ट एवं स्टेशन वाहक',
        firstLaunch: 'लक्ष्य 2030',
        stages: 'मॉड्यूलर 3-चरणीय सेमी-क्रायोजेनिक (तरल ऑक्सीजन + केरोसीन / मीथेन)',
        height: '75+ मी',
        liftOffMass: '800+ टन',
        payload: '30,000 किग्रा LEO / पुन: प्रयोज्य प्रथम चरण',
        status: 'विकास एवं इंजन हॉट टेस्ट चरण में',
        desc: 'एनजीएलवी (सूर्या) पर्यावरण अनुकूल प्रणोदन से युक्त इसरो का आगामी भारी रॉकेट है, जो भारतीय अंतरिक्ष स्टेशन (BAS) का निर्माण करेगा।',
        milestones: [
          'आईपीआरसी में 2000 kN सेमी-क्रायो इंजन के परीक्षण',
          'भारतीय अंतरिक्ष स्टेशन (BAS) मॉड्यूल का मुख्य वाहक',
          'चंद्रमा एवं गहरे अंतरिक्ष मिशनों के लिए डिज़ाइन'
        ]
      }
    },
    portalsList: [
      {
        key: "bhuvan",
        title: "भुवन (BHUVAN)",
        category: "भारतीय भूस्थानिक मंच",
        icon: "fa-solid fa-earth-asia",
        desc: "2D/3D उपग्रह इमेजरी, विषयगत मानचित्रण और आपदा प्रबंधन सेवाएं प्रदान करने वाला भूस्थानिक पोर्टल।",
        url: "https://bhuvan.nrsc.gov.in"
      },
      {
        key: "bhoonidhi",
        title: "भूनिधि (BHOONIDHI)",
        category: "पृथ्वी अवलोकन डेटा केंद्र",
        icon: "fa-solid fa-database",
        desc: "आईआरएस और निसार पृथ्वी अवलोकन उपग्रह डेटासेट ब्राउज़ और डाउनलोड करने के लिए ओपन एक्सेस पोर्टल।",
        url: "https://bhoonidhi.nrsc.gov.in"
      },
      {
        key: "vedas",
        title: "वेदास (VEDAS)",
        category: "भू-अवलोकन दृश्यीकरण",
        icon: "fa-solid fa-layer-group",
        desc: "जलवायु और भूमि अनुसंधान के लिए पृथ्वी अवलोकन डेटा और अभिलेखीय प्रणाली का दृश्यीकरण।",
        url: "https://vedas.sac.gov.in"
      },
      {
        key: "mosdac",
        title: "मोसडैक (MOSDAC)",
        category: "मौसम विज्ञान डेटा",
        icon: "fa-solid fa-cloud-sun-rain",
        desc: "इनसेट एवं ओशनसैट डेटा संग्रहीत करने वाला मौसम विज्ञान और समुद्र विज्ञान उपग्रह डेटा संग्रह केंद्र।",
        url: "https://www.mosdac.gov.in"
      },
      {
        key: "issdc",
        title: "आईएसएसडीसी (ISSDC)",
        category: "अंतरिक्ष विज्ञान डेटा केंद्र",
        icon: "fa-solid fa-server",
        desc: "ग्रहीय मिशनों के कच्चे और संसाधित पेलोड टेलीमेट्री को संग्रहीत करने वाला भारतीय अंतरिक्ष विज्ञान डेटा केंद्र।",
        url: "https://www.issdc.gov.in"
      },
      {
        key: "spark",
        title: "स्पार्क (SPARK)",
        category: "आभासी अंतरिक्ष संग्रहालय",
        icon: "fa-solid fa-vr-cardboard",
        desc: "प्रक्षेपण यान, उपग्रहों और अंतरिक्ष इतिहास को प्रदर्शित करने वाला इसरो का 3D आभासी संग्रहालय।",
        url: "https://www.isro.gov.in/Virtual_Space_Museum.html"
      },
      {
        key: "stem",
        title: "इसरो स्टेम (STEM)",
        category: "छात्र संपर्क एवं आउटरीच",
        icon: "fa-solid fa-graduation-cap",
        desc: "अंतरिक्ष विज्ञान शैक्षिक पहल, ऑनलाइन पाठ्यक्रम और युविका युवा वैज्ञानिक पंजीकरण।",
        url: "https://www.isro.gov.in/Students.html"
      },
      {
        key: "igrasp",
        title: "आई-ग्रास्प (I-GRASP)",
        category: "अनुसंधान अनुदान योजना",
        icon: "fa-solid fa-hand-holding-hand",
        desc: "भारतीय विश्वविद्यालयों में अंतरिक्ष प्रौद्योगिकी अनुसंधान परियोजनाओं का समर्थन करने वाली अनुदान योजना।",
        url: "https://www.isro.gov.in"
      },
      {
        key: "ndem",
        title: "एनडीईएम (NDEM)",
        category: "आपदा प्रबंधन सहायता",
        icon: "fa-solid fa-shield-halved",
        desc: "बाढ़ और चक्रवात आपदाओं के दौरान त्वरित निर्णय सहायता हेतु आपातकालीन प्रबंधन का राष्ट्रीय डेटाबेस।",
        url: "https://ndem.nrsc.gov.in"
      }
    ],
    missionData: {
      ch3: {
        title: "चंद्रयान-3 चंद्र मिशन",
        category: "चंद्र अन्वेषण • ऐतिहासिक सॉफ्ट लैंडिंग",
        desc: "चंद्रयान-3 ने 23 अगस्त, 2023 को चंद्रमा के दक्षिणी ध्रुव के पास सफल सॉफ्ट लैंडिंग की। विक्रम लैंडर और प्रज्ञान रोवर ने शिव शक्ति बिंदु के पास मिट्टी और जल-बर्फ के तत्वों का पहला इन-सिटू मापन किया।",
        vehicle: "एलवीएम3-एम4 रॉकेट (LVM3-M4)",
        orbit: "चंद्र ध्रुवीय कक्षा",
        status: "सफलता • वैज्ञानिक डेटा सक्रिय"
      },
      gaganyaan: {
        title: "गगनयान मानव अंतरिक्ष उड़ान",
        category: "मानव अंतरिक्ष उड़ान कार्यक्रम",
        desc: "गगनयान परियोजना 3 सदस्यीय चालक दल के साथ 3 दिनों के मिशन के लिए पृथ्वी की निचली कक्षा (LEO) में मानव अंतरिक्ष उड़ान क्षमता का प्रदर्शन करेगी। मानव-रेटेड LVM3 और क्रू मॉड्यूल परीक्षण सफलतापूर्वक योग्य हुए।",
        vehicle: "मानव-रेटेड एलवीएम3 (HLVM3)",
        orbit: "निम्न भू-कक्षा (400 किमी)",
        status: "योग्यता परीक्षण सक्रिय"
      },
      aditya: {
        title: "आदित्य-एल1 सौर वेधशाला",
        category: "सौर हेलियोफिजिक्स",
        desc: "सूर्य-पृथ्वी लाग्रेंज बिंदु 1 (L1) पर स्थापित भारत की पहली सौर अंतरिक्ष वेधशाला। ग्रहण के बिना सौर कोरोना, सौर ज्वालाओं और सीएमई का निरंतर अवलोकन करने के लिए 7 पेलोड से सुसज्जित।",
        vehicle: "पीएसएलवी-सी57 (PSLV-C57)",
        orbit: "एल1 पर हेलो कक्षा (15 लाख किमी)",
        status: "परिचालन टेलीमेट्री सक्रिय"
      },
      nisar: {
        title: "निसार (NISAR) रडार उपग्रह",
        category: "संयुक्त नासा-इसरो पृथ्वी अवलोकन",
        desc: "नासा और इसरो द्वारा संयुक्त रूप से विकसित दोहरी आवृत्ति वाला सिंथेटिक एपर्चर रडार उपग्रह। यह हर 12 दिनों में वैश्विक भूमि परिवर्तन, ग्लेशियरों की स्थिति और वनों के बायोमास का मानचित्रण करता है।",
        vehicle: "जीएसएलवी-एफ16 (GSLV-F16)",
        orbit: "सूर्य-समकालिक कक्षा (747 किमी)",
        status: "विज्ञान चरण"
      },
      xposat: {
        title: "एक्सपोसैट (XPoSat) एक्स-रे पोलारिमेट्री",
        category: "अंतरिक्ष खगोल विज्ञान वेधशाला",
        desc: "न्यूट्रॉन सितारों, पल्सर पवन निहारिकाओं और ब्लैक होल बायनेरिज़ जैसे तीव्र खगोलीय स्रोतों से ब्रह्मांडीय एक्स-रे के ध्रुवीकरण गुणों का अध्ययन करने वाला समर्पित उपग्रह।",
        vehicle: "पीएसएलवी-सी58 (PSLV-C58)",
        orbit: "निम्न भू-कक्षा (650 किमी)",
        status: "अवलोकन चरण सक्रिय"
      },
      vom: {
        title: "शुक्रयान मिशन (Venus Orbiter Mission)",
        category: "अंतरग्रहीय शुक्र अन्वेषण",
        desc: "शुक्र के घने वायुमंडल, ज्वालामुखीय गतिविधि, आयनमंडल और सौर पवन के प्रभावों का अध्ययन करने के लिए डिज़ाइन किया गया आगामी ग्रह ऑर्बिटर।",
        vehicle: "एलवीएम3 प्रक्षेपण यान",
        orbit: "दीर्घवृत्ताकार शुक्र कक्षा",
        status: "योजना चरण"
      }
    },
    modals: {
      mission: {
        launchVehicle: "प्रक्षेपण यान",
        orbit: "परिचालन कक्षा",
        status: "स्थिति",
        inspectRocket: "रॉकेट विनिर्देश देखें",
        close: "खिड़की बंद करें"
      },
      portal: {
        label: "इसरो ऑनलाइन पोर्टल",
        cancel: "रद्द करें",
        launch: "बाहरी पोर्टल खोलें →"
      },
      careers: {
        label: "इसरो भर्ती पोर्टल",
        title: "वर्तमान करियर एवं नौकरी के अवसर",
        item1Title: "वैज्ञानिक/इंजीनियर 'एससी' (इलेक्ट्रॉनिक्स एवं मैकेनिकल)",
        item1Badge: "आवेदन खुला",
        item1Desc: "वीएसएससी, यूआरएससी, सैक और एसडीएससी शार केन्द्रों के लिए आईसीआरबी भर्ती। बीई/बी.टेक प्रथम श्रेणी।",
        item2Title: "अंतरिक्ष विज्ञान में कनिष्ठ अनुसंधान अध्येता (JRF)",
        item2Badge: "पीआरएल / नार्ल",
        item2Desc: "ग्रहीय वायुमंडल, सौर भौतिकी और आयनमंडलीय रेडियो तरंग मॉडलिंग में अनुसंधान परियोजनाएं।",
        item3Title: "स्नातक एवं तकनीशियन शिक्षुता (Apprenticeship) 2026",
        item3Badge: "अभी आवेदन करें",
        item3Desc: "इंजीनियरिंग डिप्लोमा और डिग्री धारकों के लिए शिक्षुता अधिनियम के तहत एक वर्षीय प्रशिक्षण।",
        close: "बंद करें",
        officialBtn: "आधिकारिक आईसीआरबी वेबसाइट पर जाएं →"
      },
      tenders: {
        label: "खरीद एवं वाणिज्यिक",
        title: "सक्रिय निविदा सूचनाएं",
        item1Title: "VSSC/PUR/2026/041 - क्रायोजेनिक वाल्व परीक्षण",
        item1Loc: "तिरुवनंतपुरम",
        item1Desc: "उच्च दबाव क्रायोजेनिक तरल प्रणोदक सक्रियण असेंबली की आपूर्ति और योग्यता परीक्षण।",
        item2Title: "SDSC/SHAR/COMM/019 - लॉन्च पैड रखरखाव",
        item2Loc: "श्रीहरिकोटा",
        item2Desc: "अम्बिलिकल और ध्वनिक जल प्रलय दमन प्रणालियों के लिए वार्षिक रखरखाव अनुबंध।",
        item3Title: "URSC/SAT/OPT/088 - ऑप्टिकल सेंसर अंशांकन",
        item3Loc: "बेंगलुरु",
        item3Desc: "उपग्रह पृथ्वी इमेजिंग पेलोड के लिए सटीक संरेखण फिक्स्चर और थर्मल वैक्यूम अंशांकन सेटअप।",
        close: "बंद करें",
        eprocBtn: "ई-प्रोक्योरमेंट पोर्टल खोलें →"
      },
      rti: {
        label: "पारदर्शिता एवं सुशासन",
        title: "सूचना का अधिकार (RTI)",
        cpioTitle: "केंद्रीय लोक सूचना अधिकारी (CPIO)",
        cpioAddr: "इसरो मुख्यालय, अंतरिक्ष भवन, न्यू बीईएल रोड, बेंगलुरु-560 094",
        cpioContact: "दूरभाष: 080-22172294 | cpio[at]isro[dot]gov[dot]in",
        appellateTitle: "प्रथम अपीलीय प्राधिकारी",
        appellateDesc: "संयुक्त सचिव, अंतरिक्ष विभाग, बेंगलुरु",
        portalInfo: "नागरिक भारत सरकार के आरटीआई पोर्टल पर ऑनलाइन आवेदन कर सकते हैं:",
        selectDos: "अंतरिक्ष विभाग का चयन करें।",
        close: "बंद करें",
        portalBtn: "आरटीआई ऑनलाइन पोर्टल पर जाएं →"
      },
      feedback: {
        label: "नागरिक सहभागिता",
        title: "प्रतिक्रिया एवं शिकायतें",
        name: "आपका पूरा नाम",
        namePlaceholder: "उदा. डॉ. राजेश शर्मा",
        email: "ईमेल पता",
        emailPlaceholder: "name@domain.gov.in",
        category: "विषय / श्रेणी",
        cat1: "वेबसाइट प्रतिक्रिया एवं सुलभता",
        cat2: "मिशन टेलीमेट्री एवं विज्ञान डेटा",
        cat3: "छात्र युविका पंजीकरण",
        cat4: "भर्ती एवं आईसीआरबी पूछताछ",
        cat5: "अन्य प्रतिक्रिया",
        message: "संदेश / टिप्पणी",
        msgPlaceholder: "कृपया अपनी प्रतिक्रिया या सुझाव साझा करें...",
        cancel: "रद्द करें",
        submit: "प्रतिक्रिया जमा करें",
        successToast: "धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक दर्ज कर ली गई है।"
      },
      expert: {
        label: "तकनीकी परामर्श",
        title: "इसरो वैज्ञानिक से पूछें",
        desc: "पेलोड विकास, उपग्रह कक्षाओं, ग्रहीय डेटा विश्लेषण या अंतरिक्ष शिक्षा से संबंधित तकनीकी प्रश्न सबमिट करें। इसरो अनुसंधान केंद्रों के वैज्ञानिक इनकी समीक्षा करेंगे।",
        affiliation: "संबद्धता / संस्थान",
        affilPlaceholder: "विश्वविद्यालय, कॉलेज या अनुसंधान संस्थान",
        domain: "प्रश्न का क्षेत्र",
        dom1: "प्रक्षेपण यान प्रणोदन एवं वायुगतिकी",
        dom2: "उपग्रह सुदूर संवेदन एवं जीआईएस",
        dom3: "ग्रहीय खगोल विज्ञान (चंद्रमा / मंगल / शुक्र)",
        dom4: "अंतरिक्ष जीव विज्ञान एवं सूक्ष्म गुरुत्वाकर्षण",
        dom5: "क्यूबसैट एवं पेलोड इंजीनियरिंग",
        question: "आपका तकनीकी प्रश्न",
        qPlaceholder: "अपने प्रयोग या प्रश्न के बारे में विवरण प्रदान करें...",
        cancel: "रद्द करें",
        submit: "प्रश्न भेजें",
        successToast: "आपकी पूछताछ वैज्ञानिक समिति को भेज दी गई है।"
      },
      search: {
        title: "इसरो विज्ञान डेटाबेस खोजें",
        placeholder: "कीवर्ड टाइप करें (उदा. चंद्रयान, गगनयान, प्रक्षेपक, निविदाएं, पोर्टल)...",
        resultsFor: "खोज परिणाम:",
        directing: "मिलान वाले इसरो रिकॉर्ड पर निर्देशित किया जा रहा है।"
      },
      video: {
        liveBadge: "सीधा प्रसारण",
        title: "एलवीएम3-एम6 / वनवेब इंडिया-2 उत्थापन",
        location: "सतीश धवन अंतरिक्ष केंद्र (SDSC) शार, श्रीहरिकोटा",
        missionLabel: "मिशन",
        missionVal: "एलवीएम3-एम6 उड़ान",
        payloadLabel: "पेलोड",
        payloadVal: "36 वनवेब उपग्रह",
        statusLabel: "स्थिति",
        statusVal: "● सामान्य (NOMINAL)",
        specsBtn: "रॉकेट विनिर्देश"
      }
    }
  }
};
