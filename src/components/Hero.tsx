import TextButton from "./TextButton"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>Portal Informasi Banjir di Sekitar Anda</h1>
        <p>
          ChiFlo merupakan portal informasi seputar banjir yang terjadi
          disekitar lokasi anda. ChiFlo juga memberikan pelayanan seputar jasa
          pembersihan pasca banjir dan Asuransi barang berharga.
        </p>
        <TextButton className="text-button" label="Register" />
      </div>
      <div className="hero__right">
        <img src="/favicon.ico" alt="icon" />
      </div>
    </div>
  )
}

export default Hero
