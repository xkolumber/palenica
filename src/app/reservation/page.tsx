import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import Referencies from "@/components/Referencies";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <div className="cerveny_container">
          <div className="addition__add">
            <Navbar />
          </div>
          <div className="cesta">
            <Link href={`/`}>Domov</Link>
            <p className="cesta_sipka">&gt;</p>
            <p className="p">Cenník</p>
          </div>
        </div>

        <section className="sekcia">
          <div className="flexible_width">
            <div className="container_sekcia">
              <div className="container_formular_left">
                <div className="flex flex-row justify-between">
                  <img src="/hviezdy_lava.svg" alt="hviezdy_lava" />
                  <img src="/hviezdy_prava.svg" alt="hviezdy_prava" />
                </div>
                <div className="space_between">
                  <div className="container_formular_spolu">
                    <h2>Začnite Vašu cestu s nami.</h2>
                    <p className="pc">
                      Dohodnime si termín pálenia, prineste kvas, o zbytok sa
                      postaráme my.
                    </p>
                    <p className="mobile">
                      Dohodnime si termín pálenia (formulár nižšie), prineste
                      kvas, o zbytok sa postaráme my.
                    </p>
                  </div>
                  <div className="spolu">
                    <Referencies />
                  </div>
                </div>
              </div>

              <div className="container_formular_right">
                <h2>Objednávkový formulár</h2>
                <div className="label_input">
                  <label>Vaše meno a priezvisko</label>
                  <input
                    type="text"
                    name="meno_priezvisko"
                    id="meno_priezvisko"
                  />
                </div>
                <div className="formular_dvojica">
                  <div className="label_input">
                    <label>Váš telefónny kontakt</label>
                    <input type="text" name="telefon" id="telefon" />
                  </div>
                  <div className="label_input">
                    <label>Váš email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                </div>
                <div className="formular_dvojica">
                  <div className="label_input">
                    <label>Druh kvasu</label>
                    <select id="druh_kvasu">
                      <option value="#">Kvas...</option>
                      <option value="jablko">jablko</option>
                      <option value="slivka">slivka</option>
                      <option value="marhula">marhuľa</option>
                      <option value="hruska">hruška</option>
                      <option value="ceresna">čerešňa</option>
                      <option value="baza">baza</option>
                      <option value="jahoda">jahoda</option>
                      <option value="malina">malina</option>
                      <option value="cucoriedka">čučoriedka</option>
                      <option value="ribezla">ríbezľa</option>
                      <option value="hrozno">hrozno</option>
                      <option value="sipka">šípka</option>
                      <option value="trnka">trnka</option>
                      <option value="vinovica">vínovica</option>
                      <option value="broskyna">broskyňa</option>
                      <option value="visna">višňa</option>
                    </select>
                  </div>
                  <div className="label_input">
                    <label>Koniec kvasenia</label>
                    <input
                      type="date"
                      name="koniec_kvasenia"
                      id="koniec_kvasenia"
                    />
                  </div>
                </div>

                <div className="label_input2">
                  <label>Dodatočná poznámka</label>
                  <textarea
                    id="predstava"
                    name="predstava"
                    // rows="6"
                    // cols="50"
                  ></textarea>
                </div>
                <p>
                  * Po odoslaní formulára sa s Vami spojí prevádzkovateľ
                  pálenice, ktorý Vám navrhne najbližší vhodný termín pálenia.
                </p>

                <div className="checkbox_text">
                  <input type="checkbox" id="scales" name="scales" />
                  <label>
                    Súhlasím so spracovaním osobných údajov,
                    <a href="ochrana_udajov.html"> viac informácii tu.</a>
                  </label>
                </div>

                <a className="btn btn--secondary" id="odoslat">
                  <img src="/spinner.gif" id="spinner" alt="spinner" />
                  <h4>ODOSLAŤ</h4>
                </a>
                <div id="error-message"></div>
              </div>
            </div>
          </div>
        </section>
        <AlmostEnd />
      </div>
    </>
  );
};

export default page;
