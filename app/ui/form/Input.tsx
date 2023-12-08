interface inputProps {
  type: string;
  placeholder: string;
  name?: string;
  id?: string;
  className?: string;
  label?: string;
}
const Input = ({
  type,
  name,
  id,
  placeholder,
  className,
  label,
}: inputProps) => {
  const inputStyle =
    "w-full bg-[--bg] outline-none border rounded-sm p-3 border-white";
  return (
    <>
      {label && <label htmlFor={id} className="block mb-2">{label}</label>}
      <input
        className={`${inputStyle} ${className}`}
        type={type}
        name={name || ""}
        id={id || ""}
        placeholder={placeholder || ""}
      />
    </>
  );
};

export default Input;
