import { Image } from "../atoms/Image";
import DiscoverKJT from "../../assets/discover-kertajati.jpg";

const DiscoverKertajati = () => {
  return (
    <div className="pt-10 pb-10 flex flex-col ">
      <Image className="w-full h-full" image={DiscoverKJT} alt={"discover"} />
    </div>
  );
};

export default DiscoverKertajati;
