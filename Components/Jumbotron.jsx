import Image from "next/image";
import Imdb from "../images/imdb.png";
import moment from "moment";

const Jumbotron = ({ data, setOpen, setCurrVideo, slide, cast, video }) => {
  function runtime(a) {
    var hours = Math.trunc(a / 60);
    var minutes = a % 60;
    return `${hours}hr ${minutes}min`;
  }
  return (
    <>
      <div className="w-full h-[480px] grid-cols-2 flex relative rounded-xl overflow-hidden">
        <div className="w-0 h-full md:w-1/5"></div>
        <div
          className={`absolute z-10 w-full h-full pt-10 pl-4 text-white ${
            !slide ? "md:w-3/4 md:pt-10 md:pl-10" : "md:w-1/2 md:pt-16 md:pl-12"
          }   bg-gradient-to-r from-red-600 via-red-500 to-red-00`}
        >
          <h1 className="text-3xl font-semibold md:text-5xl">
            {data?.original_title}
          </h1>
          <h4 className="m-2 font-light">{data?.tagline}</h4>
          <div className="flex items-center text-sm text-gray-300 md:text-lg">
            <Image
              src={Imdb}
              alt=""
              layout="fixed"
              width={60}
              height={40}
              objectFit="contain"
              objectPosition="center"
            />
            <p className="mr-2 -ml-2 text-sm text-gray-300 md:text-lg">
              {data?.vote_average}
            </p>

            {!slide && (
              <p className="mr-2 text-sm text-gray-100 md:text-lg">
                {runtime(data?.runtime)}
              </p>
            )}
            <p className="mr-2 text-sm text-gray-300 md:text-lg">
              {moment(data?.release_date).format("YYYY")}
            </p>
          </div>
          <p className="w-4/5 my-2 text-sm font-normal md:text-lg">
            {!slide ? data?.overview?.slice(0, 400) : data?.overview}
          </p>

          {!slide && (
            <>
              <div className="flex flex-wrap items-center">
                <h5 className="mr-3 text-sm font-semibold text-gray-300 md:text-lg ">
                  Starring
                </h5>
                {cast?.slice(0, 5)?.map((item, i) => (
                  <p className="text-sm font-light md:text-lg" key={i}>
                    {item?.name}
                    {i < 4 ? "," : "."}&nbsp;
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap items-center">
                <h5 className="mr-3 text-sm font-semibold text-gray-300 md:text-lg ">
                  Genres
                </h5>
                {data?.genres?.map((item, i) => (
                  <p className="text-sm font-light md:text-lg" key={i}>
                    {item?.name}
                    {i !== data?.genres?.length - 1 ? "," : "."}&nbsp;
                  </p>
                ))}
              </div>
              <div className="mt-3">
                <button
                  onClick={() => {
                    if (!slide) {
                      setOpen(true);
                      setCurrVideo(video);
                    }
                  }}
                  className="px-4 py-2 mr-4 text-sm font-semibold duration-150 bg-blue-800 md:text-lg rounded-xl hover:scale-95"
                >
                  Play Trailer
                </button>
                <button className="px-4 py-2 text-sm font-semibold duration-150 bg-blue-400 md:text-lg rounded-xl hover:scale-95">
                  Add to wishlist
                </button>
              </div>
            </>
          )}
        </div>
        <div className="relative left-0 flex justify-end w-full h-full md:w-4/5">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
          />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
