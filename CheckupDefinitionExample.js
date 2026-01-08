/**
 *  UKÁZKOVÁ DEFINICE PREVENTIVNÍ PROHLÍDKY (CheckupDefinition.js)
 *  Tento soubor definuje veškerá medicínská pravidla, kódy výkonů a logiku 
 *  pro generování plánu preventivní prohlídky.
 *  Níže jeu uveden komentovaný příklad definice preventivní prohlídky.
 */

export function getRawDatabase() {
    return {
        // ==========================================================================================
        // 1. DEFINICE VYŠETŘENÍ (Číselníky)
        // Zde definujeme VŠECHNA možná vyšetření, na která se budeme odkazovat v dalších částech.
        // ==========================================================================================
        definitions: {
            // Fyzikální a základní vyšetření (Basic)
            basicExams: [
                {
                    uid: "B_TK",               // Unikátní identifikátor (povinný)
                    name: "Krevní tlak",       // Název pro zobrazení
                    maxAgeDays: 90,            // Platnost výsledku ve dnech (pro evaluaci historie)
                    codes: [{ code: "8480-6", system: "LOINC" }] // Kódy  a k´dovací systémy pro spárování s daty "NCLP", "LOINC", "SNOMED", "HCPC" = Healt Care Procedure Code
                },
            ],
            // Laboratorní vyšetření
            labExams: [
                {
                    uid: "L_KO",
                    name: "Krevní obraz",
                    maxAgeDays: 90,
                    codes: [{ code: "20425", system: "NCLP" }],
                    // 'includes' definuje pod-vyšetření. Pokud je nastaveno, evaluátor 
                    // kontroluje tyto UID namísto hlavního UID (vhodné pro blokové nálezy).
                    includes: ["L_WBC", "L_RBC", "L_HGB"]
                },
                { uid: "L_HGB", name: "Hemoglobin", maxAgeDays: 90, codes: [{ code: "01990", system: "NCLP" }] },
            ],
            // Ostatní kategorie - POCT vyšetření, další pomocná vyšetření (auxiliary))
            poctExams: [],
            auxExams: [],

            // Výchozí interval opakování v dnech, pokud není u konkrétního prvku uvedeno jinak
            genRepIntDays: 700
        },

        // ==========================================================================================
        // 2. OBECNÝ OBSAH (Společné pro všechny prohlídky)
        // Části, které se provádějí vždy (např. anamnéza), bez ohledu na věk/pohlaví.
        // ==========================================================================================
        generalContent: {
            parts: [
                {
                    part: {
                        name: "Anamnéza",
                        // minAge: undefined,     // Od věku (včetně), pokud není uvedeno, platí pro každý věk
                        // maxAge: undefined,     // Do věku (včetně), pokud není uvedeno, platí pro každý věk
                        // maxAgeDays: undefined, // Platnost výsledku ve dnech (pro evaluaci historie), pokud je zadáno zde, má vyšší prioritu než u jednotlivého reqExams
                        // gender: "all",         // "male" / "female" / "all", pokud není uvedeno, platí pro každé pohlaví                        
                        // reqExams: [] -> lze provázat s konkrétním UID z definitions, pokud vyžaduje záznam
                    }
                },
                {
                    part: {
                        name: "Fyzikální vyšetření",
                        parts: [ // Vnořené pod-části
                            {
                                part: {
                                    name: "TK, BMI, Pas",
                                    reqExams: ["B_TK", "B_BMI", "B_PAS"], // Vazba na definitions
                                    // prvek reqExams může být i objekt { uid: "L_LPA", lastDates: 2 } - pro kontrolu posledních 2 výsledků
                                    minAge: undefined,     // Od věku (včetně), pokud není uvedeno, platí pro každý věk
                                    maxAge: undefined,     // Do věku (včetně), pokud není uvedeno, platí pro každý věk
                                    maxAgeDays: undefined, // Platnost výsledku ve dnech (pro evaluaci historie), pokud je zadáno zde, má vyšší prioritu než u jednotlivého reqExams
                                    gender: undefined,      // "male" / "female" / "all", pokud není uvedeno, platí pro každé pohlaví
                                    conds: ["CVrisk"],       // Pole podmínek, které pokud je některá z nich true, tak se část zobrazí, pokud není zadáno, či je pole prázdné, zobrazí se vždy                             
                                }
                            }
                        ]
                    }
                }
            ]
        },

        // ==========================================================================================
        // 3. VSTUPNÍ / REGISTRAČNÍ PROHLÍDKA
        // Specifický obsah pro první kontakt s pacientem.
        // ==========================================================================================
        initialCheckup: {
            title: "Vstupní preventivní prohlídka",
            billing: {
                code: "01021",
                explanation: "Výkon při první registraci."
            },
            exams: [
                {
                    exam: {
                        name: "Laboratorní screening",
                        reqExams: ["L_KO", "L_GLU", "L_CHOL"],
                        minAge: 40,               // Od 40 let (včetně)
                        maxAge: Infinity,         // Do konce života
                        maxAgeDays: undefined,    // Platnost výsledku ve dnech (pro evaluaci historie), pokud je zadáno zde, má vyšší prioritu než u jednotlivého exam či v definici reqExams 
                        gender: "all",            // "male" / "female" / "all", pokud není uvedeno, platí pro každé pohlaví
                        conds: ["CVrisk"],         // Pole podmínek, které pokud je některá z nich true, tak se vyšetření zobrazí, pokud není zadáno, či je pole prázdné, zobrazí se vždy    
                    }
                },
                {
                    exam: {
                        name: "Stanovení lipoproteinu(a), pokud nebylo dříve provedeno", reqExams: ["L_LPA"],
                        maxAgeDays: Infinity
                    }
                }
            ]
        },

        // ==========================================================================================
        // 4. OPAKOVANÁ (PERIODICKÁ) PROHLÍDKA
        // Obsahuje logiku větvení podle věku a pohlaví.
        // ==========================================================================================
        repeatedCheckup: {
            title: "Opakovaná preventivní prohlídka",
            billing: { code: "01022", explanation: "Periodická prohlídka." },
            exams: [
                {
                    exam: {
                        name: "EKG",
                        reqExams: ["P_EKG||A_EKG"], // Operátor || znamená "buď jedno, nebo druhé"
                        minAge: 40,     // Od věku (včetně), pokud není uvedeno, platí pro každý věk nebo dle nadřazené položky
                        maxAge: undefined,     // Do věku (včetně), pokud není uvedeno, platí pro každý věk nebo dle nadřazené položky
                        conds: [],              // Pole podmínek, které pokud je některá z nich true, tak se vyšetření zobrazí, pokud není zadáno, či je pole prázdné, zobrazí se vždy   
                        maxAgeDays: undefined, // Platnost výsledku ve dnech (pro evaluaci historie), pokud je zadáno zde, má vyšší prioritu než u jednotlivého reqExams, pokud není uvedeno, platí dle nadřazené položky
                        gender: undefined,     // "male" / "female" / "all", pokud není uvedeno, platí pro každé pohlaví
                        repetition: [
                            { text: "Každé 4 roky (nerizikoví).", cond: "NOrisk", intDays: 1430 },  // condition je unikátní identifikátor, který je spolu s intDays použit pro zobrazení textu u aktuálně definovaného pacienta
                            { text: "Každé 2 roky (KV riziko).", cond: "CVrisk", intDays: 700 }     // intDays je počet dní, po kterém se má vyšetření v rámci prevence opakovat - pokud je poslední provedení prevence v minulosti >= intDays, potřeba vyšetření se zobrazí a hledá se dostupné provedení dle maxAgeDays = maximální platnost výsledku daného vyšetření
                            // Pro GET_CONTENT je generováno pole objektů všech vlastností cond  od všech definovaných vyšetření [ "cond_value": false ], očekává se zadání true/false pro každý stav (condition)
                            // Pokud pro dané pole repetition není dostupná žádná z jeho podmínek jako true, zobrazí se všechny volby v intervalu dle nejnižšího intDays v daném poli repetition
                            // Pokud je více  stavů cond zadáno jako true, zobrazí se tyto stavy dle intervalu intDays od poslední prevence (lastCheckupDate).
                        ],
                        maxCount: undefined // Maximální počet výsledků v historii, pokud není undefined nebo 0, vytvoří u patřičné položky/položek v GET_CONTENT pole položku "numAvailable" vedle "lastDate" na úrovni "uid"
                    }
                },
                {
                    exam: {
                        name: "Stanovení lipoproteinu(a), 1x po menopauze", reqExams: ["L_LPA"],
                        minAge: 45,
                        gender: "female",
                        conds: [],         // Pole podmínek, které pokud je některá z nich true, tak se vyšetření zobrazí, pokud není zadáno, či je pole prázdné, zobrazí se vždy   
                        maxAgeDays: Infinity,
                        maxCount: 2, // Pokud je zadáno (není undefined či) jde o aximální počet výsledků daného vyšetření v historii, pokud je dosažen či překročen, vyšetření se neopakuje. 
                        // Opakuje se v pouze v případě, že je porušena podmínka věku daná minAgeRelated
                        minAgeRelated: true, // Pokud je zadáno true, poslední provedené vyšetření je vyžadováno alespoň ve věku minAge, jinak je třeba opakovat i pokud je překročen maxCount!
                        repetition: [{ text: "1x po menopauze.", intDays: 0 }] // Pokud je zadáno intDays = 0, a vyšetření bylo provedeno (existuje lastDate), vyšetření se zobrazí vždy a je zobrazeno jako platné (zeleně), pokud je dosažen maxCount a splněna podmínka minAgeRelated
                    }
                } // vyžaduje data posledních 2 výsledků 
                // - vytvoří pole 2 prázdných prvků v lastDate v GET_CONTENT, aby indikoval potřebu zádání posledních 2 výsledků, 
                // - možnost zpracování v SHOW_COMPLEX musí být tak, aby bylo možno zpracovat jak pole, tak solitární hodnotu!
                // - pokud jsou zadána 2 data výsledků a alespoň jedno je platné (today - lastDate <= maxAgeDays), je vyšetření považováno jako platné pro výsledného průvodce 
            ],

            // ==========================================================================================
            // 5. SCREENINGOVÉ PROGRAMY
            // Specifické programy sledované pojišťovnami.
            // ==========================================================================================
            screenings: [
                {
                    uid: "S_CRC",
                    name: "Screening kolorektálního karcinomu",
                    minAge: 45,
                    maxAge: 74,
                    gender: "all", // Volitelné: "male" / "female" / "all"
                    conds: [], // Pole podmínek, které pokud je některá z nich true, tak se vyšetření zobrazí, pokud není zadáno, či je pole prázdné, zobrazí se vždy   
                    genRepIntDays: 700,
                    billing: {
                        mkn: ["Z121"], // Diagnóza pro vykazování
                        codes: [
                            { code: "15118", description: "Management" },
                            {
                                code: "15120",
                                description: "Negativní výsledek",
                                signal: true,       // Tento kód se rozlišuje management kód a signální kód, pokud je samostantý signální kód, používá se pro výpočet termínu dalšího termínu ten, jinak management
                                repIntDays: 700     // Specifický interval opakovaná pro daný kód, pokud je relevantí
                            },
                            {
                                code: "15121",
                                description: "Pozitivní výsledek",
                                signal: true,
                                termination: true,  // Screeningový proces zde končí (předáno ke specialistovi, do další péče)
                                termNote: "Screening ukončen nálezem."
                            }
                        ]
                    }
                }
            ],

            // ==========================================================================================
            // 6. OČKOVÁNÍ
            // Přehled doporučených a hrazených vakcín.
            // ==========================================================================================
            vaccinations: [
                {
                    uid: "V_TET",
                    name: "Tetanus",
                    minAge: 18,
                    maxAge: Infinity,
                    gender: "all", // Volitelné: "male" / "female" / "all"
                    conds: [], // Pole podmínek, které pokud je některá z nich true, tak se vyšetření zobrazí, pokud není zadáno, či je pole prázdné, zobrazí se vždy   
                    reimbursementType: "A", // A = Plně hrazeno, B = Spec. skupiny, X = Nehrazeno
                    reimbursementNote: "Plně hrazeno z pojištění.",
                    note: "Přeočkování po 10-15 letech.",
                    atcGroups: [
                        {
                            atc7: "J07AM01",      // ATC kód vakcíny pro jednoznačnou identifikaci typu očkování
                            maxTimeBooster: 15    // Maximální doba platnosti v letech
                        }
                    ]
                }
            ]
        }
    }
}
