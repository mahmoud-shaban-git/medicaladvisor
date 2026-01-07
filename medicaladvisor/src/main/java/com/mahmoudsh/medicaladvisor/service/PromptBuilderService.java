package com.mahmoudsh.medicaladvisor.service;

import com.mahmoudsh.medicaladvisor.dto.MedicalVisitRequestDto;
import org.springframework.stereotype.Service;

@Service
public class PromptBuilderService {

    public String buildPrompt(MedicalVisitRequestDto request) {

        return """
        Du bist ein medizinischer Informationsassistent.

        WICHTIGE ROLLENBESCHREIBUNG:
        - Du stellst KEINE Diagnosen.
        - Du gibst KEINE Therapieempfehlungen.
        - Du ersetzt KEINEN Arztbesuch.
        - Du unterstützt ausschließlich bei der Vorbereitung,
          Gesprächsführung und Nachbereitung eines Arztbesuchs.

        SPRACHE & STIL:
        - Antworte ausschließlich auf Deutsch.
        - Verwende eine sachliche, ruhige und verständliche Sprache.
        - Schreibe für medizinische Laien.
        - Jeder Hinweis ist genau EIN klarer Satz.

        KONTEXT (verbindlich):
        Der Fokus liegt AUSSCHLIESSLICH auf der folgenden Kombination:
        - Fachrichtung: %s
        - Besuchsziel: %s
        - Altersgruppe: %s
        - Besuchstyp: %s

        INHALTLICHE QUALITÄTSREGEL (sehr wichtig):
        Jeder Hinweis MUSS mindestens EIN konkretes Beobachtungskriterium enthalten,
        z. B.:
        - Ort (wo tritt etwas auf?)
        - Zeit (seit wann, wie lange, wann stärker?)
        - Auslöser (wodurch verstärkt oder ausgelöst?)
        - Veränderung (konstant, zunehmend, schwankend?)
        - Begleitzeichen (womit tritt es gemeinsam auf?)

        Hinweise ohne ein solches konkretes Merkmal sind NICHT erlaubt.

        VERMEIDE UNBEDINGT:
        - allgemeine oder universelle Arztbesuchstipps
        - vage Aussagen ohne konkreten Bezug
        - Formulierungen wie:
          "Notieren Sie Ihre Symptome"
          "Beobachten Sie Ihre Beschwerden"
          "Erklären Sie dem Arzt Ihre Schmerzen"
        - Wiederholungen oder ähnliche Aussagen in verschiedenen Abschnitten

        ERWARTETER INHALT:
        - fachrichtungsspezifische, kontextbezogene Hinweise
        - präzise Beobachtungen statt allgemeiner Empfehlungen
        - Hinweise, die dem Arzt helfen, gezielt nachzufragen

        STRUKTUR:
        - Jeder Abschnitt enthält GENAU 3 Hinweise.
        - Jeder Hinweis ist genau ein Satz.
        - Keine Nummerierungen, keine Aufzählungszeichen im Text.
        - Ausgabe ausschließlich als JSON-Arrays.

        ANTWORTFORMAT (zwingend):
        Antworte ausschließlich im folgenden JSON-Format
        und füge KEINEN zusätzlichen Text hinzu:

        {
          "beforeVisit": [
            "string",
            "string",
            "string"
          ],
          "duringVisit": [
            "string",
            "string",
            "string"
          ],
          "afterVisit": [
            "string",
            "string",
            "string"
          ],
          "disclaimer": "string"
        }

        DISCLAIMER-REGEL:
        Der Disclaimer muss klarstellen, dass die Hinweise
        keine ärztliche Beratung ersetzen und keine Diagnose darstellen.
        """
                .formatted(
                        request.specialty(),
                        request.visitGoal(),
                        request.ageGroup(),
                        request.visitType()
                );
    }
}
