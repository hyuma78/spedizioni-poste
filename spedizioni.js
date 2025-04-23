// Prezzi aggiornati ad Aprile 2025

const mappaturaNazioni = {
  // Per Pacco Ordinario Internazionale (12 zone)
  ordinario_internazionale: {
    z1: {
      nome: "Zona 1",
      nazioni: [
        "Austria", 
        "Belgio",
        "Bosnia Herzegovina",
        "Canarie (Isole, Extra UE)",
        "Ceuta (Extra UE)",
        "Croazia*",
        "Danimarca*",
        "Estonia",
        "Finlandia*",
        "Francia",
        "Germania*",
        "Gibilterra*",
        "Grecia*",
        "Irlanda*",
        "Kosovo",
        "Lettonia",
        "Lichtenstein",
        "Lituania*",
        "Lussemburgo",
        "Malta",
        "Melilla (Extra UE)",
        "Olanda",
        "Polonia*",
        "Portogallo",
        "Repubblica Ceca",
        "Romania*",
        "Slovacchia*",
        "Slovenia*",
        "Spagna",
        "Svezia",
        "Svizzera*",
        "Ungheria*",  
      ]
    },
    z2: {
      nome: "Zona 2",
      nazioni: [
        "Arabia Saudita",
        "Brunei",
        "Bulgaria*",
        "Cipro*",
        "Costa d'Avorio*",
        "Egitto*",
        "Emirati Arabi Uniti",
        "Gibuti",
        "Giordania",
        "India",
        "Kazakhstan",
        "Kenya",
        "Libano",
        "Libia",
        "Macao",
        "Marocco",
        "Myanmar Burnma (Birmania)",
        "Oman",
        "Senegal",
        "Serbia",
        "Sri Lanka",
        "Tunisia*",
        "Turchia",
      ]
    },

    z3: {
      nome: "Zona 3",
      nazioni: [
        "Albania",
        "Algeria",
        "Ascension - Isole (UK)",
        "Bahrain*",
        "Bhoutan",
        "Camerun",
        "Comore*",
        "Corea Del Sud",
        "Faroe (Isole)",
        "Ghana*",
        "Guinea",
        "Indonesia",
        "Iraq",
        "Islanda",
        "Kuwait*",
        "Mauritania",
        "Norvegia",
        "Palestina (Autorità Palestinese)",
        "Pasqua Isola",
        "Rwanda",
        "Sant'Elena (Isola di)",
        "Sudan",
        "Swaziland*",
        "Tanzania",
        "Thailandia",
        "Tristan Da Cunha",
        "Ucraina",
        "Uganda",
      ]
    },

  z4: {
    nome: "Zona 4",
    nazioni: [
      "Angola*",
      "Azerbaidjan*",
      "Bahamas",
      "Bermuda",
      "Botswana",
      "Burundi",
      "Cambogia*",
      "Canada",
      "Corea Del Nord",
      "Repubblica Dominicana",
      "El Salvador",
      "Eritrea",
      "Etiopia",
      "Gabon",
      "Giamaica",
      "Groenlandia",
      "Guinea Bissau",
      "Iran",
      "Israele",
      "Laos*",
      "Lesotho*",
      "Liberia",
      "Macedonia del Nord",
      "Malawi*",
      "Maldive*",
      "Malesia",
      "Mali*",
      "Mauritius",
      "Messico",
      "Moldavia*",
      "Montenegro*",
      "Namibia",
      "Nepal",
      "Nigeria",
      "Pakistan",
      "Qatar",
      "Repubblica Del Congo",
      "Reunion (Isole)",
      "Sao Tomè e Principe",
      "Sierra Leone",
      "Singapore",
      "Sud Africa",
      "Sud Sudan",
      "Taiwan",
      "Togo",
      "Trinidad e Tobago",
      "Vietnam*",
    ]
  },

   z5: {
    nome: "Zona 5",
    nazioni: [
      "Afghanistan*",
      "Anguilla",
      "Antigua e Barbuda",
      "Benin",
      "Burkina Faso*",
      "Costa Rica",
      "Dominica*",
      "Gambia*",
      "Grenada",
      "Guatemala*",
      "Guinea Equatoriale",
      "Guyana",
      "Madagascar",
      "Montserrat",
      "Saint Kitts And Nevis (Saint Christopher)",
      "Saint Lucia",
      "Saint Vincent (e Granadines)",
      "Seychelles",
      "Tagikistan",
      "Turk And Caicos IS.",
      "Vergini (Isole) - Br.",
      "Zambia",
      "Zimbabwe",
    ]
  },


  z6: {
    nome: "Zona 6",
    nazioni: [
      "Antille Olandesi (Bonarie/Curacao/Saint Maarten)",
      "Aruba",
      "Australia",
      "Barbados",
      "Belize",
      "Bolivia",
      "Cayman Islands",
      "Ciad",
      "Cook (Isole)",
      "Falkland (Isole)",
      "Fidji (Isole)",
      "Guadalupa",
      "Guyana (Francese)",
      "Haiti*",
      "Kiribati",
      "Mayotte",
      "Martinica",
      "Mongolia*",
      "Nauru",
      "Nicaragua",
      "Niger",
      "Nuova Caledonia",
      "Nuova Zelanda",
      "Papua Nuova Guinea",
      "Paraguay",
      "Pitcairn",
      "Polinesia (Francese)",
      "Saint Pierre e Miquelon",
      "Salomon (Isole)",
      "Samoa (Western)",
      "Suriname",
      "Timor Orientale (Est)",
      "Tonga (Isole)",
      "Tuvalu",
      "Uruguay",
      "Vanuatu",
      "Wallis e Futuna (Isole)",
    ]
  },

  z7: {
    nome: "Zona 7",
    nazioni: [
      "Bielorussia*",
      "Cina",
    ]
  },

  z8: {
    nome: "Zona 8",
    nazioni: [
      "Gran Bretagna e Irlanda del Nord",
    ]
  },


  z3bis: {
    nome: "Zona 3 BIS",
    nazioni: [
      "Brasile",
      "Cile",
      "Perù",
      "Turkmenistan",
      "Uzbekistan",
      "Venezuela",
    ]
  },

  z4bis: {
    nome: "Zona 4 BIS",
    nazioni: [
      "Honduras",
      "Kirghizistan",
      "Repubblica Centrafricana",
      "Repubblica Democratica del Congo*",
    ]
  },

  z4tris: {
    nome: "Zona 4 TRIS",
    nazioni: [
      "Armenia",
    ]
  },

    z4quater: {
    nome: "Zona 4 QUATER",
    nazioni: [
      "Argentina",
      "Bangladesh",
      "Capo Verde",
      "Colombia*",
      "Cuba",
      "Ecuador",
      "Filippine",
      "Georgia",
      "Giappone",
      "Hong Kong",
      "Mozambico",
      "Panama",
      "Russia",
      "Stati Uniti",
    ]
  },

  // Per Priority Internazionale (3 zone)
  priority_internazionale: {
    z1: {
      nome: "Europa",
      nazioni: ["Tutti i paesi."]
    },
    z2: {
      nome: "Asia, Americhe, Africa",
      nazioni: ["Tutti i paesi."]
    },
    z3: {
      nome: "Oceania",
      nazioni: ["Tutte i paesi."]
    }
  },

  // Per Raccomandata Internazionale (3 zone)
  raccomandata_internazionale: {
    z1: {
      nome: "Europa",
      nazioni: ["Tutti i paesi."]
    },
    z2: {
      nome: "Asia, Americhe, Africa",
      nazioni: ["Tutti i paesi."]
    },
    z3: {
      nome: "Oceania",
      nazioni: ["Tutte i paesi."]
    }
  },
}
}
const tariffe = {
  // Tariffe Italia
  posta1: [
    { fascia_peso: "fino 100g", standard: 3.00, ingombrante: 4.30 },
    { fascia_peso: "100g-500g", standard: 5.90, ingombrante: 7.00 },
    { fascia_peso: "500g-2kg", standard: 7.50, ingombrante: 8.60 }
  ],
  pacco_ordinario: [
    { fascia_peso: "0-3 Kg", standard: 10.30, ingombrante: 15.30 },
    { fascia_peso: "3-5 Kg", standard: 12.20, ingombrante: 17.20 },
    { fascia_peso: "5-10 Kg", standard: 14.30, ingombrante: 19.30 },
    { fascia_peso: "10-20 Kg", standard: 18.30, ingombrante: 23.30}
  ],
  pieghi_libri: [
    { fascia_peso: "fino 2 Kg", non_tracciabile: 1.35, tracciabile: 4.70, tracciabile_avviso: 5.70 },
    { fascia_peso: "fino 5 Kg", non_tracciabile: 3.95, tracciabile: 7.30, tracciabile_avviso: 8.30 }
  ],

  raccomandata: [
    { fascia_peso: "fino 20g", prezzo: 6.00 },
    { fascia_peso: "20-50g", prezzo: 7.75 },
    { fascia_peso: "50-100g", prezzo: 8.35 },
    { fascia_peso: "100-250g", prezzo: 9.00 },
    { fascia_peso: "250-350g", prezzo: 10.05 },
    { fascia_peso: "350-1Kg", prezzo: 12.30 },
    { fascia_peso: "1kg-2Kg", prezzo: 16.45 }
  ],

  // Tariffe Internazionali
  priority_internazionale: {
    z1: [
      { fascia_peso: "fino 50g", prezzo: 3.75 },
      { fascia_peso: "50-100g", prezzo: 4.65 },
      { fascia_peso: "100-250g", prezzo: 7.85 },
      { fascia_peso: "250-350g", prezzo: 9.15 }
    ],
    z2: [
      { fascia_peso: "fino 50g", prezzo: 4.85 },
      { fascia_peso: "50-100g", prezzo: 5.55 },
      { fascia_peso: "100-250g", prezzo: 11.10 },
      { fascia_peso: "250-350g", prezzo: 12.40 }
    ],
    z3: [
      { fascia_peso: "fino 50g", prezzo: 5.95 },
      { fascia_peso: "50-100g", prezzo: 7.65 },
      { fascia_peso: "100-250g", prezzo: 13.10 },
      { fascia_peso: "250-350g", prezzo: 16.10 }
    ]
  },
  raccomandata_internazionale: {
    z1: [
      { fascia_peso: "fino 20g", prezzo: 7.65 },
      { fascia_peso: "21-50g", prezzo: 10.20 },
      { fascia_peso: "51-100g", prezzo: 11.35 },
      { fascia_peso: "101-250g", prezzo: 13.70 },
      { fascia_peso: "251-350g", prezzo: 15.35 },
      { fascia_peso: "351g-1kg", prezzo: 20.80 },
      { fascia_peso: "1kg-2kg", prezzo: 30.60 }
    ],
    z2: [
      { fascia_peso: "fino 20g", prezzo: 9.05 },
      { fascia_peso: "21-50g", prezzo: 11.65 },
      { fascia_peso: "51-100g", prezzo: 12.90 },
      { fascia_peso: "101-250g", prezzo: 17.75 },
      { fascia_peso: "251-350g", prezzo: 20.05 },
      { fascia_peso: "351g-1kg", prezzo: 28.90 },
      { fascia_peso: "1kg-2kg", prezzo: 43.30 }
    ],
    z3: [
      { fascia_peso: "fino 20g", prezzo: 9.70 },
      { fascia_peso: "21-50g", prezzo: 12.80 },
      { fascia_peso: "51-100g", prezzo: 14.55 },
      { fascia_peso: "101-250g", prezzo: 19.30 },
      { fascia_peso: "251-350g", prezzo: 25.70 },
      { fascia_peso: "351g-1kg", prezzo: 38.60 },
      { fascia_peso: "1kg-2kg", prezzo: 54.75 }
    ]
  },

  ordinario_internazionale: {
    z1: [
      { fascia_peso: "fino 1Kg", prezzo: 25.80 },
      { fascia_peso: "fino 3Kg", prezzo: 31.20 },
      { fascia_peso: "fino 5Kg", prezzo: 34.40 },
      { fascia_peso: "fino 10Kg", prezzo: 45.20 },
      { fascia_peso: "fino 15Kg", prezzo: 50.55 },
      { fascia_peso: "fino 20Kg", prezzo: 61.30 }
    ],
    z2: [
      { fascia_peso: "fino 1Kg", prezzo: 28.00 },
      { fascia_peso: "fino 3Kg", prezzo: 34.40 },
      { fascia_peso: "fino 5Kg", prezzo: 39.80 },
      { fascia_peso: "fino 10Kg", prezzo: 55.90 },
      { fascia_peso: "fino 15Kg", prezzo: 66.65 },
      { fascia_peso: "fino 20Kg", prezzo: 83.90 }
    ],
    z3: [
      { fascia_peso: "fino 1Kg", prezzo: 30.10 },
      { fascia_peso: "fino 3Kg", prezzo: 36.55 },
      { fascia_peso: "fino 5Kg", prezzo: 45.20 },
      { fascia_peso: "fino 10Kg", prezzo: 58.10 },
      { fascia_peso: "fino 15Kg", prezzo: 73.10 },
      { fascia_peso: "fino 20Kg", prezzo: 89.25 }
    ],
    z4: [
      { fascia_peso: "fino 1Kg", prezzo: 32.25 },
      { fascia_peso: "fino 3Kg", prezzo: 38.70 },
      { fascia_peso: "fino 5Kg", prezzo: 48.40 },
      { fascia_peso: "fino 10Kg", prezzo: 64.55 },
      { fascia_peso: "fino 15Kg", prezzo: 80.65 },
      { fascia_peso: "fino 20Kg", prezzo: 96.75 }
    ],
    z5: [
      { fascia_peso: "fino 1Kg", prezzo: 36.55 },
      { fascia_peso: "fino 3Kg", prezzo: 45.20 },
      { fascia_peso: "fino 5Kg", prezzo: 54.85 },
      { fascia_peso: "fino 10Kg", prezzo: 76.35 },
      { fascia_peso: "fino 15Kg", prezzo: 109.65 },
      { fascia_peso: "fino 20Kg", prezzo: 132.30 }
    ],
    z6: [
      { fascia_peso: "fino 1Kg", prezzo: 45.20 },
      { fascia_peso: "fino 3Kg", prezzo: 50.55 },
      { fascia_peso: "fino 5Kg", prezzo: 60.20 },
      { fascia_peso: "fino 10Kg", prezzo: 97.85 },
      { fascia_peso: "fino 15Kg", prezzo: 136.55 },
      { fascia_peso: "fino 20Kg", prezzo: 186.05 }
    ],
    z7: [
      { fascia_peso: "fino 1Kg", prezzo: 30.10 },
      { fascia_peso: "fino 3Kg", prezzo: 36.55 },
      { fascia_peso: "fino 5Kg", prezzo: 45.20 },
      { fascia_peso: "fino 10Kg", prezzo: 59.10 },
      { fascia_peso: "fino 15Kg", prezzo: 75.30 },
      { fascia_peso: "fino 20Kg", prezzo: 93.55 }
    ],

    z8: [
      { fascia_peso: "fino 1Kg", prezzo: 25.80 },
      { fascia_peso: "fino 3Kg", prezzo: 29.00 },
      { fascia_peso: "fino 5Kg", prezzo: 34.40 },
      { fascia_peso: "fino 10Kg", prezzo: 49.45 },
      { fascia_peso: "fino 15Kg", prezzo: 53.75 },
      { fascia_peso: "fino 20Kg", prezzo: 66.65 }
    ],
    z3bis: [
      { fascia_peso: "fino 1Kg", prezzo: 32.80 },
      { fascia_peso: "fino 3Kg", prezzo: 40.30 },
      { fascia_peso: "fino 5Kg", prezzo: 63.95 },
      { fascia_peso: "fino 10Kg", prezzo: 84.40 },
      { fascia_peso: "fino 15Kg", prezzo: 109.15 },
      { fascia_peso: "fino 20Kg", prezzo: 133.90 }
    ],
    z4bis: [
      { fascia_peso: "fino 1Kg", prezzo: 34.40 },
      { fascia_peso: "fino 3Kg", prezzo: 44.10 },
      { fascia_peso: "fino 5Kg", prezzo: 67.25 },
      { fascia_peso: "fino 10Kg", prezzo: 93.05 },
      { fascia_peso: "fino 15Kg", prezzo: 118.80 },
      { fascia_peso: "fino 20Kg", prezzo: 144.60 }
    ],
    z4tris: [
      { fascia_peso: "fino 1Kg", prezzo: 32.80 },
      { fascia_peso: "fino 3Kg", prezzo: 40.30 },
      { fascia_peso: "fino 5Kg", prezzo: 52.15 },
      { fascia_peso: "fino 10Kg", prezzo: 71.00 },
      { fascia_peso: "fino 15Kg", prezzo: 90.30 },
      { fascia_peso: "fino 20Kg", prezzo: 111.85 }
    ],
    z4quater: [
      { fascia_peso: "fino 1Kg", prezzo: 32.80 },
      { fascia_peso: "fino 3Kg", prezzo: 40.30 },
      { fascia_peso: "fino 5Kg", prezzo: 51.05 },
      { fascia_peso: "fino 10Kg", prezzo: 75.30 },
      { fascia_peso: "fino 15Kg", prezzo: 96.75 },
      { fascia_peso: "fino 20Kg", prezzo: 120.45 }
    ]
  },
}


document.addEventListener('DOMContentLoaded', () => {
  // Inizializza gli elementi corretti
  const destinazioneSelect = document.getElementById('destinazione');
  const tipoDestinazioneSelect = document.getElementById('tipoDestinazione');
  
  if (!destinazioneSelect || !tipoDestinazioneSelect) {
    console.error('Elementi mancanti nel DOM');
    return;
  }

  // Inizializza l'UI
  destinazioneSelect.innerHTML = '<option value="italia">Italia</option>';
  document.getElementById('sezioneEstero').classList.add('hidden');

  // Aggiungi gli event listeners corretti
  tipoDestinazioneSelect.addEventListener('change', gestisciDestinazione);
  document.getElementById('tipoSpedizioneEstero').addEventListener('change', caricaZoneEstero);
  document.getElementById('calcola').addEventListener('click', calcolaSpedizione);
});

function gestisciDestinazione() {
  const tipo = this.value;
  const sezioneEstero = document.getElementById('sezioneEstero');
  const destinazioneSelect = document.getElementById('destinazione');
  const infoDiv = document.getElementById('infoNazioni'); // ← nuovo
  const elencoDiv = document.getElementById('elencoNazioni'); // ← nuovo

  if (!destinazioneSelect) {
    console.error('Elemento "destinazione" non trovato');
    return;
  }

  // 🔁 Reset visuale della sezione info
  infoDiv.classList.add('hidden');
  elencoDiv.innerHTML = '';

  if (tipo === 'italia') {
    sezioneEstero.classList.add('hidden');
    destinazioneSelect.innerHTML = '<option value="italia">Italia</option>';
  } else {
    sezioneEstero.classList.remove('hidden');
    caricaZoneEstero();
  }
}

function caricaZoneEstero() {
  const tipoSpedizione = document.getElementById('tipoSpedizioneEstero').value;
  const selectDestinazione = document.getElementById('destinazione');
  const infoDiv = document.getElementById('infoNazioni');
  const elencoDiv = document.getElementById('elencoNazioni');

  // 🔁 Reset del box informativo
  infoDiv.classList.add('hidden');
  elencoDiv.innerHTML = '';

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
      'estero1': 'Zona 1',
      'estero2': 'Zona 2',
      'estero3': 'Zona 3',
      'estero3bis': 'Zona 3bis',
      'estero4': 'Zona 4',
      'estero4bis': 'Zona 4bis',
      'estero4tris': 'Zona 4tris',
      'estero4quater': 'Zona 4quater',
      'estero5': 'Zona 5',
      'estero6': 'Zona 6',
      'estero7': 'Zona 7',
      'estero8': 'Zona 8'
    }
  }[tipoSpedizione];

  selectDestinazione.innerHTML = '';
  Object.entries(zone).forEach(([valore, testo]) => {
    selectDestinazione.add(new Option(testo, valore));
  });

  // ✅ Mostra subito le nazioni della zona selezionata di default
  mostraNazioniZona();

  // Mostra il campo di ricerca solo se si tratta di pacco ordinario internazionale
  document.getElementById('ricercaNazioneWrapper').classList.toggle('hidden', tipoSpedizione !== 'paccoInt');

}

document.getElementById('destinazione').addEventListener('change', mostraNazioniZona);

function mostraNazioniZona() {
  const tipoSpedizione = document.getElementById('tipoSpedizioneEstero').value;
  const zonaSelezionata = document.getElementById('destinazione').value.replace('estero', 'z');
  const infoDiv = document.getElementById('infoNazioni');
  const elencoDiv = document.getElementById('elencoNazioni');

  if (tipoSpedizione !== 'paccoInt') {
    infoDiv.classList.add('hidden');
    return;
  }

  const nazioni = mappaturaNazioni.ordinario_internazionale[zonaSelezionata]?.nazioni;

  if (nazioni && nazioni.length > 0) {
    elencoDiv.innerHTML = nazioni.join(', ');
    infoDiv.classList.remove('hidden');
  } else {
    elencoDiv.innerHTML = '⚠️ Nessuna nazione trovata per questa zona.';
    infoDiv.classList.remove('hidden');
  }
}

document.getElementById('ricercaNazione').addEventListener('input', cercaZonaPerNazione);

function cercaZonaPerNazione() {
  const input = document.getElementById('ricercaNazione').value.trim().toLowerCase();
  const risultato = document.getElementById('risultatoZona');

  if (!input) {
    risultato.innerHTML = '';
    return;
  }

  const risultati = [];
  const zone = mappaturaNazioni["ordinario_internazionale"]; // ← SOLO pacco ordinario internazionale

  for (const [codiceZona, zona] of Object.entries(zone)) {
    if (!Array.isArray(zona.nazioni)) continue; // ← SKIP se non è una lista valida

    for (const nazione of zona.nazioni) {
      const nome = nazione.toLowerCase();

      if (nome === input) {
        risultati.push(`✅ <em>${nazione}</em> si trova in: <strong>${zona.nome} (${codiceZona.toUpperCase()})</strong>`);
      } else if (nome.includes(input)) {
        risultati.push(`🌍 <em>${nazione}</em> si trova in: <strong>${zona.nome} (${codiceZona.toUpperCase()})</strong>`);
      }
    }
  }

  risultato.innerHTML = risultati.length > 0
    ? risultati.join('<br>')
    : `⚠️ Nessuna zona trovata per "<strong>${input}</strong>"`;
}

function calcolaSpedizione() {
  const tipoDestinazione = document.getElementById('tipoDestinazione').value;
  const risultatoEl = document.getElementById('risultato');
  risultatoEl.innerHTML = '';

  const peso = parseInt(document.getElementById('peso').value);
  if (!peso || peso < 1) {
    risultatoEl.innerHTML = '<div class="errore">❌ Inserisci un peso valido!</div>';
    return;
  }

  const intestazione = creaIntestazione(peso);
  const risultati = tipoDestinazione === 'italia'
    ? calcolaTariffeItalia(peso)
    : calcolaTariffeEstero(peso);

  if (risultati.length === 0) {
    risultatoEl.innerHTML = '<div class="errore">⚠️ Nessun metodo disponibile</div>';
    return;
  }

  // Classifica le opzioni
// Trova la "scelta consigliata" tra le opzioni più affidabili

const affidabili = risultati.filter(r => {
  const nome = r.nome.toLowerCase();

  const isPieghiTracciabile = (
    nome.includes('pieghi di libri') &&
    !nome.includes('non tracciabile') &&
    (nome.includes('tracciabile') || nome.includes('avviso'))
  );

  const isRaccomandata = nome.includes('raccomandata');
  const isPacco = nome.includes('pacco ordinario');

  return isPieghiTracciabile || isRaccomandata || isPacco;
});


const migliore = affidabili.length > 0
  ? affidabili.reduce((a, b) => a.prezzo < b.prezzo ? a : b)
  : risultati.reduce((a, b) => a.prezzo < b.prezzo ? a : b); // fallback su la più economica assoluta

  let outputHTML = intestazione;
  outputHTML += `
    <div class="servizio" style="background: #fef9ec; border-left: 5px solid #f39c12; padding: 10px;">
      📊 <strong>Scelta consigliata:</strong><br>
      ${migliore.nome} – €${migliore.prezzo.toFixed(2)}
    </div>
  `;

  risultati.forEach(r => {
    const evidenziato = r === migliore ? ' migliore' : '';
    outputHTML += r.html.replace('class="servizio"', `class="servizio${evidenziato}"`);
  });

  risultatoEl.innerHTML = outputHTML;
}


function creaIntestazione(peso) {
  const destinazione = document.getElementById('destinazione').selectedOptions[0].text;
  const ingombrante = document.getElementById('dimensioni').value === 'si';
  
  return `
    <div class="riepilogo">
      <h3>Riepilogo Parametri:</h3>
      <p>📍 ${destinazione}</p>
      <p>⚖️ ${peso}g • 📦 ${ingombrante ? 'Ingombrante' : 'Standard'}</p>
    </div>
    <hr>`;
}

function parseRange(fascia) {
  const cleaned = fascia.toLowerCase()
    .replace('kg', '000')
    .replace('g', '')
    .replace('fino ', '')
    .replace(/\s/g, '');
  
  return cleaned.includes('-') 
    ? cleaned.split('-').map(v => parseInt(v)) 
    : [0, parseInt(cleaned)];
}

function calcolaTariffeItalia(peso) {
  const ingombrante = document.getElementById('dimensioni').value === 'si';
  const opzioni = [];

  const crea = (nome, prezzo) => opzioni.push({
    nome,
    prezzo,
    html: creaServizio(nome, prezzo)
  });

  const posta1 = tariffe.posta1.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });
  if (posta1) crea('📮 Posta 1', ingombrante ? posta1.ingombrante : posta1.standard);

  const tipoContenuto = document.getElementById('tipoContenuto').value;

if (tipoContenuto === 'libro') {
  const pieghi = tariffe.pieghi_libri.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });
  if (pieghi) {
    ['non_tracciabile', 'tracciabile', 'tracciabile_avviso'].forEach(tipo => {
      const label = {
        non_tracciabile: '📚 Pieghi di Libri – Non Tracciabile',
        tracciabile: '📚 Pieghi di Libri – Tracciabile',
        tracciabile_avviso: '📚 Pieghi di Libri – Tracciabile + Avviso'
      }[tipo];
      crea(label, pieghi[tipo]);
    });
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
  const zona = document.getElementById('destinazione').value.replace('estero', 'z');

  const lista = tariffe[
    tipoSpedizione === 'paccoInt'
      ? 'ordinario_internazionale'
      : `${tipoSpedizione}_internazionale`
  ][zona];

  if (!lista) return [];

  const match = lista.find(m => {
    const [min, max] = parseRange(m.fascia_peso);
    return peso >= min && peso <= max;
  });

  if (!match) return [];

  const nome = {
    priority: '✈️ Priority Internazionale',
    raccomandata: '📨 Raccomandata Internazionale',
    paccoInt: '🌍 Pacco Ordinario Internazionale'
  }[tipoSpedizione];

  return [{
    nome,
    prezzo: match.prezzo || match.standard,
    html: creaServizio(nome, match.prezzo || match.standard)
  }];
}

function creaServizio(nome, prezzo) {
  const tags = [];

  const lower = nome.toLowerCase();

  // ECONOMICA
  if (lower.includes("non tracciabile") && !lower.includes("pieghi di libri tracciabile")) {
    tags.push("💰 Economica");
  }

  // TRACCIABILE
  const isPieghiTracciabile = (
    lower.includes("pieghi di libri") &&
    (lower.includes("tracciabile") || lower.includes("avviso"))
  );

  const isRaccomandata = lower.includes("raccomandata");
  const isPacco = lower.includes("pacco ordinario");

  if (isPieghiTracciabile || isRaccomandata || isPacco) {
    tags.push("📍 Tracciabile");
    tags.push("🔐 Sicura");
  }

  const tagHTML = tags.length
    ? `<div class="etichetta-container">${tags.map(t => `<span class="etichetta">${t}</span>`).join('')}</div>`
    : '';

  return `
    <div class="servizio">
      ${tagHTML}
      <h4>${nome}</h4>
      <p>€${prezzo.toFixed(2)}</p>
    </div>`;
}

