import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const Card = ({ movie, hoverCard, setHoverCard }) => {
  return (
    <div className="flex justify-center">
      <Link href={`/discover/movie/${movie?.id}`}>
        <div
          className="z-0 w-[160px] h-[280px] md:w-[220px] md:h-[340px] cursor-pointer rounded-lg transform transition hover:scale-125 duration-300 ease-in-out hover:z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          onMouseEnter={() => setHoverCard(movie?.id)}
          onMouseLeave={() => setHoverCard(null)}
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg ">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
            />
            <div
              className={`${
                movie?.id === hoverCard
                  ? "block absolute delay-150 duration-250"
                  : "block absolute md:hidden"
              } bottom-0 p-4 text-gray-200 bg-gradient-to-t from-red-900 info`}
            >
              <h3 className="text-lg font-bold text-yellow-400 md:text-2xl title">
                {movie?.original_title}
              </h3>

              <h5 className="text-xs font-base md:text-sm title">
                {moment(movie?.release_date).format("DD MMM YYYY")},{" "}
                {movie?.original_language}
                <div className="px-1 my-1 text-xs md:text-sm font-mono bg-yellow-400 text-center text-black w-[40px] rounded-xl">
                  {String(movie?.vote_average)?.slice(0, 3)}
                </div>
              </h5>
              <p className="text-xs font-light text-white md:text-sm">
                {movie?.original_title?.split(" ").length <= 5
                  ? movie?.overview?.slice(0, 100)
                  : movie?.overview?.slice(0, 60)}
                ...
              </p>
              <button className="flex items-center justify-center w-full px-2 py-1 mt-1 text-xs font-bold text-black duration-150 bg-red-400 rounded-lg md:text-sm">
                <div className="mx-1 text-black">
                  <Image
                    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-glyph-shapes-tanah-basah-glyph-tanah-basah-45.png"
                    alt=""
                    layout="fixed"
                    width={14}
                    height={10}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>{" "}
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
