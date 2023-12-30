import Image from "next/image";
import { client } from "./lib/sanity";
import { Actuality } from "./lib/interface_actuality";

async function getData() {
  const query = `*[_type == "actuality"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = (await getData()) as Actuality[];
  if (!data) return null;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((actuality, index) => (
        <p key={index}>{actuality.title}</p>
      ))}
    </main>
  );
}
