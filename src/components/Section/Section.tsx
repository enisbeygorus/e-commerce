interface ISection {
  children: React.ReactElement;
  widthFull?: boolean;
  maxWidth?: string;
  className?: string;
}

const Section = ({
  children,
  widthFull = false,
  maxWidth = "max-w-none",
  className,
}: ISection) => {
  return (
    <section
      className={`w-full  ${
        widthFull ? "w-full" : "flex justify-center md:w-11/12  mx-auto"
      } ${maxWidth} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
