import { Link } from "react-router-dom"
import TextButton from "./TextButton"

type HeroProps = {
  title: string
  subtitle: string
  imageUrl: string
  button?: boolean
}

const Hero = ({ button, title, subtitle, imageUrl }: HeroProps) => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {button !== undefined && (
          <Link to={"/register"}>
            <TextButton className="text-button" label="Register" />
          </Link>
        )}
      </div>
      <div className="hero__right">
        <img src={imageUrl} alt="icon" />
      </div>
    </div>
  )
}

export default Hero
