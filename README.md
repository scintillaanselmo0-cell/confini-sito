# Confini Restaurant — sito web

Sito statico (HTML + CSS + JavaScript vanilla) per **Confini Restaurant**, Via Napoli 221, Pozzuoli (NA).
Nessun backend, nessun build: si pubblica così com'è su GitHub Pages, Netlify o qualsiasi hosting statico.

## Struttura

```
confini/
├── index.html            # Home (hero video, storia, piatti, galleria, eventi, prenota, contatti)
├── menu.html             # Menu completo (pagina separata: cibo, vini, birre)
├── favicon.ico
├── assets/
│   ├── css/style.css     # Tutto lo stile
│   ├── js/
│   │   ├── data.js       # ⭐ UNICO FILE DATI — qui si modifica tutto
│   │   ├── main.js       # Logica home (orari “aperto ora”, galleria, schema SEO)
│   │   └── menu.js       # Logica pagina menu (tab, ricerca, allergeni)
│   ├── img/              # Logo (sfondo rimosso), galleria, poster, favicon, og-image
│   └── video/            # hero.mp4 (sfondo), cucina.mp4, eventi.mp4
```

## Come modificare i contenuti

**Tutto** (menu, prezzi, orari, telefono, indirizzo, social, link prenotazione) si cambia in un solo file:
`assets/js/data.js`. Non serve toccare HTML o CSS.

- **Prezzo o piatto** → sezioni `menuCibo`, `menuVini`, `menuBevande`
- **Orari** → sezione `orari` (formato 24h in minuti; la chiusura oltre mezzanotte si scrive es. `25*60` = 01:00)
- **Telefono / WhatsApp** → `business.telefono` e `business.telefonoIntl`
- **Link prenotazione** → `business.prenotazioneUrl` (attualmente il sistema GuestPlan esistente)
- **Piatti in evidenza in home** → array `evidenza` (usa i nomi esatti dei piatti)

## Pubblicazione su GitHub Pages

1. Crea un repository e carica **tutto il contenuto di questa cartella** nella radice.
2. Repository → **Settings → Pages** → Source: `main` / root → Save.
3. Il sito sarà online su `https://<utente>.github.io/<repo>/` in pochi minuti.
4. Per un dominio personalizzato (es. `confinirestaurant.it`) aggiungi un file `CNAME`
   con il dominio e imposta i DNS. Aggiorna poi i link `canonical` e `og:url` nelle due pagine.

## Note tecniche

- **Prenotazioni**: il pulsante “Prenota” apre il sistema esistente **GuestPlan**
  (`reservationconfini.guestplan.io`), come richiesto. In alternativa: telefono e WhatsApp.
- **Orario “Aperto ora / Chiuso”**: calcolato in JavaScript dagli orari reali, gestisce la
  chiusura dopo mezzanotte (venerdì fino all’01:00).
- **Galleria**: scorrimento orizzontale automatico continuo, non bloccabile, immagini nel
  loro **formato originale** (nessuna deformazione).
- **SEO**: title/description dedicati, un solo H1 per pagina, dati strutturati JSON-LD
  `Restaurant`, Open Graph, immagini WebP con dimensioni e lazy-loading.
- **Coordinate mappa**: in `data.js → business.geo` sono approssimative — verificale su Google Maps.
