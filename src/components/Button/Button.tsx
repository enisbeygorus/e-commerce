interface IButton {
  text?: string;
  className?: string;
  children?: React.ReactElement;
  onClick?: <Type>(arg: Type) => void;
}

const Button = ({ children, onClick, text, className }: IButton) => {
  return (
    <button onClick={onClick} className={`font-bold py-2 px-4  ${className}`}>
      {children ? children : text}
    </button>
  );
};

export default Button;
