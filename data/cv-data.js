/*
 * Dati del CV geospaziale — Ing. Cataldo (Aldo) Carletta
 * Per aggiornare la mappa basta modificare questo file.
 *
 * - data / fine: formato MM/AAAA (o GG/MM/AAAA); fine = "IN CORSO" per le attività attuali
 * - lat / lng: coordinate in gradi decimali (null = nessun marker, es. eventi online)
 * - link / link_testo: collegamento facoltativo (es. slide o articolo) e testo del pulsante
 * - i campi che finiscono con _en sono la versione inglese; se mancano si usa il testo italiano
 */
var esperienze = [
  {
    "azienda": "Caltaqua - Acque di Caltanissetta S.p.A.",
    "ruolo": "Responsabile Sistemi di telecontrollo e GIS",
    "luogo": "Caltanissetta",
    "data": "02/2024",
    "fine": "IN CORSO",
    "lat": 37.4902857,
    "lng": 14.0641639,
    "desc": "Coordinamento della struttura tecnica di telecontrollo e GIS. Direzione e sviluppo dei sistemi SCADA di reti e impianti provinciali; distrettualizzazione, gestione delle pressioni e ricerca perdite (indicatori ARERA RQTI); GIS aziendale e censimento georeferenziato degli asset; programma di smart metering LoRaWAN (271 gateway, 98% di utenti in telelettura); documentazione di gara e direzione dell'esecuzione ex D.Lgs. 36/2023; conformità NIS2 dei sistemi OT.",
    "ruolo_en": "Head of Telecontrol and GIS Systems",
    "luogo_en": "Caltanissetta",
    "desc_en": "Leads the telecontrol and GIS technical unit. Directs and develops the SCADA systems of the provincial networks and plants; district metering, pressure management and leak detection (ARERA RQTI indicators); corporate GIS and georeferenced asset inventory; LoRaWAN smart metering programme (271 gateways, 98% of customers on remote reading); tender documents and contract management under Italian Public Procurement Code (D.Lgs. 36/2023); NIS2 compliance of OT systems."
  },
  {
    "azienda": "Caltaqua - Acque di Caltanissetta S.p.A.",
    "ruolo": "Ingegnere idraulico",
    "luogo": "Caltanissetta",
    "data": "09/2020",
    "fine": "IN CORSO",
    "lat": 37.4885,
    "lng": 14.0615,
    "desc": "Sistema informativo territoriale aziendale e censimento georeferenziato degli asset; direzione lavori su reti e impianti idrici; distrettualizzazione con strumentazione di misura di portata e pressione, bilanci idrici di distretto e analisi delle perdite reali e apparenti; gestione del parco contatori e dell'infrastruttura LoRaWAN, coordinamento operativo del personale di manutenzione contatori.",
    "ruolo_en": "Hydraulic Engineer",
    "luogo_en": "Caltanissetta",
    "desc_en": "Corporate geographic information system and georeferenced asset inventory; works supervision on water networks and plants; district metering with flow and pressure instrumentation, district water balances and analysis of real and apparent losses; management of the meter fleet and LoRaWAN infrastructure, operational coordination of the meter maintenance staff."
  },
  {
    "azienda": "Studio Carletta",
    "ruolo": "Ingegnere civile - Libero professionista",
    "luogo": "San Cataldo (CL)",
    "data": "11/2014",
    "fine": "IN CORSO",
    "lat": 37.4862902,
    "lng": 14.0018804,
    "desc": "Progettazione e calcolo strutturale/architettonico di nuove costruzioni e ristrutturazioni; progetti di reti idriche e fognarie; direzione lavori; consulenze tecniche; pratiche per incentivi statali (Ecobonus 110%), pratiche GSE e certificazioni energetiche.",
    "ruolo_en": "Civil Engineer - Freelance",
    "luogo_en": "San Cataldo (CL), Italy",
    "desc_en": "Structural and architectural design of new buildings and renovations; water and sewer network projects; works supervision; technical consulting; applications for state incentives (Ecobonus 110%), GSE procedures and energy performance certificates."
  },
  {
    "azienda": "Comune di Acireale (CT)",
    "ruolo": "Istruttore Direttivo Tecnico - Supporto alla ricostruzione post-sisma",
    "luogo": "Acireale (CT)",
    "data": "11/2019",
    "fine": "09/2020",
    "lat": 37.6205149,
    "lng": 15.1596834,
    "desc": "Collaborazione coordinata e continuativa a supporto dell'Ordinanza n. 1/2019 del Commissario Straordinario per la ricostruzione post-sisma 2018: censimento e mappatura degli immobili danneggiati, microzonazione sismica, verifiche tecniche, Sistema Informativo Territoriale comunale per la mappatura del danno e degli interventi.",
    "ruolo_en": "Senior Technical Officer - Post-earthquake reconstruction support",
    "luogo_en": "Acireale (CT), Italy",
    "desc_en": "Collaboration supporting Ordinance no. 1/2019 of the Extraordinary Commissioner for the 2018 earthquake reconstruction: survey and mapping of damaged buildings, seismic microzonation, technical inspections, municipal GIS for mapping damage and works."
  },
  {
    "azienda": "EKSO S.r.l. - ENI Raffineria di Livorno",
    "ruolo": "Responsabile tecnico di cantiere",
    "luogo": "Livorno (LI)",
    "data": "01/2019",
    "fine": "08/2020",
    "lat": 43.5862266,
    "lng": 10.3453059,
    "desc": "Risanamento e ripristino di condotte (relining), tubazioni e infrastrutture di collettamento presso la raffineria ENI di Livorno: sicurezza operativa dei cantieri, rilievi topografici, gestione dati e sistema informativo di impianto.",
    "ruolo_en": "Site Technical Manager",
    "luogo_en": "Livorno (LI), Italy",
    "desc_en": "Rehabilitation of pipelines (relining), piping and collection infrastructure at the ENI refinery in Livorno: site safety, topographic surveys, data management and plant information system."
  },
  {
    "azienda": "EKSO S.r.l. - ENI Versalis Crescentino",
    "ruolo": "Responsabile tecnico di cantiere",
    "luogo": "Crescentino (VC)",
    "data": "01/2019",
    "fine": "08/2020",
    "lat": 45.2022067,
    "lng": 8.0555469,
    "desc": "Risanamento e ripristino di condotte (relining) e infrastrutture di trasferimento presso lo stabilimento ENI Versalis di Crescentino: sicurezza operativa dei cantieri, rilievi topografici, gestione dati.",
    "ruolo_en": "Site Technical Manager",
    "luogo_en": "Crescentino (VC), Italy",
    "desc_en": "Rehabilitation of pipelines (relining) and transfer infrastructure at the ENI Versalis plant in Crescentino: site safety, topographic surveys, data management."
  },
  {
    "azienda": "3TI Progetti S.p.A.",
    "ruolo": "Consulente tecnico - Ingegnere civile",
    "luogo": "Roma",
    "data": "10/2018",
    "fine": "01/2019",
    "lat": 41.8674487,
    "lng": 12.472563,
    "desc": "Progettazione di infrastrutture civili; porto commerciale di Venezia con modellazione MIKE; rilievo delle reti idriche e fognarie di Acqualatina S.p.A. con GPS Leica Zeno 20 e laser scanner, gestione dati in GIS e Microsoft Access.",
    "ruolo_en": "Technical Consultant - Civil Engineer",
    "luogo_en": "Rome, Italy",
    "desc_en": "Design of civil infrastructure; commercial port of Venice with MIKE modelling; survey of the Acqualatina S.p.A. water and sewer networks with Leica Zeno 20 GPS and laser scanner, data management in GIS and Microsoft Access."
  },
  {
    "azienda": "Geographisches Institut, Universität Bonn (GIUB)",
    "ruolo": "Tirocinante di ricerca - Erasmus+ Traineeship",
    "luogo": "Bonn, Germania",
    "data": "02/2018",
    "fine": "05/2018",
    "lat": 50.7253407,
    "lng": 7.0910319,
    "desc": "Progetto di ricerca post-laurea (Erasmus+ S.MO.C, prog. 2017-1-IT02-KA103-035838) con il Prof. Dr. B. Diekkrüger: modelli previsionali e downscaling di scenari climatici futuri, effetti sulla disponibilità della risorsa idrica. Attività svolta in inglese.",
    "ruolo_en": "Research Trainee - Erasmus+ Traineeship",
    "luogo_en": "Bonn, Germany",
    "desc_en": "Post-graduate research project (Erasmus+ S.MO.C, project 2017-1-IT02-KA103-035838) under Prof. Dr. B. Diekkrüger: forecasting models and downscaling of future climate scenarios, effects on water resource availability. Work carried out in English."
  },
  {
    "azienda": "Studio Tecnico Arcarese",
    "ruolo": "Ingegnere civile",
    "luogo": "San Cataldo (CL)",
    "data": "11/2017",
    "fine": "08/2018",
    "lat": 37.48843,
    "lng": 13.9918532,
    "desc": "Collaborazione a progetti di ingegneria civile e pianificazione urbanistica.",
    "ruolo_en": "Civil Engineer",
    "luogo_en": "San Cataldo (CL), Italy",
    "desc_en": "Collaboration on civil engineering and urban planning projects."
  },
  {
    "azienda": "Genio Civile di Caltanissetta",
    "ruolo": "Ingegnere civile",
    "luogo": "Caltanissetta",
    "data": "06/2017",
    "fine": "09/2017",
    "lat": 37.4934126,
    "lng": 14.0544682,
    "desc": "Sistema di gestione dei dati sulle risorse idriche provinciali in ambiente GIS e banca dati georeferenziata dei pozzi. Encomio formale dell'Ufficio (prot. n. 24173 del 30/01/2019).",
    "ruolo_en": "Civil Engineer",
    "luogo_en": "Caltanissetta, Italy",
    "desc_en": "GIS-based management system for provincial water resource data and georeferenced well database. Formal commendation from the Office (prot. no. 24173 of 30/01/2019)."
  },
  {
    "azienda": "Consorzio di Bonifica 9 - Catania",
    "ruolo": "Ingegnere civile - Tirocinante",
    "luogo": "Catania",
    "data": "01/2017",
    "fine": "05/2017",
    "lat": 37.5181063,
    "lng": 15.0902456,
    "desc": "Sistemazioni idrauliche fluviali e studi idrogeologici, progettazione di manufatti accessori, calcolo idraulico di opere e impianti, elaborati progettuali e studi di fattibilità.",
    "ruolo_en": "Civil Engineer - Trainee",
    "luogo_en": "Catania, Italy",
    "desc_en": "River training works and hydrogeological studies, design of ancillary structures, hydraulic calculations for works and plants, design documents and feasibility studies."
  }
];

var formazione = [
  {
    "nome": "Dottorato di ricerca - Valutazione e mitigazione dei rischi urbani e territoriali",
    "desc": "",
    "data": "09/2024",
    "fine": "IN CORSO",
    "luogo": "Università degli Studi di Catania",
    "lat": 37.5274023,
    "lng": 15.0769074,
    "nome_en": "PhD - Assessment and mitigation of urban and territorial risks",
    "luogo_en": "University of Catania"
  },
  {
    "nome": "Abilitazione alla professione di Ingegnere - Sezione A",
    "desc": "Iscrizione all'Albo A dell'Ordine degli Ingegneri di Caltanissetta dal 15/03/2018.",
    "data": "20/12/2017",
    "luogo": "Università degli Studi di Catania",
    "lat": 37.5262826,
    "lng": 15.0748317,
    "nome_en": "Professional qualification as Engineer - Section A",
    "luogo_en": "University of Catania",
    "desc_en": "Registered in Section A of the Order of Engineers of Caltanissetta since 15/03/2018."
  },
  {
    "nome": "Laurea Magistrale in Ingegneria Civile delle Acque e dei Trasporti (LM-23) - 110/110",
    "desc": "Tesi: verifica idrologico-idraulica con modellistica mono e bidimensionale (HEC-RAS) del tratto terminale del Torrente Sbarda l'Asino, in collaborazione con il Consorzio di Bonifica di Catania.",
    "data": "19/10/2017",
    "luogo": "Università degli Studi di Catania",
    "lat": 37.5262776,
    "lng": 15.0746305,
    "nome_en": "MSc in Civil Engineering - Water and Transport (LM-23) - 110/110",
    "luogo_en": "University of Catania",
    "desc_en": "Thesis: hydrological-hydraulic assessment with 1D and 2D modelling (HEC-RAS) of the lower reach of the Sbarda l'Asino stream, in collaboration with the Catania Land Reclamation Consortium."
  },
  {
    "nome": "Iscrizione all'Ordine degli Ingegneri di Caltanissetta",
    "desc": "Prima iscrizione all'Albo, Sezione B.",
    "data": "27/02/2015",
    "luogo": "Ordine degli Ingegneri di Caltanissetta",
    "lat": 37.4943018,
    "lng": 14.0489751,
    "nome_en": "Registration with the Order of Engineers of Caltanissetta",
    "luogo_en": "Order of Engineers of Caltanissetta",
    "desc_en": "First registration in Section B."
  },
  {
    "nome": "Abilitazione alla professione di Ingegnere",
    "desc": "",
    "data": "09/02/2015",
    "luogo": "Università degli Studi di Catania",
    "lat": 37.5257402,
    "lng": 15.0736543,
    "nome_en": "Professional qualification as Engineer",
    "luogo_en": "University of Catania"
  },
  {
    "nome": "Laurea in Ingegneria Civile (Classe 8)",
    "desc": "Tesi: rifacimento della rete idrica della zona centro del comune di Gela.",
    "data": "2014",
    "luogo": "Università degli Studi di Catania",
    "lat": 37.525871,
    "lng": 15.0739425,
    "nome_en": "BSc in Civil Engineering (Class 8)",
    "luogo_en": "University of Catania",
    "desc_en": "Thesis: renewal of the water network in the central area of the municipality of Gela."
  }
];

var convegni = [
  {
    "titolo": "Digitalizzare la rete per ridurre le perdite e aumentare l'efficienza: l'esperienza di Caltaqua e Itron",
    "titolo_en": "Digitalising the network to reduce losses and improve efficiency: the Caltaqua and Itron experience",
    "evento": "Webinar Servizi a Rete con Itron",
    "evento_en": "Servizi a Rete webinar with Itron",
    "luogo": "Online",
    "luogo_en": "Online",
    "data": "21/10/2026",
    "lat": null,
    "lng": null,
    "link": "https://serviziarete.it/follow-up-webinar-digitalizzare-la-rete-per-ridurre-le-perdite-e-aumentare-lefficienza-lesperienza-di-caltaqua-e-itron/"
  },
  {
    "titolo": "Smart metering, dalla misura all'azione: il ruolo dei dati nell'efficientamento delle risorse idriche di Caltaqua",
    "titolo_en": "Smart metering, from measurement to action: the role of data in Caltaqua's water resource efficiency",
    "evento": "Servizi a Rete TOUR 2026 con Publiacqua - intervento con Netmore",
    "evento_en": "Servizi a Rete TOUR 2026 with Publiacqua - joint talk with Netmore",
    "luogo": "Stazione Leopolda, Firenze",
    "luogo_en": "Stazione Leopolda, Florence, Italy",
    "data": "25/06/2026",
    "lat": 43.7766,
    "lng": 11.2405,
    "link": "https://drive.google.com/file/d/1Q7ny_777C6HIQ04XVkB-JScU5BtEHv32/view",
    "link_testo": "Slide della presentazione",
    "link_testo_en": "Presentation slides"
  },
  {
    "titolo": "Water Network Pressure Management and Monitoring of Supply Sources",
    "evento": "EWRA 2025",
    "luogo": "Palermo",
    "luogo_en": "Palermo, Italy",
    "data": "26/06/2025",
    "lat": 38.1157,
    "lng": 13.3615
  },
  {
    "titolo": "Vantaggi delle misurazioni di pressione nei nodi di distretto delle reti idriche e nella gestione dei pozzi",
    "titolo_en": "Benefits of pressure measurement at district nodes of water networks and in well management",
    "evento": "Servizi a Rete e A2A Ciclo Idrico",
    "evento_en": "Servizi a Rete and A2A Ciclo Idrico",
    "luogo": "Brixia Forum, Brescia",
    "luogo_en": "Brixia Forum, Brescia, Italy",
    "data": "29/05/2025",
    "lat": 45.5304,
    "lng": 10.2585
  },
  {
    "titolo": "The Future Is Now – Ekso srl",
    "evento": "37th International NO DIG 2019",
    "luogo": "Fortezza da Basso, Firenze",
    "luogo_en": "Fortezza da Basso, Florence, Italy",
    "data": "30/09/2019",
    "lat": 43.7798,
    "lng": 11.2475
  }
];
