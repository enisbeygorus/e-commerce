interface ICarousalCart {
  children: React.ReactNode;
  isClone: boolean;
  itemId: number;
  style?: React.CSSProperties;
}

const CarouselCart = ({ isClone, children, itemId, style }: ICarousalCart) => {
  return (
    <div
      style={style}
      className={`${isClone ? `clone-${itemId}` : ""} flex justify-center`}
    >
      {children}
    </div>
  );
};

export default CarouselCart;
