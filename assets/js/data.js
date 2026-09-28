/* ============================================================
   CONFINI RESTAURANT — UNICO FILE DATI (fonte di verità)
   Per modificare un prezzo, un orario o un contatto, cambia
   SOLO questa riga: non toccare mai layout, CSS o HTML.
   ============================================================ */
window.CONFINI = {

  /* -------- ATTIVITÀ / CONTATTI -------- */
  business: {
    nome: "Confini",
    nomeCompleto: "Confini Restaurant",
    payoff: "Racconti di gusto",
    claim: "La cucina non ha confini",
    hashtag: "#oltreiconfini",
    indirizzo: "Via Napoli, 221",
    cap: "80078",
    citta: "Pozzuoli",
    provincia: "NA",
    telefono: "081 359 9202",
    telefonoIntl: "+390813599202",   // per link tel: e WhatsApp
    email: "",                        // opzionale: aggiungi se disponibile
    // Link
    prenotazioneUrl: "https://reservationconfini.guestplan.io/",
    mapsEmbed: "https://www.google.com/maps?q=Confini%20Restaurant%20Via%20Napoli%20221%20Pozzuoli%20NA&output=embed",
    mapsLink: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x133b0f3cb0659917:0x5b8a6cda8ed1136a",
    instagram: "https://www.instagram.com/confini_restaurant/",
    facebook: "https://www.facebook.com/confinirestaurant/",
    recensioniUrl: "https://www.google.com/search?q=Confini+Restaurant+Pozzuoli+recensioni",
    // Coordinate approssimate (Pozzuoli, Via Napoli) — verificare
    geo: { lat: 40.8272, lng: 14.1330 },
    priceRange: "€€€",
    cucina: "Cucina fusion contemporanea"
  },

  /* -------- ORARI --------
     Formato 24h in minuti. "chiusura" può superare 1440 = oltre la mezzanotte.
     giorno: 0=Domenica ... 6=Sabato (come JS getDay()).            */
  orari: [
    { giorno: 0, label: "Domenica",  fasce: [[12*60, 19*60]] },              // 12:00–19:00
    { giorno: 1, label: "Lunedì",    fasce: [[17*60, 24*60]] },              // 17:00–00:00
    { giorno: 2, label: "Martedì",   fasce: [[17*60, 24*60]] },              // 17:00–00:00
    { giorno: 3, label: "Mercoledì", fasce: [[17*60, 24*60]] },              // 17:00–00:00
    { giorno: 4, label: "Giovedì",   fasce: [[17*60, 24*60]] },              // 17:00–00:00
    { giorno: 5, label: "Venerdì",   fasce: [[17*60, 25*60]] },              // 17:00–01:00
    { giorno: 6, label: "Sabato",    fasce: [[12*60, 24*60]] }               // 12:00–00:00
  ],

  /* -------- GALLERIA (foto in scorrimento) -------- */
  galleria: [
    { webp: "assets/img/gallery-1.webp", jpg: "assets/img/gallery-1.jpg", alt: "Mezzi paccheri cremosi con pepe rosa", w:1080, h:1350 },
    { webp: "assets/img/gallery-2.webp", jpg: "assets/img/gallery-2.jpg", alt: "Polpo laccato al miele e paprika con patate novelle", w:1080, h:1350 },
    { webp: "assets/img/gallery-3.webp", jpg: "assets/img/gallery-3.jpg", alt: "Gyoza al vapore di nostra produzione", w:1080, h:1350 },
    { webp: "assets/img/gallery-4.webp", jpg: "assets/img/gallery-4.jpg", alt: "Tartare di tonno con ricotta e agrumi", w:1080, h:1350 }
  ],

  /* -------- PIATTI IN EVIDENZA (home) -------- */
  evidenza: ["Gyoza Nerano", "Tagliolime", "Polpo Gallega", "Risotto e Caffè"],

  /* ============================================================
     MENU — CIBO
     tags disponibili: "specialita", "vegetariano", "piccante"
     ============================================================ */
  menuCibo: [
    {
      cat: "Antipasti",
      items: [
        { name:"Bad Bun", price:"12€", desc:"Panino di nostra produzione con tonno scottato, provola e agretti (2 pz.).", all:["Glutine","Pesce","Latte"], tags:[] },
        { name:"Caledonia’s Waves", price:"18€", desc:"Gambero blu di Caledonia scottato a fuoco vivo, hummus di ceci, salsa al passion fruit e olio di sesamo.", all:["Crostacei","Sesamo"], tags:["specialita"] },
        { name:"Croquetas Baccalà", price:"12€", desc:"Croquetas di baccalà impanate con panko e servite con salsa (4 pz.).", all:["Glutine","Pesce"], tags:[] },
        { name:"Croquetas Iberico", price:"12€", desc:"Croquetas con prosciutto spagnolo impanate con corn flakes e salsa alle erbe (4 pz.).", all:["Glutine","Latte"], tags:[] },
        { name:"Gyoza Ichimi", price:"11€", desc:"Raviolo di nostra produzione al vapore, farcito con pesce spada, melanzane, pomodorini datterini, olive di Gaeta e capperi di Pantelleria (4 pz.).", all:["Glutine","Pesce","Soia"], tags:[] },
        { name:"Gyoza Nerano", price:"11€", desc:"Raviolo di nostra produzione al vapore, farcito con crema di pecorino, zucchine fritte e basilico (4 pz.).", all:["Glutine","Latte"], tags:["specialita","vegetariano"] },
        { name:"Gyoza Sloppy Joe", price:"11€", desc:"Raviolo di nostra produzione al vapore, farcito con carne di manzo aromatizzata (4 pz.).", all:["Glutine"], tags:[] },
        { name:"Lobster Roll", price:"18€", desc:"Pan bauletto di nostra produzione scottato al burro con trancio di aragosta, porro in agrodolce, bisque e stick di patate (1 pz.).", all:["Glutine","Crostacei","Latte"], tags:["specialita"] },
        { name:"Patata Bravas", price:"11€", desc:"Patate in doppia cottura servite con salsa bravas e verdure fresche.", all:[], tags:["vegetariano"] },
        { name:"Polpetta Pianurese", price:"9€", desc:"Polpetta fritta di selezione di carni servita con salsa al pomodoro.", all:["Glutine"], tags:[] }
      ]
    },
    {
      cat: "Primi piatti",
      items: [
        { name:"Langosta", price:"25€", desc:"Cannerone con aragosta, emulsione di pomodorini e polvere di alga kombu.", all:["Crostacei"], tags:["specialita"] },
        { name:"Risotto e Caffè", price:"25€", desc:"Risotto con baccalà cotto in latte e vaniglia, polvere di caffè, mantecato al burro, limone e zest a vivo.", all:["Glutine","Pesce","Latte"], tags:["specialita"] },
        { name:"Spaghettone Cacio, Pepe e Pere", price:"16€", desc:"Spaghettone Gragnanese XXL, Pasta di Gragnano IGP trafilata al bronzo: spessore generoso, tenuta perfetta e morso deciso.", all:["Glutine","Latte"], tags:["vegetariano"] },
        { name:"Tagliolime", price:"28€", desc:"Tagliolino di pasta fresca mantecato al burro, smash di gambero rosso di Mazara del Vallo, zest di limone e lime.", all:["Glutine","Crostacei","Latte"], tags:["specialita"] }
      ]
    },
    {
      cat: "Secondi piatti",
      items: [
        { name:"Cordon Fish", price:"22€", desc:"Reinterpretazione del cordon bleu con orata, pesce spada affumicato ed emmental.", all:["Pesce","Latte"], tags:[] },
        { name:"Filetto Rock", price:"28€", desc:"Filetto di manzo in salsa Roquefort e verdure baby.", all:["Latte"], tags:["specialita"] },
        { name:"Pizza Fujuta", price:"24€", desc:"Coniglio ripassato nel burro chiarificato, crema di pomodori alla brace, peperone crusco e jus di coniglio.", all:["Latte"], tags:[] },
        { name:"Polpo Gallega", price:"22€", desc:"Polpo laccato al miele e paprika accompagnato da patate novelle.", all:["Pesce"], tags:["specialita"] },
        { name:"Saint Peter Key’s", price:"28€", desc:"Trancio di pesce San Pietro con carciofi, olive, capperi, erbe aromatiche del Mediterraneo e crema di carciofi.", all:["Pesce"], tags:[] },
        { name:"Wellington di Tonno", price:"25€", desc:"Trancio di tonno avvolto in crosta di pasta sfoglia con funghi, bietola e senape, demi-glace di tonno.", all:["Glutine","Pesce"], tags:[] }
      ]
    }
  ],

  /* ============================================================
     MENU — CARTA DEI VINI (prezzi a bottiglia)
     ============================================================ */
  menuVini: [
    {
      cat: "Bianchi — Campania",
      items: [
        { name:"Biancolella Costa delle Parracine DOC 2025", price:"45€", desc:"Biancolella · 2025 · Tenuta Coppola" },
        { name:"Bianco di Baal Colli di Salerno IGT 2023", price:"32€", desc:"Gewürztraminer · 2023 · Casa di Baal" },
        { name:"Campierti Lulù IGT Campania 2025", price:"30€", desc:"Falanghina · 2025 · Zannini" },
        { name:"Donnalaura Falanghina DOP 2020", price:"50€", desc:"Falanghina · 2020 · Masseria Frattasi" },
        { name:"Fiano di Avellino DOCG 2024", price:"32€", desc:"Fiano · 2024 · Setterra" },
        { name:"Forastera Costa delle Parracine DOC 2025", price:"32€", desc:"Forastera · 2025 · Cantina Terradipo" },
        { name:"Gelsobianco Catalanesca del Monte Somma IGP 2025", price:"32€", desc:"Catalanesca · 2025 · Villa Dora" },
        { name:"Greco di Tufo DOCG 2024", price:"32€", desc:"Greco · 2024 · Setterra" },
        { name:"Lacryma Christi del Vesuvio DOC Bianco 2025", price:"30€", desc:"Lacryma Christi · 2025 · Villa Dora" },
        { name:"Luce Flegrea Falanghina dei Campi Flegrei DOC 2024", price:"32€", desc:"Falanghina · 2024 · Cantina del Mare" },
        { name:"Pietracalda Fiano di Avellino DOCG 2024", price:"35€", desc:"Fiano di Avellino · 2024 · Feudi di San Gregorio" },
        { name:"Sequenzha Fiano di Avellino DOCG 2025", price:"35€", desc:"Fiano di Avellino · 2025 · Benito Ferrara" },
        { name:"Terra d’Uva Greco di Tufo DOCG 2025", price:"35€", desc:"Greco di Tufo · 2025 · Benito Ferrara" },
        { name:"Versante d’Ercole Fiano di Avellino DOCG 2023", price:"43€", desc:"Fiano di Avellino · 2023 · Rocca del Principe" },
        { name:"Vigna Cicogna Greco di Tufo DOCG 2025", price:"40€", desc:"Greco di Tufo · 2025 · Benito Ferrara" }
      ]
    },
    {
      cat: "Bianchi — Italia",
      items: [
        { name:"Centovie Colli Aprutini IGT Pecorino 2023", price:"35€", desc:"Pecorino · 2023 · Umani Ronchi" },
        { name:"Le Belle Bianco Frizzante Metodo Ancestrale", price:"26€", desc:"Pecorino · Fauri" },
        { name:"Montipàgano Trebbiano DOC Bio 2023", price:"26€", desc:"Trebbiano · 2023 · Peppucci" },
        { name:"Pecorino Vellodoro IGT 2023", price:"28€", desc:"Pecorino · 2023 · Umani Ronchi" },
        { name:"Critone Bianco IGT 2025", price:"28€", desc:"Chardonnay · 2025 · Librandi" },
        { name:"Segno Cirò Bianco DOC 2025", price:"26€", desc:"Greco Bianco · 2025 · Librandi" },
        { name:"BBK Ribolla Gialla Venezia Giulia IGT 2023", price:"35€", desc:"Ribolla Gialla · 2023 · Lis Neris" },
        { name:"Chardonnay Colli Orientali del Friuli DOP 2024", price:"32€", desc:"Chardonnay · 2024 · Dario Coos" },
        { name:"Chardonnay Friuli Isonzo DOC 2024", price:"35€", desc:"Chardonnay · 2024 · Lis Neris" },
        { name:"Confine Venezia Giulia IGT 2019", price:"45€", desc:"Gewürztraminer · 2019 · Lis Neris" },
        { name:"Friulano Colli Orientali del Friuli DOP", price:"32€", desc:"Friulano · Dario Coos" },
        { name:"Malvasia Colli Orientali del Friuli DOP", price:"32€", desc:"Malvasia · Dario Coos" },
        { name:"Pinot Grigio Friuli Isonzo DOC 2024", price:"35€", desc:"Pinot Grigio · 2024 · Lis Neris" },
        { name:"Ronco delle Cime Friulano Collio DOC", price:"50€", desc:"Friulano · Venica & Venica" },
        { name:"Ronco delle Mele Sauvignon Collio DOC", price:"60€", desc:"Sauvignon · Venica & Venica" },
        { name:"Talis Pinot Bianco Collio DOC 2023", price:"40€", desc:"Pinot Bianco · 2023 · Venica & Venica" },
        { name:"496 Bio Frascati Superiore DOCG 2024", price:"28€", desc:"Malvasia · 2024 · De Sanctis" },
        { name:"«Quando» Langhe Bianco DOC 2022", price:"32€", desc:"Viognier · 2022 · Campana" },
        { name:"Rugiada Colli Novaresi DOC 2022", price:"35€", desc:"Erbaluce · 2022 · Ca’ Nova" },
        { name:"Montorso Grechetto di Todi DOC", price:"26€", desc:"Grechetto · Peppucci" }
      ]
    },
    {
      cat: "Champagne & Bollicine francesi",
      items: [
        { name:"Blanc de Blancs Réserve Brut", price:"75€", desc:"Champagne · Vazart-Coquart" },
        { name:"Blanc de Blancs 2014", price:"150€", desc:"Champagne · 2014 · Louis Roederer" },
        { name:"Blanc de Blancs", price:"100€", desc:"Champagne · Perrier-Jouët" },
        { name:"Brut Rosé 2015", price:"85€", desc:"Champagne · 2015 · Jean Michel" },
        { name:"Cuvée Origine Doré", price:"60€", desc:"Champagne · Doré" },
        { name:"Cuvée Saint Petersbourg", price:"100€", desc:"Champagne · Veuve Clicquot" },
        { name:"Esprit Grand Cru", price:"90€", desc:"Champagne · Herbelot" },
        { name:"Gamet", price:"60€", desc:"Champagne · Rive Droite" },
        { name:"Hommage au Pinot Noir Grand Cru", price:"150€", desc:"Champagne · Henri Giraud" },
        { name:"La Grande Année Premier Cru Brut 2014", price:"300€", desc:"Champagne · 2014 · Bollinger" },
        { name:"La Grande Dame 2008", price:"350€", desc:"Champagne · 2008 · Veuve Clicquot" },
        { name:"Lapie-Lamiable", price:"65€", desc:"Champagne · Lamiable" },
        { name:"Les Vignes de Mon Grand-père Blanc de Noirs", price:"80€", desc:"Champagne · Le Guédard" },
        { name:"Pinot Noir Vignobles de Channes", price:"65€", desc:"Champagne · Pierre Brigandat" },
        { name:"Réserve Brut", price:"75€", desc:"Champagne · Jean Vesselle" },
        { name:"Rosé Extra Brut", price:"60€", desc:"Champagne · André Fays" },
        { name:"Sagacité Brut", price:"60€", desc:"Champagne · Alain Mercier" },
        { name:"Salmon Rosé", price:"150€", desc:"Champagne · Billecart-Salmon" },
        { name:"Special Cuvée Brut", price:"110€", desc:"Champagne · Bollinger" },
        { name:"Tradition Brut", price:"60€", desc:"Champagne · Rémy Bertin" },
        { name:"Saumur Blanc Brut", price:"32€", desc:"Saumur · Domaine des Sablonnières" },
        { name:"Crémant d’Alsace Brut", price:"35€", desc:"Crémant · Domaine Allimant-Laugner" },
        { name:"Crémant d’Alsace Rosé", price:"35€", desc:"Crémant · Domaine Allimant-Laugner" }
      ]
    },
    {
      cat: "Bollicine italiane",
      items: [
        { name:"021 Falanghina Metodo Classico Millesimato Brut", price:"35€", desc:"Spumante · Podere 1925" },
        { name:"Animanera Spumante Rosé Extra Dry Sannio DOC", price:"32€", desc:"Spumante · Rossovermiglio" },
        { name:"Falanghina Spumante Brut", price:"30€", desc:"Spumante · Feudi di San Gregorio" },
        { name:"Frensesia Spumante Falanghina Brut Sannio DOC", price:"32€", desc:"Spumante · Rossovermiglio" },
        { name:"Oro di Baal Fiano Metodo Classico Millesimato 2021", price:"40€", desc:"Spumante · 2021 · Sorriso del Casale" },
        { name:"Cretarium Metodo Classico Brut", price:"34€", desc:"Spumante · Podere Castel Merlo" },
        { name:"Cretarium Nature Dosaggio Zero Metodo Classico", price:"40€", desc:"Spumante · Podere Castel Merlo" },
        { name:"Cretarium Rosé Metodo Classico Brut", price:"36€", desc:"Spumante · Podere Castel Merlo" },
        { name:"Franciacorta Brut", price:"36€", desc:"Franciacorta · Ferghettina" },
        { name:"Franciacorta Rosé", price:"48€", desc:"Franciacorta · Ferghettina" },
        { name:"Milledì Franciacorta Brut 2020", price:"45€", desc:"Franciacorta · 2020 · Ferghettina" },
        { name:"LH2 Spumante Extra Brut 2024", price:"36€", desc:"Spumante · 2024 · Umani Ronchi" },
        { name:"D. Zero Metodo Classico Rosé Pas Dosé", price:"35€", desc:"Spumante · G. Milazzo" },
        { name:"Riserva V38AG Metodo Classico Brut", price:"60€", desc:"Spumante · G. Milazzo" },
        { name:"Spumante Metodo Classico 2023", price:"35€", desc:"Spumante · 2023 · G. Milazzo" },
        { name:"Trento DOC «R» Extra Brut", price:"40€", desc:"Trento DOC · Cantina Rotari" },
        { name:"Moxxé Rosé Spumante Brut Ramato", price:"32€", desc:"Spumante · Masi" },
        { name:"Sétage Valdobbiadene Prosecco Superiore DOCG Extra Dry", price:"33€", desc:"Prosecco · Canevel" },
        { name:"Terre del Faè Valdobbiadene", price:"34€", desc:"Prosecco · Canevel" }
      ]
    }
  ],

  /* ============================================================
     MENU — BIRRE & BEVANDE
     ============================================================ */
  menuBevande: [
    {
      cat: "Birre",
      items: [
        { name:"Peroni Nastro Azzurro", price:"4€", desc:"Lager italiana chiara e secca · 33 cl · 5,1% vol.", all:["Glutine"] },
        { name:"Birra Moretti", price:"4€", desc:"Lager italiana dal gusto equilibrato · 33 cl · 4,6% vol.", all:["Glutine"] },
        { name:"Heineken", price:"4,50€", desc:"Lager olandese leggera e rinfrescante · 33 cl · 5% vol.", all:["Glutine"] },
        { name:"Corona Extra", price:"5€", desc:"Lager messicana leggera e chiara · 35,5 cl · 4,5% vol.", all:["Glutine"] },
        { name:"Ichnusa Non Filtrata", price:"5€", desc:"Lager sarda non filtrata, torbida e piena · 33 cl · 5% vol.", all:["Glutine"] },
        { name:"Menabrea Bionda", price:"5€", desc:"Bionda piemontese, fresca e maltata · 33 cl · 4,8% vol.", all:["Glutine"] }
      ]
    }
  ]
};
