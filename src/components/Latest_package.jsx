import { FaFire, FaDollarSign, FaHome } from "react-icons/fa"; 
import Carousel from "react-multi-carousel";
import { PiBed } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const LatestPackage = () => {
  // Sample data for properties
  const properties = [
    {
      id: 1,
      price: 5970,
      title: "Tranquil Haven in Woods",
      location: "103 st, right to ksdka WA 918168",
      beds: 4,
      baths: 3,
      img: "/src/assets/image_2.jpg",
      label: "Popular",
      labelColor: "bg-[#ffe1e1]",
      labelIcon: <FaFire />,
      type: "SELL",
    },
    {
      id: 2,
      price: 1970,
      title: "Serene Retreat by the Lake",
      location: "103 st, right to ksdka WA 918168",
      beds: 3,
      baths: 2,
      img: "/src/assets/image_12.jpg",
      label: "New Listing",
      labelColor: "bg-[#d7eeff]",
      labelIcon: <FaHome />, // Updated icon
      type: "RENT",
    },
    {
      id: 3,
      price: 3570,
      title: "Charming Cottage in the Meadow",
      location: "103 st, right to ksdka WA 918168",
      beds: 4,
      baths: 3,
      img: "/src/assets/image_4.jpg",
      label: "Discounted Price",
      labelColor: "bg-[#f1fff1]",
      labelIcon: <FaDollarSign />,
      type: "SELL",
    },
    {
      id: 4,
      price: 2500,
      title: "Grand Estate on the Hilltop",
      location: "103 st, right to ksdka WA 918168",
      beds: 4,
      baths: 4,
      img: "/src/assets/image_5.jpg",
      label: "Popular",
      labelColor: "bg-[#ffe1e1]",
      labelIcon: <FaFire />,
      type: "RENT",
    },
  ];

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === "ALL") {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter((property) => property.type === type)
      );
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.7,
    },
  };

  return (
    <main className="my-12">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-2/5">
          <h1 className="text-[#6f9789] lg:text-xl uppercase">
            Check out our new
          </h1>
          <h1 className="lg:text-4xl text-2xl font-medium capitalize py-3">
            Latest Listed Properties
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5">
            Discover the latest listings tailored to your needs.
          </p>
        </div>
        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          {["ALL", "SELL", "RENT"].map((type) => (
            <button
              key={type}
              onClick={() => handleFilter(type)}
              className={`text-[#0ca39a] rounded-full border border-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white ${
                activeFilter === type ? "bg-[#0ca39a] text-white" : ""
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <section className="mt-8">
        <Carousel
          className="z-30 w-full"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
        >
          {filteredProperties.map((property) => (
            <div key={property.id}>
              <div className="relative h-80 sm:w-80">
                <img
                  src={property.img}
                  alt={property.title}
                  className="rounded-3xl h-full w-full object-cover"
                />
                <button
                  className={`px-5 py-2 flex gap-x-2 items-center text-[#f11111] ${property.labelColor} rounded-full absolute bottom-10 left-10`}
                >
                  {property.labelIcon}
                  {property.label}
                </button>
              </div>
              <span className="flex flex-col gap-y-1 py-4">
                <p className="text-2xl font-medium">
                  ${property.price.toLocaleString()}
                </p>
                <p className="text-lg font-medium">{property.title}</p>
                <p className="text-sm">{property.location}</p>
                <div className="flex items-center gap-x-4 text-sm">
                  <span className="flex items-center gap-x-2">
                    <PiBed className="text-xl" /> {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-x-2">
                    <LuBath className="text-xl" /> {property.baths} Bath
                  </span>
                </div>
              </span>
            </div>
          ))}
        </Carousel>
      </section>
    </main>
  );
};

export default LatestPackage;
