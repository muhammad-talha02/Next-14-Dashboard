interface selectProps {
  options: {
    label: string;
    value: string;
    selected?:boolean
  }[];
  placeholder?: string;
  label?: string;
  id?: string;
  name?: string;
}
const Select = ({ options, placeholder, label, id, name }: selectProps) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="block mb-2">
          {label}
        </label>
      )}

      <select
        name={name}
        id={id}
        className="w-full bg-[--bg] p-3 outline-none border border-white rounded-sm"
      >
        <option
          className="bg-[--bgSoft] rounded-0"
          // defaultValue="general"
          disabled
          selected
        >
          {placeholder || "Choose"}
        </option>
        {options?.map((option) => {
          return (
            <option className="bg-[--bg] rounded-0" value={option.value} selected={option.selected} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
