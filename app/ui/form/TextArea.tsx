interface textAreaProps {
  placeholder?: string;
  label?: string;
  id?: string;
  name?: string;
}
const TextArea = ({ placeholder, label, id, name }: textAreaProps) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="block mb-2">
          {label}
        </label>
      )}

      <textarea
        className="bg-[--bg] w-full utline-none border rounded-sm p-3 border-white"
        rows={8}
        placeholder={placeholder || "Enter Please..."}
        id={id}
        name={name}
      ></textarea>
    </>
  );
};

export default TextArea;
