interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  children?: React.ReactElement;
}

const Button = ({ children, onClick, text, className }: IButtonProps) => {
  return (
    <button onClick={onClick} className={`font-bold py-2 px-4  ${className}`}>
      {children ? children : text}
    </button>
  );
};

export default Button;
