import Section from "../components/Section/Section";
import Banner from "../components/Banner/Banner";
import CategoryProduct from "../components/CategoryProduct/CategoryProduct";
import CarouselMulti from "../components/Carousel/CarouselMulti/CarouselMulti";
const Home = () => {
  return (
    <div>
      <Section widthFull={true}>
        <Banner />
      </Section>
      <Section maxWidth="max-w-[1250px]">
        <CategoryProduct />
      </Section>
      <Section maxWidth="max-w-[1250px]">
        <CarouselMulti>
          <div
            style={{ backgroundColor: "blue" }}
            className="w-full h-72"
          ></div>
          <div style={{ backgroundColor: "red" }} className="w-full h-72"></div>
          <div
            style={{ backgroundColor: "green" }}
            className="w-full h-72"
          ></div>
          <div
            style={{ backgroundColor: "orange" }}
            className="w-full h-72"
          ></div>
          <div
            style={{ backgroundColor: "black" }}
            className="w-full h-72"
          ></div>
        </CarouselMulti>
      </Section>
    </div>
  );
};

export default Home;
