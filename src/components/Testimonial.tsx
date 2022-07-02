import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2>Testimonial Pengguna ChiFlo</h2>
      <p>
        Kami mengumpulkan cerita dari pengguna kami untuk membagikan pengalaman
        mereka menggunakan berbagai layanan melalui platform kami.
      </p>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        showIndicators={false}
        showStatus={false}
      >
        <div className="testimonial__card">
          <div className="testimonial__card__user">
            <img src="/user.png" />
            <h3>Soni Supriadi</h3>
            <p>Pengguna Jasa Kebersihan</p>
          </div>
          <p>
            Saya sadar betul bahwa rumah saya rawan terhadap Banjir. Adanya
            ChiFlo tentu membantu sekali terhadap saya yang sedang terdampak
            bencana.
          </p>
        </div>
        <div className="testimonial__card">
          <div className="testimonial__card__user">
            <img src="/user.png" />
            <h3>Si Mawar</h3>
            <p>Direktur PT X</p>
          </div>
          <p>
            Saya sadar betul bahwa rumah saya rawan terhadap Banjir. Adanya
            ChiFlo tentu membantu sekali terhadap saya yang sedang terdampak
            bencana.
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonial
