import { useState } from "react";

export type ValueChecked = {
  id: string;
  checked: boolean;
};

export type HandleChecked = {
  value?: string;
  id?: string;
  onChangeChecked: (checked: ValueChecked) => void;
};

export default function CheckBox<T extends HandleChecked>({
  value,
  id,
  onChangeChecked,
}: T) {
  const [checked, setChecked] = useState(false);

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChangeChecked({
      id: name,
      checked: checked,
    });
    setChecked(checked);
  };

  return (
    <div className="flex gap-4">
      <input
        name={id}
        type="checkbox"
        onChange={(e) => handleChangeChecked(e)}
        checked={checked}
        className="border border-black"
      />
      <label className="block">{value}</label>
    </div>
  );
}
