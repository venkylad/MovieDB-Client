import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Jumbotron from "./Jumbotron";

const SliderCarousel = ({ trending }) => {
  const customeSlider = useRef();
  const settings = {
    lazyLoad: true,
    fade: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsiveClass: true,
    dots: true,
    dotsClass: "button__bar",
  };

  return (
    <>
      <div className="relative mt-6">
        <div
          onClick={() => customeSlider.current.slickPrev()}
          className="absolute hidden cursor-pointer left-0 z-10 md:flex items-center justify-center bg-red-600 border-8 border-[#f2f2f2] rounded-full w-14 h-14 top-52"
        >
          <Image
            src="https://img.icons8.com/glyph-neue/344/play.png"
            alt=""
            layout="fixed"
            width={12}
            height={12}
            objectFit="contain"
            className="rotate-180"
          />
        </div>
        <Slider {...settings} ref={customeSlider}>
          {trending?.slice(0, 6)?.map((movie, i) => (
            <Link key={i} href={`/discover/movie/${movie?.id}`}>
              <div className="px-4 cursor-pointer">
                <Jumbotron slide={true} data={movie} />
              </div>
            </Link>
          ))}
        </Slider>
        <div
          onClick={() => customeSlider.current.slickNext()}
          className="absolute hidden cursor-pointer right-0 z-10 md:flex items-center justify-center bg-red-600 border-8 border-[#f2f2f2] rounded-full w-14 h-14 top-52"
        >
          <Image
            src="https://img.icons8.com/glyph-neue/344/play.png"
            alt=""
            layout="fixed"
            width={12}
            height={12}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default SliderCarousel;
