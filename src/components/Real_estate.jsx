import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoSearch } from "react-icons/io5";
import { MdMaximize } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import PropTypes from "prop-types"; // Added for prop types validation

const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Real_estate = () => {
  // Custom Dot Component
  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? "" : "text-white"} onClick={() => onClick()}>
        <MdMaximize className="text-5xl" />
      </li>
    );
  };

  // Add PropTypes validation for the CustomDot component
  CustomDot.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
  };

  const images = [
    "/image_1.jpg",
    "/image_9.jpg",
    "/image_10.jpg",
    "/image_13.jpg",
  ];

  return (
    <main className="mb-12 mt-12">
      <div className="bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe] rounded-[560px] rounded-t-none">
        <div className="container mx-auto lg:flex items-center justify-between px-4 py-12 lg:text-left text-center">
          <div className="lg:w-2/5 w-full lg:pl-20 flex-col">
            <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
              REAL ESTATE
            </p>
            <h1 className="lg:text-6xl text-3xl font-medium pt-3 pb-12">
              Find a perfect home you love..!
            </h1>
            <p className="text-[#808080] lg:text-base text-sm pb-8">
              Etiam eget elementum elit. Anean dignissim dapibus vestibulum
              accordion - Integer a dolor eu sapien sodales vulputate ac in
              purus.
            </p>
            <Carousel
              responsive={responsive}
              className="w-full"
              customDot={<CustomDot />}
              autoPlay
              autoPlaySpeed={3000}
              infinite
              showDots
              showArrows={false}
              keyBoardControl
              swipeable
              centerMode
              slidesToSlide={1}
              renderButtonGroupOutside
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              transitionDuration={300}
            >
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt=""
                    className="w-full h-[300px] shadow shadow-[#0ca39a] rounded-md lg:rounded-3xl lg:rounded-r-none lg:rounded-l-none lg:h-[400px]"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <form className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12 w-full">
            <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-8 px-3">
              <button
                type="button"
                className="w-1/2 text-[#808080] focus:border-[#0ca39a] cursor-pointer"
              >
                For Sale
              </button>
              <button
                type="button"
                className="w-1/2 text-[#808080] focus:border-[#0ca39a] cursor-pointer"
              >
                For Rent
              </button>
            </div>
            <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
              <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
              />
              <select
                placeholder="Select Property Type"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
              >
                <option>Select Property Type</option>
              </select>
              <select
                placeholder="Select Rooms"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
              >
                <option>Select Rooms</option>
              </select>
              <span className="flex items-center text-[#0ca39a] gap-x-2">
                <VscSettings className="text-2xl" />
                <p>Advance Search</p>
              </span>
              <button
                type="button"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#0ca39a]"
              >
                <IoSearch />
                Search
              </button>
            </div>
            <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
          </form>
        </div>
      </div>

      {/* Other components remain unchanged */}
    </main>
  );
};

export default Real_estate;
