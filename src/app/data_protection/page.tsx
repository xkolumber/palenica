import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "GDPR",
  description:
    "Skôr, ako poskytnete svoje osobné údaje, určite si podrobne prečítajte nižšie uvedené informácie.",
  keywords: ["pálenica Spisšká Belá", "gdpr", "ochrana osobných údajov"],
};

const page = () => {
  return (
    <>
      <div className="cerveny_container">
        <div className="addition__add">
          <Navbar />
        </div>

        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <p>Ochrana osobných údajov</p>
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <h3>GDPR</h3>
          <p>
            <br />
            DÔLEŽITÉ INFORMÁCIE V SÚVISLOSTI SO SPRACÚVANÍM OSOBNÝCH ÚDAJOV{" "}
            <br />
            Skôr, ako poskytnete svoje osobné údaje, určite si podrobne
            prečítajte nižšie uvedené informácie.
            <br />
            <br />
            PRÍPADY ZÍSKAVANIA OSOBNÝCH ÚDAJOV
            <br />
            <br />
            Naša spoločnosť získava Vaše osobné údaje
            <br />
            1. na základe vyplneného formuláru s cieľom objednať si termín
            pálenia kvasu.
            <br />
            2. pomocou súborov Cookies
            <br />
            <br />
            Pre potreby prispôsobenia obsahu nášej webovej stránky Vašim
            preferenciám používame súbory Cookies. Cookies sú malé dátové
            súbory, ktoré si ukladá náša webová stránka do Vášho webového
            prehliadača pri jeho návšteve. Pokiaľ nesúhlasíte s použitím súborov
            Cookies, nastavte si vlastné pravidlá pre použitie Cookies vo
            webovom prehliadači na Vašom zariadení. V prípade, že zakážete
            použitie súborov Cookies, môže byť funkčnosť webovej stránky
            obmedzená. Cookies je krátky textový súbor, ktorý do prehliadača
            odosiela navštívené webové stránky. Webovým stránkam umožňuje
            zapamätať si informácie o vašej návšteve, napríklad preferované
            zobrazovanie produktov, produktové filtre a ďalšie nastavenia pri
            nakupovaní. Ďalšia návšteva stránok tak môže prebehnúť ľahšie a môže
            byť produktívnejšia. Súbory cookies sú dôležité. Bez nich by bolo
            prehliadanie webu oveľa zložitejšie. Súbory cookies používame na
            množstvo cieľov. Používame ich napríklad na ukladanie Vašich
            predvolieb pri nakupovaní, zobrazenie histórie prehliadaných
            produktov, na sledovanie počtu návštevníkov na stránke, na
            automatické prihlásenie do vášho účtu pri ďalšej návšteve a na
            ochranu vašich údajov. <br />
            <br />
            3. pomocou webovej metrika a analytiky
            <br />
            Jedná sa o konverzné, alebo pixelové značky, prípadne malé grafické
            obrázky, ktoré môžu byť začlenené v kóde nášej webovej stránke a na
            základe ktorých je možná identifikácia používateľa pre účely
            zaznamenania jeho správania sa a merania návštevnosti. Využívame
            nasledujúce systémy: <br />
            <br />
            Google Analytics
            <br />
            Google tag manager
            <br />
            <br />
            <b>PRÁVNE ZÁKLADY SPRACÚVANIA OSOBNÝCH ÚDAJOV.</b>
            <br />
            <br />
            Naša spoločnosť je oprávnená spracúvať Vaše osobné údaje:
            <br />
            1. v prípade Vášho súhlasu, ktorý je dobrovoľný, ktorý nie ste
            povinný/á udeliť a jeho neudelenie nemá za dôsledok žiadne
            nepriaznivé právne následky; poskytnutie osobných údajov tu nie je
            zákonnou ani zmluvnou požiadavkou, ani požiadavkou, ktorá je
            potrebná na uzavretie zmluvy.
            <br />
            2. ak spracúvanie osobných údajov je nevyhnutné na plnenie zmluvy,
            ktorej ste zmluvnou stranou, alebo na vykonanie opatrenia pred
            uzatvorením zmluvy na základe Vašej žiadosti, poskytnutie osobných
            údajov tu nie je zákonnou požiadavkou, alebo <br />
            3. spracúvanie osobných údajov je nevyhnutné na účel oprávnených
            záujmov našej spoločnosti okrem prípadov, keď nad týmito záujmami
            prevažujú Vaše záujmy alebo práva vyžadujúce si ochranu osobných
            údajov; poskytnutie osobných údajov tu nie je zákonnou ani zmluvnou
            požiadavkou, ani požiadavkou, ktorá je potrebná na uzavretie zmluvy.
            <br />
            <br />
            <b>KOMU UDEĽUJETE SÚHLAS NA SPRACÚVANIE VAŠICH OSOBNÝCH ÚDAJOV?</b>
            <br />
            <br />
            Ak je spracúvanie osobných údajov založené na Vašom súhlase,
            udeľujete ho spoločnosti Dodoli, s. r. o. sídlom Slovenská Ves 301
            059 02 Slovenská Ves, IČO: 50685937, zapísana v obchodnom registri
            Okresného súdu Prešov, oddiel: Sro, vložka č. 33954/P (ďalej len
            „spoločnosť Dodoli“), e-mail: palenicaspisskabela@gmail.com (spolu s
            adresou sídla ďalej „Kontaktné údaje“). Ak spracúvanie osobných
            údajov nie je založené na Vašom súhlase, Vaše osobné údaje spracúva
            spoločnosť Dodoli, s. r. o.
            <br />
            <br />
            <b>AKÉ VAŠE OSOBNÉ ÚDAJE BUDÚ SPRACÚVANÉ?</b>
            <br />
            Meno, priezvisko, e-mailová adresa, telefónny kontakt.
            <br />
            <br />
            <b>AKÝ BUDE ÚČEL ALEBO ÚČELY SPRACÚVANIA VAŠICH OSOBNÝCH ÚDAJOV?</b>
            <br />
            Spracúvanie Vašich osobných údajov ich zhromažďovaním za účelom
            dohodnutia pálenia kvasu a ďalej na reklamné, propagačné a
            marketingové účely spoločnosti Dodoli vo forme priameho mailingu a
            iných prostriedkov priameho marketingu. <br />
            <br />
            <b>AKO DLHO BUDÚ VAŠE OSOBNÉ ÚDAJE SPRACÚVANÉ?</b>
            <br />
            Budeme spracúvať Vaše osobné údaje maximálne po dobu 10 rokov,
            najviac však po dobu trvania účelu spracúvania osobných údajov. Po
            naplnení účelu spracúvania alebo po uplynutí uvedenej doby Vaše
            osobné údaje zlikvidujeme.
            <br />
            <br />
            <b>
              ZAMÝŠĽAME PRENOS OSOBNÝCH ÚDAJOV DO TRETEJ KRAJINY ALEBO
              MEDZINÁRODNEJ ORGANIZÁCII?
            </b>
            <br />
            Nezamýšľame prenos Vašich osobných údajov do tretej krajiny ani
            medzinárodnej organizácii.
            <br />
            <br />
            <b>
              AKÉ MÁTE PRÁVA VO VZŤAHU K SPRACÚVANIU VAŠICH OSOBNÝCH ÚDAJOV?
            </b>
            <br />
            Keďže Vaše osobné údaje sú chránené, máte právo kontaktovaním
            spoločnosti Dodoli písomne alebo e-mailom prostredníctvom
            Kontaktných údajov alebo iným vhodným spôsobom: požadovať prístup k
            Vašim osobným údajom;
            <br />
            Máte právo získať od nás potvrdenie o tom, či spracúvame akékoľvek
            Vaše osobné údaje. Ak takéto osobné údaje spracúvame, máte právo
            získať prístup k týmto osobným údajom a informácie o<br />
            (a) účele spracúvania osobných údajov,
            <br />
            (b) kategórii spracúvaných osobných údajov,
            <br />
            (c) identifikácii príjemcu alebo o kategórii príjemcu, ktorému boli
            alebo majú byť osobné údaje poskytnuté, najmä o prípadnom príjemcovi
            v tretej krajine alebo o medzinárodnej organizácii, ak je to možné,
            <br />
            (d) dobe uchovávania osobných údajov; ak to nie je možné, informáciu
            o kritériách jej určenia,
            <br />
            (e) práve požadovať od nás opravu Vašich osobných údajov, ich
            vymazanie alebo obmedzenie ich spracúvania, alebo o práve namietať
            spracúvanie osobných údajov,
            <br />
            (f) práve podať návrh na začatie konania pred Úradom na ochranu
            osobných údajov Slovenskej republiky,
            <br />
            (g) zdroji osobných údajov, ak sme osobné údaje nezískali od Vás,
            <br />
            (h) existencii automatizovaného individuálneho rozhodovania vrátane
            profilovania; v týchto prípadoch sme Vám povinní poskytnúť
            informácie najmä o použitom postupe, ako aj o význame a
            predpokladaných dôsledkoch takého spracúvania osobných údajov pre
            Vás.
            <br />
            <br />
            Ak osobné údaje prenášame do tretej krajiny alebo medzinárodnej
            organizácii, máte právo byť informovaný o primeraných zárukách
            týkajúcich sa takéhoto prenosu osobných údajov.
            <br />
            Sme Vám povinní poskytnúť Vaše osobné údaje, ktoré spracúvame, a to
            spôsobom podľa Vašej požiadavky a bezodplatne. Za opakované
            poskytnutie osobných údajov, o ktoré ste požiadali, však už môžeme
            účtovať primeraný poplatok zodpovedajúci administratívnym nákladom.
            Dovoľujeme si upozorniť, že Vaše právo získať osobné údaje nesmie
            mať nepriaznivé dôsledky na práva iných fyzických osôb. na opravu
            nesprávnych alebo nepravdivých Vašich osobných údajov;
            <br />
            Máte právo na to, aby sme bez zbytočného odkladu opravili Vaše
            nesprávne osobné údaje, ako aj právo na doplnenie Vašich neúplných
            osobných údajov. na vymazanie Vašich osobných údajov;
            <br />
            <br />
            Máte právo na to, aby sme bez zbytočného odkladu vymazali Vaše
            osobné údaje. Sme povinní bez zbytočného odkladu vymazať Vaše osobné
            údaje, ak uplatníte právo na ich výmaz a (a) osobné údaje už nie sú
            potrebné na účel, na ktorý sa získali alebo inak spracúvali;
            <br />
            (b) odvoláte svoj súhlas na spracúvanie Vašich osobných údajov, na
            základe ktorého tieto osobné údaje spracúvame, a súčasne neexistuje
            iný právny základ pre ich spracúvanie;
            <br />
            (c) namietate spracúvanie Vašich osobných údajov (viď nižšie právo
            namietať v prípade právneho základu ako účelu našich oprávnených
            záujmov) a súčasne neprevažujú žiadne oprávnené dôvody na
            spracúvanie Vašich osobných údajov alebo namietate spracúvanie
            osobných údajov v prípade účelu priameho marketingu (viď nižšie
            právo namietať v prípade účelu vo forme priameho marketingu vrátane
            profilovania),
            <br />
            (d) osobné údaje sa spracúvajú nezákonne,
            <br />
            (e) je dôvodom pre výmaz splnenie povinnosti podľa zákona č. 18/2018
            Z.z. o ochrane osobných údajov a o zmene a doplnení niektorých
            zákonov, osobitného predpisu alebo medzinárodnej zmluvy, ktorou je
            Slovenská republika viazaná.
            <br />
            Ak sme prípadne zverejnili osobné údaje a sme povinní ich vymazať,
            sme zároveň povinní prijať primerané bezpečnostné opatrenia vrátane
            technických opatrení so zreteľom na dostupnú technológiu a náklady
            na ich vykonanie na účel informovania ostatných prevádzkovateľov,
            ktorí prípadne spracúvajú Vaše osobné údaje, o Vašej žiadosti, aby
            títo prevádzkovatelia vymazali odkazy na Vaše osobné údaje a ich
            kópie alebo odpisy.
            <br />
            Predchádzajúce dva odseky však neplatia, ak je spracúvanie Vašich
            osobných údajov potrebné
            <br />
            (a) na uplatnenie práva na slobodu prejavu alebo práva na
            informácie,
            <br />
            (b) na splnenie povinnosti podľa zákona č. 18/2018 Z.z. o ochrane
            osobných údajov a o zmene a doplnení niektorých zákonov, osobitného
            predpisu alebo medzinárodnej zmluvy, ktorou je Slovenská republika
            viazaná,
            <br />
            (c) z dôvodov verejného záujmu v oblasti verejného zdravia,
            <br />
            (d) na účel archivácie, na vedecký účel, na účel historického
            výskumu alebo na štatistický účel, ak je pravdepodobné, že Vaše
            právo požadovať výmaz Vašich osobných údajov znemožní alebo závažným
            spôsobom sťaží dosiahnutie cieľov takého spracúvania, alebo
            <br />
            (e) na uplatnenie právneho nároku.
            <br />
            na obmedzenie spracúvania Vašich osobných údajov;
            <br />
            <br />
            Máte právo na to, aby sme obmedzili spracúvanie Vašich osobných
            údajov, ak (a) namietate správnosť Vašich osobných údajov, a to
            počas obdobia nám umožňujúceho overiť správnosť Vašich osobných
            údajov,
            <br />
            (b) spracúvanie Vašich osobných údajov je nezákonné a namietate
            vymazanie osobných údajov a žiadate namiesto toho obmedzenie ich
            použitia,
            <br />
            (c) už nepotrebujeme Vaše osobné údaje na účel spracúvania osobných
            údajov, ale potrebujete ich Vy na uplatnenie právneho nároku, alebo
            <br />
            (d) namietate spracúvanie osobných údajov (viď nižšie právo namietať
            v prípade právneho základu účelu našich oprávnených záujmov), a to
            až do overenia, či oprávnené dôvody na našej strane prevádzkovateľa
            prevažujú nad Vašimi oprávnenými dôvodmi.
            <br />
            Ak obmedzíme spracúvanie Vašich osobných údajov, môžeme ich iba
            uchovávať. Inak ich môžeme spracúvať len s Vaším súhlasom alebo na
            účel uplatnenia právneho nároku, na ochranu osôb alebo z dôvodov
            verejného záujmu. Ak sme obmedzili spracúvanie Vašich osobných
            údajov, sme Vás povinní informovať pred tým, ako obmedzenie
            spracúvania Vašich osobných údajov zrušíme.
            <br />
            Opravu Vašich osobných údajov, ich vymazanie alebo obmedzenie ich
            spracúvania sme povinní oznámiť aj jednotlivým príjemcom osobných
            údajov okrem prípadu, ak sa to ukáže ako nemožné alebo si to
            vyžaduje neprimerané úsilie. Ak to budete požadovať, sme povinní Vás
            o týchto príjemcoch informovať.
            <br />
            namietať proti spracúvaniu Vašich osobných údajov.
            <br />
            Máte právo namietať spracúvanie Vašich osobných údajov z dôvodu
            týkajúceho sa Vašej konkrétnej situácie vykonávanému na právnom
            základe účelu našich oprávnených záujmov vrátane profilovania
            založeného na tomto účele. V takom prípade nesmieme ďalej spracúvať
            Vaše osobné údaje okrem prípadu, ak preukážeme nevyhnutné oprávnené
            záujmy na spracúvanie Vašich osobných údajov, ktoré prevažujú nad
            Vašimi právami alebo záujmami, alebo dôvody na uplatnenie právneho
            nároku.
            <br />
            Máte tiež právo namietať spracúvanie Vašich osobných údajov, na účel
            priameho marketingu vrátane profilovania v rozsahu, v akom súvisí s
            priamym marketingom. Ak využijete toto právo, nesmieme ďalej Vaše
            osobné údaje na účel priameho marketingu spracúvať.
            <br />
            Sme povinní Vás výslovne upozorniť (a aj Vás týmto spôsobom
            upozorňujeme) na obe práva namietať spracúvanie Vašich osobných
            údajov najneskôr pri prvej komunikácii s Vami, pričom informácia o
            tomto práve musí byť uvedená jasne a oddelene od akýchkoľvek iných
            informácií. Máte právo (a nie povinnosť) v súvislosti s používaním
            služieb informačnej spoločnosti (napr. v prípade e-mailovej
            komunikácie a komunikácie cez webovú stránku) Vaše právo namietať
            uplatňovať automatizovanými prostriedkami s použitím technických
            špecifikácií. na ochranu proti automatizovanému individuálnemu
            rozhodovania vrátane profilovania.
            <br />
            Máte právo na to, aby sa na Vás nevzťahovalo rozhodnutie, ktoré je
            založené výlučne na automatizovanom spracúvaní Vašich osobných
            údajov vrátane profilovania a ktoré má právne účinky, ktoré sa Vás
            týkajú alebo Vás obdobne významne ovplyvňujú. To však neplatí, ak je
            takéto rozhodnutie nevyhnutné na uzavretie zmluvy alebo plnenie
            zmluvy medzi Vami a nami alebo je založené na Vašom výslovnom
            súhlase; tu sa však rozhodnutia sa nesmú zakladať na osobitných
            kategóriách osobných údajov (tzv. citlivé osobné údaje) okrem
            prípadov, ak sa tieto osobitné kategórie osobných údajov spracúvajú
            na základe Vášho výslovného súhlasu a súčasne sú zavedené vhodné
            opatrenia na zaručenie Vašich práv a oprávnených záujmov. V takýchto
            prípadoch sme povinní vykonať vhodné opatrenia na ochranu Vašich
            práv a oprávnených záujmov, a teda máte najmä právo požadovať
            overenie rozhodnutia nie automatizovaným spôsobom z našej strany,
            právo vyjadriť svoje stanovisko a práva napadnúť takéto rozhodnutie.
            na prenosnosť Vašich osobných údajov.
            <br />
            Máte právo od nás získať Vaše osobné údaje, ktoré ste nám poskytli,
            v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte a
            máte právo preniesť tieto osobné údaje ďalšiemu prevádzkovateľovi,
            ak je to technicky možné a ak sa Vaše osobné údaje spracúvajú na
            právnom základe Vášho súhlasu alebo na právnom základe nevyhnutnosti
            na plnenie zmluvy, ktorej ste zmluvnou stranou, alebo na vykonanie
            opatrenia pred uzatvorením zmluvy, ktoré ste požadovali, a súčasne
            sa spracúvanie osobných údajov sa vykonáva automatizovanými
            prostriedkami. Uplatnením práva na prenosnosť Vašich osobných údajov
            nie je dotknuté Vaše právo požadovať výmaz Vašich osobných údajov
            (viď vyššie). Upozorňujeme Vás však, že uplatnenie práva na
            prenosnosť osobných údajov nesmie mať nepriaznivé dôsledky na práva
            iných osôb. podať sťažnosť alebo návrh na začatie konania ohľadom
            spracúvania osobných údajov na Úrad na ochranu osobných údajov SR
            (ďalej len „Úrad“), sídlom Hraničná 12, 820 07 Bratislava, e-mail:
            statny.dozor@pdp.gov.sk alebo ochrana@pdp.gov.sk, tel.: +421 2 3231
            3220, viď https://dataprotection.gov.sk/uoou/) ďalšie práva
            vyplývajúce z príslušných právnych predpisov (do dňa 24.05.2018
            (vrátane) v zmysle zákona č. 122/2013 Z.z. o ochrane osobných údajov
            v znení neskorších predpisov; odo dňa 25.05.2018 v zmysle Nariadenia
            Európskeho parlamentu a Rady (EÚ) č. 2016/679 z 27.4.2016, o ochrane
            fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe
            takýchto údajov, ktorým sa zrušuje smernica 95/46/ES (všeobecné
            nariadenie o ochrane údajov) a zákona č. 18/2018 Z.z. o ochrane
            osobných údajov a o zmene a doplnení niektorých zákonov dostupných
            napr. na https://dataprotection.gov.sk/uoou/; V prípade, že ste nám
            udelili súhlas na spracúvanie Vašich osobných údajov, máte právo ho
            kedykoľvek odvolať, a to napríklad prostredníctvom e-mailu alebo
            listu, ktorý nám môžete vyplnený kedykoľvek doručiť prostredníctvom
            Kontaktných údajov alebo aj iným vhodným spôsobom. Odvolanie súhlasu
            však nemá vplyv na zákonnosť spracúvania vychádzajúceho z Vášho
            súhlasu pred jeho odvolaním.
            <br />
            <br />
            <b>ČO V PRÍPADE PORUŠENIA OCHRANY OSOBNÝCH ÚDAJOV?</b>
            <br />
            Sme povinní oznámiť Úradu porušenie ochrany osobných údajov, ak je
            pravdepodobné, že porušenie ochrany osobných údajov povedie k riziku
            pre Vaše práva, a to v zásade do 72 hodín po tom, ako sme sa o ňom
            dozvedeli.
            <br />
            Ak porušenie ochrany osobných údajov môže viesť k vysokému riziku
            pre Vaše práva, sme povinní bez zbytočného odkladu Vám oznámiť
            takéto porušenie ochrany osobných údajov. To neplatí, ak
            <br />
            1. sme prijali primerané technické a organizačné ochranné opatrenia
            a uplatnili ich na osobné údaje, ktorých sa porušenie ochrany
            osobných údajov týka, a to najmä šifrovanie alebo iné opatrenia, na
            základe ktorých sú osobné údaje nečitateľné pre osoby, ktoré nie sú
            oprávnené mať k nim prístup,
            <br />
            2. sme prijali následné opatrenia na zabezpečenie vysokého rizika
            porušenia Vašich práv;
            <br />
            3. by to vyžadovalo neprimerané úsilie; v takom prípade sme povinní
            informovať verejnosť alebo prijať iné opatrenie na zabezpečenie
            toho, že budete informovaný rovnako efektívnym spôsobom.
            <br />
            <br />
            <b>
              MÁME PRÁVO ŽIADAŤ OD VÁS POPLATKY V SÚVISLOSTI S VÝKONOM VAŠICH
              PRÁV? MÁME PRÁVO ODMIETNUŤ ZAOBERAŤ SA S VAŠOU ŽIADOSŤOU?
            </b>
            <br />
            Informácie v súvislosti so získavaním Vašich osobných údajov a
            oznámenia a opatrenia prijaté pri výkone Vašich práv Vám poskytujeme
            bezodplatne. Ak je však Vaša žiadosť zjavne neopodstatnená alebo
            neprimeraná najmä pre jej opakujúcu sa povahu, máme právo požadovať
            primeraný poplatok alebo odmietnuť konať na základe Vašej žiadosti.
            <br />
            <br />
            <b>
              AKO MÔŽETE S NAMI VO VECIACH OCHRANY VAŠICH OSOBNÝCH ÚDAJOV
              KOMUNIKOVAŤ?
            </b>
            <br />
            Vaše žiadosti týkajúce sa ochrany osobných údajov nám môžete
            adresovať písomne alebo e-mailom prostredníctvom Kontaktných údajov
            alebo aj iným vhodným spôsobom. V otázkach ochrany osobných údajov
            neváhajte kontaktovať e-mailom na palenicaspisskabela@gmail.com.
          </p>
        </div>
      </section>
      <AlmostEnd />
    </>
  );
};

export default page;
