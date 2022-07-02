import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import VarianInsurance from "../components/VarianInsurance"

const Insurance = () => {
  const title = "Asuransi Properti dan Kendaraan Online Terbaik di Indonesiai"
  const subtitle =
    "Asuransi yang memberikan perlindungan untuk aset bangunan/ material, stok, mesin, kendaraan dan lainnya seperti rumah/ tempat tinggal, ruko/ tempat usaha, Gudang dan bangunan lainnya beserta isinya dari resiko kebakaran, Ledakan, petir, banjir, pencurian dan lainnya."
  return (
    <>
      <Header />
      <div className="insurance">
        <Hero title={title} subtitle={subtitle} imageUrl="/hero-3.png" />
        <VarianInsurance />
      </div>
      <Footer />
    </>
  )
}

export default Insurance
