import { useState } from "react";
import CheckBox, { ValueChecked } from "./CheckBox";

export type OptionType = {
  id: string;
  value: string;
};

export default function ListBox<T extends OptionType>({
  items,
  onChange,
}: {
  items: T[];
  onChange: (value: ValueChecked) => void;
}) {
  const [show, setShowTeleport] = useState(false);

  const handleChangeChecked = (value: ValueChecked) => {
    onChange(value);
  };

  return (
    <div className="max-w-60 *:p-2">
      <div
        className="border h-10 cursor-pointer z-1 transition-all"
        onClick={() => setShowTeleport(!show)}
      >
        <p className="z-0 flex ">Please choose your choice</p>
      </div>
      {show && (
        <div className="border-2">
          {items.length > 0 &&
            items.map((s) => {
              return (
                <CheckBox
                  id={s.id}
                  key={s.id}
                  onChangeChecked={(value) => handleChangeChecked(value)}
                  value={s.value}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
