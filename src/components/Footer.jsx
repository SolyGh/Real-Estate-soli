import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col bg-[#e6edeb] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left">
            <div className="lg:block flex flex-col items-enter justify-center">
              <span className="flex items-center gap-x-2">
                <button className="bg-[#0ca39a] text-white rounded-full w-14 h-14">
                  <TbHomeCheck className="w-1/2 h-1/2 m-auto" />
                </button>
                <p className="font-medium text-xl">rezilla</p>
              </span>
              <p className="xl:text-base text-sm py-4 w-45 lg:text-left text-center">
                227 st zagazig
              </p>
              <span className="flex items-center gap-x-2 pt-4">
                <FaPhone />
                <p>01010351108</p>
              </span>
              <span className="flex items-center gap-x-2 pt-2">
                <FaEnvelope />
                <p>support@rezz.com</p>
              </span>
            </div>

            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                Quick Links
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Home
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  About
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Listings
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Blogs
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Become an Agent
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                Discovery
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Egypt
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">Us</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">Uk</li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Canada
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  UAE{" "}
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">
                Subscribe to our Newsletter
              </p>
              <div className="relative h-14 flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-full w-full rounded-full px-3"
                />
                <button className="bg-[#0ca39a] text-white rounded-full w-12 h-12 flex justify-center items-center text-xl absolute right-1">
                  <IoArrowForward />
                </button>
              </div>
              <p className="font-semibold py-6 text-lg lg:text-left text-center">
                Follow us on
              </p>
              <span className="text-[#0ca39a] flex items-center gap-4 text-2xl lg:justify-normal justify-center ">
                <FaLinkedin className="cursor-pointer" />
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-[#7b7a7a] xl:text-base text-sm">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center">
          <p>2024 soly cse all rights reserved </p>
          <ul className="flex lg:flex-row flex-wrap lg:justify-normal justify-center items-center gap-x-4 ">
            <li className="cursor-pointer">terms and and conditions </li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Disclaimer</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
