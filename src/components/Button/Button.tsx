interface IButton {
  isRoundedFull?: false;
  text: string;
}

const Button = ({ text }: IButton) => {
  return (
    <button
      className={`bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
