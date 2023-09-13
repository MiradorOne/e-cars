import React from "react";

interface FormInputProps {
  placeholder: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
  label: string;
  isPassword?: boolean;
  contentAfterLabel?: React.ReactNode;
  type: "text" | "password" | "email" | "checkbox";
}

const FormInput = ({
  placeholder,
  onInput,
  label,
  contentAfterLabel,
  type,
}: FormInputProps) => {
  return (
    <>
      <label className="mb-2 mt-6 block flex justify-between" htmlFor={label}>
        <p>{label}</p>
        {contentAfterLabel}
      </label>
      <input
        className=" w-full rounded-lg border border-gray-400 px-3 py-4	"
        type={type}
        placeholder={placeholder}
        onInput={onInput}
        name={label}
      />
    </>
  );
};

export default FormInput;
