"use client";
import { useState } from "react";
import ListBox, { OptionType } from "@/app/components/ListBox";

export default function Page() {
  const data: OptionType[] = [
    {
      id: 1,
      value: "Mot",
    },
    {
      id: 2,
      value: "Hai",
    },
  ];

  const [selected, setSelected] = useState<string>("");

  return (
    <div className="mt-20 ml-20 ">
      <p>{selected}</p>
      <ListBox
        items={data}
        onClick={(value: string) => {
          setSelected(value);
        }}
      />
    </div>
  );
}
