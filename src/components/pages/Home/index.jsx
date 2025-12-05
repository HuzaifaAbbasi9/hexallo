import DealsSection from "@/components/pages/Home/DealsSection";
import DiscoverHiddenGems from "@/components/pages/Home/DiscoverHiddenGems";
import ExclusivesSection from "@/components/pages/Home/ExclusivesSection";
import ExploreGhana from "@/components/pages/Home/ExploreGhana";
import Hero from "@/components/pages/Home/Hero";
import ProductSection from "@/components/pages/Home/ProductSection";
import { BUZZING_DESTINATIONS_DATA, FOR_YOU_DATA, GHANA_TOP_TEN_DATA, HOT_WEEK_DATA, SPOTLIGHT_DATA, UNMISSABLE_DATA } from "@/constants/data";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductSection items={SPOTLIGHT_DATA} title="Tonight's Spotlight" />
      <ProductSection items={HOT_WEEK_DATA} title="Hot This Week" className="lg:my-[106px] max-lg:my-14"  />
      <ProductSection items={UNMISSABLE_DATA} title="Unmissable" />
      <ExclusivesSection className={'lg:my-[106px] max-lg:my-14'}  />
      <ProductSection items={FOR_YOU_DATA} title="For you" variant="secondary" />
      <ProductSection items={BUZZING_DESTINATIONS_DATA} title="Buzzing Destinations" className='lg:my-[100px] max-lg:my-14' variant="destinations" />
      <DealsSection />
      <DiscoverHiddenGems />
      <div className="lg:py-10 max-lg:py-7 bg-primary-100 lg:space-y-16 max-lg:space-y-10">
        <ExploreGhana />
        <ProductSection items={GHANA_TOP_TEN_DATA} title="Ghana’s Top 10s" />
      </div>
    </>
  );
};

export default HomePage;
