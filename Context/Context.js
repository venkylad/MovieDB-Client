import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../utils/data";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const removeUser = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
  };

  const addToWishlist = async (movie) => {
    const {
      original_title,
      original_language,
      title,
      backdrop_path,
      id,
      poster_path,
      adult,
      overview,
      release_date,
      vote_average,
    } = movie;
    await axios
      .post(
        `${API_URL}/wishlist`,
        {
          original_title,
          original_language,
          title,
          backdrop_path,
          id,
          poster_path,
          adult,
          overview,
          release_date,
          vote_average,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res?.data?.message, {
          duration: 4000,
          position: "top-right",
        });
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, {
          duration: 4000,
          position: "top-right",
        });
      });
  };

  useEffect(() => {
    console.log("running");
    if (typeof window !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    console.log("end");
  }, [router]);
  return (
    <Context.Provider
      value={{
        user,
        removeUser,
        addToWishlist,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
