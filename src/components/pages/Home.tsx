import HeroSection from "../organs/HeroSection";
import Services from "../organs/Services";
import TopDestination from "../organs/TopDestination";
import YoutubeEmbed from "../organs/YoutubeEmbed";
import DiscoverKertajati from "../organs/DiscoverKertajati";

const Home = () => {
  return (
    <>
      <HeroSection />
      <YoutubeEmbed />
      <DiscoverKertajati />
      <TopDestination />
      <Services />
    </>
  );
};

export default Home;
