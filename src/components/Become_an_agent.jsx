const Become_an_agent = () => {
  return (
    <main className="container mx-auto mt-32 mb-24 px-4 lg:px-8">
      <div className="relative bg-[#0ca39a] rounded-3xl flex flex-col lg:flex-row items-center lg:items-start lg:h-96 p-6 lg:p-12">
        {/* Image Section */}
        <div className="relative lg:w-1/2 w-full lg:h-full overflow-hidden rounded-3xl">
          <img
            src="/src/assets/p1.jpg"
            alt="Become an Agent"
            className="absolute inset-0  d w-full h-full"
            style={{
              objectPosition: "center",
              objectFit: "cover",
              transform: "scale(1.2)",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left relative z-10 mt-6 lg:mt-0 lg:pl-8">
          <span className="lg:w-3/4">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Become an Agent
            </h1>
            <p className="text-white text-sm lg:text-base">
              Join our team and make a difference! Contact us to learn more and
              start your journey as an agent.
            </p>
          </span>
          <button className="bg-white text-[#0ca39a] px-6 py-3 rounded-full mt-8 lg:mt-0">
            Register Now
          </button>
        </div>

        {/* Background Buttons */}
        <button className="absolute -top-8 right-4 lg:right-10 bg-gradient-to-b from-white to-[#4abab4] opacity-40 rounded-full h-16 w-16 lg:h-20 lg:w-20 cursor-auto z-0"></button>
        <button className="absolute bottom-4 lg:bottom-10 left-4 lg:left-10 bg-gradient-to-r from-[#74cac5] to-[#26ada5] h-16 w-16 lg:h-20 lg:w-20 cursor-auto rounded-full z-0"></button>
      </div>
    </main>
  );
};

export default Become_an_agent;
