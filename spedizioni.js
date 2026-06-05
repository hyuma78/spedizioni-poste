// Prezzi aggiornati a Maggio 2026

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
        "Croazia","Danimarca","Estonia","Finlandia","Francia","Germania","Gibilterra",
        "Grecia","Irlanda","Kosovo","Lettonia","Lichtenstein","Lituania","Lussemburgo",
        "Malta","Melilla (Extra UE)","Olanda","Polonia","Portogallo","Repubblica Ceca",
        "Romania","Slovacchia","Slovenia","Spagna","Svezia","Svizzera","Ungheria"
      ]
    },
    z2: {
      nome: "Zona 2",
      nazioni: [
        "Arabia Saudita","Brunei","Bulgaria","Cipro","Costa d'Avorio","Egitto",
        "Emirati Arabi Uniti","Gibuti","Giordania","India","Kazakhstan","Kenya","Libano",
        "Libia","Macao","Marocco","Myanmar Burnma (Birmania)","Oman","Senegal","Serbia",
        "Sri Lanka","Tunisia","Turchia"
      ]
    },
    z3: {
      nome: "Zona 3",
      nazioni: [
        "Albania","Andorra","Armenia","Azerbaijan","Bielorussia","Città del Vaticano",
        "Georgia","Guernsey","Iceland","Jersey","Macedonia del Nord","Moldavia",
        "Montenegro","Norvegia","Regno Unito (UK)","Russia","San Marino","Ucraina","Uzbekistan"
      ]
    },
    z3bis: {
      nome: "Zona 3bis",
      nazioni: ["Stati Uniti (USA)","Canada"]
    },
    z4: {
      nome: "Zona 4",
      nazioni: ["Giappone","Cina","Hong Kong","Corea del Sud","Taiwan","Singapore","Thailandia"]
    },
    z4bis: {
      nome: "Zona 4bis",
      nazioni: ["Australia","Nuova Zelanda"]
    },
    z4tris: {
      nome: "Zona 4tris",
      nazioni: ["Brasile","Argentina","Cile","Messico","Colombia","Perù"]
    },
    z4quater: {
      nome: "Zona 4quater",
      nazioni: ["Sudafrica","Nigeria","Ghana","Angola"]
    },
    z5: {
      nome: "Zona 5",
      nazioni: ["Israele"]
    },
    z6: {
      nome: "Zona 6",
      nazioni: ["Isole Minori e Territori d'Oltremare"]
    },
    z7: {
      nome: "Zona 7",
      nazioni: ["Zone ad alta restrizione doganale / remote 1"]
    },
    z8: {
      nome: "Zona 8",
      nazioni: ["Zone ad alta restrizione doganale / remote 2"]
    }
  },
  raccomandata: {
    estero1: {
      nome: "Zona 1 (Europa e Bacino del Mediterraneo)",
      nazioni: ["Albania", "Austria", "Belgio", "Bulgaria", "Cipro", "Croazia", "Danimarca", "Egitto", "Estonia", "Finlandia", "Francia", "Germania", "Grecia", "Irlanda", "Islanda", "Lettonia", "Lituania", "Lussemburgo", "Malta", "Marocco", "Montenegro", "Norvegia", "Olanda", "Polonia", "Portogallo", "Regno Unito (UK)", "Repubblica Ceca", "Romania", "San Marino", "Serbia", "Slovacchia", "Slovenia", "Spagna", "Svezia", "Svizzera", "Tunisia", "Turchia", "Ucraina", "Ungheria"]
    },
    estero2: {
      nome: "Zona 2 (Altri paesi dell'Africa, Americhe, Asia)",
      nazioni: ["Angola", "Arabia Saudita", "Argentina", "Brasile", "Canada", "Cile", "Cina", "Colombia", "Corea del Sud", "Costa d'Avorio", "Emirati Arabi Uniti", "Giappone", "Hong Kong", "India", "Israele", "Kazakhstan", "Kenya", "Messico", "Nigeria", "Perù", "Singapore", "Stati Uniti (USA)", "Taiwan", "Thailandia", "Sudafrica"]
    },
    estero3: {
      nome: "Zona 3 (Oceania)",
      nazioni: ["Australia", "Nuova Zelanda", "Fiji", "Papua Nuova Guinea", "Polinesia Francese", "Samoa"]
    }
  }
};

const tariffe = {
  pieghi_libri: [
    { fascia_peso: "0-2000", non_tracciabile: 1.35, tracciabile: 4.70, tracciabile_avviso: 5.65 },
    { fascia_peso: "2000-5000", non_tracciabile: 3.95, tracciabile: 7.30, tracciabile_avviso: 8.25 }
  ],
  pacco_ordinario: [
    { fascia_peso: "0-3000", standard: 9.90, ingombrante: 15.90 },
    { fascia_peso: "3000-5000", standard: 11.90, ingombrante: 17.90 },
    { fascia_peso: "5000-10000", standard: 15.90, ingombrante: 21.90 },
    { fascia_peso: "10000-20000", standard: 19.90, ingombrante: 25.90 }
  ],
  raccomandata: [
    { fascia_peso: "0-20", prezzo: 5.95 },
    { fascia_peso: "20-50", prezzo: 7.45 },
    { fascia_peso: "50-100", prezzo: 8.70 },
    { fascia_peso: "100-250", prezzo: 9.75 },
    { fascia_peso: "250-350", prezzo: 12.15 },
    { fascia_peso: "350-1000", prezzo: 16.15 },
    { fascia_peso: "1000-2000", prezzo: 19.65 }
  ],
  spediamo: [
    { fascia_peso: "0-1000", netto: 5.65, lordo: 6.89 },
    { fascia_peso: "1000-2000", netto: 6.47, lordo: 7.89 },
    { fascia_peso: "2000-3000", netto: 7.29, lordo: 8.89 },
    { fascia_peso: "3000-5000", netto: 8.11, lordo: 9.89 },
    { fascia_peso: "5000-10000", netto: 9.75, lordo: 11.89 },
    { fascia_peso: "10000-20000", netto: 12.20, lordo: 14.88 }
  ],
  raccomandata_internazionale: [
    { fascia_peso: "0-20", estero1: 13.05, estero2: 14.40, estero3: 15.15 },
    { fascia_peso: "20-50", estero1: 15.40, estero2: 17.95, estero3: 19.10 },
    { fascia_peso: "50-100", estero1: 16.70, estero2: 20.35, estero3: 21.80 },
    { fascia_peso: "100-250", estero1: 20.55, estero2: 26.15, estero3: 28.70 },
    { fascia_peso: "250-350", estero1: 23.95, estero2: 31.95, estero3: 35.80 },
    { fascia_peso: "350-1000", estero1: 31.70, estero2: 44.15, estero3: 49.30 },
    { fascia_peso: "1000-2000", estero1: 44.90, estero2: 67.45, estero3: 76.10 }
  ],
  pacco_ordinario_internazionale: [
    { fascia_peso: "0-1000", estero1: 25.10, estero2: 37.30, estero3: 41.50, estero3bis: 39.50, estero4: 41.20, estero4bis: 47.90, estero4tris: 44.80, estero4quater: 48.20, estero5: 35.10, estero6: 52.40, estero7: 68.00, estero8: 85.00 },
    { fascia_peso: "1000-3000", estero1: 29.30, estero2: 45.80, estero3: 52.10, estero3bis: 49.90, estero4: 51.50, estero4bis: 61.20, estero4tris: 56.40, estero4quater: 62.10, estero5: 44.50, estero6: 69.80, estero7: 92.00, estero8: 115.00 },
    { fascia_peso: "3000-5000", estero1: 34.20, estero2: 54.10, estero3: 63.40, estero3bis: 60.20, estero4: 62.90, estero4bis: 75.60, estero4tris: 69.10, estero4quater: 76.80, estero5: 53.80, estero6: 86.30, estero7: 116.00, estero8: 145.00 },
    { fascia_peso: "5000-10000", estero1: 44.50, estero2: 72.40, estero3: 86.80, estero3bis: 82.10, estero4: 85.40, estero4bis: 105.10, estero4tris: 95.30, estero4quater: 108.40, estero5: 72.10, estero6: 122.50, estero7: 165.00, estero8: 205.00 },
    { fascia_peso: "10000-15000", estero1: 54.80, estero2: 90.90, estero3: 110.20, estero3bis: 104.20, estero4: 107.80, estero4bis: 134.80, estero4tris: 121.60, estero4quater: 139.90, estero5: 90.40, estero6: 158.80, estero7: 214.00, estero8: 265.00 },
    { fascia_peso: "15000-20000", estero1: 65.10, estero2: 109.30, estero3: 133.50, estero3bis: 126.30, estero4: 130.30, estero4bis: 164.30, estero4tris: 147.80, estero4quater: 171.50, estero5: 108.70, estero6: 195.00, estero7: 263.00, estero8: 325.00 }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  setupTiles('destinazioneWrapper', val => {
    tipoDestinazioneSelezionato = val;
    aggiornaDestinazione(val);
  });

  setupTiles('tipoContenutoWrapper', val => {
    tipoContenutoSelezionato = val;
  });

  document.querySelectorAll('.step-peso .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.step-peso .toggle-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      dimensioniSelezionate = btn.getAttribute('data-value');
    });
  });

  document.getElementById('calcola').addEventListener('click', calcolaSpedizione);
});

function setupTiles(wrapperId, callback) {
  const container = document.getElementById(wrapperId);
  const tiles = container.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      tiles.forEach(t => t.classList.remove('selected'));
      tile.classList.add('selected');
      callback(tile.getAttribute('data-value'));
    });
  });
}

function aggiornaDestinazione(tipo) {
  const sezioneEstero = document.getElementById('sezioneEstero');
  const contenutoDiv  = document.getElementById('contenutoWrapper');

  document.getElementById('infoNazioni').classList.add('hidden');
  const elencoDiv = document.getElementById('elencoNazioni');
  elencoDiv.innerHTML = '';
  elencoDiv.classList.add('collapsed');
  const toggle = document.getElementById('nazioniToggle');
  toggle && toggle.classList.remove('open');

  tipoContenutoSelezionato = null;
  document.querySelectorAll('#tipoContenutoWrapper .tile').forEach(b => b.classList.remove('selected'));

  if (tipo === 'italia') {
    sezioneEstero.classList.add('hidden');
    contenutoDiv.classList.remove('hidden');
  } else {
    sezioneEstero.classList.remove('hidden');
    caricaZoneEstero();
  }
}

function caricaZoneEstero() {
  const tipoSpedizione     = document.getElementById('tipoSpedizioneEstero').value;
  const selectDestinazione = document.getElementById('destinazione');
  const contenutoDiv       = document.getElementById('contenutoWrapper');

  document.getElementById('infoNazioni').classList.add('hidden');
  document.getElementById('elencoNazioni').innerHTML = '';

  const zone = {
    raccomandata: {
      'estero1': 'Europa e Bacino Mediterraneo (Zona 1)',
      'estero2': 'Altri paesi Africa, Americhe, Asia (Zona 2)',
      'estero3': 'Oceania (Zona 3)'
    },
    paccoInt: {
      'z1': 'Zona 1 (Principali Paesi UE)', 
      'z2': 'Zona 2 (Est Europa / Medio Oriente)', 
      'z3': 'Zona 3 (Altri Paesi Europei / UK / Russia)',
      'z3bis': 'Zona 3bis (USA e Canada)', 
      'z4': 'Zona 4 (Estremo Oriente)', 
      'z4bis': 'Zona 4bis (Australia / Nuova Zelanda)',
      'z4tris': 'Zona 4tris (America Latina)', 
      'z4quater': 'Zona 4quater (Africa centro-sud)',
      'z5': 'Zona 5 (Israele)', 
      'z6': 'Zona 6', 
      'z7': 'Zona 7', 
      'z8': 'Zona 8'
    }
  }[tipoSpedizione];

  selectDestinazione.innerHTML = '';
  Object.entries(zone).forEach(([valore, testo]) => {
    selectDestinazione.add(new Option(testo, valore));
  });

  if (tipoSpedizione === 'raccomandata') {
    contenutoDiv.classList.remove('hidden');
  } else {
    contenutoDiv.classList.add('hidden');
    tipoContenutoSelezionato = 'generico';
  }

  mostraNazioniZona();
  document.getElementById('ricercaNazioneWrapper').classList.toggle('hidden', false);
}

function mostraNazioniZona() {
  const tipoSpedizione = document.getElementById('tipoSpedizioneEstero').value;
  const selectDest = document.getElementById('destinazione').value;
  const elencoDiv = document.getElementById('elencoNazioni');
  const infoNazioni = document.getElementById('infoNazioni');

  const mappa = tipoSpedizione === 'raccomandata' ? mappaturaNazioni.raccomandata : mappaturaNazioni.ordinario_internazionale;
  const datiZona = mappa[selectDest];

  if (datiZona && datiZona.nazioni) {
    infoNazioni.innerHTML = `<strong>Nazioni incluse in questa zona:</strong> ${datiZona.nazioni.join(', ')}.`;
    infoNazioni.classList.remove('hidden');

    elencoDiv.innerHTML = datiZona.nazioni.map(n => `<span class="nazione-tag">${n}</span>`).join('');
  } else {
    infoNazioni.classList.add('hidden');
    elencoDiv.innerHTML = '';
  }
}

function filtraNazioni() {
  const query = document.getElementById('cercaNazione').value.toLowerCase().trim();
  const tipoSpedizione = document.getElementById('tipoSpedizioneEstero').value;
  const selectDestinazione = document.getElementById('destinazione');
  
  if (!query) {
    mostraNazioniZona();
    return;
  }

  const mappa = tipoSpedizione === 'raccomandata' ? mappaturaNazioni.raccomandata : mappaturaNazioni.ordinario_internazionale;
  let trovataZona = null;

  for (const [zonaKey, dati] of Object.entries(mappa)) {
    const match = dati.nazioni.some(n => n.toLowerCase().includes(query));
    if (match) {
      trovataZona = zonaKey;
      break;
    }
  }

  if (trovataZona) {
    selectDestinazione.value = trovataZona;
    mostraNazioniZona();
    
    // Evidenzia il tag specifico
    document.querySelectorAll('.nazione-tag').forEach(tag => {
      if (tag.textContent.toLowerCase().includes(query)) {
        tag.classList.add('highlight');
      }
    });
  }
}

function toggleNazioni(e) {
  const elencoDiv = document.getElementById('elencoNazioni');
  elencoDiv.classList.toggle('collapsed');
  e.target.classList.toggle('open');
}

function parseRange(rangeStr) {
  const parti = rangeStr.split('-');
  return [parseInt(parti[0]), parseInt(parti[1])];
}

function mostraErrore(msg) {
  const errEl = document.getElementById('messaggioErrore');
  errEl.innerHTML = msg;
  errEl.classList.remove('hidden');
  errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function nascondiErrore() {
  document.getElementById('messaggioErrore').classList.add('hidden');
}

function calcolaSpedizione() {
  const risultatoEl = document.getElementById('risultato');
  const peso = parseInt(document.getElementById('peso').value);
  risultatoEl.innerHTML = '';

  if (!peso || peso < 1) { mostraErrore('❌ Inserisci un peso valido in grammi.'); return; }
  if (!tipoDestinazioneSelezionato) { mostraErrore('❌ Seleziona una destinazione (Italia o Estero).'); return; }
  
  const tipoSpedizioneEstero = document.getElementById('tipoSpedizioneEstero').value;

  if (!tipoContenutoSelezionato) {
    if (tipoDestinazioneSelezionato === 'italia' || (tipoDestinazioneSelezionato === 'estero' && tipoSpedizioneEstero === 'raccomandata')) {
      mostraErrore('❌ Seleziona cosa stai spedendo (Documenti o Merci).');
      return;
    }
  }

  // BLOCCO NORMATIVA 2026: Raccomandata Internazionale NON può contenere merci
  if (tipoDestinazioneSelezionato === 'estero') {
    if (tipoSpedizioneEstero === 'raccomandata' && tipoContenutoSelezionato === 'generico') {
      mostraErrore('🚫 <strong>Normativa 2026:</strong> Dal 1° Gennaio 2026 non è più possibile spedire merci con la Raccomandata Internazionale. Seleziona "Pacco Ordinario Internazionale" per poter procedere con le merci.');
      return;
    }
  }

  nascondiErrore();

  const risultati = tipoDestinazioneSelezionato === 'italia'
    ? calcolaTariffeItalia(peso)
    : calcolaTariffeEstero(peso);

  if (!risultati || risultati.length === 0) {
    risultatoEl.innerHTML = '<div class="nessun-servizio">Nessun servizio disponibile per questo peso o configurazione.</div>';
    return;
  }

  let minPrezzo = Math.min(...risultati.map(r => r.prezzo));
  
  let html = '<div class="risultati-container"><h3 class="risultati-titolo">Tariffe Disponibili</h3>';
  risultati.forEach(r => {
    html += creaServizio(r.nome, r.prezzo, r.prezzo === minPrezzo, minPrezzo);
  });
  html += '</div>';

  risultatoEl.innerHTML = html;
}

function calcolaTariffeItalia(peso) {
  const ingombrante = dimensioniSelezionate === 'si';
  const opzioni = [];
  const crea = (nome, prezzo) => opzioni.push({ nome, prezzo });

  if (tipoContenutoSelezionato === 'documento') {
    const pieghi = tariffe.pieghi_libri.find(m => {
      const [min, max] = parseRange(m.fascia_peso);
      return peso >= min && peso <= max;
    });
    if (pieghi) {
      crea('📚 Pieghi di Libri – Non Tracciabile',     pieghi.non_tracciabile);
      crea('📚 Pieghi di Libri – Tracciabile',          pieghi.tracciabile);
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
  if (raccomandata) crea('📨 Raccomandata Nazionale', raccomandata.prezzo);

  const spediamo = tariffe.spediamo.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });
  if (spediamo) {
    crea(`🚚 Spediamo.it (es. IVA: €${spediamo.netto.toFixed(2)})`, spediamo.lordo);
  }

  return opzioni;
}

function calcolaTariffeEstero(peso) {
  const tipoSpedizione = document.getElementById('tipoSpedizioneEstero').value;
  const selectDest     = document.getElementById('destinazione').value;

  const tabella = tipoSpedizione === 'raccomandata' 
    ? tariffe.raccomandata_internazionale 
    : tariffe.pacco_ordinario_internazionale;

  const match = tabella.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });

  if (!match || !match[selectDest]) return [];

  const prezzo = match[selectDest];
  const nome = {
    raccomandata: '📨 Raccomandata Internazionale (Solo Documenti)',
    paccoInt:     '🌍 Pacco Ordinario Internazionale'
  }[tipoSpedizione];

  return [{ nome, prezzo }];
}

function creaServizio(nome, prezzo, isMigliore = false, prezzoMinimo = null) {
  const lower = nome.toLowerCase();

  const isPieghiNT = lower.includes('pieghi') && lower.includes('non tracciabile');
  const isPieghiT  = lower.includes('pieghi') && !lower.includes('non tracciabile');
  const isRacc     = lower.includes('raccomandata');
  const isPacco    = lower.includes('pacco ordinario');
  const isSpediamo = lower.includes('spediamo');

  const isEconomica = prezzoMinimo !== null && prezzo === prezzoMinimo;

  const etichette = [];
  if (isEconomica) etichette.push({ cls: 'economica', text: '💰 Economica' });
  if (isPieghiT || isRacc || isPacco || isSpediamo) {
    etichette.push({ cls: 'tracciabile', text: '📍 Tracciabile' });
    etichette.push({ cls: 'sicura',      text: '🔐 Sicura' });
  }

  const tagsHTML = etichette.length
    ? `<div class="etichetta-container">${etichette.map(e => `<span class="etichetta ${e.cls}">${e.text}</span>`).join('')}</div>`
    : '';

  const badgeMigliore = isMigliore ? `<span class="migliore-badge">✓ Miglior prezzo</span>` : '';

  return `
    <div class="servizio ${isMigliore ? 'migliore' : ''}">
      <div class="servizio-header">
        <div class="servizio-info">
          <h4 class="servizio-nome">${nome}</h4>
          ${tagsHTML}
        </div>
        <div class="servizio-prezzo-box">
          <span class="servizio-prezzo">€${prezzo.toFixed(2)}</span>
          ${badgeMigliore}
        </div>
      </div>
    </div>
  `;
}
