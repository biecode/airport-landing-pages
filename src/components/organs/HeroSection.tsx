import heroImage from "../../assets/hero-image.jpg";
import { Text } from "../atoms/Text";
import ReactTyped from "react-typed";
import { HeroTexts } from "../particles/DataLists";

const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroImage}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <Text
            as="h1"
            className="font-bold text-5xl md:text-7xl drop-shadow-2xl"
          >
            {HeroTexts.firstText}:{" "}
            <ReactTyped strings={[HeroTexts.secondText]} typeSpeed={100} loop />
          </Text>
          <Text className="max-w-[800px] drop-shadow-2xl py-2 text-xl">
            {HeroTexts.thirdText}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
