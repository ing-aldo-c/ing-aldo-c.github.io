/* Testi della home in italiano e inglese. */
var HOME = {
  it: {
    tag: 'CV Geospaziale Interattivo',
    title: 'Ing.',
    subtitle: 'Ingegnere Idraulico &bull; Dottorando UniCT &bull; Specialista GIS &amp; SCADA',
    bio: 'Ingegnere civile con oltre 10 anni di esperienza in gestione di reti idriche, telecontrollo SCADA, implementazione GIS e modellistica idraulica avanzata (EPANET, HEC-RAS). Attualmente Responsabile Sistemi di telecontrollo e GIS presso Caltaqua - Acque di Caltanissetta S.p.A. e Dottorando in Valutazione e Mitigazione dei Rischi Urbani all&rsquo;Universit&agrave; di Catania. Iscritto all&rsquo;Ordine degli Ingegneri di Caltanissetta (Sez. A) &bull; Team Leader PSA &bull; Relatore a convegni nazionali e internazionali.',
    sk2: 'SCADA &amp; Telecontrollo', sk5: 'Direzione Lavori', sk7: 'Smart metering LoRaWAN',
    st1: 'Anni di esperienza', st2: 'Aziende / Enti', st3: 'Regioni italiane', st4: 'Paese estero',
    btnMap: 'Esplora sulla Mappa'
  },
  en: {
    tag: 'Interactive Geospatial CV',
    title: 'Eng.',
    subtitle: 'Hydraulic Engineer &bull; PhD Candidate, University of Catania &bull; GIS &amp; SCADA Specialist',
    bio: 'Civil engineer with over 10 years of experience in water network management, SCADA telecontrol, GIS implementation and advanced hydraulic modelling (EPANET, HEC-RAS). Currently Head of Telecontrol and GIS Systems at Caltaqua - Acque di Caltanissetta S.p.A. and PhD candidate in Assessment and Mitigation of Urban and Territorial Risks at the University of Catania. Chartered Engineer, Order of Engineers of Caltanissetta (Section A) &bull; Water Safety Plan Team Leader &bull; Speaker at national and international conferences.',
    sk2: 'SCADA &amp; Telecontrol', sk5: 'Works Supervision', sk7: 'LoRaWAN Smart Metering',
    st1: 'Years of experience', st2: 'Companies / Bodies', st3: 'Italian regions', st4: 'Country abroad',
    btnMap: 'Explore the Map'
  }
};
applyI18n(HOME);
document.getElementById('btnMappa').href = 'mappa.html?lang=' + LANG;
