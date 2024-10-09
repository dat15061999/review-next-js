"use client";
import { useState } from "react";
import ListBox, { OptionType } from "@/app/components/ListBox";
import { ValueChecked } from "@/app/components/CheckBox";

export default function Page() {
  const data: OptionType[] = [
    {
      id: "1",
      value: "Mot",
    },
    {
      id: "2",
      value: "Hai",
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const handleSelected = (value: ValueChecked) => {
    if (value.checked) {
      setSelected([...selected, value.id]);
      return;
    }

    setSelected([...selected.filter((s) => s !== value.id)]);
  };

  return (
    <div className="mt-20 ml-20 ">
      <p className="my-10">{selected.join(",")}</p>
      <div className="mt-10">
        <ListBox
          items={data}
          onChange={(value) => {
            handleSelected(value);
          }}
        />
      </div>
      <div className="mt-10"></div>
    </div>
  );
}
