import { IoSearch } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { PiBed } from "react-icons/pi";

const Our_services = () => {
  return (
    <main className="bg-[#f2f2f2] mt-20 lg:py-20">
      <div className="container mx-auto px-3 text-center">
        <p className="uppercase text-xl py-8">Our services</p>
        <p className="lg:text-4xl text-2xl font-medium">
          donec porttier euismod dignissim
        </p>

        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center">
            <button className="bg-[#0c4f37] text-white rounded-full flex justify-center items-center w-20 h-20 shadow-2xl">
              <IoSearch className="w-2/3 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4 ">Buy a New Home</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              donec ksjfnskdj dnksfnjs fdnsjkfns dsjfks nskjdndjjfs dndf dfn
              ,fds dsfdnkf dfnkf dnfk.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#0ca39a] text-white rounded-full flex justify-center items-center w-20 h-20 shadow-2xl">
              <FaHouse className="w-2/3 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Sell a House</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              donec ksjfnskdj dnksfnjs fdnsjkfns dsjfks nskjdndjjfs dndf dfn
              ,fds dsfdnkf dfnkf dnfk.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#0c4f37] text-white rounded-full  w-20 h-20 flex justify-center items-center shadow-2xl">
              <PiBed className="w-2/3 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Rent a House</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              donec ksjfnskdj dnksfnjs fdnsjkfns dsjfks nskjdndjjfs dndf dfn
              ,fds dsfdnkf dfnkf dnfk.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Our_services;
