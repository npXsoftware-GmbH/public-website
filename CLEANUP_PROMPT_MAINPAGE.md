# Clean-up Prompt – Hauptseite von npXsoftware

Du arbeitest in diesem Repository an der **Hauptseite** von `npXsoftware`.

## Ziel

Führe einen gezielten **Clean-up- und Quality-Pass** durch.

Die Hauptseite soll danach:

* technisch sauberer
* konsistenter
* ruhiger
* hochwertiger
* performanter
* wartbarer
* SEO-seitig schlüssiger
* barriereärmer

wirken – **ohne Redesign** und ohne Abweichung vom bestehenden Markenbild.

Fokus: **Verbesserung, nicht Veränderung**

---

## Scope

Bearbeite ausschließlich:

* `index.html`
* Styles in `css/` (relevante globale Styles der Hauptseite)
* `js/main.js`

Nicht bearbeiten:
* rechtliche Inhalte (Firmennamen, Adresse HRB Nummer, etc.)

---

## Arbeitsweise

1. Analysiere die Hauptseite vollständig.
2. Identifiziere Probleme und priorisiere sie nach Impact:

   * (1) Bugs / Instabilität
   * (2) Wartbarkeit / technische Qualität
   * (3) Performance
   * (4) SEO / Semantik / Accessibility
   * (5) Konsistenz / UX
   * (6) visuelle Feinheiten
3. Setze sinnvolle, risikoarme Verbesserungen **direkt im Code** um.
4. Vermeide unnötige Eingriffe in stabile Bereiche.

Grundprinzip:

* lieber kleine, sichere Verbesserung als große Umstrukturierung
* keine Änderung ohne klaren, benennbaren Grund

---

## Prüfkategorien

### 1. Technische Qualität & Wartbarkeit

Achte auf:

* redundante oder widersprüchliche CSS-Regeln
* unnötige Komplexität
* schlecht wartbare Strukturen
* übersteuerte oder fragile Styles
* inkonsistente Breakpoints / Responsive-Logik
* schwer nachvollziehbares JS
* unnötige Sonderlogik (insbesondere mobil)

Maßnahme:
→ vereinfachen, bereinigen, stabilisieren – ohne funktionierende Logik unnötig umzubauen

---

### 2. Performance

Prüfe auf vermeidbare Probleme:

* zu große oder falsch skalierte Bilder
* ungeeignete Bildformate oder fehlende Komprimierung
* fehlendes Lazy Loading
* blockierende CSS- oder JS-Ressourcen
* unnötige oder doppelte Requests
* ineffiziente Animationen (z. B. Blur, Shadow, Layout-Reflows)
* unnötiger JS-Overhead

Maßnahme:
→ nur dort optimieren, wo klarer Nutzen besteht
→ keine aggressiven Micro-Optimierungen

---

### 3. Redundanz & Code-Vereinfachung

Suche gezielt nach:

* doppelten oder ähnlichen CSS-Regeln
* wiederholten Styles, die zusammengeführt werden können
* unnötigen Utility-/Helper-Konstrukten
* redundanter JS-Logik
* inkonsistenten Patterns für gleiche Komponenten

Maßnahme:
→ zusammenführen, reduzieren, vereinheitlichen
→ keine unnötige Abstraktion einführen

---

### 4. Visuelle Konsistenz (minimal-invasiv)

Prüfe:

* konsistente Abstände und Proportionen
* klare visuelle Hierarchie
* stimmige Hintergründe
* konsistentes Verhalten von Header, Hero, Sections und Footer
* störende oder übertriebene Effekte

Maßnahme:
→ nur bei klaren Inkonsistenzen eingreifen
→ keine neuen visuellen Konzepte

---

### 5. Text & Typografie

Prüfe:

* Rechtschreibung & Grammatik
* Zeichensetzung
* konsistente Begriffe
* doppelte Aussagen
* typografische Inkonsistenzen

Maßnahme:
→ direkt korrigieren, Sprache klar und professionell halten

---

### 6. UX & Verhalten

Prüfe:

* Header-Verhalten
* CTA-Klarheit und Platzierung
* Scroll-Verhalten
* Section-/Tab-Logik
* Animationen (Stabilität, Timing, Notwendigkeit)
* mobile Bedienbarkeit
* inkonsistente Zustände

Maßnahme:
→ vereinfachen und stabilisieren
→ fragile Interaktionen reduzieren

---

### 7. Accessibility (leichtgewichtig)

Prüfe:

* fehlende `alt`-Attribute
* Kontrastprobleme
* Fokuszustände
* zu kleine Touch-Targets
* sinnvolle ARIA-Attribute nur dort, wo sie wirklich nötig sind
* sinnvolle Labels für Links, Buttons und interaktive Elemente
* Screenreader-Verständlichkeit
* sinnvolle Reihenfolge und Verständlichkeit für Tastatur-Navigation
* unnötige Barrieren in Semantik, Formularen oder Interaktionen

Maßnahme:
→ Barrierefreiheit gezielt verbessern, aber ohne sichtbares Redesign
→ bevorzugt semantische, textliche, strukturelle und technische Verbesserungen
→ sichtbare Änderungen nur dann, wenn sie zur Behebung eines klaren Problems notwendig sind

Wichtig:
→ die Webseite soll nicht radikal sichtbar umgebaut werden
→ Accessibility soll vor allem im Markup, in Beschriftungen, Zuständen, Fokus-Logik, ARIA, Alt-Texten und ähnlichen nicht-invasiven Stellen verbessert werden

---

### 8. SEO & Meta-Daten

Prüfe:

* `title`, `meta description`, Canonical, Robots, Open Graph, Twitter Cards
* ob Meta-Daten inhaltlich sinnvoll, präzise und nicht generisch sind
* ob Titles und Descriptions zum tatsächlichen Seiteninhalt passen
* ob wichtige Suchbegriffe sinnvoll und natürlich vorkommen
* ob strukturierte Daten sinnvoll, konsistent und technisch korrekt sind
* ob Heading-Hierarchie, interne Verlinkung und Seitensignale SEO-seitig schlüssig sind
* ob Snippet-Texte professionell wirken und gute Klickwahrscheinlichkeit haben

Maßnahme:
→ agiere wie ein erfahrener SEO Engineer
→ prüfe nicht nur technische Vollständigkeit, sondern auch die inhaltliche Qualität
→ verbessere Meta-Daten, strukturierte Daten und semantische Signale nur dann, wenn sie die Seite real verbessern
→ keine SEO-Überoptimierung und kein Keyword-Stuffing

---

### 9. Semantik & Struktur (leicht)

Prüfe:

* sinnvolle HTML-Struktur
* korrekte Heading-Hierarchie
* sinnvolle Nutzung von `main`, `section`, `nav` etc.

Maßnahme:
→ nur klare Fehler korrigieren

---

### 10. Robustheit

Prüfe:

* Verhalten bei ungewöhnlichen Viewports
* lange Texte / Edge Cases
* fehlende Inhalte / Fallbacks
* Spezifische Browser anpassungen (So das es konstant gut auf allen Browsern funktioniert)

Maßnahme:
→ instabile Stellen absichern

---

### 11. Dead Code

Entferne:

* ungenutztes CSS
* nicht verwendete JS-Funktionen
* veraltete Klassen oder Styles ohne Referenz

---

## Leitplanken

* kein Redesign
* keine Änderungen außerhalb der Hauptseite
* bestehende Markenrichtung beibehalten
* keine neuen visuellen Experimente
* keine Änderungen ohne klaren Grund
* funktionierende Bereiche nicht unnötig umbauen
* Accessibility-Verbesserungen bevorzugt nicht-visuell umsetzen
* SEO-Verbesserungen müssen inhaltlich nachvollziehbar sein, nicht nur formal vorhanden

Bei Unsicherheit:
→ konservativere, stabilere Lösung wählen

---

## Vorgehen (verpflichtend)

1. wichtigste Probleme identifizieren (priorisiert)
2. direkt im Code beheben
3. danach kurz dokumentieren

---

## Abschlussformat

Am Ende liefern:

1. wichtigste identifizierte Probleme
2. umgesetzte Änderungen (kompakt)
3. verbleibende Risiken / Unsicherheiten
4. durchgeführte Checks

---

## Qualitätskriterium

Der Pass ist erfolgreich, wenn:

* die Seite technisch klarer und wartbarer ist
* die Performance solide ist
* die Gestaltung konsistent und ruhig wirkt
* Texte sauber und professionell sind
* mobile und Desktop stimmig zusammenpassen
* Code reduziert und vereinfacht wurde
* keine unnötigen Effekte oder Änderungen entstanden sind
* das Ergebnis wie ein **finaler Feinschliff**, nicht wie ein neues Konzept wirkt

---
