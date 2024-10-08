export type OptionType = {
  id: number;
  value: string;
};

export default function ListBox<T extends OptionType>({
  items,
  onClick,
}: {
  items: T[];
  onClick: (value: string) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log(event);

    onClick(value);
  };

  return (
    <select name="" id="" className="outline" onChange={(e) => handleChange(e)}>
      <option value="">Please choose your choice</option>
      {items.length > 0 &&
        items.map((s) => {
          return (
            <option value={s.value} key={s.id}>
              {s.value}
            </option>
          );
        })}
    </select>
  );
}
