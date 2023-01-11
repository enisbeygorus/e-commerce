interface IButton {
  text: string;
  className?: string;
}

const Button = ({ text, className }: IButton) => {
  return (
    <button className={`font-bold py-2 px-4  ${className}`}>{text}</button>
  );
};

export default Button;
