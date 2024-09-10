/* eslint-disable react/no-unescaped-entities */
const Team = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8">
      <p className="text-[#0c4f37] uppercase md:text-xl text-lg text-center mb-2 animate-fadeIn">
        Hello from
      </p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize text-center mb-12 animate-fadeIn animate-delay-200">
        Our Team of Experts
      </h1>
      <section className="lg:grid lg:grid-cols-4 grid-cols-2 gap-8 lg:gap-12 justify-center">
        {[
          {
            name: "Mohammed",
            role: "CEO & Founder",
            image: "/src/assets/p1.jpg",
          },
          {
            name: "Ahmed",
            role: "Real Estate Developer",
            image: "/src/assets/p3.jpg",
          },
          {
            name: "Ali",
            role: "Listing Agent",
            image: "/src/assets/p2.jpg",
          },
          {
            name: "Kareem",
            role: "Buyer's Agent",
            image: "/src/assets/p4.jpg",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="relative group transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 md:h-80 object-cover bg-[#cbcbc9] transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white">
                <p className="text-xl font-semibold">{member.name}</p>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Team;
