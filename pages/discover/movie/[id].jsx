import Image from "next/image";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import { useState } from "react";
import dynamic from "next/dynamic";
import Card from "../../../Components/Card";
import Jumbotron from "../../../Components/Jumbotron";

const Movie = ({ data, video, recommend, credits }) => {
  const [isOpen, setOpen] = useState(false);
  const [currVideo, setCurrVideo] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  return (
    <div>
      <div className="px-6 mt-4">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={currVideo}
          onClose={() => setOpen(false)}
        />
        <Jumbotron
          data={data}
          cast={credits}
          setCurrVideo={setCurrVideo}
          setOpen={setOpen}
          video={video?.results[0]?.key}
        />

        <div>
          <h2 className="my-4 text-2xl font-semibold md:text-3xl">
            Trailers & Extras
          </h2>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {video?.results?.slice(0, 8)?.map((item) => (
              <div
                className="w-[160px] h-[100px] md:w-[300px] md:h-[180px] mx-2 rounded-lg bg-red-700 relative overflow-hidden cursor-pointer transform transition hover:scale-105 duration-300 ease-out"
                key={item?.id}
                onClick={() => {
                  setOpen(true);
                  setCurrVideo(item?.key);
                }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${item?.key}/hqdefault.jpg`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,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"
                />
                <div className="absolute top-[25px] left-[60px] md:top-16 md:left-32">
                  <Image
                    src="https://img.icons8.com/color-glass/344/play-button-circled.png"
                    alt=""
                    layout="fixed"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="w-full h-full pl-10 mt-6 text-2xl font-semibold md:text-3xl">
        More Like This
      </h2>
      <div className="flex space-x-4 md:space-x-8 py-10 md:py-12 pl-4 md:pl-10 overflow-scroll scrollbar-hide drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        {recommend?.slice(0, 10)?.map((movie, i) => (
          <div key={i}>
            <Card
              movie={movie}
              hoverCard={hoverCard}
              setHoverCard={setHoverCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context?.params?.id}?api_key=d8e97d396562cfba24086104028f28e3`
  );
  const data = await res.json();

  const videoRes = await fetch(
    `https://api.themoviedb.org/3/movie/${context?.params?.id}/videos?api_key=d8e97d396562cfba24086104028f28e3&language=en-US`
  );
  const video = await videoRes.json();

  const recommendedRes = await fetch(
    `https://api.themoviedb.org/3/movie/${context?.params?.id}/similar?api_key=d8e97d396562cfba24086104028f28e3&language=en-US`
  );
  const recommend = await recommendedRes.json();

  const creditsRes = await fetch(
    `https://api.themoviedb.org/3/movie/${context?.params?.id}/credits?api_key=d8e97d396562cfba24086104028f28e3&language=en-US`
  );
  const credits = await creditsRes.json();

  // Pass data to the page via props
  return {
    props: {
      data,
      video,
      recommend: recommend?.results,
      credits: credits?.cast,
    },
  };
}
