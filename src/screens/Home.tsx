import CarouselCustom from "../components/Carousel/CarouselCustom";
import Section from "../components/Section/Section";
import Banner from "../components/Banner/Banner";
import CategoryProduct from "../components/CategoryProduct/CategoryProduct";
const Home = () => {
  return (
    <div>
      <Section widthFull={true}>
        <Banner />
      </Section>
      <Section>
        <CategoryProduct />
      </Section>
    </div>
  );
};

export default Home;
