// Prezzi aggiornati ad Aprile 2025

// variabili globali
let tipoDestinazioneSelezionato = null;
let tipoContenutoSelezionato    = null;
let dimensioniSelezionate       = 'no';

const mappaturaNazioni = {
  ordinario_internazionale: {
    z1: {
      nome: "Zona 1",
      nazioni: [
        "Austria","Belgio","Bosnia Herzegovina","Canarie (Isole, Extra UE)","Ceuta (Extra UE)",
        "Croazia*","Danimarca*","Estonia","Finlandia*","Francia","Germania*","Gibilterra*",
        "Grecia*","Irlanda*","Kosovo","Lettonia","Lichtenstein","Lituania*","Lussemburgo",
        "Malta","Melilla (Extra UE)","Olanda","Polonia*","Portogallo","Repubblica Ceca",
        "Romania*","Slovacchia*","Slovenia*","Spagna","Svezia","Svizzera*","Ungheria*"
      ]
    },
    z2: {
      nome: "Zona 2",
      nazioni: [
        "Arabia Saudita","Brunei","Bulgaria*","Cipro*","Costa d'Avorio*","Egitto*",
        "Emirati Arabi Uniti","Gibuti","Giordania","India","Kazakhstan","Kenya","Libano",
        "Libia","Macao","Marocco","Myanmar Burnma (Birmania)","Oman","Senegal","Serbia",
        "Sri Lanka","Tunisia*","Turchia"
      ]
    },
    z3: {
      nome: "Zona 3",
      nazioni: [
        "Albania","Algeria","Ascension - Isole (UK)","Bahrain*","Bhoutan","Camerun",
        "Comore*","Corea Del Sud","Faroe (Isole)","Ghana*","Guinea","Indonesia","Iraq",
        "Islanda","Kuwait*","Mauritania","Norvegia","Palestina (Autorità Palestinese)",
        "Pasqua Isola","Rwanda","Sant'Elena (Isola di)","Sudan","Swaziland*","Tanzania",
        "Thailandia","Tristan Da Cunha","Ucraina","Uganda"
      ]
    },
    z4: {
      nome: "Zona 4",
      nazioni: [
        "Angola*","Azerbaidjan*","Bahamas","Bermuda","Botswana","Burundi","Cambogia*",
        "Canada","Corea Del Nord","Repubblica Dominicana","El Salvador","Eritrea","Etiopia",
        "Gabon","Giamaica","Groenlandia","Guinea Bissau","Iran","Israele","Laos*","Lesotho*",
        "Liberia","Macedonia del Nord","Malawi*","Maldive*","Malesia","Mali*","Mauritius",
        "Messico","Moldavia*","Montenegro*","Namibia","Nepal","Nigeria","Pakistan","Qatar",
        "Repubblica Del Congo","Reunion (Isole)","Sao Tomè e Principe","Sierra Leone",
        "Singapore","Sud Africa","Sud Sudan","Taiwan","Togo","Trinidad e Tobago","Vietnam*"
      ]
    },
    z5: {
      nome: "Zona 5",
      nazioni: [
        "Afghanistan*","Anguilla","Antigua e Barbuda","Benin","Burkina Faso*","Costa Rica",
        "Dominica*","Gambia*","Grenada","Guatemala*","Guinea Equatoriale","Guyana",
        "Madagascar","Montserrat","Saint Kitts And Nevis (Saint Christopher)","Saint Lucia",
        "Saint Vincent (e Granadines)","Seychelles","Tagikistan","Turk And Caicos IS.",
        "Vergini (Isole) - Br.","Zambia","Zimbabwe"
      ]
    },
    z6: {
      nome: "Zona 6",
      nazioni: [
        "Antille Olandesi (Bonarie/Curacao/Saint Maarten)","Aruba","Australia","Barbados",
        "Belize","Bolivia","Cayman Islands","Ciad","Cook (Isole)","Falkland (Isole)",
        "Fidji (Isole)","Guadalupa","Guyana (Francese)","Haiti*","Kiribati","Mayotte",
        "Martinica","Mongolia*","Nauru","Nicaragua","Niger","Nuova Caledonia","Nuova Zelanda",
        "Papua Nuova Guinea","Paraguay","Pitcairn","Polinesia (Francese)","Saint Pierre e Miquelon",
        "Salomon (Isole)","Samoa (Western)","Suriname","Timor Orientale (Est)","Tonga (Isole)",
        "Tuvalu","Uruguay","Vanuatu","Wallis e Futuna (Isole)"
      ]
    },
    z7: { nome: "Zona 7", nazioni: ["Bielorussia*","Cina"] },
    z8: { nome: "Zona 8", nazioni: ["Gran Bretagna e Irlanda del Nord"] },
    z3bis: {
      nome: "Zona 3 BIS",
      nazioni: ["Brasile","Cile","Perù","Turkmenistan","Uzbekistan","Venezuela"]
    },
    z4bis: {
      nome: "Zona 4 BIS",
      nazioni: ["Honduras","Kirghizistan","Repubblica Centrafricana","Repubblica Democratica del Congo*"]
    },
    z4tris: { nome: "Zona 4 TRIS", nazioni: ["Armenia"] },
    z4quater: {
      nome: "Zona 4 QUATER",
      nazioni: [
        "Argentina","Bangladesh","Capo Verde","Colombia*","Cuba","Ecuador","Filippine",
        "Georgia","Giappone","Hong Kong","Mozambico","Panama","Russia","Stati Uniti"
      ]
    }
  }
};

const tariffe = {
  posta1: [
    { fascia_peso: "fino 100g", standard: 3.00, ingombrante: 4.30 },
    { fascia_peso: "100g-500g", standard: 5.90, ingombrante: 7.00 },
    { fascia_peso: "500g-2kg",  standard: 7.50, ingombrante: 8.60 }
  ],
  pacco_ordinario: [
    { fascia_peso: "0-3 Kg",    standard: 10.30, ingombrante: 15.30 },
    { fascia_peso: "3-5 Kg",    standard: 12.20, ingombrante: 17.20 },
    { fascia_peso: "5-10 Kg",   standard: 14.30, ingombrante: 19.30 },
    { fascia_peso: "10-20 Kg",  standard: 18.30, ingombrante: 23.30 }
  ],
  pieghi_libri: [
    { fascia_peso: "fino 2 Kg", non_tracciabile: 1.45, tracciabile: 4.80, tracciabile_avviso: 5.70 },
    { fascia_peso: "fino 5 Kg", non_tracciabile: 3.95, tracciabile: 7.30, tracciabile_avviso: 8.30 }
  ],
  raccomandata: [
    { fascia_peso: "fino 20g",    prezzo: 6.00 },
    { fascia_peso: "20-50g",      prezzo: 7.75 },
    { fascia_peso: "50-100g",     prezzo: 8.35 },
    { fascia_peso: "100-250g",    prezzo: 9.00 },
    { fascia_peso: "250-350g",    prezzo: 10.05 },
    { fascia_peso: "350-1Kg",     prezzo: 12.30 },
    { fascia_peso: "1kg-2Kg",     prezzo: 16.45 }
  ],
  priority_internazionale: {
    z1: [
      { fascia_peso: "fino 50g",   prezzo: 3.75 },
      { fascia_peso: "50-100g",    prezzo: 4.65 },
      { fascia_peso: "100-250g",   prezzo: 7.85 },
      { fascia_peso: "250-350g",   prezzo: 9.15 }
    ],
    z2: [
      { fascia_peso: "fino 50g",   prezzo: 4.85 },
      { fascia_peso: "50-100g",    prezzo: 5.55 },
      { fascia_peso: "100-250g",   prezzo: 11.10 },
      { fascia_peso: "250-350g",   prezzo: 12.40 }
    ],
    z3: [
      { fascia_peso: "fino 50g",   prezzo: 5.95 },
      { fascia_peso: "50-100g",    prezzo: 7.65 },
      { fascia_peso: "100-250g",   prezzo: 13.10 },
      { fascia_peso: "250-350g",   prezzo: 16.10 }
    ]
  },
  raccomandata_internazionale: {
    z1: [
      { fascia_peso: "fino 20g",   prezzo: 7.65 },
      { fascia_peso: "21-50g",     prezzo: 10.20 },
      { fascia_peso: "51-100g",    prezzo: 11.35 },
      { fascia_peso: "101-250g",   prezzo: 13.70 },
      { fascia_peso: "251-350g",   prezzo: 15.35 },
      { fascia_peso: "351g-1kg",   prezzo: 20.80 },
      { fascia_peso: "1kg-2kg",    prezzo: 30.60 }
    ],
    z2: [
      { fascia_peso: "fino 20g",   prezzo: 9.05 },
      { fascia_peso: "21-50g",     prezzo: 11.65 },
      { fascia_peso: "51-100g",    prezzo: 12.90 },
      { fascia_peso: "101-250g",   prezzo: 17.75 },
      { fascia_peso: "251-350g",   prezzo: 20.05 },
      { fascia_peso: "351g-1kg",   prezzo: 28.90 },
      { fascia_peso: "1kg-2kg",    prezzo: 43.30 }
    ],
    z3: [
      { fascia_peso: "fino 20g",   prezzo: 9.70 },
      { fascia_peso: "21-50g",     prezzo: 12.80 },
      { fascia_peso: "51-100g",    prezzo: 14.55 },
      { fascia_peso: "101-250g",   prezzo: 19.30 },
      { fascia_peso: "251-350g",   prezzo: 25.70 },
      { fascia_peso: "351g-1kg",   prezzo: 38.60 },
      { fascia_peso: "1kg-2kg",    prezzo: 54.75 }
    ]
  },
  ordinario_internazionale: {
    z1: [
      { fascia_peso: "fino 1Kg",  prezzo: 25.80 },
      { fascia_peso: "fino 3Kg",  prezzo: 31.20 },
      { fascia_peso: "fino 5Kg",  prezzo: 34.40 },
      { fascia_peso: "fino 10Kg", prezzo: 45.15 },
      { fascia_peso: "fino 15Kg", prezzo: 50.55 },
      { fascia_peso: "fino 20Kg", prezzo: 61.30 }
    ],
    z2: [
      { fascia_peso: "fino 1Kg",  prezzo: 27.95 },
      { fascia_peso: "fino 3Kg",  prezzo: 34.40 },
      { fascia_peso: "fino 5Kg",  prezzo: 39.80 },
      { fascia_peso: "fino 10Kg", prezzo: 55.90 },
      { fascia_peso: "fino 15Kg", prezzo: 66.65 },
      { fascia_peso: "fino 20Kg", prezzo: 83.90 }
    ],
    z3: [
      { fascia_peso: "fino 1Kg",  prezzo: 30.10 },
      { fascia_peso: "fino 3Kg",  prezzo: 36.55 },
      { fascia_peso: "fino 5Kg",  prezzo: 45.15 },
      { fascia_peso: "fino 10Kg", prezzo: 58.05 },
      { fascia_peso: "fino 15Kg", prezzo: 73.10 },
      { fascia_peso: "fino 20Kg", prezzo: 89.25 }
    ],
    z4: [
      { fascia_peso: "fino 1Kg",  prezzo: 32.25 },
      { fascia_peso: "fino 3Kg",  prezzo: 38.70 },
      { fascia_peso: "fino 5Kg",  prezzo: 48.40 },
      { fascia_peso: "fino 10Kg", prezzo: 64.50 },
      { fascia_peso: "fino 15Kg", prezzo: 80.65 },
      { fascia_peso: "fino 20Kg", prezzo: 96.80 }
    ],
    z5: [
      { fascia_peso: "fino 1Kg",  prezzo: 36.55 },
      { fascia_peso: "fino 3Kg",  prezzo: 45.15 },
      { fascia_peso: "fino 5Kg",  prezzo: 54.85 },
      { fascia_peso: "fino 10Kg", prezzo: 76.35 },
      { fascia_peso: "fino 15Kg", prezzo: 109.70 },
      { fascia_peso: "fino 20Kg", prezzo: 132.25 }
    ],
    z6: [
      { fascia_peso: "fino 1Kg",  prezzo: 45.15 },
      { fascia_peso: "fino 3Kg",  prezzo: 50.55 },
      { fascia_peso: "fino 5Kg",  prezzo: 60.20 },
      { fascia_peso: "fino 10Kg", prezzo: 97.85 },
      { fascia_peso: "fino 15Kg", prezzo: 136.55 },
      { fascia_peso: "fino 20Kg", prezzo: 186.05 }
    ],
    z7: [
      { fascia_peso: "fino 1Kg",  prezzo: 30.10 },
      { fascia_peso: "fino 3Kg",  prezzo: 36.55 },
      { fascia_peso: "fino 5Kg",  prezzo: 45.15 },
      { fascia_peso: "fino 10Kg", prezzo: 59.15 },
      { fascia_peso: "fino 15Kg", prezzo: 75.30 },
      { fascia_peso: "fino 20Kg", prezzo: 93.55 }
    ],
    z8: [
      { fascia_peso: "fino 1Kg",  prezzo: 25.80 },
      { fascia_peso: "fino 3Kg",  prezzo: 29.05 },
      { fascia_peso: "fino 5Kg",  prezzo: 34.40 },
      { fascia_peso: "fino 10Kg", prezzo: 49.45 },
      { fascia_peso: "fino 15Kg", prezzo: 53.75 },
      { fascia_peso: "fino 20Kg", prezzo: 66.65 }
    ],
    z3bis: [
      { fascia_peso: "fino 1Kg",  prezzo: 32.80 },
      { fascia_peso: "fino 3Kg",  prezzo: 40.35 },
      { fascia_peso: "fino 5Kg",  prezzo: 64.00 },
      { fascia_peso: "fino 10Kg", prezzo: 84.40 },
      { fascia_peso: "fino 15Kg", prezzo: 109.15 },
      { fascia_peso: "fino 20Kg", prezzo: 133.90 }
    ],
    z4bis: [
      { fascia_peso: "fino 1Kg",  prezzo: 34.40 },
      { fascia_peso: "fino 3Kg",  prezzo: 44.10 },
      { fascia_peso: "fino 5Kg",  prezzo: 67.20 },
      { fascia_peso: "fino 10Kg", prezzo: 93.00 },
      { fascia_peso: "fino 15Kg", prezzo: 118.85 },
      { fascia_peso: "fino 20Kg", prezzo: 144.65 }
    ],
    z4tris: [
      { fascia_peso: "fino 1Kg",  prezzo: 32.80 },
      { fascia_peso: "fino 3Kg",  prezzo: 40.35 },
      { fascia_peso: "fino 5Kg",  prezzo: 52.15 },
      { fascia_peso: "fino 10Kg", prezzo: 70.95 },
      { fascia_peso: "fino 15Kg", prezzo: 90.35 },
      { fascia_peso: "fino 20Kg", prezzo: 111.85 }
    ],
    z4quater: [
      { fascia_peso: "fino 1Kg",  prezzo: 32.80 },
      { fascia_peso: "fino 3Kg",  prezzo: 40.35 },
      { fascia_peso: "fino 5Kg",  prezzo: 51.10 },
      { fascia_peso: "fino 10Kg", prezzo: 75.30 },
      { fascia_peso: "fino 15Kg", prezzo: 96.80 },
      { fascia_peso: "fino 20Kg", prezzo: 120.45 }
    ]
  }
};

// ─── DOM READY ───
document.addEventListener('DOMContentLoaded', () => {

  // Default stato
  document.getElementById('sezioneEstero').classList.add('hidden');
  document.getElementById('contenutoWrapper').classList.add('hidden');

  // Tile destinazione
  document.querySelectorAll('#tipoDestinazioneWrapper .tile').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tipoDestinazioneWrapper .tile').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      tipoDestinazioneSelezionato = btn.dataset.value;
      aggiornaDestinazione(tipoDestinazioneSelezionato);
    });
  });

  // Tile contenuto
  document.querySelectorAll('#tipoContenutoWrapper .tile').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tipoContenutoWrapper .tile').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      tipoContenutoSelezionato = btn.dataset.value;
    });
  });

  // Toggle ingombrante
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      dimensioniSelezionate = btn.dataset.value;
    });
  });

  // Tipo spedizione estero
  document.getElementById('tipoSpedizioneEstero').addEventListener('change', caricaZoneEstero);

  // Destinazione change
  document.getElementById('destinazione').addEventListener('change', () => {
    // Reset lista collassata quando cambia zona
    const elencoDiv = document.getElementById('elencoNazioni');
    const toggle    = document.getElementById('nazioniToggle');
    elencoDiv.classList.add('collapsed');
    toggle && toggle.classList.remove('open');
    mostraNazioniZona();
  });

  // Toggle collassabile nazioni
  document.getElementById('nazioniToggle').addEventListener('click', () => {
    const elencoDiv = document.getElementById('elencoNazioni');
    const toggle    = document.getElementById('nazioniToggle');
    const isOpen    = !elencoDiv.classList.contains('collapsed');
    elencoDiv.classList.toggle('collapsed', isOpen);
    toggle.classList.toggle('open', !isOpen);
  });

  // Ricerca nazione
  document.getElementById('ricercaNazione').addEventListener('input', cercaZonaPerNazione);

  // Calcola
  document.getElementById('calcola').addEventListener('click', calcolaSpedizione);
});

// ─── FUNZIONI ───

function aggiornaDestinazione(tipo) {
  const sezioneEstero = document.getElementById('sezioneEstero');
  const contenutoDiv  = document.getElementById('contenutoWrapper');

  document.getElementById('infoNazioni').classList.add('hidden');
  const elencoDiv = document.getElementById('elencoNazioni');
  elencoDiv.innerHTML = '';
  elencoDiv.classList.add('collapsed');
  const toggle = document.getElementById('nazioniToggle');
  toggle && toggle.classList.remove('open');

  if (tipo === 'italia') {
    sezioneEstero.classList.add('hidden');
    contenutoDiv.classList.remove('hidden');
  } else {
    sezioneEstero.classList.remove('hidden');
    contenutoDiv.classList.add('hidden');
    tipoContenutoSelezionato = 'generico';
    caricaZoneEstero();
  }
}

function caricaZoneEstero() {
  const tipoSpedizione    = document.getElementById('tipoSpedizioneEstero').value;
  const selectDestinazione = document.getElementById('destinazione');

  document.getElementById('infoNazioni').classList.add('hidden');
  document.getElementById('elencoNazioni').innerHTML = '';

  const zone = {
    priority: {
      'estero1': 'Europa (Zona 1)',
      'estero2': 'Asia, Americhe, Africa (Zona 2)',
      'estero3': 'Oceania (Zona 3)'
    },
    raccomandata: {
      'estero1': 'Europa (Zona 1)',
      'estero2': 'Asia, Americhe, Africa (Zona 2)',
      'estero3': 'Oceania (Zona 3)'
    },
    paccoInt: {
      'estero1': 'Zona 1', 'estero2': 'Zona 2', 'estero3': 'Zona 3',
      'estero3bis': 'Zona 3bis', 'estero4': 'Zona 4', 'estero4bis': 'Zona 4bis',
      'estero4tris': 'Zona 4tris', 'estero4quater': 'Zona 4quater',
      'estero5': 'Zona 5', 'estero6': 'Zona 6', 'estero7': 'Zona 7', 'estero8': 'Zona 8'
    }
  }[tipoSpedizione];

  selectDestinazione.innerHTML = '';
  Object.entries(zone).forEach(([valore, testo]) => {
    selectDestinazione.add(new Option(testo, valore));
  });

  mostraNazioniZona();
  document.getElementById('ricercaNazioneWrapper').classList.toggle('hidden', tipoSpedizione !== 'paccoInt');
}

function mostraNazioniZona() {
  const tipoSpedizione  = document.getElementById('tipoSpedizioneEstero').value;
  const zonaSelezionata = document.getElementById('destinazione').value.replace('estero', 'z');
  const infoDiv         = document.getElementById('infoNazioni');
  const elencoDiv       = document.getElementById('elencoNazioni');
  const toggle          = document.getElementById('nazioniToggle');

  if (tipoSpedizione !== 'paccoInt') { infoDiv.classList.add('hidden'); return; }

  const nazioni = mappaturaNazioni.ordinario_internazionale[zonaSelezionata]?.nazioni;
  if (nazioni?.length > 0) {
    elencoDiv.innerHTML = nazioni.join(' · ');
    elencoDiv.classList.add('collapsed');   // sempre chiusa al cambio zona
    toggle && toggle.classList.remove('open');
    infoDiv.classList.remove('hidden');
  }
}

function cercaZonaPerNazione() {
  const input     = document.getElementById('ricercaNazione').value.trim().toLowerCase();
  const risultato = document.getElementById('risultatoZona');

  if (!input) { risultato.innerHTML = ''; return; }

  const risultati = [];
  const zone = mappaturaNazioni.ordinario_internazionale;

  for (const [codiceZona, zona] of Object.entries(zone)) {
    if (!Array.isArray(zona.nazioni)) continue;
    for (const nazione of zona.nazioni) {
      const nome = nazione.toLowerCase();
      if (nome === input) {
        risultati.push(`✅ <strong>${nazione}</strong> → <em>${zona.nome}</em>`);
      } else if (nome.includes(input)) {
        risultati.push(`🌍 <strong>${nazione}</strong> → <em>${zona.nome}</em>`);
      }
    }
  }

  risultato.innerHTML = risultati.length > 0
    ? risultati.join('<br>')
    : `⚠️ Nessun risultato per "<strong>${input}</strong>"`;
}

function mostraErrore(msg) {
  const el = document.getElementById('messaggioErrore');
  el.textContent = msg;
  el.classList.remove('hidden');
  el.classList.add('visible');
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.remove('shake');
  void el.offsetWidth;
  el.classList.add('shake');
}

function nascondiErrore() {
  const el = document.getElementById('messaggioErrore');
  el.classList.remove('visible');
  setTimeout(() => { el.classList.add('hidden'); el.textContent = ''; }, 300);
}

function calcolaSpedizione() {
  const risultatoEl = document.getElementById('risultato');
  const peso = parseInt(document.getElementById('peso').value);
  risultatoEl.innerHTML = '';

  if (!peso || peso < 1) { mostraErrore('❌ Inserisci un peso valido in grammi.'); return; }
  if (!tipoDestinazioneSelezionato) { mostraErrore('❌ Seleziona una destinazione (Italia o Estero).'); return; }
  if (tipoDestinazioneSelezionato === 'italia' && !tipoContenutoSelezionato) {
    mostraErrore('❌ Seleziona cosa stai spedendo (Libri o Altro).');
    return;
  }

  nascondiErrore();

  const risultati = tipoDestinazioneSelezionato === 'italia'
    ? calcolaTariffeItalia(peso)
    : calcolaTariffeEstero(peso);

  if (risultati.length === 0) {
    risultatoEl.innerHTML = '<div class="errore visible">⚠️ Nessun servizio disponibile per questo peso/destinazione.</div>';
    return;
  }

  // Miglior prezzo tra quelli affidabili
  const affidabili = risultati.filter(r => {
    const n = r.nome.toLowerCase();
    return (n.includes('pieghi') && !n.includes('non tracciabile')) ||
           n.includes('raccomandata') || n.includes('pacco ordinario');
  });
  const migliore = (affidabili.length > 0 ? affidabili : risultati)
    .reduce((a, b) => a.prezzo < b.prezzo ? a : b);

  const destinazioneLabel = document.getElementById('destinazione').selectedOptions[0]?.text || 'Italia';
  const ingombrante       = dimensioniSelezionate === 'si';

  let html = '';

  // Riepilogo
  html += `
    <div class="riepilogo">
      <div class="riepilogo-title">Riepilogo</div>
      <span>📍 ${destinazioneLabel}</span>
      <span>⚖️ ${peso}g</span>
      <span>📦 ${ingombrante ? 'Ingombrante' : 'Standard'}</span>
    </div>
  `;

  // Card consigliata
  html += `
    <div class="card-consigliata">
      <div class="card-consigliata-label">⭐ Scelta consigliata</div>
      <div class="card-consigliata-nome">${migliore.nome}</div>
      <div class="card-consigliata-prezzo">€${migliore.prezzo.toFixed(2)}<span>IVA inclusa</span></div>
    </div>
  `;

  // Lista tutti i servizi
  html += `<div class="risultati-lista-title">Tutte le opzioni disponibili</div>`;

  risultati.forEach(r => {
    const isMigliore = r === migliore;
    html += creaServizio(r.nome, r.prezzo, isMigliore);
  });

  risultatoEl.innerHTML = html;
  risultatoEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function parseRange(fascia) {
  const cleaned = fascia.toLowerCase()
    .replace('kg', '000').replace('g', '').replace('fino ', '').replace(/\s/g, '');
  return cleaned.includes('-')
    ? cleaned.split('-').map(v => parseInt(v))
    : [0, parseInt(cleaned)];
}

function calcolaTariffeItalia(peso) {
  const ingombrante = dimensioniSelezionate === 'si';
  const opzioni = [];
  const crea = (nome, prezzo) => opzioni.push({ nome, prezzo });

  const posta1 = tariffe.posta1.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });
  if (posta1) crea('📮 Posta 1', ingombrante ? posta1.ingombrante : posta1.standard);

  if (tipoContenutoSelezionato === 'libro') {
    const pieghi = tariffe.pieghi_libri.find(m => {
      const [min, max] = parseRange(m.fascia_peso);
      return peso >= min && peso <= max;
    });
    if (pieghi) {
      crea('📚 Pieghi di Libri – Non Tracciabile',   pieghi.non_tracciabile);
      crea('📚 Pieghi di Libri – Tracciabile',        pieghi.tracciabile);
      crea('📚 Pieghi di Libri – Tracciabile + Avviso', pieghi.tracciabile_avviso);
    }
  }

  const pacco = tariffe.pacco_ordinario.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });
  if (pacco) crea('📦 Pacco Ordinario', ingombrante ? pacco.ingombrante : pacco.standard);

  const raccomandata = tariffe.raccomandata.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });
  if (raccomandata) crea('📨 Raccomandata', raccomandata.prezzo);

  return opzioni;
}

function calcolaTariffeEstero(peso) {
  const tipoSpedizione = document.getElementById('tipoSpedizioneEstero').value;
  const zona           = document.getElementById('destinazione').value.replace('estero', 'z');

  const lista = tariffe[
    tipoSpedizione === 'paccoInt' ? 'ordinario_internazionale' : `${tipoSpedizione}_internazionale`
  ][zona];

  if (!lista) return [];

  const match = lista.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });

  if (!match) return [];

  const nome = {
    priority:     '✈️ Priority Internazionale',
    raccomandata: '📨 Raccomandata Internazionale',
    paccoInt:     '🌍 Pacco Ordinario Internazionale'
  }[tipoSpedizione];

  return [{ nome, prezzo: match.prezzo || match.standard }];
}

function creaServizio(nome, prezzo, isMigliore = false) {
  const lower = nome.toLowerCase();

  const isPieghiNT  = lower.includes('pieghi') && lower.includes('non tracciabile');
  const isPieghiT   = lower.includes('pieghi') && !lower.includes('non tracciabile');
  const isRacc      = lower.includes('raccomandata');
  const isPacco     = lower.includes('pacco ordinario');
  const isPosta1    = lower.includes('posta 1');

  const etichette = [];
  if (isPieghiNT || isPosta1)      etichette.push({ cls: 'economica',   text: '💰 Economica' });
  if (isPieghiT || isRacc || isPacco) {
    etichette.push({ cls: 'tracciabile', text: '📍 Tracciabile' });
    etichette.push({ cls: 'sicura',      text: '🔐 Sicura' });
  }

  const tagsHTML = etichette.length
    ? `<div class="etichetta-container">${etichette.map(e => `<span class="etichetta ${e.cls}">${e.text}</span>`).join('')}</div>`
    : '';

  const badgeMigliore = isMigliore ? `<span class="migliore-badge">✓ Miglior prezzo</span>` : '';

  return `
    <div class="servizio${isMigliore ? ' migliore' : ''}">
      <div class="servizio-left">
        ${tagsHTML}
        <div class="servizio-nome">${nome}</div>
        <div class="servizio-prezzo">€${prezzo.toFixed(2)}</div>
      </div>
      ${badgeMigliore}
    </div>
  `;
}
