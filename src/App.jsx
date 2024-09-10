import "./App.css"; // Include Tailwind CSS and your custom styles
import Become_an_agent from "./components/Become_an_agent";
import Footer from "./components/Footer";
import Latest_package from "./components/Latest_package";
import Navbar from "./components/Navbar";
import Neighborhood_properties from "./components/Neighborhood_properties";
import Our_services from "./components/Our_services";
import Real_estate from "./components/Real_estate";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Who_we_are from "./components/Who_we_are";
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Real_estate />
        <Who_we_are />
        <Latest_package />
        <Our_services />
        <Neighborhood_properties />
        <Team />
        <Testimonials />
        <Become_an_agent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
