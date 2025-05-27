import HeroSection from "@/app/utilities/ui/page-sections/hero-section/HeroSection";
import ProductUseSection from "@/app/utilities/ui/page-sections/product-use-section/ProductUseSection";
import HowItWorksSection from "@/app/utilities/ui/page-sections/how-it-works-section/HowItWorksSection";
import WhatWeAreDoingSection from "@/app/utilities/ui/page-sections/what-we-are-doing-section/WhatWeAreDoingSection";
import GetOnBoardSection from "@/app/utilities/ui/page-sections/get-on-board-section/GetOnBoardSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[3.38rem] px-[1.16rem] md:px-[2.63rem] lg:px-[7.63rem] xl:px-30 pt-[5.62rem] lg:pt-[10.13rem] xl-pt-[12rem] pb-[3.38rem]">
      <HeroSection />
      <ProductUseSection />
      <HowItWorksSection />
      <WhatWeAreDoingSection />
      <GetOnBoardSection />
    </div>

  );
}

