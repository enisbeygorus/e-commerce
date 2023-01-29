import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const className = props.className;
  delete props.className;
  return (
    <input
      {...props}
      className={`bg-gray-50 border w-full rounded-lg border-gray-300 text-gray-900 sm:text-sm p-2.5 h-11 ${
        className ? className : ""
      }`}
    />
  );
};

export default Input;
