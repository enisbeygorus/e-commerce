import Section from "../components/Section/Section";
import Banner from "../components/Banner/Banner";
// import CategoryProduct from "../components/CategoryProduct/CategoryProduct";

import CarouselHome from "../components/Carousel/CarouselHome/CarouselHome";
import Categories from "../components/Categories/Categories";
const Home = () => {
  return (
    <div>
      <Section className="mb-20" widthFull={true}>
        <Banner />
      </Section>
      <Section className="mb-20" maxWidth="max-w-[1250px]">
        <Categories />
      </Section>
      <Section className="mb-20" maxWidth="max-w-[1250px]">
        <CarouselHome />
      </Section>
    </div>
  );
};

export default Home;
