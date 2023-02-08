const highlightsData = [
  {
    sectionName: "contact",
    sectionHeader: {
      pl: "Kontakt",
      en: "Contact",
    },
    sectionItem: [
      {
        id: 1,
        name: "telephone",
        value: "+48 503 58 34 37",
        href: "tel:0048503583437",
        ariaLabel: "tel",
      },
      {
        id: 2,
        name: "email",
        value: "tomasz.rysak@o2.pl",
        href: "mailto:tomasz.rysak@o2.pl",
        ariaLabel: "email",
      },
      {
        id: 3,
        name: "gitHub",
        value: "github.com/tomi5",
        href: "https://github.com/tomi5",
        ariaLabel: "gitHub logo",
      },
      {
        id: 4,
        name: "linkedIn",
        value: "linkedin.com/in/tomasz-rysak",
        href: "https://www.linkedin.com/in/tomasz-rysak/",
        ariaLabel: "linkedIn logo",
      },
      {
        id: 5,
        name: "address",
        value: "Skawina, woj. małopolskie",
        ariaLabel: "adres",
      },
    ],
  },
  {
    sectionName: "skills",
    sectionHeader: {
      pl: "Umiejętności",
      en: "Technical skills",
    },
    sectionItem: [
      {
        id: 1,
        name: "techUse",
        itemHeader: {
          pl: "Technologie, z którymi pracuję:",
          en: "Technologies I use:",
        },
        skillsItem: [
          "JavaScript",
          "React.js, Vue.js, Next.js",
          "Redux, Vuex",
          "TypeScript",
          "HTML 5",
          "CSS3 (flexbox, grid, BEM), Sass",
          "Bootstrap 4",
          "Git",
          "Jest, Enzyme, Playwright, TestCafe, Cypress.jo",
          "Knockout.js",
          "Jenkins, TeamCity",
          "GraphQL - podstawy",
          "PHP (SMARTY), C#, Python - podstawy",
        ],
      },
      {
        id: 2,
        name: "otherAbilites",
        itemHeader: {
          pl: "Pozostałe umiejętności:",
          en: "Others Abilities:",
        },
        skillsItem: {
          pl: [
            "biegła obsługa CorelDraw",
            "podstawy Visual Basis oraz b.dobra znajomość Excela",
            "Photoshop (cięcie PSD oraz podstawowa obróbka grafiki)",
          ],
          en: [
            "fluent in CorelDraw",
            "basic in Visual Basis and fluent in Excel",
            "Photoshop (PSD slicing and basic image processing)",
          ],
        },
      },
    ],
  },
  {
    sectionName: "languages",
    sectionHeader: {
      pl: "Języki",
      en: "Languages",
    },
    sectionItem: {
      pl: ["język angielski - poziom B2", "język polski - język ojczysty"],
      en: ["English - upper intermediate", "Polish - native speaker"],
    },
  },
  {
    sectionName: "hobby",
    sectionHeader: {
      pl: "Zainteresowania",
      en: "Passions",
    },
    sectionItem: {
      pl: [
        "podróże, turystyka ekstremalna i kwalifikowana",
        "wyszukiwanie tanich połączeń lotniczych",
        "fotografia przyrodnicza",
        "uprawianie sportów: piłka nożna, muay-thai, kolarstwo, snowboarding",
        "książki i czasopisma podróżnicze",
        "giełda papierów wartościowych",
      ],
      en: [
        "traveling, extreme and qualified tourism",
        "low cost flight search",
        "nature photography",
        "sports: football, muay-thai, cycling, snowboarding",
        "travel books and magazines",
        "stock exchange",
      ],
    },
  },
];

export default highlightsData;
