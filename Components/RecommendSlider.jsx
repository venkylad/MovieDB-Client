import Slider from "react-slick";
import Card from "./Card";

const RecommendSlider = ({ recommend, hoverCard, setHoverCard }) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    className: "center",
    swipeToSlide: true,
    arrows: false,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <>
      <Slider {...settings} className="px-10">
        {recommend?.slice(0, 10)?.map((movie, i) => (
          <div key={i} className="px-4 py-10 first:ml-4 md:py-12">
            <Card
              movie={movie}
              hoverCard={hoverCard}
              setHoverCard={setHoverCard}
              recommendCard={true}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default RecommendSlider;
