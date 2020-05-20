const highlightsData = [{
        sectionName: 'contact',
        sectionHeader: {
            pl: 'Kontakt',
            en: 'Contact',
        },
        sectionItem: {
            tel: '+48 503 58 34 37',
            email: 'tomaszrysak@o2.pl',
            gitHub: 'github.com/tomi5',
            linkedIn: 'linkedin.com/in/tomasz-rysak',
            address: 'Skawina, woj. małopolskie'
        }
    },
    {
        sectionName: 'skills',
        sectionHeader: {
            pl: 'Umiejętności',
            en: 'Technical skills',
        },
        sectionItem: [{
            id: 1,
            name: 'techUse',
            itemHeader: {
                pl: 'Technologie, z którymi pracuję:',
                en: 'Technologies I use:',
            },
            skillsItem: ['HTML 5', 'CSS3 (flexbox, grid, BEM]', 'Sass', 'JavaScript', 'React.js', 'jQuery', 'Bootstrap 4', 'RWD', 'Git', 'PHP (SMARTY)']
        }, {
            id: 2,
            name: 'techLearning',
            itemHeader: {
                pl: 'Technologie, z którymi pracuję:',
                en: "I'm learning:",
            },
            skillsItem: ['TypeScript', 'GatsbyJS + GraphQL']
        }, {
            id: 3,
            name: 'techToKnow',
            itemHeader: {
                pl: 'Chcę poznać:',
                en: "I want to know:",
            },
            skillsItem: ['Node.js', 'MongoDB', 'Python']
        }, {
            id: 4,
            name: 'otherAbilites',
            itemHeader: {
                pl: 'Pozostałe umiejętności:',
                en: 'Others Abilities:',
            },
            skillsItem: {
                pl: ['biegła obsługa CorelDraw', 'podstawy Visual Basis oraz b.dobra znajomość Excela', 'Photoshop (cięcie PSD oraz podstawowa obróbka grafiki)'],
                en: ['fluent in CorelDraw', 'basic in Visual Basis and fluent in Excel', 'Photoshop (PSD slicing and basic image processing)'],
            }
        }],
    },
    {
        sectionName: 'languages',
        sectionHeader: {
            pl: 'Języki',
            en: 'Languages',
        },
        sectionItem: {
            pl: ['język angielski - poziom B2', 'język polski - język ojczysty'],
            en: ['English - upper intermediate', 'Polish - native speaker'],
        },
    },
    {
        sectionName: 'hobby',
        sectionHeader: {
            pl: 'Zainteresowania',
            en: 'Passions',
        },
        sectionItem: {
            pl: ['podróże, turystyka ekstremalna i kwalifikowana', 'wyszukiwanie tanich połączeń lotniczych', 'fotografia przyrodnicza', 'uprawianie sportów: piłka nożna, muay-thai, snowboarding', 'książki i czasopisma turystyczno-podróżnicze', 'giełda papierów wartościowych'],
            en: ['traveling, extreme and qualified tourism', 'low cost flight search', 'nature photography', 'sports: football, muay-thai, snowboarding', 'travel books and magazines', 'stock exchange'],
        },
    },
];

export default highlightsData