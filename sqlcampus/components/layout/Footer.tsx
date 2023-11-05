import React from 'react'
import { useTranslation } from 'next-i18next';

const Footer = (props: any) => {

    const {t} = useTranslation();

    props;
    return (
        <>
            <footer>
                <hr />
                <span>
                    <p>{t("legal")}</p>
                    <br></br>
                    <h1>Impressum nach §5 TMG</h1>
                    <h2>Diensteanbieter</h2>
                    <p>Mathis Neunzig</p>
                    <p>Europaplatz 17</p>
                    <p>69115 Heidelberg</p>
                    <p>Deutschland / Germany</p>
                    <p>info@sql-campus.de</p>

                    <h2>Haftungs- und Schutzrechtshinweise</h2>
                    <p>Links auf fremde Webseiten: Die Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen, liegen außerhalb unseres Verantwortungsbereiches und wir machen sie uns nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehmen wir keine Verantwortung.</p>
                    <p>Urheberrechte und Markenrechte: Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.</p>
                    <p>Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.</p>
                </span>
            </footer>
        </>
    )
};

export default Footer;
