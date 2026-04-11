import Gallery from "../component/Gallery";
import TestimonialLead from "../component/TestimonialLead";
import Speciality from "../component/Speciality";
import LegacyCta from "../component/LegacyCta";
import Clients from "../component/Clients";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Clients />
      <TestimonialLead />
      <Speciality />
      <LegacyCta />
      <Footer />
    </div>
  );
}

export default Home;
