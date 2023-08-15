import React, { useState } from 'react';
import '../styles/gdpr.css'; // Import the CSS file for styling
import Dropdown from '../Components/Dropdown.js';
import Navbar from '../Components/Navbarbackground';
import Contact from '../Components/Contact.js';
import styled from 'styled-components';
const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;
const Gdpr = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
<div>
    <Navbar toggle={toggle}/>  {/* NavbarEn */}
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Separator space={100} />
    <div className="gdpr-container">
      <h1 className="gdpr-title"><strong>GDPR</strong></h1>
      <div className="gdpr-text">
        <p>
          <h2><strong>INFORMARE GDPR</strong></h2>
        </p>
        <p>
          Prezenta Informare privind confidentialitatea datelor (Informarea) se aplica la Pensiunea CURTEA BRASOVEANA (denumite in continuare impreuna CURTEA BRASOVEANA, noi sau pe noi). La CURTEA BRASOVEANA, facem tot posibilul sa livram produse, servicii si experiente extraordinare. Ne bucuram ca sunteti oaspetele nostru si pretuim loialitatea dvs. Suntem constienti de faptul ca pentru fiecare oaspete confidentialitatea reprezinta o problema importanta. Am dezvoltat aceasta Informare pentru a explica practicile noastre cu privire la datele personale pe care le colectam de la dvs. sau despre dvs. pe acest site sau prin aplicatiile/formularele noastre, prin comunicari scrise sau orale cu noi, atunci cand vizitati una dintre proprietatile noastre sau din alte surse.
        </p>
        <p>
          Va rugam sa retineti faptul ca aceasta Informare nu este valabila pentru procesarea de catre noi a datelor personale in numele unor terte parti si conform instructiunilor acestora, cum ar fi companii aeriene, companii de inchiriere de masini sau alti furnizori de servicii, companii care organizeaza sau ofera pachete de concediu, parteneri de marketing sau clienti corporativi.
        </p>
        <p>
          <strong>Datele personale pe care le colectam</strong>
        </p>
        <p>
          Exista posibilitatea sa colectam date cu caracter personal la fiecare intalnire sau interactiune cu oaspetii, precum si in cadrul celorlalte aspecte ale activitatii noastre. Aceste informatii personale pot include: datele dumneavoastra de identificare; datele dumneavoastra de contact; informatii referitoare la rezervarea, sejurul sau vizita dumneavoastra la o anumita proprietate; participarea la un program in calitate de membru sau la un program de fidelitate; participarea la concursuri, tombole sau programe de marketing (chiar daca nu sunteti cazat la unul din hotelurile noastre); informatii legate de achizitionarea si primirea de produse sau servicii; caracteristici personale, nationalitate, numarul pasaportului si data si locul emiterii acestuia; istoricul de calatorie; informatii privind plata, cum ar fi numarul cardului dumneavoastra de credit si alte informatii cu privire la card, precum si informatii de autentificare si alte detalii legate de facturare si conturi asociate cu sistemul mobil de facturare; preferintele oaspetilor; preferinte privind publicitatea si comunicarile; informatii despre autovehiculele pe care este posibil sa le aduceti pe proprietatile noastre; recenzii si opinii referitoare la facilitatile noastre de cazare (daca sunt identificate sau asociate cu dumneavoastra); si alte tipuri de informatii pe care alegeti sa ni le furnizati sau pe care le putem obtine despre dumneavoastra.
        </p>
        <p>
          Este posibil sa solicitam detalii despre calatori, inclusiv numele lor. Este, de asemenea, posibil sa colectam informatii privind conversatiile, inclusiv inregistrarea sau monitorizarea apelurilor catre serviciul de clienti in scopul asigurarii calitatii si in scopul instruirii, precum si alte comunicari cum ar fi mesaje in cadrul aplicatiilor si SMS-uri.
        </p>
        <p>
  Este posibil sa solicitam detalii despre calatori, inclusiv numele lor. Este, de asemenea, posibil sa colectam informatii privind conversatiile, inclusiv inregistrarea sau monitorizarea apelurilor catre serviciul de clienti in scopul asigurarii calitatii si in scopul instruirii, precum si alte comunicari cum ar fi mesaje in cadrul aplicatiilor si SMS-uri.
</p>
<p>
  <strong>Cum utilizăm datele personale</strong>
</p>
<p>
  Datele personale colectate sunt folosite pentru a ne permite să vă oferim serviciile și produsele noastre, pentru a vă gestiona rezervările, pentru a vă oferi informații relevante privind șederea dumneavoastră și pentru a vă asigura o experiență cât mai plăcută la Pensiunea CURTEA BRASOVEANA. De asemenea, putem utiliza aceste date în scopuri de analiză internă, pentru a îmbunătăți calitatea serviciilor noastre și pentru a personaliza comunicările și ofertele pe care le primiți de la noi.
</p>
<p>
  <strong>Securitatea datelor</strong>
</p>
<p>
  Ne angajăm să protejăm datele personale pe care le colectăm. Folosim măsuri de securitate tehnice și organizatorice adecvate pentru a proteja aceste date împotriva accesului neautorizat, utilizării incorecte sau divulgării.
</p>
<p>
  <strong>Drepturile dumneavoastră privind datele personale</strong>
</p>
<p>
  Conform reglementărilor GDPR, aveți dreptul să accesați, să corectați sau să ștergeți datele personale pe care le deținem despre dumneavoastră. De asemenea, aveți dreptul să vă retrageți consimțământul pentru prelucrarea datelor sau să vă opuneți prelucrării în anumite condiții. Pentru a exercita aceste drepturi sau pentru orice întrebări legate de prelucrarea datelor personale, vă rugăm să ne contactați prin intermediul detaliilor de contact furnizate pe site sau la <a href='office@curteabrasoveana.ro'>office@curteabrasoveana.ro</a>.
</p>
<p>
  <strong>Modificări ale Politicii de Confidențialitate</strong>
</p>
<p>
  Ne rezervăm dreptul de a modifica această Politică de Confidențialitate în orice moment. Orice modificări vor fi publicate pe acest site, astfel încât să fiți la curent cu informațiile pe care le colectăm, modul în care le folosim și în ce circumstanțe le dezvăluim.
</p>
      </div>
    </div>
    <Contact/>
 </div>
  );
};

export default Gdpr;
