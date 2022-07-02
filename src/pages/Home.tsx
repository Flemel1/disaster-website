import CTA from "../components/CTA"
import DisasterInformation from "../components/DisasterInformation"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Schedule from "../components/Schedule"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"

const Home = () => {
  const title = "Portal Informasi Banjir di Sekitar Anda"
  const subtitle = "ChiFlo merupakan portal informasi seputar banjir yang terjadi disekitar lokasi anda. ChiFlo juga memberikan pelayanan seputar jasa pembersihan pasca banjir dan Asuransi barang berharga."
  return (
    <>
      <Header />
      <div className="home">
        <Hero title={title} subtitle={subtitle} imageUrl={'/hero.png'} button={true} />
        <Services />
        <Map />
        <DisasterInformation />
        <Testimonial />
        <Schedule />
        <Partner />
        <CTA />
      </div>
      <Footer />
    </>
  )
}

export default Home
