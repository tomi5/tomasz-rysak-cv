const worksData = [
  {
    id: 1,
    pl: {
      date: "2021.09 - nadal",
      company: "Sii Polska",
      position: "Software engineer - B2B",
      duties: [
        {
          text: "realizacja projektów dla klienta Sabre Corporation w tym:",
        },
        {
          text: "wdrażanie aplikacji webowych dla branży lotniczej (Digital Workspace),",
          isSublist: true,
        },
        {
          text: "wdrażanie aplikacji do obsługi płatności internetowych (SEPG Hosted Payment Page),",
          isSublist: true,
        },
        {
          text: "wdrażanie platformy e-commerce dla branży lotniczej oferującej możliwość tworzenia rezerwacji lotniczych oraz późniejsze zarządzanie nimi (EzyCommerce)",
          isSublist: true,
        },
        { text: "testowanie kodu: testy jednostkowe oraz e2e," },
        {
          text: "technologie: React.js, Vue.js, Next.js, JavaScript, TypeScript, Redux, Vuex, Jest, Enzyme, TestCafe, Cypress.io, Playwright, GraphQL, CSS/Sass, Git, Jenkins, TeamCity, C#, Java.",
        },
      ],
    },
    en: {
      date: "2021.09 - ongoing",
      company: "Sii Poland",
      position: "Software engineer - B2B",
      duties: [
        {
          text: "working as a contractor for Sabre Cooperation, including:",
        },
        {
          text: "developing web applications for the airline industry (Digital Workspace),",
          isSublist: true,
        },
        {
          text: "developing payment gateway (SEPG Hosted Payment Page),",
          isSublist: true,
        },
        {
          text: "developing PWA multi-tenant e-commerce platform intended for the aviation industry. The platform allows creating and managing flight reservations (EzyCommerce,",
          isSublist: true,
        },
        { text: "code testing: unit and e2e" },
        {
          text: "technologies: React.js, Vue.js, Next.js, JavaScript, TypeScript, Redux, Vuex, Jest, Enzyme, TestCafe, Cypress.io, Playwright, GraphQL, CSS/Sass, Git, Jenkins, TeamCity, C#, Java",
        },
      ],
    },
  },
  {
    id: 2,
    pl: {
      date: "2020.11 - 2021.09",
      company: "Asco Systemy Informatyczne",
      position: "Front-End Developer - B2B",
      duties: [
        {
          text: "projektowanie i wdrażanie nowych sklepów internetowych z wykorzystaniem technologii: HTML (CSHTML), CSS (SASS, Bootstrap), JavaScript (Knockout.js),",
        },
        { text: "rozwijanie autorskiego systemu CMS," },
        { text: "analizowanie i implementacja wymagań klienta." },
      ],
    },
    en: {
      date: "2020.11 - 2021.09",
      company: "Asco Systemy Informatyczne",
      position: "Front-End Developer - B2B",
      duties: [
        {
          text: "creating websites with HTML (CSHTML), CSS (SASS, Bootstrap), JavaScript (Knockout.js),",
        },
        { text: "maintaining and improving existing websites," },
        { text: "improving a proprietary CMS" },
        { text: "analyzing and implementing customer requirements." },
      ],
    },
  },
  {
    id: 3,
    pl: {
      date: "2019.12 - 2020.05",
      company: "Webiso",
      position: "Front-End Developer - B2B",
      duties: [
        {
          text: "tworzenie stron www na podstawie projektu graficznego z wykorzystaniem technologii: HTML, CSS (SASS, Bootstrap), JavaScript i PHP,",
        },
        { text: "implementacja CMS'a do stron internetowych," },
        {
          text: "pisanie skryptów JavaScript oraz pluginów CMS'a (PHP, Smarty)",
        },
        {
          text: "kontakt z klientem w zakresie tworzonej dla niego strony www.",
        },
      ],
    },
    en: {
      date: "2019.12 - 2020.05",
      company: "Webiso",
      position: "Front-End Developer - B2B",
      duties: [
        {
          text: "creating websites with HTML, CSS (SASS, Bootstrap), JavaScript and PHP,",
        },
        { text: "CMS implementations," },
        { text: "writing and implementing CMS Plugins (PHP, Smarty)," },
        { text: "maintaining and improving websites," },
        { text: "getting feedback from users and customers." },
      ],
    },
  },
  {
    id: 4,
    pl: {
      date: "2016.03 - 2019.11",
      company: "Orlando Travel",
      position: "specjalista ds. turystyki",
      duties: [
        {
          text: "tworzenie oferty grupowych wyjazdów turystycznych i nadzorowanie realizacji,",
        },
        { text: "pozyskiwanie i utrzymywanie relacji z klientami," },
        {
          text: "utrzymywanie trwałych relacji B2B (głównie w języku angielskim),",
        },
        {
          text: 'pomysłodawca produktu opartego na "Dynamicznym Pakietowaniu" - wdrożenie i nadzór,',
        },
        { text: "aktualizacja strony www z wykorzystaniem CMSa." },
      ],
    },
    en: {
      date: "2016.03 - 2019.11",
      company: "Orlando Travel",
      position: "travel specialist",
      duties: [
        {
          text: "creating an own offer of group tours and supervising ongoing tours,",
        },
        {
          text: "customer acquisition and maintaining good customer relationship,",
        },
        { text: "acquiring and contacting contractors (mainly in English)," },
        {
          text: "the originator of Dynamic Packaging offer - implementation and supervision,",
        },
        { text: "website update using CMS." },
      ],
    },
  },
  {
    id: 5,
    pl: {
      date: "2013.08 - 2016.03",
      company: "Strefa Wypraw",
      position: "specjalista ds. turystyki",
      duties: [
        {
          text: 'tworzenie i realizacja wypraw "szytych na miarę" w egzotyczne kraje,',
        },
        {
          text: "obsługa bieżących imprez turystycznych organizowanych przez biuro,",
        },
        {
          text: "kontakt z osobami zainteresowanymi wyjazdami oraz z kontrahentami.",
        },
      ],
    },
    en: {
      date: "2013.08 - 2016.03",
      company: "Strefa Wypraw",
      position: "travel specialist",
      duties: [
        { text: "creating tailor-made trips," },
        {
          text: "supervising ongoing tours organized by the Tour Organizator,",
        },
        { text: "contact with the customers and contractors," },
      ],
    },
  },
];

export default worksData;
