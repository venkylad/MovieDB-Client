import { useContext, useRef } from "react";
import Slider from "react-slick";
import Card from "./Card";
import Image from "next/image";
import { Context } from "../Context/Context";

const RecommendSlider = ({ recommend, hoverCard, setHoverCard }) => {
  const customeSlider = useRef();
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
  };
  const { addToWishlist } = useContext(Context);
  return (
    <div className="relative">
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

      <Slider {...settings} ref={customeSlider} className="px-10">
        {recommend?.slice(0, 10)?.map((movie, i) => (
          <>
            <div key={i} className="px-4 py-10 first:ml-4 md:py-12">
              {console.log(movie)}
              <Card
                movie={movie}
                hoverCard={hoverCard}
                setHoverCard={setHoverCard}
                recommendCard={true}
                addToWishlist={addToWishlist}
              />
            </div>
          </>
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
  );
};

export default RecommendSlider;
