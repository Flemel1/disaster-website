import Stepper from "./Stepper"

const DisasterInformation = () => {
  return (
    <div className="information">
        <div className="information__left">
            <h2>Rawan Banjir</h2>
            <p>Beberapa Jalan dan Daerah Rawan Banjir di Yogyakarta</p>
            <Stepper />
        </div>
        <div className="information__right">
            <img src="/megaphone.png" alt="icon" />
        </div>
    </div>
  )
}

export default DisasterInformation
