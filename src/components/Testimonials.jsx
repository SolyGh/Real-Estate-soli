import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const testimonialsData = [
  {
    quote:
      "I highly recommend Ali. He was attentive to our needs and worked tirelessly to find us the perfect home. We could not be happier with our new place!",
    author: "Sam Mahmoud",
    imageUrl: "/src/assets/test1.jpg",
  },
  {
    quote: "جامد موتتتتتتتتتتتتتتتتتتت.",
    author: "A'laa Kamal",
    imageUrl: "/src/assets/test1.jpg",
  },
  // Add more testimonial objects as needed
];

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <main className="container mx-auto px-4 lg:px-8 pt-20">
      <div className="lg:w-1/3 flex flex-col mb-12 lg:mb-0">
        <p className="text-[#0c4f37] uppercase md:text-xl text-lg mb-1 animate-fadeIn">
          Testimonials
        </p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize mb-4 animate-fadeIn animate-delay-200">
          Look What Our Customers Say!
        </h1>
        <p className="text-[#a5a5a5] text-sm animate-fadeIn animate-delay-400">
          Fulce klmfsd fskmf ,sdfsfk sdfff mm , adad,dad .
        </p>
        <div className="lg:flex hidden gap-x-6 mt-8">
          <button
            onClick={handlePrevTestimonial}
            className="w-12 h-12 rounded-full border border-[#0ca39a] flex justify-center items-center text-2xl text-[#0ca39a] hover:bg-[#0ca39a] hover:text-white transition-colors duration-300"
          >
            <IoArrowBack />
          </button>
          <button
            onClick={handleNextTestimonial}
            className="w-12 h-12 rounded-full border border-[#0ca39a] flex justify-center items-center text-2xl text-[#0ca39a] hover:bg-[#0ca39a] hover:text-white transition-colors duration-300"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      <div className="relative rounded-2xl shadow-xl lg:w-2/5 lg:p-8 p-6 lg:mt-0 mt-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <FaQuoteLeft className="text-[#ffe999] text-3xl absolute top-2 left-2" />
        <p className="font-medium pt-10 pb-6 text-lg lg:text-xl">
          {currentTestimonial.quote}
        </p>
        <div className="border-t border-[#d4d4d4] flex items-center pt-4">
          <img
            src={currentTestimonial.imageUrl}
            alt={currentTestimonial.author}
            className="rounded-full h-12 w-12 object-cover"
          />
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 font-medium pl-4">
            <p>{currentTestimonial.author}</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#ffe999]" />
              ))}
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-16 w-16 absolute -top-8 left-6 opacity-30"></button>
      </div>
    </main>
  );
};

export default Testimonials;
