import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SubNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center bg-pink-100 shadow-lg shadow-grey-500/40">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2 cursor-pointer">
            <Link href="/discover">
              <div
                className={`inline-flex p-4 text-sm border-b-2 border-transparent rounded-t-lg md:text-xl group ${
                  router?.pathname === "/discover"
                    ? "text-gray-900 border-red-500 border-b-4 rounded-sm"
                    : "hover:text-gray-600 hover:border-gray-400 border-b-4"
                }`}
              >
                <div className="mr-2 ">
                  <Image
                    src="https://img.icons8.com/external-others-pike-picture/344/external-Popularity-reputation-others-pike-picture.png"
                    alt=""
                    layout="fixed"
                    width={25}
                    height={25}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                Popular
              </div>
            </Link>
          </li>
          <li className="mr-2 cursor-pointer">
            <Link href="/discover/latest">
              <div
                className={`inline-flex p-4 text-sm border-b-2 border-transparent rounded-t-lg md:text-xl group ${
                  router?.pathname === "/discover/latest"
                    ? "text-gray-900 border-red-500 border-b-4 rounded-sm"
                    : "hover:text-gray-600 hover:border-gray-400 border-b-4"
                }`}
              >
                <div className="mr-2 ">
                  <Image
                    src="https://img.icons8.com/fluency/344/new--v1.png"
                    alt=""
                    layout="fixed"
                    width={25}
                    height={25}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                Latest
              </div>
            </Link>
          </li>
          <li className="mr-2 cursor-pointer">
            <Link href="/discover/favourites">
              <div
                className={`inline-flex p-4 text-sm border-b-2 border-transparent rounded-t-lg md:text-xl group ${
                  router?.pathname === "/discover/favourites"
                    ? "text-gray-900 border-red-500 border-b-4 rounded-sm"
                    : "hover:text-gray-600 hover:border-gray-400 border-b-4"
                }`}
              >
                <div className="mr-2 ">
                  <Image
                    src="https://img.icons8.com/dusk/344/add-to-favorites.png"
                    alt=""
                    layout="fixed"
                    width={25}
                    height={25}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                Favourites
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SubNav;
