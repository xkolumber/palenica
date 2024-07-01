"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ContactForm = () => {
  const schema = yup.object({
    meno_priezvisko: yup
      .string()
      .required("Meno a priezvisko je povinné")
      .min(3, "Minimálne 3 znaky")
      .max(45, "Maximálne 45 znakov"),
    telefon: yup
      .string()
      .required("Telefónne číslo je povinné")
      .min(3, "Minimálne 3 znaky")
      .max(45, "Maximálne 45 znakov"),
    email: yup
      .string()
      .email("Email je v nesprávnom tvare")
      .required("Email je povinný"),

    druh_kvasu: yup.string().notRequired(),
    koniec_kvasenia: yup.string().notRequired(),
    message: yup.string().notRequired(),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  type FormData = yup.InferType<typeof schema>;
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    if (isChecked) {
      try {
        const response = await fetch("/api/send-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            meno_priezvisko: data.meno_priezvisko,
            telefon: data.telefon,
            email: data.email,
            druh_kvasu: data.druh_kvasu,
            koniec_kvasenia: data.koniec_kvasenia,
            message: data.message,
          }),
        });
        if (response.ok) {
          reset();
          navigate.push(`/thanks`);
          console.log("Email sent successfully!");
          setIsLoading(false);
        } else {
          console.error("Failed to send email");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Objednávkový formulár</h2>
      <div className="label_input">
        <label>Vaše meno a priezvisko</label>
        <input
          type="text"
          id="meno_priezvisko"
          {...register("meno_priezvisko")}
          required
        />
        {errors.meno_priezvisko && (
          <p className="text-red-600">{errors.meno_priezvisko.message}</p>
        )}
      </div>
      <div className="formular_dvojica">
        <div className="label_input">
          <label>Váš telefónny kontakt</label>
          <input type="text" id="telefon" {...register("telefon")} required />
          {errors.telefon && (
            <p className="text-red-600">{errors.telefon.message}</p>
          )}
        </div>
        <div className="label_input">
          <label>Váš email</label>
          <input type="text" id="email" {...register("email")} required />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="formular_dvojica">
        <div className="label_input">
          <label>Druh kvasu</label>
          <select id="druh_kvasu" {...register("druh_kvasu")}>
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
            id="koniec_kvasenia"
            {...register("koniec_kvasenia")}
            required
          />
        </div>
      </div>

      <div className="label_input2">
        <label>Dodatočná poznámka</label>
        <textarea
          id="predstava"
          {...register("message")}
          // rows="6"
          // cols="50"
        ></textarea>
      </div>
      <p>
        * Po odoslaní formulára sa s Vami spojí prevádzkovateľ pálenice, ktorý
        Vám navrhne najbližší vhodný termín pálenia.
      </p>

      <div className="checkbox_text">
        <input type="checkbox" id="checkbox" onChange={handleChange} required />
        <label>
          <span className="ml-2">Súhlasím so spracovaním osobných údajov</span>,{" "}
          <Link href={"/data_protection"}>viac informácii tu.</Link>
        </label>
      </div>

      <button
        className="btn btn--secondary w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <ClipLoader size={20} color={"#32a8a0"} loading={isLoading} />
        ) : (
          "Odoslať"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
