/**
 * Definuje databázi pravidel.
 */
export function getRawDatabase() {
    return {
        // ==========================================================================================
        // DEFINICE VYŠETŘENÍ
        // ==========================================================================================
        definitions: {
            basicExams: [
                { uid: "B_TK", name: "Krevní tlak", maxAgeDays: 90, codes: [{ code: "8480-6", system: "LOINC" }] },
                { uid: "B_BMI", name: "BMI", maxAgeDays: 90, codes: [{ code: "39156-5", system: "LOINC" }] },
                { uid: "B_PAS", name: "Obvod pasu", maxAgeDays: 90, codes: [{ code: "8280-0", system: "LOINC" }] },
                { uid: "B_ZRAK", name: "Orientační vyšetření zraku", maxAgeDays: 90, codes: [{ code: "70936-0", system: "LOINC" }] },
                { uid: "B_SLUCH", name: "Orientační vyšetření sluchu", maxAgeDays: 90, codes: [] },
                { uid: "B_KUZE", name: "Vyšetření kůže", maxAgeDays: 90, codes: [] },
                { uid: "B_ONKO", name: "Onkologická prevence (fyzikální)", maxAgeDays: 90, codes: [] },
            ],
            poctExams: [
                { uid: "P_MOC", name: "POCT Moč diagnostickým papírkem", maxAgeDays: 90, codes: [{ code: "09123", system: "HCPC" }, { code: "5778-6", system: "LOINC" }] },
                { uid: "P_NTBNP", name: "POCT NT-proBNP", maxAgeDays: 90, codes: [{ code: "01148", system: "HCPC" }] },
                { uid: "P_EKG", name: "EKG záznam", maxAgeDays: 90, codes: [{ code: "09127", system: "HCPC" }] },
                { uid: "P_GLU", name: "POCT Glykemie", maxAgeDays: 90, codes: [{ code: "01441", system: "HCPC" }] },
            ],
            auxExams: [
                { uid: "A_EKG", name: "Externí EKG záznam", maxAgeDays: 90, codes: [{ code: "34534-8", system: "LOINC" }, { code: "11524-6", system: "LOINC" }] },
            ],
            labExams: [
                {
                    uid: "L_KO",
                    name: "Krevní obraz prostý",
                    maxAgeDays: 90,
                    codes: [
                        { code: "20425", system: "NCLP" }  // Nález - blok
                    ],
                    includes: ["L_WBC", "L_RBC", "L_HGB", "L_HCT", "L_MCV", "L_MCH", "L_MCHC", "L_PLT"]
                },
                {
                    uid: "L_WBC",
                    name: "Leukocyty (WBC)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "02380", system: "NCLP" }, { code: "02382", system: "NCLP" },
                        { code: "02384", system: "NCLP" }, { code: "13808", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_RBC",
                    name: "Erytrocyty (RBC)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01673", system: "NCLP" }, { code: "01675", system: "NCLP" }, { code: "13804", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_HGB",
                    name: "Hemoglobin (HGB)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01990", system: "NCLP" }, { code: "01991", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_HCT",
                    name: "Hematokrit (HCT)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "02095", system: "NCLP" }, { code: "02096", system: "NCLP" }, { code: "02097", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_MCV",
                    name: "Střední objem erytrocytů (MCV)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "02417", system: "NCLP" }, { code: "02419", system: "NCLP" }, { code: "13812", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_MCH",
                    name: "Barvivo erytrocytů (MCH)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "12271", system: "NCLP" }, { code: "03389", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_MCHC",
                    name: "Střední konc. hemoglobinu (MCHC)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "12273", system: "NCLP" }, { code: "03390", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_PLT",
                    name: "Trombocyty (PLT)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "02686", system: "NCLP" }, { code: "02688", system: "NCLP" },
                        { code: "13831", system: "NCLP" }, { code: "02687", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_ALT",
                    name: "ALT",
                    maxAgeDays: 90,
                    codes: [
                        { code: "00581", system: "NCLP" }, { code: "00579", system: "NCLP" }, { code: "00582", system: "NCLP" },
                        { code: "00580", system: "NCLP" }, { code: "03913", system: "NCLP" }, { code: "05153", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_AST",
                    name: "AST",
                    maxAgeDays: 90,
                    codes: [
                        { code: "00920", system: "NCLP" }, { code: "00918", system: "NCLP" },
                        { code: "00921", system: "NCLP" }, { code: "00919", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_GMT",
                    name: "GGT (GMT)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01960", system: "NCLP" }, { code: "01958", system: "NCLP" }, { code: "01961", system: "NCLP" },
                        { code: "01959", system: "NCLP" }, { code: "03933", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_BILI",
                    name: "Bilirubin celkový",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01153", system: "NCLP" }, { code: "01151", system: "NCLP" }, { code: "01154", system: "NCLP" },
                        { code: "01152", system: "NCLP" }, { code: "52681", system: "NCLP" }, { code: "52680", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_GLU",
                    name: "Glukóza (plazma/sérum)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01896", system: "NCLP" }, { code: "01898", system: "NCLP" }, { code: "12352", system: "NCLP" },
                        { code: "12355", system: "NCLP" }, { code: "03930", system: "NCLP" }, { code: "03932", system: "NCLP" }, { code: "03931", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_KREA",
                    name: "Kreatinin",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01511", system: "NCLP" }, { code: "01509", system: "NCLP" },
                        { code: "01512", system: "NCLP" }, { code: "01510", system: "NCLP" }, { code: "03926", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_EGFR",
                    name: "eGFR (výpočet)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "17339", system: "NCLP" }, { code: "53286", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_ACR",
                    name: "Albumin/Kreatinin ratio (ACR)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "11447", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_CHOL",
                    name: "Cholesterol celkový",
                    maxAgeDays: 90,
                    codes: [
                        { code: "01349", system: "NCLP" }, { code: "01347", system: "NCLP" },
                        { code: "01350", system: "NCLP" }, { code: "01348", system: "NCLP" }, { code: "03917", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_HDL",
                    name: "HDL Cholesterol",
                    maxAgeDays: 90,
                    codes: [
                        { code: "02035", system: "NCLP" }, { code: "02033", system: "NCLP" },
                        { code: "02036", system: "NCLP" }, { code: "02034", system: "NCLP" }, { code: "03934", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_LDL",
                    name: "LDL Cholesterol",
                    maxAgeDays: 90,
                    codes: [
                        { code: "02324", system: "NCLP" }, { code: "02322", system: "NCLP" },
                        { code: "02325", system: "NCLP" }, { code: "02323", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_TAG",
                    name: "Triacylglyceroly",
                    maxAgeDays: 90,
                    codes: [
                        { code: "03025", system: "NCLP" }, { code: "03023", system: "NCLP" },
                        { code: "12374", system: "NCLP" }, { code: "12373", system: "NCLP" }, { code: "03954", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_LPA",
                    name: "Lipoprotein(a)",
                    maxAgeDays: 90,
                    codes: [
                        { code: "18002", system: "NCLP" }, { code: "18004", system: "NCLP" },
                        { code: "02386", system: "NCLP" }, { code: "02388", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_NTBNP",
                    name: "NT-proBNP",
                    maxAgeDays: 90,
                    codes: [
                        { code: "12382", system: "NCLP" }, { code: "12381", system: "NCLP" },
                        { code: "16353", system: "NCLP" }, { code: "16351", system: "NCLP" }
                    ]
                },
                {
                    uid: "L_MOC",
                    name: "Moč chemicky + sediment",
                    maxAgeDays: 90,
                    codes: [
                        { code: "20415", system: "NCLP" }
                    ]
                }
            ],
            /* Definice kategorií rizika dle diagnóz MKN10 (ICD)
            Kategorii je možno definovat: 
            - jako diagnózu bez tečky I259
            - skupinu diagnóz - kódem se zástupným znakem E10*
            - rozsah diagnóz od prvního do posledního kódu dg. E10*-E14*
            */
        riskCats: [
                {
                    "catCode": "CVrisk", "catName": "CV Risk Factors", "catDescription": "Souhrnné rizikové faktory KVO",
                    "catContent": [
                        { "icdRange": "I10*-I15*", "description": "Hypertenzní nemoci", "notes": "Zahrnuje esenciální, sekundární hypertenzi i hypertenzní nemoci srdce a ledvin" },
                        { "icdRange": "E10*-E14*", "description": "Diabetes mellitus", "notes": "Zahrnuje DM 1. typu, 2. typu i ostatní specifické formy" },
                        { "icdRange": "E78*", "description": "Dyslipidemie", "notes": "Zahrnuje čistou hypercholesterolemii, hyperglyceridemii, smíšené hyperlipidemie i deficity lipoproteinů (např. nízký HDL)." },
                        { "icdRange": "E66*", "description": "Obezita", "notes": "Viscerální tuk, zánět a metabolická zátěž" },
                        { "icdRange": "F17*", "description": "Kouření (Závislost)", "notes": "Poškození cévní stěny, pro-trombotický stav" },
                        { "icdRange": "R73*", "description": "Zvýšená glykemie (Prediabetes)", "notes": "Signál inzulinové rezistence" },
                        { "icdRange": "Z720-Z724", "description": "Rizikový životní styl (KVO relevantní)", "notes": "Pouze: Tabák, alkohol, drogy, nedostatek pohybu, nevhodná dieta" }
                    ]
                },
                {
                    "catCode": "DM", "catName": "Diabetes Mellitus", "catDescription": "Cukrovka (poruchy metabolismu glukózy)",
                    "catContent": [
                        { "icdRange": "E10*-E14*", "description": "Diabetes mellitus", "notes": "Zahrnuje DM 1. typu, 2. typu i ostatní specifické formy" }
                    ]
                },
                {
                    "catCode": "HTN", "catName": "Hypertension", "catDescription": "Arteriální hypertenze (Vysoký krevní tlak)",
                    "catContent": [
                        { "icdRange": "I10*-I15*", "description": "Hypertenzní nemoci", "notes": "Zahrnuje esenciální, sekundární hypertenzi i hypertenzní nemoci srdce a ledvin" }
                    ]
                },
                {
                    "catCode": "CVD", "catName": "Cardiovascular Diseases", "catDescription": "Existující KVO (Sekundární prevence)",
                    "catContent": [
                        { "icdRange": "I20*-I25*", "description": "Ischemické nemoci srdeční", "notes": "Zahrnuje: Anginu pectoris, Akutní infarkt, Chronickou ICHS" },
                        { "icdRange": "I60*-I69*", "description": "Cévní nemoci mozku (CMP)", "notes": "Zahrnuje: Mrtvice, krvácení, stenózy a následky CMP" },
                        { "icdRange": "I48*", "description": "Fibrilace a flutter síní", "notes": "Vysoké riziko kardioembolizační příhody" },
                        { "icdRange": "I50*", "description": "Srdeční selhání", "notes": "Pokročilé stádium poškození srdce jako pumpy" },
                        { "icdRange": "I70*", "description": "Ateroskleróza (vč. tepen končetin)", "notes": "Generalizované postižení cévního řečiště" }
                    ]
                }
            ],
            genRepIntDays: 700
        },

        generalContent: {
            parts: [ // obecné části společné pro všechny typy prohlídek, jednotlivá část part může mít definovány podčásti parts a požadovaná vyšetření reqExams (stejně jako exams u konkrétní prohlídky)
                { part: { name: "Doplnit a aktualizovat anamnézu (osobní, rodinnou, sociální, pracovní, rizikové faktory)" } },
                { part: { name: "Zkontrolovat očkování (povinná + doporučená podle individuálních rizik)" } },
                {
                    part: {
                        name: "Ověřit absolvování:",
                        parts: [
                            { name: "gynekologické prevence (u žen)" },
                            { name: "screeningových programů (kolorektální, prsu, prostaty, plic, AAA, osteoporózy, demence)" },
                            { name: "při absenci doporučit a poučit o rizicích odmítnutí" }
                        ]
                    }
                },
                {
                    part: {
                        name: "Provést kompletní fyzikální vyšetření:",
                        parts: [
                            { part: { name: "TK, BMI, obvod pasu", reqExams: ["B_TK", "B_BMI", "B_PAS"] } },
                            { part: { name: "orientační zrak + sluch", reqExams: [] } },
                            { part: { name: "vyšetření kůže", reqExams: [] } },
                            { part: { name: "onkologická prevence (prsa, varlata, per rectum dle rizika)", reqExams: [] } }
                        ]
                    }
                },
                { part: { name: "Vyšetření moči diagnostickým papírkem (není-li laboratorní)", reqExams: [] } }
            ]
        },
        initialCheckup: {
            title: "Obsah vstupní preventivní prohlídky",
            billing: { code: "01021", explanation: "Výkon komplexního preventivního vyšetření při první registraci u PL." },
            exams: [
                { exam: { name: "EKG", reqExams: ["P_EKG||A_EKG"] } },
                {
                    exam: {
                        name: "Komplexní laboratorní vyšetření (KO, jaterní testy, glykemie, kreatinin + eGFR, moč + sediment, ACR, lipidogram)",
                        reqExams: ["L_KO", "L_ALT", "L_AST", "L_GMT", "L_BILI", "L_GLU", "L_KREA", "L_EGFR", "L_MOC", "L_ACR", "L_CHOL", "L_HDL", "L_LDL", "L_TAG"]
                    }
                },
                { exam: { name: "Stanovení lipoproteinu(a), pokud nebylo dříve provedeno", reqExams: ["L_LPA"], maxAgeDays: Infinity } }
            ]
        },
        repeatedCheckup: {
            title: "Obsah opakované preventivní prohlídky",
            billing: { code: "01022", explanation: "Výkon periodické preventivní prohlídky." },
            exams: [
                {
                    exam: {
                        name: "Lipidogram, KO", reqExams: ["L_CHOL", "L_HDL", "L_LDL", "L_TAG", "L_KO"],
                        minAge: 25, maxAge: 39,
                        repetition: [{ text: "Každé 4 roky.", intDays: 1430 }]
                    }
                },
                {
                    exam: {
                        name: "Glykemie", reqExams: ["L_GLU"],
                        minAge: 18, maxAge: 39,
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                },
                {
                    exam: {
                        name: "EKG", reqExams: ["P_EKG||A_EKG"],
                        minAge: 30, maxAge: 39, conds: ["CVrisk"],
                        repetition: [
                            { text: "Každé 4 roky (KV riziko).", intDays: 1430 }
                        ]
                    }
                },
                {
                    exam: {
                        name: "Lipidogram, KO, glykemie", reqExams: ["L_CHOL", "L_HDL", "L_LDL", "L_TAG", "L_KO", "L_GLU"],
                        minAge: 40, maxAge: Infinity,
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                },
                {
                    exam: {
                        name: "EKG", reqExams: ["P_EKG||A_EKG"],
                        minAge: 40, maxAge: Infinity,
                        repetition: [
                            { text: "Každé 4 roky (nerizikoví).", cond: "NoCVrisk", intDays: 1430 },
                            { text: "Každé 2 roky (KV riziko).", cond: "CVrisk", intDays: 700 }
                        ]
                    }
                },
                {
                    exam: {
                        name: "Stanovení lipoproteinu(a)", reqExams: ["L_LPA"],
                        minAge: 45, maxAge: Infinity, gender: "female",
                        maxAgeDays: Infinity, maxCount: 2, minAgeRelated: true,
                        repetition: [{ text: "1x po menopauze.", intDays: 0 }]
                    }
                },
                {
                    exam: {
                        name: "Jaterní testy (ALT, AST, GMT, bilirubin) u rizikových", reqExams: ["L_ALT", "L_AST", "L_GMT", "L_BILI"],
                        minAge: 45, maxAge: Infinity,
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                },
                {
                    exam: {
                        name: "Vyšetření funkce ledvin (ACR, kreatinin, eGFR) u pacientů s DM, HTN nebo KVO",
                        reqExams: ["L_ACR", "L_KREA", "L_EGFR"],
                        minAge: 18, maxAge: 49, conds: ["CVrisk", "DM", "HTN", "CVD"],
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                },             
                {
                    exam: {
                        name: "Vyšetření funkce ledvin (ACR, kreatinin, eGFR)", reqExams: ["L_ACR", "L_KREA", "L_EGFR"],
                        minAge: 50, maxAge: Infinity,
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                },
                {
                    exam: {
                        name: "Stanovení NT-proBNP při riziku srdečního selhání (2+ rizikové faktory)", reqExams: ["L_NTBNP"],
                        minAge: 50, maxAge: 59,
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                },
                {
                    exam: {
                        name: "Stanovení NT-proBNP při riziku srdečního selhání (1+ rizikový faktor)", reqExams: ["L_NTBNP"],
                        minAge: 60, maxAge: Infinity,
                        repetition: [{ text: "Každé 2 roky.", intDays: 700 }]
                    }
                }

            ]
        },
        screenings: [ // možno doplnit [SCREENING_DATE] do termNote
            {
                uid: "S_MAMMO",
                name: "Screening karcinomu prsu (mamografie)",
                minAge: 45, maxAge: 69, gender: "female",
                genRepIntDays: 700,
                billing: {
                    icd: ["Z123"],
                    codes: [
                        { code: undefined, description: "PL ověřuje absolvování, nevykazuje vlastní kód.", signal: false }
                    ]
                }
            },
            {
                uid: "S_PSA",
                name: "Screening karcinomu prostaty (PSA)",
                minAge: 50, maxAge: 69, gender: "male",
                genRepIntDays: 700,
                billing: {
                    icd: ["Z125"],
                    codes: [
                        { code: "01130", description: "management", signal: false },
                        { code: "01131", description: "PSA < 1", signal: true, repIntDays: 1430 },
                        { code: "01132", description: "PSA 1-3", signal: true, repIntDays: 700 },
                        { code: "01133", description: "PSA > 3", signal: true, termination: true, termNote: "Screening ukončen pozitivním nálezem - ověřit předání na urologii a následné sledování." },
                        { code: "01134", description: "odmítnutí", signal: true, termination: true, termNote: "Pacient odmítl účast na screeningu karcinomu prostaty." }
                    ]
                }
            },
            {
                uid: "S_CRC",
                name: "Screening kolorektálního karcinomu (TOKS)",
                minAge: 45, maxAge: 74, gender: "all",
                genRepIntDays: 700,
                note: "Lze nahradit screeningovou kolonoskopií - každých 10 let při negativním výsledku.",
                billing: {
                    icd: ["Z121"],
                    codes: [
                        { code: "15118", description: "management", signal: false },
                        { code: "15119", description: "POCT provedení", signal: false },
                        { code: "15120", description: "negativní", signal: true, repIntDays: 700 },
                        { code: "15121", description: "pozitivní", signal: true, termination: true, termNote: "Screening ukončen pozitivním nálezem - ověřit předání na GE a následné sledování." },
                    ]
                }
            },
            {
                uid: "S_LDCT",
                name: "Screening karcinomu plic (LDCT)",
                minAge: 55, maxAge: 74, gender: "all",
                note: "Pouze pro kuřáky/bývalé kuřáky s 20+ balíčkoroky.",
                billing: {
                    icd: ["Z122"],
                    codes: [
                        { code: "01196", description: "zahájení", signal: false, termination: true, termNote: "Screening ukončen pozitivním nálezem - ověřit provedení LDCT a následné sledování." },
                        { code: "01197", description: "odmítnutí", signal: false, termination: false, repIntDays: 700 }
                    ]
                }
            },
            {
                uid: "S_AAA",
                name: "Screening aneurysmatu břišní aorty (AAA)",
                minAge: 65, maxAge: 67, gender: "male",
                billing: {
                    icd: ["Z136"],
                    codes: [
                        { code: "01135", description: "management se sledováním", signal: false },
                        {
                            code: "01137", description: "pozitivní -> KKC", signal: true, termination: true,
                            termNote: "Screening AAA byl ukončen s pozitivním nálezem. Pacient předán k dalšímu řešení na KKC."
                        },
                        {
                            code: "01138", description: "negativní nález", signal: true, termination: true,
                            termNote: "Screening AAA byl ukončen s negativním nálezem."
                        },
                        { code: "01136", description: "aktuální odmítnutí screeningu, možno doplnit později", signal: true, termination: false },
                        {
                            code: "01139", description: "odmítnutí pokračování s výsledkem UZ", signal: true, termination: true,
                            termNote: "Pacient odmítl další sledování aneurysmatu břišní aorty."
                        }
                    ]
                }
            },
            {
                uid: "S_DEM",
                name: "Screening demence (MiniCog/MMSE)",
                minAge: 65, maxAge: 80, gender: "all",
                billing: {
                    icd: ["Z000", "F03"],
                    codes: [
                        { code: "01026", description: "MiniCog", signal: false, repIntDays: 700 },
                        { code: "01210", description: "MMSE", signal: false, repIntDays: 700 }
                    ]
                }
            },
            {
                uid: "S_OSF_F",
                name: "Screening osteoporózy (FRAX)",
                minAge: 45, maxAge: 59, gender: "female",
                note: "Ženy 45-59 - FRAX",
                billing: {
                    icd: ["Z138", "M819"],
                    codes: [
                        {
                            code: "11320", description: "management, indikováno DXA", signal: false, termination: true,
                            termNote: "Primární screening osteoporózy ukončen indikací k DXA vyšetření - zkontrolovat výsledek DXA a následné sledování."
                        },
                        { code: "11321", description: "management, neindikováno DXA", signal: false, repIntDays: 700 }
                    ]
                }
            },
            {
                uid: "S_OSD_F",
                name: "Screening osteoporózy (DXA)",
                minAge: 60, maxAge: Infinity, gender: "female",
                note: "Ženy >60 - DXA",
                billing: {
                    icd: ["Z138", "M819"],
                    codes: [
                        {
                            code: "11320", description: "management, indikováno DXA", signal: false, termination: true,
                            termNote: "Primární screening osteoporózy ukončen indikací k DXA vyšetření - zkontrolovat výsledek DXA a následné sledování."
                        },
                    ]
                }
            },
            {
                uid: "S_OSF_M",
                name: "Screening osteoporózy (FRAX)",
                minAge: 65, maxAge: 69, gender: "male",
                note: "Muži 65-69 FRAX",
                billing: {
                    icd: ["Z138", "M819"],
                    codes: [
                        {
                            code: "11320", description: "management, indikováno DXA", signal: false, termination: true,
                            termNote: "Primární screening osteoporózy ukončen indikací k DXA vyšetření - zkontrolovat výsledek DXA a následné sledování."
                        },
                        { code: "11321", description: "management, neindikováno DXA", signal: false, repIntDays: 700 }
                    ]
                }
            },
            {
                uid: "S_OSD_F",
                name: "Screening osteoporózy (DXA)",
                minAge: 70, maxAge: Infinity, gender: "male",
                note: "Muži >70 DXA",
                billing: {
                    icd: ["Z138", "M819"],
                    codes: [
                        { code: "11320", description: "management, indikováno DXA", signal: true, termination: true },
                    ]
                }
            }
        ],
        vaccinations: [
                {
                    uid: "V_PER",
                    name: "Černý kašel",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "X",
                    reimbursementNote: "Není hrazeno z veřejného zdravotního pojištění (pro dospělé). Pojišťovny mohou nabízet příspěvky z fondů prevence.",
                    note: "Schéma: 1 dávka (Tdap), přeočkování po 10–15 letech namísto samostatného tetanu.",
                    atcGroups: [
                        { atc7: "J07AJ52", maxTimeBooster: 15 }
                    ]
                },
                {
                    uid: "V_C19",
                    name: "COVID-19",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "A",
                    reimbursementNote: "Plně hrazeno z veřejného zdravotního pojištění.",
                    note: "Schéma: 1 dávka, přeočkování dle aktuálních doporučení.",
                    billing: {
                        icd: "Z25.8",
                        codes: "99936 (Pfizer), 99937 (Moderna), 99935 (Novavax)",
                        zulp: "Nevyplňuje se"
                    },
                    atcGroups: [
                        { atc7: "J07BN01", maxTimeBooster: 1 }
                    ]
                },
                {
                    uid: "V_HIB",
                    name: "Haemophillus influenzae typ b (HiB)",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro: porušená/zaniklá fce sleziny, transplantace kmen. buněk, závažné imunodeficity, prodělaná invazivní mening./pneumo. infekce.",
                    note: "Schéma: 1 dávka.",
                    billing: {
                        mkn: "Dle diagnózy pacienta (např. D73.1)",
                        codes: "02125",
                        zulp: "0054227 (HIBERIX)"
                    },
                    atcGroups: [
                        { atc7: "J07AG01", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_HEPA",
                    name: "Hepatitida A",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro nově přijímané zaměstnance a příslušníky IZS dle vyhlášky.",
                    note: "Schéma: 2 dávky.",
                    billing: {
                        mkn: "Z24.6",
                        codes: "02130",
                        zulp: "Nevyplňuje se"
                    },
                    atcGroups: [
                        { atc7: "J07BC02", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_HEPAB",
                    name: "Hepatitida A/B",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro nově přijímané zaměstnance a příslušníky IZS dle vyhlášky.",
                    note: "Schéma: 3 dávky.",
                    billing: {
                        mkn: "Z24.6",
                        codes: "02130",
                        zulp: "Nevyplňuje se"
                    },
                    atcGroups: [
                        { atc7: "J07BC20", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_HEPB",
                    name: "Hepatitida B",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro zdravotníky, pracovníky v soc. službách, studenty zdr. oborů, IZS, vězeňskou službu a osoby v novém riziku (např. hemodialýza).",
                    note: "Schéma: 3 dávky.",
                    billing: {
                        mkn: "Z24.6",
                        codes: "02130 (nebo 02105 u dialyzovaných)",
                        zulp: "Nevyplňuje se (u 02130)"
                    },
                    atcGroups: [
                        { atc7: "J07BC01", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_FLU65",
                    name: "Chřipka",
                    minAge: 65, maxAge: Infinity,
                    reimbursementType: "A",
                    reimbursementNote: "Plně hrazeno pro všechny osoby nad 65 let.",
                    note: "Schéma: 1 dávka každoročně.",
                    billing: {
                        mkn: "Z25.1",
                        codes: "02125",
                        zulp: "Např. 0256076 (VAXIGRIP)",
                        lzvl: "'T' (UHR3)"
                    },
                    atcGroups: [
                        { atc7: "J07BB01", maxTimeBooster: 1 }
                    ]
                },
                {
                    uid: "V_FLU_RISK",
                    name: "Chřipka (rizikové skupiny)",
                    minAge: 18, maxAge: 64,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro: 1. Závažná chron. onem. srdce, cév, dých. cest, ledvin či diabetes. 2. Osoby v ústavní péči/domovech pro seniory. 3. Zdravotníci.",
                    note: "Schéma: 1 dávka každoročně.",
                    billing: {
                        mkn: "Z25.1 (pacienti) / Z29.8 (personál)",
                        codes: "02125",
                        zulp: "Např. 0281493 (INFLUVAC)"
                    },
                    atcGroups: [
                        { atc7: "J07BB01", maxTimeBooster: 1 }
                    ]
                },
                {
                    uid: "V_TBE",
                    name: "Klíšťová encefalitida",
                    minAge: 50, maxAge: Infinity,
                    reimbursementType: "A",
                    reimbursementNote: "Plně hrazeno pro všechny osoby nad 50 let.",
                    note: "Schéma: 3 dávky, přeočkování po 3-5 letech.",
                    billing: {
                        mkn: "Z24.1",
                        codes: "02125",
                        zulp: "Např. 0215956 (FSME-IMMUN)"
                    },
                    atcGroups: [
                        { atc7: "J07BA01", maxTimeBooster: 5 }
                    ]
                },
                {
                    uid: "V_HPV",
                    name: "Lidský papilomavirus (HPV)",
                    minAge: 18, maxAge: 26,
                    reimbursementType: "X",
                    reimbursementNote: "Pro dospělé není hrazeno (mimo zahájení v dětství 11-15 let).",
                    note: "Schéma: 3 dávky.",
                    atcGroups: [
                        { atc7: "J07BM01", maxTimeBooster: Infinity },
                        { atc7: "J07BM02", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_MEN",
                    name: "Meningokokové infekce",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro: porušená/zaniklá fce sleziny, transplantace kmen. buněk, závažné imunodeficity, prodělaná invazivní mening./pneumo. infekce.",
                    note: "Schéma: 2 dávky (MenB), 1 dávka (MenACWY).",
                    billing: {
                        mkn: "Dle diagnózy pacienta",
                        codes: "02125",
                        zulp: "Např. 0193805 (BEXSERO)"
                    },
                    atcGroups: [
                        { atc7: "J07AH09", maxTimeBooster: Infinity },
                        { atc7: "J07AH08", maxTimeBooster: 5 }
                    ]
                },
                {
                    uid: "V_HZ",
                    name: "Pásový opar",
                    minAge: 50, maxAge: Infinity,
                    reimbursementType: "X",
                    reimbursementNote: "Není hrazeno z veřejného zdravotního pojištění.",
                    note: "Schéma: 2 dávky.",
                    atcGroups: [
                        { atc7: "J07BK01", maxTimeBooster: Infinity },
                        { atc7: "J07BK02", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_VAR",
                    name: "Plané neštovice",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "X",
                    reimbursementNote: "Není hrazeno.",
                    note: "Schéma: 2 dávky.",
                    atcGroups: [
                        { atc7: "J07BK01", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_PNEU_RISK",
                    name: "Pneumokokové infekce (rizikové skupiny)",
                    minAge: 18, maxAge: 64,
                    reimbursementType: "B",
                    reimbursementNote: "Dvě skupiny: 1. Vysoké riziko (slezina, transplantace, imunodeficity). 2. Ústavní péče (LDN/DSS) + chron. onem. dých. cest, srdce, ledvin, diabetes.",
                    note: "Schéma: 1 dávka (Prevenar 20) nebo sekvenční.",
                    billing: {
                        mkn: "Z23.8 (nebo Dg rizika)",
                        codes: "02125 (Vysoké riziko) / 02105 (Ústavní péče)",
                        zulp: "Např. 0255467 (APEXXNAR)",
                        lzvl: "'Z' (pouze pro sk. Ústavní péče)"
                    },
                    atcGroups: [
                        { atc7: "J07AL01", maxTimeBooster: Infinity },
                        { atc7: "J07AL02", maxTimeBooster: 5 }
                    ]
                },
                {
                    uid: "V_PNEU",
                    name: "Pneumokokové infekce",
                    minAge: 65, maxAge: Infinity,
                    reimbursementType: "A",
                    reimbursementNote: "Plně hrazeno pro všechny osoby nad 65 let.",
                    note: "Schéma: 1 dávka (Prevenar 20) nebo sekvenční.",
                    billing: {
                        mkn: "Z23.8",
                        codes: "02125",
                        zulp: "Např. 0255467 (APEXXNAR)"
                    },
                    atcGroups: [
                        { atc7: "J07AL01", maxTimeBooster: Infinity },
                        { atc7: "J07AL02", maxTimeBooster: 5 }
                    ]
                },
                {
                    uid: "V_RSV",
                    name: "Respirační syncytiální virus (RSV)",
                    minAge: 60, maxAge: Infinity,
                    reimbursementType: "X",
                    reimbursementNote: "Není hrazeno z veřejného zdravotního pojištění.",
                    note: "Schéma: 1 dávka.",
                    atcGroups: [
                        { atc7: "J07BX05", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_MEAS",
                    name: "Spalničky",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro nové zaměstnance na infekčních a dermatovenerologických pracovištích.",
                    note: "Schéma: 1 dávka.",
                    billing: {
                        mkn: "Z24.4",
                        codes: "02130",
                        zulp: "Nevyplňuje se"
                    },
                    atcGroups: [
                        { atc7: "J07BD01", maxTimeBooster: Infinity },
                        { atc7: "J07BD52", maxTimeBooster: Infinity }
                    ]
                },
                {
                    uid: "V_TET",
                    name: "Tetanus",
                    minAge: 18, maxAge: 59,
                    reimbursementType: "A",
                    reimbursementNote: "Plně hrazeno (pravidelné i při úrazech/ranách).",
                    note: "Přeočkování po 10-15 letech, u 65+ po 10 letech.",
                    billing: {
                        mkn: "Z23.5",
                        codes: "02105 (pravidelné) / 02125 (úrazy)",
                        zulp: "0083443 (TETAVAX)",
                        lzvl: "'Z' (pouze u 02105)"
                    },
                    atcGroups: [
                        { atc7: "J07AM01", maxTimeBooster: 15 },
                        { atc7: "J07CA02", maxTimeBooster: 15 },
                        { atc7: "J07AJ52", maxTimeBooster: 15 }
                    ]
                },
                {
                    uid: "V_TET60",
                    name: "Tetanus",
                    minAge: 60, maxAge: Infinity,
                    reimbursementType: "A",
                    reimbursementNote: "Plně hrazeno (pravidelné i při úrazech/ranách).",
                    note: "Přeočkování po 10-15 letech, u 65+ po 10 letech.",
                    billing: {
                        mkn: "Z23.5",
                        codes: "02105 (pravidelné) / 02125 (úrazy)",
                        zulp: "0083443 (TETAVAX)",
                        lzvl: "'Z' (pouze u 02105)"
                    },
                    atcGroups: [
                        { atc7: "J07AM01", maxTimeBooster: 10 },
                        { atc7: "J07CA02", maxTimeBooster: 10 },
                        { atc7: "J07AJ52", maxTimeBooster: 10 }
                    ]
                },                
                {
                    uid: "V_RAB",
                    name: "Vzteklina",
                    minAge: 18, maxAge: Infinity,
                    reimbursementType: "B",
                    reimbursementNote: "Hrazeno pro pracovníky laboratoří s virulentními kmeny vztekliny.",
                    note: "Schéma: 3 dávky preexpozičně.",
                    billing: {
                        mkn: "Z24.2",
                        codes: "02130",
                        zulp: "Nevyplňuje se"
                    },
                    atcGroups: [
                        { atc7: "J07BG01", maxTimeBooster: 5 }
                    ]
                }
            ]
    };
}