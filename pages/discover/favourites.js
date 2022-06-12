import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../utils/data";
import axios from "axios";
import Card from "../../Components/Card";
import MyLoader from "../../Components/CardLoader";
import toast from "react-hot-toast";
import { Context } from "../../Context/Context";

const Favourites = () => {
  const [movies, setMovies] = useState([]);
  const [hoverCard, setHoverCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(Context);

  const fetchFavourites = async () => {
    setLoading(true);
    await axios
      .get(`${API_URL}/wishlist`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => {
        console.log("got response", res);
        setMovies(res.data?.movies);
      })
      .catch((err) => console.log("error in response"));
    setLoading(false);
  };

  const deleteFromWishlist = async (id) => {
    await axios
      .delete(`${API_URL}/wishlist/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => {
        toast.success(res?.data?.message, {
          duration: 4000,
          position: "top-right",
        });
        fetchFavourites();
      })
      .catch((err) =>
        toast.error(err?.response?.data?.message, {
          duration: 4000,
          position: "top-right",
        })
      );
  };

  useEffect(() => {
    console.log("user changes effect");
    fetchFavourites();
  }, [user]);

  return (
    <div className="px-6 mt-4">
      {user?.token !== undefined ? (
        <>
          <h1 className="pl-10 text-2xl font-bold underline md:text-3xl underline-offset-8">
            {user?.name} Favourites.
          </h1>
          <div className="grid w-full grid-cols-2 gap-4 px-4 my-10 space-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies?.map((movie, i) => (
              <>
                {loading ? (
                  <div
                    className="flex justify-center overflow-hidden rounded-lg"
                    key={i}
                  >
                    <MyLoader />
                  </div>
                ) : (
                  <Card
                    movie={movie}
                    key={i}
                    hoverCard={hoverCard}
                    setHoverCard={setHoverCard}
                    deleteFromWishlist={deleteFromWishlist}
                  />
                )}
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="pl-10 text-2xl font-bold underline md:text-3xl underline-offset-8">
            To access Favourites.
          </h1>
        </>
      )}
    </div>
  );
};

export default Favourites;
