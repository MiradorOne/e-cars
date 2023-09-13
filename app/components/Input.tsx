import React from "react";

interface FormInputProps {
  placeholder?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  name?: string;
  className?: string;
  isPassword?: boolean;
  contentAfterLabel?: React.ReactNode;
  type: string;
  isError?: boolean;
  label?: string;
  required?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  defaultValue?: string;
  textError?: string;
  errorMessage?: string;
  wrapperStyles?: string;
}

const Input = ({
  placeholder,
  onChange,
  name,
  type,
  ref,
  defaultValue,
  isError,
  required,
  className,
  label,
  errorMessage,
  contentAfterLabel,
  wrapperStyles,
}: FormInputProps) => {
  return (
    <>
      <div className={`w-full ${wrapperStyles}`}>
        {label ? (
          <label htmlFor={label}>
            <p>{label}</p>
            {contentAfterLabel}
          </label>
        ) : null}
        <input
          ref={ref}
          minLength={5}
          className={
            !isError ? className : `${className} + border-2 border-red-500`
          }
          required={required}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          defaultValue={defaultValue}
        />
      </div>
      {isError ? (
        <span className={isError ? "block text-red-500" : "hidden"}>
          {errorMessage}
        </span>
      ) : null}
    </>
  );
};

export default Input;
