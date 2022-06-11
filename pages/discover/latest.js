import { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card";
import MyLoader from "../../Components/CardLoader";
import Pagination from "../../Components/Pagination";
import SliderCarousel from "../../Components/SliderCarousel";
import { API_URL } from "../../utils/data";

import { Context } from "../../Context/Context";

const Latest = ({ data, trending }) => {
  const [movies, setMovies] = useState(data?.results);
  const [hoverCard, setHoverCard] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { addToWishlist } = useContext(Context);

  const fetchMovies = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/discover/${pageNum}`);
    const data = await res.json();
    setMovies(data?.results);
    setLoading(false);
  };

  const handlePageChange = (num) => {
    setPageNum(num);
  };

  useEffect(() => {
    if (movies?.length === 0 || pageNum !== 1) {
      fetchMovies();
      console.log("First Render items");
    } else {
      console.log("First Render");
    }
  }, [pageNum]);

  return (
    <div>
      <SliderCarousel trending={trending} />
      <h1 className="pl-10 text-2xl font-bold underline md:text-3xl underline-offset-8">
        Latest & Upcoming Movies
      </h1>
      <div className="grid w-full grid-cols-2 gap-4 px-4 my-10 space-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.map((movie, i) => (
          <>
            {loading ? (
              <div className="flex justify-center overflow-hidden rounded-lg">
                <MyLoader />
              </div>
            ) : (
              <Card
                movie={movie}
                key={i}
                hoverCard={hoverCard}
                setHoverCard={setHoverCard}
                addToWishlist={addToWishlist}
              />
            )}
          </>
        ))}
      </div>
      <Pagination
        total={data?.total_pages}
        currPage={pageNum}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Latest;

export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(`${API_URL}/latest/1`);
  const data = await res?.json();

  const latestRes = await fetch(`${API_URL}/in_cinemas/1`);
  const trending = await latestRes?.json();

  // Pass data to the page via props
  return { props: { data, trending: trending?.results } };
}
