import LeftSection from "./component/LeftSection";
import CenterSection from "./component/CenterSection";
import RightSection from "./component/RightSection";

export default function Hero() {
  return (
    <section className="h-auto bg-[#f8f9fa] w-full flex items-start lg:items-center justify-center pt-28 pb-0 px-6 lg:py-20 lg:px-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 items-center">
        <LeftSection />
        <CenterSection />
        <RightSection />
      </div>
    </section>
  );
}
