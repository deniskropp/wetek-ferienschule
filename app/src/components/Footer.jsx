import { useState } from 'react'

import Box from '@mui/material/Box'
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Toolbar from '@mui/material/Toolbar'

import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export function Footer() {
    const [detail, setDetail] = useState(false)

    return (
        <Box>
            <Stack>
                <Toolbar>
                    <button className="container btn-footer" onClick={() => setDetail(!detail)}>
                        Copyright © 2023 WeTeK Berlin gGmbH
                    </button>
                    <button className="container btn-footer" onClick={() => setDetail(!detail)}>
                        {detail ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>
                </Toolbar>
            </Stack>
            <Container>
                {detail && <WetekFooter />}
            </Container>
        </Box>
    )
}

function WetekFooter() {
    return (
        <footer id="colophon" role="contentinfo">
            <div className="footer-content">
                <div className="footer-menu">
                    <div id="footer_projekt_menu" className="projekt_menu">
                        <div className="cluster-menu" style={{ paddingLeft: "0px" }}>
                            <span className="cluster-menu-item">
                                Berufsorientierung - Wege in Ausbildung und Arbeit
                            </span>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/sommerschule-berlin/"
                            >
                                Ferienschule Berufliche Bildung
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/digitale-lernbegleitung/"
                            >
                                Digitale Lernbegleitung
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/schulcoaching/"
                            >
                                Schulcoaching
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/cyberspace10/"
                            >
                                Cyberspace
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/berufsorientierungsprogramme/"
                            >
                                BOP und BVBO
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/startpunkt-b/"
                            >
                                StartpunktB
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/startpunktb-plus/"
                            >
                                StartpunktB Plus
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/berufseinsteigsbegleitung/"
                            >
                                Berufseinstiegsbegleitung
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/perspektive-jetzt/"
                            >
                                Perspektive jetzt!
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/zukunft-im-beruf/"
                            >
                                IBA-Bildungsbegleitung
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/buecken/"
                            >
                                Brücken bauen
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/re-start/"
                            >
                                Re-Start
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/berufsorientierung-wege-in-ausbildung-und-arbeit/event-berlin-mobilitaetswerkstatt/"
                            >
                                Network Event Berlin
                            </a>
                        </div>
                        <div className="cluster-menu">
                            <span className="cluster-menu-item">
                                Ausbildung, Qualifizierung Fort- und Weiterbildung
                            </span>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/berufsbegleitende-ausbildung-zurzum-erzieherin/"
                            >
                                Fachschule für Sozialpädagogik
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/weiterbildung/"
                            >
                                Weiterbildung
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/quereinstieg-erzieherberuf/"
                            >
                                Quereinstieg Erzieherberuf
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/vorbereitung-erzieherin/"
                            >
                                Basis Berufe Sozialpädagogik
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/medienpaedagogik/"
                            >
                                Fokus Medienbildung
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/creative-service-center/"
                            >
                                Creative Service Center
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/digital1/"
                            >
                                Digital Competence Center
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/musicpaed-digital/"
                            >
                                musicpaed DIGITAL
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/artec3/"
                            >
                                artec
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/kosmos1/"
                            >
                                kosmosLAB
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/jobcoaching/"
                            >
                                Jobcoaching
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/deutschkurs/"
                            >
                                Deutschkurse an OSZ
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/qualifizierung-und-weiterbildung/berufliche-und-schulische-bildung-in-der-jva-fuer-frauen-berlin/"
                            >
                                Bildung in der JVA für Frauen
                            </a>
                        </div>
                        <div className="cluster-menu" style={{ borderWidth: "0px" }}>
                            <span className="cluster-menu-item">
                                Medienbildung und Jugend(kultur)arbeit
                            </span>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/mezen/"
                            >
                                Medienzentrum Pankow
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/medienetage/"
                            >
                                Medienetage
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/medienbildung-fuer-gute-schule/"
                            >
                                Medienbildung für Gute Schule
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/weinmeisterhaus/"
                            >
                                Weinmeisterhaus
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/meredo/"
                            >
                                meredo
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/musikstadt-2-0/"
                            >
                                Musikarbeit mit Geflüchteten
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/rockmobil/"
                            >
                                Rockmobil
                            </a>
                            <a
                                className="projekt-menu-item"
                                href="https://www.wetek.de/projekte/medienkompetenz-und-jugendarbeit/hiphop-mobil/"
                            >
                                HipHop Mobil
                            </a>
                        </div>
                    </div>
                    <div
                        className="azav"
                        style={{
                            display: "none",
                            float: "right",
                            width: "150px",
                            textAlign: "right",
                            border: "1px solid red",
                        }}
                    >
                        <div
                            style={{
                                float: "left",
                                width: "100px",
                                border: "1px solid blue",
                                fontSize: "12px !important",
                                lineHeight: "12px !important",
                            }}
                        >
                            Zertifiziert nach AZAV
                        </div>
                        <img
                            style={{ display: "inlineBlock", width: "40px", margin: "0 0 0 5px" }}
                            src="https://www.wetek.de/wetek/wp-content/themes/wetek/azav.svg"
                            alt="azav"
                        />
                    </div>
                    <div className="impressum">
                        <div className="credit">
                            © WeTeK Berlin gGmbH 2022 |{" "}
                            <div id="impressum_toggle">Impressum &amp; Datenschutz</div>
                        </div>
                        <div id="impressum" style={{ display: "block" }}>
                            <div id="impressum_text">
                                <p>
                                    <strong>Verantwortlich gemäß § 5 TMG:</strong>
                                    <br />
                                    WeTeK Berlin gGmbH gemeinnützige Gesellschaft für Qualifizierung,
                                    Ausbildung und Jugendkultur, Christinenstr. 18-19 | 10119 Berlin
                                </p>
                                <p>
                                    Vertreten durch Christine Scherer (Geschäftsführung)
                                    <br />
                                    Sitz Berlin | Amtsgericht Charlottenburg Handelsregister – HRB
                                    108537 B
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>
                                        Verantwortlich für den Inhalt nach §55 Abs. 2 RStV:
                                    </strong>
                                    <br />
                                    Christine Scherer, WeTeK Berlin gGmbH gemeinnützige Gesellschaft
                                    für Qualifizierung, Ausbildung und Jugendkultur, Christinenstr.
                                    18-19 | 10119 Berlin
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Kontakt:</strong>
                                    <br />
                                    Tel: +49 (0)30 22 50 150-0| E-Mail: info@wetek.de
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Webhosting:</strong>
                                    <br />
                                    jugendnetz-berlin.de – Jugend- und Familienstiftung des Landes
                                    Berlin
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Haftungsausschluss: (Disclaimer):</strong>
                                    <br />
                                    Haftung für Inhalte: Die Inhalte unserer Seiten wurden mit größter
                                    Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                                    Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                                    Wir sind gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                                    sind wir als Dienstanbieter jedoch nicht verpflichtet,
                                    übermittelte oder gespeicherte fremde Informationen zu überwachen
                                    oder nach Umständen zu forschen, die auf eine rechtswidrige
                                    Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                                    der Nutzung von Informationen nach den allgemeinen Gesetzen
                                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                                    erst ab dem Zeitpunkt der Kenntnis einer konkreten
                                    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                                </p>
                                <p>
                                    Haftung für Links: Unser Angebot enthält Links zu externen
                                    Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                                    übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                                    Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                                    Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                                    inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                                    konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                                    Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                                    umgehend entfernen. Die durch die Seitenbetreiber erstellten
                                    Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                                    jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                                    Erstellers. Downloads und Kopien dieser Seite sind nur für den
                                    privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
                                    Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                                    werden die Urheberrechte Dritter beachtet. Insbesondere werden
                                    Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                                    auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
                                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                                    entfernen.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Urheberrecht/ Copyright:</strong>
                                    <br />
                                    Alle auf dieser Webseite erstellten Inhalte und Werke unterliegen
                                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                                    Urheberrechtes bedürfen der schriftlichen Zustimmung des
                                    Erstellers bzw. Berechtigten. Downloads und Kopien dieser Seite
                                    sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                                    Die nicht kommerzielle Nutzung von Inhalten der Webseite können
                                    gestattet werden. Voraussetzung dafür ist die vorherige
                                    schriftliche Anfrage. Die unerlaubte Reproduktion oder Weitergabe
                                    einzelner Inhalte oder kompletter Seiten wird straf- und
                                    zivilrechtlich verfolgt. Soweit die Inhalte auf dieser Seite nicht
                                    vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                                    beachtet. Insbesondere werden Inhalte Dritter als solche
                                    gekennzeichnet. Sollten Sie trotzdem auf eine
                                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                                    werden wir derartige Inhalte umgehend entfernen.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Kommunikation über E-Mail:</strong>
                                    <br />
                                    Kommunikation über E-Mail kann Sicherheitslücken aufweisen.
                                    Beispielsweise können E-Mails auf ihrem Weg an die Mitarbeiter von
                                    versierten Internet-Nutzern aufgehalten, eingesehen und auch
                                    manipuliert werden. Sollten wir eine E-Mail von Ihnen erhalten, so
                                    gehen wir davon aus, dass wir zu einer Beantwortung per E-Mail
                                    berechtigt sind. Ansonsten müssen Sie ausdrücklich auf eine andere
                                    Art der Kommunikation verweisen.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Datenschutzerklärung</strong>
                                </p>
                                <p>
                                    Im Folgenden informieren wir Sie über die Verarbeitung
                                    personenbezogener Daten durch uns als Verantwortlichen bei der
                                    Nutzung unserer Webseiten, im Rahmen von Bewerbungsverfahren sowie
                                    für Personen, die an öffentlich geförderten Maßnahmen teilnehmen.
                                    Die Verarbeitung personenbezogener Daten (z.B. Name, Anschrift,
                                    E-Mail-Adresse oder Telefonnummer einer betroffenen Person)
                                    erfolgt gemäß den gesetzlichen Bestimmungen, insbesondere nach den
                                    Anforderungen der Datenschutz-Grundverordnung (DSGVO) sowie des
                                    Bundesdatenschutzgesetzes (BDSG).
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>I – Verantwortliche</strong>
                                </p>
                                <p>
                                    Verantwortlicher im Sinne der DSGVO sowie der nationalen
                                    Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger
                                    datenschutzrechtlicher Bestimmungen ist:
                                </p>
                                <p>
                                    WeTeK Berlin gGmbH
                                    <br />
                                    Christinenstr. 18/19 – Haus 12 – Neubau/ II. OG
                                    <br />
                                    10119 Berlin
                                    <br />
                                    Geschäftsführung: Christine Scherer
                                    <br />
                                    E-Mail: info (at) wetek punkt de
                                    <br />
                                    Tel: +49(0)30 /2250150-11 | Fax: +49 (0)30 /2250150-19
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>II – Datenschutzbeauftragte</strong>
                                </p>
                                <p>
                                    WeTeK Berlin gGmbH
                                    <br />– z.H. der Datenschutzbeauftragten –
                                </p>
                                <p>
                                    Christinenstr. 18/19 – Haus 12 – Neubau/ II. OG
                                    <br />
                                    10119 Berlin
                                </p>
                                <p>E-Mail: datenschutz (at) wetek punkt de</p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>III – Allgemeines zur Datenverarbeitung</strong>
                                </p>
                                <p>
                                    Personenbezogene Daten sind alle Informationen, die sich auf eine
                                    identifizierte oder identifizierbare natürliche Person beziehen,
                                    wie Ihr Name oder Ihre E-Mail-Adresse. Unter „Verarbeitung von
                                    Daten“ versteht man insbesondere die Erhebung, Speicherung,
                                    Verwendung und Übermittlung Ihrer Daten.
                                </p>
                                <p>
                                    Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
                                    Einwilligung der betroffenen Person einholen, dient Art. 6
                                    Abs.&nbsp;1 S.&nbsp;1 lit.&nbsp;a DSGVO als Rechtsgrundlage.
                                </p>
                                <p>
                                    Bei der Verarbeitung von personenbezogenen Daten, die zur
                                    Erfüllung eines Vertrages, dessen Vertragspartei die betroffene
                                    Person ist, erforderlich ist, dient Art. 6 Abs.&nbsp;1 S.&nbsp;1
                                    lit.&nbsp;b DSGVO als Rechtsgrundlage. Dies gilt auch für
                                    Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher
                                    Maßnahmen erforderlich sind.
                                </p>
                                <p>
                                    Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung
                                    einer rechtlichen Verpflichtung erforderlich ist, der unser
                                    Unternehmen unterliegt, dient Art. 6 Abs.&nbsp;1 S.&nbsp;1
                                    lit.&nbsp;c DSGVO als Rechtsgrundlage.
                                </p>
                                <p>
                                    Für den Fall, dass lebenswichtige Interessen der betroffenen
                                    Person oder einer anderen natürlichen Person eine Verarbeitung
                                    personenbezogener Daten erforderlich machen, dient 6 Abs.&nbsp;1
                                    S.&nbsp;1 lit.&nbsp;d DSGVO als Rechtsgrundlage.
                                </p>
                                <p>
                                    Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                                    unseres Unternehmens oder eines Dritten erforderlich und
                                    überwiegen die Interessen, Grundrechte und Grundfreiheiten des
                                    Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
                                    Abs.&nbsp;1 S.&nbsp;1 lit.&nbsp;f DSGVO als Rechtsgrundlage für
                                    die Verarbeitung.
                                </p>
                                <p>
                                    Die personenbezogenen Daten von betroffenen Personen werden
                                    gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt.
                                    Eine Speicherung nach Wegfall des Speicherungszwecks kann
                                    erfolgen, wenn dies gesetzlich vorgesehen ist. Eine Sperrung oder
                                    Löschung der Daten erfolgt auch dann, wenn eine durch die
                                    genannten Normen vorgeschriebene Speicherfrist abläuft, es sei
                                    denn, dass eine Erforderlichkeit zur weiteren Speicherung der
                                    Daten für einen Vertragsabschluss oder eine Vertragserfüllung
                                    besteht.
                                </p>
                                <p>
                                    Weitergehende Informationen zu den Rechtsgrundlagen der
                                    Verarbeitung und zur Speicherdauer bezüglich konkreter
                                    personenbezogener Daten finden Sie im jeweiligen Unterabschnitt.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>IV – Rechte der betroffenen Person</strong>
                                </p>
                                <p>
                                    <strong>1.- Betroffenenrechte</strong>
                                </p>
                                <p>
                                    Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
                                    betroffene Person i.S.d. DSGVO und es stehen Ihnen folgende Rechte
                                    gegenüber dem Verantwortlichen zu (ggf. beim Vorliegen weiterer in
                                    den entsprechenden Vorschriften geregelter Voraussetzungen):
                                </p>
                                <ul>
                                    <li style={{ listStyleType: "none" }}>
                                        <ul>
                                            <li>– Recht auf Auskunft (Art. 15 DSGVO),</li>
                                            <li>
                                                – Recht auf Berichtigung und Löschung (Art. 16, 17 DSGVO),
                                            </li>
                                            <li>
                                                – Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO),
                                            </li>
                                            <li>
                                                – Recht auf Widerruf, wenn Sie in die Verarbeitung
                                                eingewilligt haben; der Widerruf der Einwilligung kann
                                                jederzeit mit Wirkung für die Zukunft und ohne Angabe von
                                                Gründen erfolgen,
                                            </li>
                                            <li>– Recht auf Datenübertragbarkeit (Art. 19 DSGVO).</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>2.- Widerspruchsrecht</strong>
                                </p>
                                <p>
                                    Soweit wir zur Wahrung unserer im Rahmen einer Interessensabwägung
                                    überwiegenden berechtigten Interessen personenbezogene Daten wie
                                    oben erläutert verarbeiten, können Sie dieser Verarbeitung mit
                                    Wirkung für die Zukunft widersprechen, jedoch nur bei Vorliegen
                                    von Gründen, die sich aus Ihrer besonderen Situation ergeben (Art.
                                    21 DSGVO). Erfolgt die Verarbeitung zu Zwecken des
                                    Direktmarketings, können Sie dieses Recht jederzeit auch ohne
                                    Vorliegen von Gründen ausüben. Nach berechtigter Ausübung Ihres
                                    Widerspruchsrechts werden wir Ihre personenbezogenen Daten nicht
                                    weiter zu diesen Zwecken verarbeiten, es sei denn, wir können
                                    zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
                                    die Ihre Interessen, Rechte und Freiheiten überwiegen, oder wenn
                                    die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung
                                    von Rechtsansprüchen dient. Diese Einschränkung gilt nicht, wenn
                                    die Verarbeitung zu Zwecken des Direktmarketings erfolgt.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>3.- Beschwerderecht </strong>
                                </p>
                                <p>
                                    Sollten Sie der Auffassung sein, wir würde Ihre Rechte nicht in
                                    dem geschuldeten Maße achten, haben Sie das Recht, sich bei einer
                                    Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                                    personenbezogenen Daten durch uns zu beschweren. Bevor Sie dies
                                    tun, würden wir uns jedoch freuen, wenn Sie uns zuvor über Ihre
                                    Kritik informieren, damit wir selbst eine Beseitigung des
                                    Beschwerdegrundes vornehmen können.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>V – Besuch der Webseiten und Logfiles </strong>
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Bei jedem Aufruf unserer Internetseite erfasst unser System
                                    automatisiert die folgenden Daten und Informationen vom
                                    Computersystem des aufrufenden Rechners.
                                </p>
                                <ul>
                                    <li>
                                        – Informationen über den Browsertyp und die verwendete Version
                                    </li>
                                    <li>– Das Betriebssystem des Nutzers</li>
                                    <li>– Den Internet-Service-Provider des Nutzers</li>
                                    <li>– Die IP-Adresse des Nutzers</li>
                                    <li>– Datum und Uhrzeit des Zugriffs</li>
                                    <li>
                                        – Webseiten, von denen das System des Nutzers auf unsere
                                        Internetseite gelangt
                                    </li>
                                    <li>
                                        – Webseiten, die vom System des Nutzers über unsere Webseite
                                        aufgerufen werden
                                    </li>
                                    <li>
                                        – der Name der angeforderten Datei sowie der Zeitpunkt und der
                                        Status der Anforderung und die übertragene Datenmenge
                                    </li>
                                </ul>
                                <p>
                                    Diese Daten werden nicht in den Logfiles unseres Systems
                                    gespeichert.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Rechtsgrundlage für die Erhebung und Speicherung der Daten ist
                                    Art. 6 Abs. 1 lit. f DSGVO.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Die vorübergehende Speicherung der IP-Adresse ist erforderlich, um
                                    Ihnen die Webseite anzeigen zu können. Dafür muss die IP-Adresse
                                    für die Dauer der Sitzung gespeichert bleiben. Die übrigen Daten
                                    werden aus technischen Gründen erhoben, um die Stabilität und die
                                    Sicherheit zu gewährleisten.
                                </p>
                                <p>
                                    Daraus ergibt sich auch das berechtigte Interesse an der
                                    Verarbeitung nach Art. 6 Abs. 1&nbsp; lit. f DSGVO.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Die Daten werden gelöscht, sobald sie für die Erreichung des
                                    Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der
                                    Erfassung der Daten zur Bereitstellung der Webseite ist dies der
                                    Fall, wenn die jeweilige Sitzung beendet ist.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>
                                        VI – Verarbeitung personenbezogener Daten im Bewerbungsverfahren
                                    </strong>
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Sofern Sie uns im Rahmen des Bewerbungsprozesses personenbezogene
                                    Daten mitteilen, werden die von Ihnen übermittelten Daten zur
                                    Durchführung des Bewerbungsverfahrens verarbeitet.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.-&nbsp; Rechtsgrundlage für die Verarbeitung personenbezogener
                                    Daten
                                </h3>
                                <p>
                                    Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 S. 1 lit.
                                    a, f DSGVO).
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.-&nbsp; Zweck der Datenverarbeitung</h3>
                                <p>
                                    Die Verarbeitung erfolgt zu dem Zweck, den Erfolg Ihrer Bewerbung
                                    einschätzen und das Bewerbungsverfahren durchführen zu können.
                                    Kommt ein Vertragsverhältnis zwischen Ihnen und uns zustande,
                                    werden die übermittelten Daten zum Zwecke der Eingehung und
                                    Durchführung des Beschäftigungsverhältnisses unter Beachtung der
                                    gesetzlichen Vorschriften verarbeitet.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.-&nbsp; Dauer der Speicherung</h3>
                                <p>
                                    Sofern kein Beschäftigungsverhältnis zustande kommt werden die
                                    Bewerbungsunterlagen sechs Monate nach Abschluss des
                                    Bewerbungsverfahrens gelöscht, sofern einer Löschung keine
                                    sonstigen berechtigten Interessen unsererseits entgegenstehen
                                    (z.B. AGG-Verfahren).
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>
                                        VII – Verarbeitung personenbezogener Daten bei Anmeldung zu
                                        Angeboten
                                    </strong>
                                </p>
                                <p>
                                    Über unsere Website können Sie sich zu den von uns angebotenen
                                    Leistungen (Veranstaltungen, Programme, Maßnahmen etc.) anmelden.
                                    Die nachfolgenden Regelungen gelten nur, soweit für die jeweilige
                                    Leistung keine gesonderte Datenschutzerklärung übermittelt wird.
                                </p>
                                <h3>1.-&nbsp; Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Im Rahmen der Anmeldung und Durchführung der Leistungen
                                    verarbeiten wir personenbezogenen Daten der an den diesen
                                    Angeboten teilnehmenden Personen.
                                </p>
                                <p>Dies betrifft insbesondere die folgenden Daten:</p>
                                <ul>
                                    <li>– Vorname und Name</li>
                                    <li>– Alter</li>
                                    <li>– Anschrift</li>
                                    <li>– Telefonnummer</li>
                                    <li>– E-Mail-Adresse</li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    Ggf. werden im Rahmen der Anmeldung weitere Daten abgefragt.
                                    Sofern nicht anders angegeben, handelt es sich bei den
                                    Datenfeldern um Pflichtangaben. Die Angabe weiterer Daten ist
                                    freiwillig.
                                </p>
                                <p>&nbsp;</p>
                                <h3>2.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Die Verarbeitung der Daten dient der Durchführung der angebotenen
                                    Leistung. Die Pflichtangaben sind für die Durchführung notwendig.
                                    Zugleich sind wir bei von staatlichen Stellen geförderten
                                    Maßnahmen rechtlich verpflichtet, den Zuwendungsgebern zum
                                    Nachweis der Durchführung der Maßnahme personenbezogene Daten zu
                                    übermitteln. Die Übermittlung wird auf ein Mindestmaß reduziert,
                                    insbesondere werden die Daten pseudonymisiert (keine Klarnamen).
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    3.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Rechtsgrundlage für die Verarbeitung der Pflichtangaben ist Art. 6
                                    Abs. 1 lit. b DSGVO. Rechtsgrundlage für die Verarbeitung der
                                    freiwilligen Angaben ist Art. 6 Abs. 1 lit. a DSGVO.
                                    Rechtsgrundlage für die Übermittlung der Daten an Zuwendungsgeber
                                    ist Art. 6 Abs. 1 S. 1 lit. c, f DSGVO.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Wir speichern Ihre personenbezogenen Daten nur für den Zeitraum,
                                    der zur Erreichung des Zwecks der Verarbeitung erforderlich ist
                                    oder sofern wir dazu gesetzlich verpflichtet sind, z.B. aufgrund
                                    von handels- oder steuerrechtlichen Pflichten. Diese Fristen
                                    können bis zu zehn Jahre betragen. Zuwendungsrechtlich können wir
                                    zu einer längeren Aufbewahrungsfrist verpflichtet sein (z.B. 15
                                    Jahre). Dies hängt von den Vorgaben des jeweiligen
                                    Zuwendungsgebers ab.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>VIII – Newsletter</strong>
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Sie können auf unserer Webseite einen Newsletter abonnieren. Dafür
                                    müssen Sie folgende Daten im entsprechenden Formular auf der
                                    Webseite eingeben:
                                </p>
                                <p>(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-Mail-Adresse</p>
                                <p>
                                    Diese Daten werden an uns übermittelt und von uns gespeichert.
                                    Gleichzeitig werden mit dem Absenden der Anfrage folgende weitere
                                    Daten erhoben und gespeichert:
                                </p>
                                <p>
                                    (1) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Die IP-Adresse des
                                    Nutzers
                                </p>
                                <p>
                                    (2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Datum und Uhrzeit
                                    der Verwendung
                                </p>
                                <p>
                                    Für die Verarbeitung der Daten wird im Rahmen des Anmeldevorgangs
                                    Ihre Einwilligung eingeholt und auf diese Datenschutzerklärung
                                    verwiesen.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1
                                    lit. a bzw. lit. f DSGVO.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.-&nbsp; Zweck der Datenverarbeitung</h3>
                                <p>
                                    Die Erhebung und Speicherung der E-Mail-Adresse dient der
                                    Möglichkeit, Ihnen den Newsletter übermitteln zu können.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Die erhobenen Daten werden so lange gespeichert, wie das
                                    Abonnement des Newsletter bestehen bleibt. Sie können den Empfang
                                    unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen
                                    widerrufen, bzw. dem weiteren Empfang widersprechen. Einen Link
                                    zur Abbestellung des Newsletters finden Sie am Ende eines jeden
                                    Newsletters.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>IX – Kontaktformular</strong>
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Sie können das auf unserer Webseite vorhandene Kontaktformular
                                    benutzen, um mit uns auf diesem Weg in Kontakt zu treten. Bei der
                                    Verwendung werden die dort eingegebenen Daten an uns übermittelt
                                    und bei uns gespeichert. Dabei handelt es sich um mindestens
                                    folgende Daten:
                                </p>
                                <p>(1) E-Mail-Adresse</p>
                                <p>(2) Ihre Nachricht an uns</p>
                                <p>
                                    Gleichzeitig werden mit dem Absenden der Anfrage folgende weitere
                                    Daten erhoben und gespeichert:
                                </p>
                                <p>(1) Die IP-Adresse des Nutzers</p>
                                <p>(2) Datum und Uhrzeit der Verwendung</p>
                                <p>
                                    Die erhobenen Daten verarbeiten wir zur Beantwortung und
                                    Erledigung Ihrer Anfragen. Sie sind nicht verpflichtet, uns Ihre
                                    personenbezogenen Daten bereitzustellen. Eine Beantwortung der
                                    Anfrage ist uns dann jedoch nicht möglich.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Übermitteln Sie uns Ihre Daten in einem vorvertraglichen Kontext,
                                    also beispielsweise mit der Bitte um Übersendung eines Angebots
                                    oder mit Fragen zu unseren Produkten, ist Art. 6 Abs. 1 lit. b
                                    DSGVO die Rechtsgrundlage. In allen anderen Fällen ist Art. 6 Abs.
                                    1 lit. a bzw. lit. f DSGVO die Rechtsgrundlage.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske
                                    dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle
                                    einer Kontaktaufnahme per E-Mail liegt hierin auch das
                                    erforderliche berechtigte Interesse an der Verarbeitung der Daten.
                                </p>
                                <p>
                                    Die sonstigen mit dem Absenden verarbeiteten personenbezogenen
                                    Daten dienen dazu, einen Missbrauch des Kontaktformulars zu
                                    verhindern und die Sicherheit unserer informationstechnischen
                                    Systeme sicherzustellen.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Ihre Daten werden gelöscht, wenn sich aus den Umständen entnehmen
                                    lässt, dass Ihre Anfrage bzw. der betroffene Sachverhalt
                                    abschließend geklärt ist.
                                </p>
                                <p>
                                    Die mit dem Absenden zusätzlich erhobenen personenbezogenen Daten
                                    werden spätestens nach einer Frist von sieben Tagen gelöscht.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>X – Videokonferenzsystem</strong>
                                </p>
                                <h3>1.-&nbsp; Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Über die Plattform können Sie Videokonferenzen durchführen.
                                    Hierfür nutzen wir die Software BigBlueButton bzw. Jitsi auf von
                                    uns betriebenen Servern. Sofern Sie sich für die Teilnahme an
                                    einer Videokonferenz entscheiden, werden ggf. die folgenden Daten
                                    verarbeitet:
                                </p>
                                <ul>
                                    <li>– Ihr selbst gewählter Name,</li>
                                    <li>
                                        – Ihr Videobild, sofern Sie dieses im Meeting bereitstellen
                                    </li>
                                    <li>
                                        – Ihre Äußerungen via Audio, sofern Sie diese im Meeting
                                        bereitstellen
                                    </li>
                                    <li>
                                        – Ihre geteilten Dokumente (z. B. Präsentationen, Tabellen,
                                        Grafiken, Texte, Audio, Video), sofern Sie diese im Meeting
                                        bereitstellen
                                    </li>
                                    <li>
                                        – Ihre geteilten Nachrichten, sofern Sie diese im Meeting
                                        bereitstellen
                                    </li>
                                    <li>
                                        – Ihre geteilten Notizen, sofern Sie diese im Meeting
                                        bereitstellen
                                    </li>
                                    <li>
                                        – Ihre geteilten Zeichnungen, sofern Sie diese im Meeting
                                        bereitstellen
                                    </li>
                                    <li>
                                        – Ihre geteilten Umfragen und Umfrageantworten, sofern Sie diese
                                        im Meeting bereitstellen
                                    </li>
                                    <li>– Ihre Zugehörigkeiten zu Räumen (ggf.)</li>
                                    <li>
                                        – Ihre sonstigen geteilten Informationen, sofern Sie diese im
                                        Meeting bereitstellen
                                    </li>
                                    <li>– IP-Adresse des von Ihnen verwendeten Endgeräts</li>
                                    <li>– Zugriffsdatum/-zeit</li>
                                    <li>– Zugriffsmethode</li>
                                    <li>– Ressource, von der zugegriffen wurde</li>
                                    <li>– zugegriffene Ressource</li>
                                </ul>
                                <p>&nbsp;</p>
                                <h3>
                                    2.-&nbsp; Rechtsgrundlage für die Verarbeitung personenbezogener
                                    Daten
                                </h3>
                                <p>
                                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                    im Rahmen von Videokonferenzen ist Art. 6 Abs. 1 lit. a DSGVO bzw.
                                    Art. 6 Abs. 1 lit. a DSGVO, wenn die Teilnahme an der
                                    Videokonferenz für die Durchführung des mit Ihnen geschlossenen
                                    Vertrages erforderlich ist.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Der Zweck der Verarbeitung liegt in der Ermöglichung und
                                    Durchführung der Videokonferenzen sowie der damit verbunden, für
                                    Sie erkennbaren Funktionen, wie etwa Chats, Bildschirmteilung etc.
                                    bzw. in der Durchführung des mit Ihnen geschlossenen Vertrages.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Die verarbeiteten Daten werden nur während der Laufzeit der
                                    Videokonferenz gespeichert. Sollte dies im Einzelfall anders sein,
                                    werden Sie zuvor darauf hingewiesen und, falls rechtlich
                                    erforderlich, um eine entsprechende Einwilligung ersucht.
                                    Abstimmungsverhalten in namentlichen Umfragen können für einen
                                    längeren Zeitraum gespeichert werden, wenn dies aus rechtlichen
                                    Gründen, etwa zum Nachweis der gefundenen Entscheidung
                                    erforderlich ist. Wenn dies nicht erforderlich sein sollte, wird
                                    allenfalls das anonyme Umfrageergebnis gespeichert.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>XI – Cookies </strong>
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Unsere Webseite verwendet technisch notwendige Cookies. Bei
                                    Cookies handelt es sich um Textdateien, die auf Ihrem
                                    Computersystem gespeichert werden. Wir setzen Cookies ein, um
                                    unsere Webseite nutzerfreundlicher zu gestalten. Einige Elemente
                                    unserer Internetseite erfordern es, dass der aufrufende Browser
                                    auch nach einem Seitenwechsel identifiziert werden kann.
                                </p>
                                <p>
                                    Wir verwenden auf unserer Webseite darüber hinaus Cookies, die
                                    eine Analyse des Surfverhaltens der Nutzer ermöglichen. Beim
                                    Aufruf unserer Webseite wird der Nutzer über die Verwendung von
                                    Cookies zu Analysezwecken informiert und seine Einwilligung zur
                                    Verarbeitung der in diesem Zusammenhang verwendeten
                                    personenbezogenen Daten eingeholt. In diesem Zusammenhang erfolgt
                                    auch ein Hinweis auf diese Datenschutzerklärung.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                    unter Verwendung von Cookies ist Art. 6 Abs. 1 lit. a DSGVO. Für
                                    die technisch notwendigen Cookies ist Art. 6 Abs. 1 lit. f DSGVO
                                    die Rechtsgrundlage.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Der Zweck der Verwendung technisch notwendiger Cookies ist, die
                                    Nutzung unsere Webseite für Sie zu vereinfachen. Einige Funktionen
                                    unserer Internetseite können ohne den Einsatz von Cookies nicht
                                    angeboten werden. Für diese ist es erforderlich, dass der Browser
                                    auch nach einem Seitenwechsel wiedererkannt wird. Die durch
                                    technisch notwendige Cookies erhobenen Nutzerdaten werden nicht
                                    zur Erstellung von Nutzerprofilen verwendet.
                                </p>
                                <p>
                                    Die Verwendung der Analyse-Cookies erfolgt zu dem Zweck, die
                                    Qualität unserer Webseite und ihre Inhalte zu verbessern. Durch
                                    die Analyse-Cookies erfahren wir, wie die Webseite genutzt wird
                                    und können so unser Angebot stetig optimieren.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Die technisch notwendigen Cookies werden im Regelfall mit dem
                                    Schließen des Browsers, also bei Beendigung der Sitzung gelöscht.
                                </p>
                                <p>
                                    Die weiteren eingesetzten Cookies werden automatisch nach einer
                                    vorgegebenen Zeit gelöscht, die über das Ende einer Sitzung
                                    hinausgeht und die sich von Cookie zu Cookie unterscheidet. Die
                                    jeweilige Speicherzeit der Cookies können sie in den Einstellungen
                                    Ihres Browsers einsehen. Dort können sie Cookies auch vor Ablauf
                                    der Speicherzeit löschen.
                                </p>
                                <p>&nbsp;</p>
                                <h3>5.- Empfänger personenbezogener Daten von Cookies</h3>
                                <p>
                                    Die nur mit Ihrer Einwilligung eingesetzten Cookies werden in den
                                    im Rahmen der Einwilligungserklärung angezeigten Fällen von
                                    Anbietern mit Sitz außerhalb der EU verwendet. Insbesondere bei
                                    Dienstanbietern in den USA weisen wir darauf hin, dass dort kein
                                    mit der EU vergleichbares Datenschutzniveau herrscht und
                                    insbesondere eine Durchsetzung Ihrer Betroffenenrechte dort
                                    erschwert bzw. nicht möglich ist.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>
                                        XII – Kategorien von Empfängern personenbezogener Daten
                                    </strong>
                                </p>
                                <p>
                                    Eine Übermittlung von personenbezogenen Daten an Dritte erfolgt
                                    nur in den in dieser Erklärung genannten Fällen oder wenn wir Sie
                                    andernorts ausdrücklich darüber informieren. Darüber hinaus setzen
                                    wir zur Erbringung unserer Leistungen teilweise externe
                                    Auftragsverarbeiter (Art. 28 DSGVO) ein (z.B. Hostprovider,
                                    E-Mail-Provider). Diese verarbeiten personenbezogene Daten jedoch
                                    ausschließlich innerhalb der Europäischen Union.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>XIII – Google reCAPTCHA</strong>
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Auf dieser Internetseite verwenden wir die reCAPTCHA Funktion von
                                    Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04
                                    E5W5, Irland („Google“). Diese Funktion dient zur Unterscheidung,
                                    ob eine Eingabe durch eine natürliche Person oder missbräuchlich
                                    durch maschinelle und automatisierte Verarbeitung erfolgt. Der
                                    Dienst umfasst insbesondere die Übermittlung der IP-Adresse, aber
                                    ggf. auch weitere von Google für den Dienst reCAPTCHA. Im Rahmen
                                    der Nutzung von Google reCAPTCHA kann es auch zu einer
                                    Übermittlung von personenbezogenen Daten an die Server der Google
                                    LLC. in den USA kommen.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1
                                    lit. f DSGVO. Der Einsatz von Google reCAPTCHA basiert auf unserem
                                    berechtigten Interesse an der Feststellung der individuellen
                                    Eigenverantwortung im Internet und der Vermeidung von Missbrauch
                                    und Spam.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Die Erhebung und Speicherung der Daten dient der Feststellung der
                                    individuellen Eigenverantwortung im Internet und der Vermeidung
                                    von Missbrauch und Spam.
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Dauer der Speicherung</h3>
                                <p>
                                    Die Datenverarbeitung endet grundsätzlich mit der Bestätigung,
                                    dass es sich nicht um eine maschinelle und automatisierte
                                    Verarbeitung handelt. Weiterführende Informationen zu Google
                                    reCAPTCHA sowie die Datenschutzerklärung von Google können Sie
                                    einsehen unter: https://www.google.com/intl/de/policies/privacy/
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>XIV – Plug-Ins</strong>
                                </p>
                                <p>
                                    Auf unserer Website nutzen wir Inhaltselemente, die von Servern
                                    ihrer jeweiligen Anbieter (nachfolgend bezeichnet als
                                    „Drittanbieter”) bezogen werden.
                                </p>
                                <h3>1.- Umfang der Verarbeitung personenbezogener Daten</h3>
                                <p>
                                    Bei Einbindung der Plug-Ins wird die IP-Adresse der Nutzer
                                    verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren
                                    Browser senden könnten. Die IP-Adresse ist damit für die
                                    Darstellung dieser Inhalte oder Funktionen erforderlich. Wir
                                    bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige
                                    Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
                                    verwenden. Drittanbieter können ferner sogenannte Pixel-Tags
                                    (unsichtbare Grafiken, auch als „Web Beacons“ bezeichnet) für
                                    statistische oder Marketingzwecke verwenden. Durch die
                                    „Pixel-Tags“ können Informationen, wie der Besucherverkehr auf den
                                    Seiten dieser Webseite, ausgewertet werden. Die pseudonymen
                                    Informationen können ferner in Cookies auf dem Gerät der Nutzer
                                    gespeichert werden und unter anderem technische Informationen zum
                                    Browser und zum Betriebssystem, zu verweisenden Webseiten, zur
                                    Besuchszeit sowie weitere Angaben zur Nutzung unseres
                                    Onlineangebotes enthalten als auch mit solchen Informationen aus
                                    anderen Quellen verbunden werden.
                                </p>
                                <p>
                                    Verarbeitete Datenarten sind Nutzungsdaten (z.B. besuchte
                                    Webseiten, Interesse an Inhalten, Zugriffszeiten),
                                    Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                                    IP-Adressen), Inhaltsdaten (z.B. Eingaben in Onlineformularen),
                                    Bestandsdaten (z.B. Namen, Adressen).
                                </p>
                                <p>
                                    Shariff: Wir verwenden die datenschutzsicheren
                                    „Shariff“-Schaltflächen. „Shariff“ wurde entwickelt, um mehr
                                    Privatsphäre im Netz zu ermöglichen und die üblichen
                                    „Share“-Buttons der sozialen Netzwerke zu ersetzen. Dabei stellt
                                    nicht der Browser der Nutzer, sondern der Server, auf dem sich
                                    dieses Onlineangebot befindet, eine Verbindung mit dem Server der
                                    jeweiligen Social-Media-Plattformen her und fragt z.B. die Anzahl
                                    von Likes ab. Der Nutzer bleibt anonym. Mehr Informationen zum
                                    Shariff-Projekt finden Sie bei den Entwicklern des Magazins c’t:
                                    https://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html;
                                    Dienstanbieter: Heise Medien GmbH &amp; Co. KG,
                                    Karl-Wiechert-Allee 10, 30625 Hannover, Deutschland; Website:
                                    https://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html;
                                    Datenschutzerklärung:
                                    https://www.heise.de/Datenschutzerklaerung-der-Heise-Medien-GmbH-Co-KG-4860.html.
                                </p>
                                <p>&nbsp;</p>
                                <h3>
                                    2.- Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                                </h3>
                                <p>
                                    Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
                                    Drittanbieter bitten, ist die Rechtsgrundlage für die Verarbeitung
                                    der Daten Art. 6 Abs. 1 lit. a DSGVO. Ansonsten werden die Daten
                                    der Nutzer auf Grundlage unserer berechtigten Interessen (d.h.
                                    Interesse an effizienten, wirtschaftlichen und
                                    empfängerfreundlichen Leistungen) verarbeitet. Rechtsgrundlage für
                                    die Verarbeitung der Daten ist dann Art. 6 Abs. 1 lit. f DSGVO.
                                </p>
                                <p>&nbsp;</p>
                                <h3>3.- Zweck der Datenverarbeitung</h3>
                                <p>
                                    Der Zweck der Datenverarbeitung liegt in der Bereitstellung
                                    unseres Onlineangebotes und Nutzerfreundlichkeit
                                </p>
                                <p>&nbsp;</p>
                                <h3>4.- Empfänger der Daten</h3>
                                <p>
                                    Eingesetzte Dienste und Diensteanbieter und damit Empfänger der
                                    Daten sind:
                                </p>
                                <ul>
                                    <li>
                                        OpenStreetMap: Auf unserer Seite nutzen wir den
                                        Straßenkartendienst „OpenStreetMap“, der auf Grundlage der Open
                                        Data Commons Open Database Lizenz (ODbL) durch die OpenStreetMap
                                        Foundation (OSMF) angeboten werden. Die Daten der Nutzer werden
                                        durch OpenStreetMap nur zu Zwecken der Darstellung der
                                        Kartenfunktionen und zur Zwischenspeicherung der gewählten
                                        Einstellungen verwendet. Zu diesen Daten gehören insbesondere
                                        IP-Adressen und Standortdaten der Nutzer, die jedoch nicht ohne
                                        deren Einwilligung (im Regelfall im Rahmen der Einstellungen
                                        ihrer Mobilgeräte vollzogen) verarbeitet werden. Dienstanbieter:
                                        OpenStreetMap Foundation (OSMF); Website:
                                        https://www.openstreetmap.de; Datenschutzerklärung:
                                        https://wiki.openstreetmap.org/wiki/Privacy_Policy.
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <ul>
                                    <li>
                                        Google Maps: Wir binden die den Dienst “Google Maps” des
                                        Anbieters Google ein. Zu den verarbeiteten Daten gehören
                                        insbesondere IP-Adressen und Standortdaten der Nutzer, die
                                        jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der
                                        Einstellungen ihrer Endgeräte vollzogen), verarbeitet werden;
                                        Dienstanbieter: Google Ireland Limited, Gordon House, Barrow
                                        Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600
                                        Amphitheatre Parkway, Mountain View, CA 94043, USA; Website:
                                        https://cloud.google.com/maps-platform; Datenschutzerklärung:
                                        https://policies.google.com/privacy; Widerspruchsmöglichkeit
                                        (Opt-Out): Opt-Out-Plugin:
                                        https://tools.google.com/dlpage/gaoptout?hl=de, Einstellungen
                                        für die Darstellung von Werbeeinblendungen:
                                        https://adssettings.google.com/authenticated.
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <ul>
                                    <li>
                                        Dailymotion: Videoinhalte; Diensteanbieter: Dailymotion SA, 140
                                        Boulevard Malesherbes – 75017 Paris; Website:
                                        https://www.dailymotion.com/de; Datenschutzerklärung:
                                        https://www.dailymotion.com/legal/privacy?localization=de
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <ul>
                                    <li>
                                        YouTube-Videos: Videoinhalte; Dienstanbieter: Google Ireland
                                        Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                                        Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway,
                                        Mountain View, CA 94043, USA; Website: https://www.youtube.com;
                                        Datenschutzerklärung: https://policies.google.com/privacy;
                                        Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin:
                                        https://tools.google.com/dlpage/gaoptout?hl=de, Einstellungen
                                        für die Darstellung von Werbeeinblendungen:
                                        https://adssettings.google.com/authenticated.
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <ul>
                                    <li>
                                        Vimeo: Videoinhalte; Dienstanbieter: Vimeo Inc., Attention:
                                        Legal Department, 555 West 18th Street New York, New York 10011,
                                        USA; Website: https://vimeo.com; Datenschutzerklärung:
                                        https://vimeo.com/privacy; Widerspruchsmöglichkeit (Opt-Out):
                                        Wir weisen darauf hin, dass Vimeo Google Analytics einsetzen
                                        kann und verweisen hierzu auf die Datenschutzerklärung
                                        (https://policies.google.com/privacy) sowie die
                                        Opt-Out-Möglichkeiten für Google-Analytics
                                        (https://tools.google.com/dlpage/gaoptout?hl=de) oder die
                                        Einstellungen von Google für die Datennutzung zu
                                        Marketingzwecken (https://adssettings.google.com/).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
