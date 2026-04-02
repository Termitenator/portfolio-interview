import AboutImage from "./component/AboutImage";
import AboutContent from "./component/AboutContent";

export default function AboutSection() {
  return (
    <section className="w-full mt-10 md:-mt-20 px-6 lg:px-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto bg-[#3d3e42] rounded-[30px] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[500px]">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
