import Hero from "@/components/pages/Home/Hero";
import ProductSection from "@/components/pages/Home/ProductSection";
import { HOT_WEEK_DATA, SPOTLIGHT_DATA, UNMISSABLE_DATA } from "@/constants/data";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductSection items={SPOTLIGHT_DATA} title="Tonight's Spotlight" />
      <ProductSection items={HOT_WEEK_DATA} title="Hot This Week" className="lg:my-[106px] max-lg:my-20"  />
      <ProductSection items={UNMISSABLE_DATA} title="Unmissable" />
    </>
  );
};

export default HomePage;
