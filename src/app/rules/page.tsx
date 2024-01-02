import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

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
          <p>Prevádzkový poriadok</p>
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <p>
            <h3>PREVÁDZKOVÝ PORIADOK</h3>
            <br />
            V pálenici možno vyrábať destilát len z dopestovaného ovocia v
            miernom podnebnom pásme, z jeho kvasov, z plodov viniča hroznorodého
            v čerstvom stave alebo v skvasenom stave vrátane ovocných vín a
            hroznových vín, ktoré neobsahujú cudzie cukornaté alebo iné prímesi
            (ďalej len “kvas”).
            <br />
            Výrobné obdobie na prevádzkovanie liehovaru je od 1. júla do 30.
            júna nasledujúceho rok
            <br />
            <br />
            Začiatok prevádzkovania liehovaru v každom výrobnom období určuje
            prevádzkovateľ.
            <br />
            <br />
            Pracovník liehovaru môže prijať kvas na spracovanie len na základe
            písomnej žiadosti pestovateľa na výrobu ovocného destilátu.
            <br />
            V žiadosti pestovateľ uvedie :<br /> a/ meno a priezvisko, dátum
            narodenia, adresu trvalého bydliska <br />
            b/ druh a množstvo odovzdaného kvasu <br />
            c/ dátum podania žiadosti
            <br />
            <br />
            Pracovník liehovaru má v právomoci neprijať kvas v plechových, alebo
            poškodených nádobách a v iných obaloch, ktoré chuťou alebo vôňou
            vykazujú znaky cudzích prímesí, ktoré by mohli ovplyvniť kvalitu
            ovocného destilátu pestovateľa, prípadne i kvalitu ovocného
            destilátu nasledujúceho pestovateľa (znehodnotiť technologické
            zariadenie pálenice). A taktiež je pracovník pálenice oprávnený
            neprijať kvas, ktorý je zamrznutý. Podobne pracovník liehovaru
            postupuje i pri zistení cudzích predmetov (kamene, tehla, kov a iné)
            v kvase, ktoré môžu poškodiť technologické zariadenie.
            <br />
            <br />
            Pestovateľ je povinný priviezť na pálenie také množstvo kvasu, na
            akom bol vopred dohodnutý s prevádzkovateľom pálenice pri
            objednávaní termínu pálenia. Ak privezie menej kvasu (menej ako 100
            l), prevádzkovateľ je oprávnený neprijať kvas na pálenie. Ak bude
            kvasu viac, prevádzkovateľ je povinný spracovať iba vopred dohodnuté
            množstvo kvasu, pretože by došlo k časovému predĺženiu pálenia, a
            tým k posunu pálenia ďalšieho pestovateľa. Ak sa nedohodnú na inom
            termíne spracovania zvyšného kvasu, kvas nebude spracovaný a
            pestovateľ si ho vezme domov. Pokiaľ tak neučiní, prevádzkovateľ
            pálenice je oprávnený po odchode pestovateľa z pálenice zlikvidovať
            ho vypustením do výpalkovej jamy. <br />
            <br />
            Pestovateľ je povinný dostaviť sa na pálenie v dohodnutom termíne
            tak, aby v stanovený čas bol jeho kvas pripravený na pálenie. Ak
            pestovateľ nedodrží stanovený čas, pracovník liehovaru je oprávnený
            neprijať kvas k páleniu, pretože by tým došlo k časovému posunu pri
            nasledujúcich pestovateľoch.
            <br />
            Pestovateľ 3 – 4 dni pred stanoveným termínom pálenia telefonicky
            alebo osobne potvrdí platnosť termínu. <br />
            <br />
            Počas výrobného procesu je zakázané zdržiavať sa v priestoroch
            liehovaru nepovolaným osobám. Taktiež je zakázané vodiť do liehovaru
            deti mladšie ako 15 rokov z dôvodu ublíženia na zdraví, prípadne
            poškodenia zariadenia.
            <br />
            Celý prevádzkový poriadok k nahliadnutiu je k dispozícii v
            priestoroch našej pálenice. Obsluha je povinná poriadok poskytnúť k
            nahliadnutiu.
            <br />
            <br />
            Porušovanie tohto prevádzkovaného poriadku pestovateľmi a inými
            osobami, ktorí s zdržujú v pálenici, má za následok ich vykázanie z
            priestorov pálenice a jej okolia.
            <br />
            <br />
            Liehovar nezodpovedá za prípadné škody a úrazy v prípade nedodržania
            uvedeného prevádzkového poriadku zo strany pestovateľa.
            <br />
            <br />
            V Spišskej Belej 1.2.2018
            <br />
            Ing. Marek Olekšák
            <br />
            Prevádzkovateľ
            <br />
          </p>
        </div>
      </section>
      <AlmostEnd />
    </>
  );
};

export default page;
