import ExclusivesSection from "@/components/pages/Home/ExclusivesSection";
import Hero from "@/components/pages/Home/Hero";
import ProductSection from "@/components/pages/Home/ProductSection";
import { FOR_YOU_DATA, HOT_WEEK_DATA, SPOTLIGHT_DATA, UNMISSABLE_DATA } from "@/constants/data";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductSection items={SPOTLIGHT_DATA} title="Tonight's Spotlight" />
      <ProductSection items={HOT_WEEK_DATA} title="Hot This Week" className="lg:my-[106px] max-lg:my-14"  />
      <ProductSection items={UNMISSABLE_DATA} title="Unmissable" />
      <ExclusivesSection className={'lg:my-[106px] max-lg:my-14'}  />
      <ProductSection items={FOR_YOU_DATA} title="For you" />
    </>
  );
};

export default HomePage;
