import { ChangeEvent} from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TextButton from "../components/TextButton"
import { useAppDispatch, useAppSelector } from '../hooks/index'
import { logined } from "../slices/login-slice"

const Login = () => {
  const message = useAppSelector(state => state.login.message)
  const dispatch = useAppDispatch()
  let dataForm = {
    username: '',
    password: ''
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    if (name === "username") dataForm.username = value
    else dataForm.password = value
  }

  const onSubmit = () => {
    dispatch(logined(dataForm))
    
  }

  return (
    <>
      <Header />
      <div className="login">
        <div className="login__left">
          <img src="/favicon.ico" alt="icon" />
        </div>
        <div className="login__right">
          <h1>Masuk</h1>
          <p>
            {message}
          </p>
          <label htmlFor="username">Alamat Email Atau Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Contoh: andi@gmail.com"
            onChange={onChange}
          />
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Kata Sandi Anda"
            onChange={onChange}
          />
          <TextButton className="text-button" label="Masuk" onClick={onSubmit} />
          <p>Lupa Kata Sandi</p>
          <p>Belum Mempunyai Akun?</p>
          <p>Daftar</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
