import Section from "../components/Section/Section";
import Banner from "../components/Banner/Banner";
// import CategoryProduct from "../components/CategoryProduct/CategoryProduct";

import CarouselHome from "../components/Carousel/CarouselHome/CarouselHome";

const Home = () => {
  return (
    <div>
      <Section className="mb-8" widthFull={true}>
        <Banner />
      </Section>
      <Section maxWidth="max-w-[1250px]">
        <CarouselHome />
      </Section>
    </div>
  );
};

export default Home;
