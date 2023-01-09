interface ISection {
  children: React.ReactElement;
  widthFull?: boolean;
}

const Section = ({ children, widthFull = false }: ISection) => {
  return (
    <section
      className={`w-full  ${
        widthFull ? "w-full" : "flex justify-center sm:w-11/12  mx-auto"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
