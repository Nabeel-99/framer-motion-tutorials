import blockRoadmap from "../../assets/images/block-roadmap.png";
import blockJessica from "../../assets/images/block-jessica.png";
import heroImage from "../../assets/images/hero.png";

const MobileHero = () => {
  return (
    <section className="lg:hidden w-full sm:px-20 xl:px-0 flex flex-col gap-5 ">
      <div className="lg:hidden relative  h-full  gap-4  mt-10 px-6 bg-img-m">
        <img
          src={heroImage}
          alt=""
          className="w-full relative  h-96 md:h-[45rem]"
        />
        <div className="absolute top-10 right-28  translate-x-10">
          <div className="flex flex-col items-center gap-4 w-full ">
            <img src={blockRoadmap} alt="block" className="w-full md:p-8" />
            <img src={blockJessica} alt="block" className="w-60 md:w-96" />
          </div>
        </div>
        <div className="absolute bottom-0   left-0 bg-gradient-to-b from-transparent from-40% to-black to-70% rounded-t-2xl w-full  z-10  h-20"></div>
      </div>
      <div className="lg:hidden flex flex-col gap-4 px-4">
        <p className="text-left labil-grotesk font-bold text-[3rem] whitespace-break-spaces cursor-default leading-[3.5rem] tracking-tight">
          Impactful <span className="block">Stories. Made</span>effortlessly
        </p>
        <p className="text-lg text-[#5f5e5e] text-left">
          Chronicle is a modern format of presentations. Deliver impressive,
          interactive stories without the design guesswork!
        </p>
      </div>
      <div className="w-full px-4">
        <button className="text-center text-black font-bold bg-white py-2 w-full rounded-xl">
          Join Beta
        </button>
      </div>
    </section>
  );
};

export default MobileHero;
