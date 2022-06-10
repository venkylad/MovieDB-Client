import "../node_modules/react-modal-video/scss/modal-video.scss";
import Header from "../Components/Header";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.css";
import "react-pagination-js/dist/styles.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer
        className="text-center bg-pink-100"
        style={{ boxShadow: "0px 2px 10px #80808061" }}
      >
        <div className="flex items-center justify-center p-4 text-center text-gray-700">
          © 2022 Copyright:
          <Link href="https://github.com/venkylad">
            <p className="ml-2 font-semibold text-gray-800 cursor-pointer">
              {" "}
              Venkatesh Konuku
            </p>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
