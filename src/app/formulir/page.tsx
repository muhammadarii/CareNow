"use client";

import { useEffect, useState } from "react";
import { Formulir, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Formulir[]> {
  // Fetch data from your API here.
  return [
    {
      id: "MD111",
      name: "Muhammad Ari",
      treatmentDate: "2021-10-10",
      treatmentDescription: "Flu",
      medicine: "Paracetamol",
      healthCosts: "Rp 50.000",
    },
    {
      id: "MD112",
      name: "Siti Aisyah",
      treatmentDate: "2021-11-12",
      treatmentDescription: "Covid-19",
      medicine: "Dexamethasone",
      healthCosts: "Rp 100.000",
    },
    {
      id: "MD113",
      name: "Budi Santoso",
      treatmentDate: "2021-09-15",
      treatmentDescription: "Headache",
      medicine: "Paracetamol",
      healthCosts: "Rp 60.000",
    },
    {
      id: "MD114",
      name: "Rina Kartika",
      treatmentDate: "2021-08-20",
      treatmentDescription: "Stomachache",
      medicine: "Amoxilin",
      healthCosts: "Rp 75.000",
    },
    {
      id: "MD115",
      name: "Agus Pratama",
      treatmentDate: "2021-12-05",
      treatmentDescription: "Flu",
      medicine: "Cetirizine",
      healthCosts: "Rp 55.000",
    },
    {
      id: "MD116",
      name: "Dewi Lestari",
      treatmentDate: "2022-01-10",
      treatmentDescription: "Covid-19",
      medicine: "Dexamethasone",
      healthCosts: "Rp 120.000",
    },
    {
      id: "MD117",
      name: "Rudi Hartono",
      treatmentDate: "2022-02-15",
      treatmentDescription: "Headache",
      medicine: "Paracetamol",
      healthCosts: "Rp 45.000",
    },
    {
      id: "MD118",
      name: "Tini Susanti",
      treatmentDate: "2022-03-22",
      treatmentDescription: "Stomachache",
      medicine: "Amoxilin",
      healthCosts: "Rp 70.000",
    },
    {
      id: "MD119",
      name: "Fauzan Ridho",
      treatmentDate: "2022-04-01",
      treatmentDescription: "Flu",
      medicine: "Cetirizine",
      healthCosts: "Rp 50.000",
    },
    {
      id: "MD120",
      name: "Sari Widya",
      treatmentDate: "2022-05-18",
      treatmentDescription: "Covid-19",
      medicine: "Dexamethasone",
      healthCosts: "Rp 110.000",
    },
  ];
}

export default function FormulirPage() {
  const [data, setData] = useState<Formulir[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Formulir</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
