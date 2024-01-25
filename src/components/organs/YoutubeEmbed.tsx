import React from "react";
import { useState } from "react";
import { Text } from "../atoms/Text";
import { YoutubeTexts } from "../particles/DataLists";

const YoutubeEmbed = () => {
  const [embedUrl, setEmbedUrl] = useState("");

  React.useEffect(() => {
    const url = "https://www.youtube.com/watch?v=bgdearw2Ylk";
    const embedUrl = url.replace("watch?v=", "embed/");
    setEmbedUrl(embedUrl);
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
      <Text
        as="p"
        className="md:text-2xl text-xl font-medium capitalize text-color2/95"
      >
        {YoutubeTexts.firstText}
      </Text>
      <Text
        as="p"
        className="font-light text-base text-color3/80 tracking-widest pb-10"
      >
        {YoutubeTexts.seconText}
      </Text>
      <div className="relative overflow-hidden w-full h-0 pb-[56.25%] align-middle ">
        <iframe
          className="absolute top-10 left-0 w-full h-full"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Embed"
        ></iframe>
      </div>
    </section>
  );
};

export default YoutubeEmbed;
