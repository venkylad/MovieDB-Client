import Image from "next/image";

const Pagination = ({ total, currPage, handlePageChange }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="py-2">
        <nav className="block">
          <ul className="flex flex-wrap pl-0 list-none rounded">
            {currPage > 1 && (
              <li className="cursor-pointer">
                <div
                  onClick={() => handlePageChange(currPage - 1)}
                  className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 rounded-full md:text-md first:ml-0"
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
              </li>
            )}
            {currPage > 2 && (
              <li className="cursor-pointer">
                <div
                  onClick={() => handlePageChange(currPage - 2)}
                  className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 rounded-full md:text-md first:ml-0"
                >
                  {currPage - 2}
                </div>
              </li>
            )}
            {currPage > 1 && (
              <li className="cursor-pointer">
                <div
                  onClick={() => handlePageChange(currPage - 1)}
                  className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 rounded-full md:text-md first:ml-0"
                >
                  {currPage - 1}
                </div>
              </li>
            )}
            <li className="cursor-pointer">
              <div className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 border-4 border-red-700 border-solid rounded-full md:text-md first:ml-0">
                {currPage}
              </div>
            </li>
            <li className="cursor-pointer">
              <div
                onClick={() => handlePageChange(currPage + 1)}
                className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 rounded-full md:text-md first:ml-0"
              >
                {currPage + 1}
              </div>
            </li>
            <li className="cursor-pointer">
              <div
                onClick={() => handlePageChange(currPage + 2)}
                className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 rounded-full md:text-md first:ml-0"
              >
                {currPage + 2}
              </div>
            </li>
            <li className="cursor-pointer">
              <div
                onClick={() => handlePageChange(currPage + 1)}
                className="relative flex items-center justify-center w-8 h-8 p-0 mx-1 text-xs font-bold leading-tight text-white bg-red-400 rounded-full md:text-md first:ml-0"
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
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
