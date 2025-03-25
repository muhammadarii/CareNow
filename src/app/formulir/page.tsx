"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52q",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52a",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52v",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52u",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52m",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default function FormulirPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
