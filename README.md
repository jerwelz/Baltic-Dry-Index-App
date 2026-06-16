# React + Vite

# Baltic Dry Index Dashboard

Ein interaktives React-Dashboard zur Visualisierung des **Baltic Dry Index (BDI)**.  
Das Projekt lädt echte Statistikdaten über eine API, bereitet diese auf und stellt sie als interaktives Diagramm mit Kennzahlen dar.

---

Live-Demo: https://balticdryindexapp.netlify.app/

---

## Projektidee

Ziel des Projekts ist es, externe Statistikdaten abzurufen, zu verarbeiten und verständlich in einer Weboberfläche darzustellen.  
Dafür werden Monatswerte des Baltic Dry Index geladen und in einem interaktiven Chart visualisiert.

Der Nutzer kann:

- den zeitlichen Verlauf des Baltic Dry Index betrachten
- einzelne Monate auswählen
- zwischen Datenpunkten navigieren
- nach einem bestimmten Monat suchen
- aktuelle, höchste und niedrigste Werte einsehen
- monatliche Veränderungen anzeigen lassen

---

## Features

- Abruf externer Daten über eine API
- Verarbeitung und Umwandlung der API-Daten für die Darstellung
- Interaktives Area Chart mit Recharts
- Anzeige des aktuell ausgewählten Datenpunkts
- Navigation durch die Datenpunkte
- Suchfunktion nach Monat, z. B. `2024-01`
- Anzeige von Statuswerten wie „Hoch“, „Mittel“ und „Niedrig“
- Berechnung der monatlichen Veränderung
- Übersicht mit aktuellem, höchstem und niedrigstem Wert
- Loading- und Error-State beim Laden der Daten
- Komponentenbasierte React-Struktur

---

## Technologien

- React
- JavaScript
- Recharts
- Tailwind CSS
- Vite
- CSS

---

## Projektstruktur

```text
src/
├── components/
│   ├── AreaChart.jsx
│   ├── Background.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── StatsSection.jsx
├── App.jsx
├── App.css
└── main.jsx
```
Mit diesem Projekt möchte ich zeigen, dass ich grundlegende Konzepte der Webentwicklung praktisch anwenden kann:

- Arbeiten mit React-Komponenten
- Nutzung von `useState` und `useEffect`
- Abrufen externer Daten mit `fetch`
- Fehlerbehandlung beim API-Aufruf
- Verarbeitung von JSON-Daten
- Darstellung von Daten in einem Diagramm
- Aufbau einer übersichtlichen Benutzeroberfläche
- Umsetzung interaktiver UI-Funktionen
