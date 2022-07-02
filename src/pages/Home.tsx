import CTA from "../components/CTA"
import DisasterInformation from "../components/DisasterInformation"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Hero />
        <Services />
        <Map />
        <DisasterInformation />
        <Testimonial />
        <Partner />
        <CTA />
      </div>
      <Footer />
    </>
  )
}

export default Home
