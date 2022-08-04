import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/data";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(`${API_URL}/user/login`, formData)
      .then((res) => {
        if (res?.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          toast.success(
            "User Logged in Sucessfully, You will be redirected to Favourites Page",
            {
              duration: 4000,
              position: "top-right"
            }
          );
          setFormData({
            email: "",
            password: ""
          });
          setTimeout(() => router.push("/discover"), 1000);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, {
          duration: 4000,
          position: "top-right"
        });
      });
    setLoading(false);
  };

  return (
    <>
      <div className="relative grid md:grid-cols-2 sm:grid-cols-1">
        <div className="relative img-cont">
          <Image
            src="https://i.pinimg.com/originals/67/99/88/6799886e301c323bc202fbdb72376531.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="https://i.pinimg.com/originals/67/99/88/6799886e301c323bc202fbdb72376531.jpg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-4 mt-20 lg:items-start lg:ml-20 md:mt-0">
            <h1 className="mb-2 text-3xl font-semibold text-red-800">
              Welcome,
            </h1>
            <h3 className="text-lg font-normal">Login to Continue</h3>
            <form
              className="flex flex-col mt-16 space-y-8 lg:w-[400px] w-[320px]"
              onSubmit={handleSubmit}
            >
              <input
                className="lg:w-[400px] px-6 py-2 border-0 rounded-lg bg-[#F6F6F6] focus:outline-none ring-1 focus:ring-2 ring-red-700"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative  lg:w-[400px]">
                <input
                  className="w-full px-6 py-2 border-0 rounded-lg bg-[#F6F6F6] focus:outline-none ring-1 focus:ring-2 ring-red-700"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="absolute cursor-pointer right-3 top-2">
                  <Image
                    src={
                      showPassword
                        ? "https://img.icons8.com/cotton/344/surprise--v2.png"
                        : "https://img.icons8.com/ios/344/eyelashes-2d.png"
                    }
                    alt=""
                    layout="fixed"
                    width={25}
                    height={25}
                    objectFit="contain"
                    objectPosition="center"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              <button
                disabled={loading}
                className={` relative text-gray-100 text-lg font-semibold px-6 py-2 ${
                  loading ? "bg-[#ff5282]" : "bg-[#E4003F]"
                } rounded-lg hover:scale-105 duration-150 shadow-lg shadow-grey-500/30`}
              >
                {loading ? (
                  <Image
                    className="z-10"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                    alt=""
                    layout="fixed"
                    width={80}
                    height={20}
                    objectFit="cover"
                    objectPosition="center"
                    loading="lazy"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="flex mt-2 ml-1 font-semibold text-red-700">
              <p className="text-black">New User?&nbsp;</p>
              <Link href="/signup">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
