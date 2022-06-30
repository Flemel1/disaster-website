import OutlineButton from './OutlineButton'
import TextButton from './TextButton'
const Header = () => {
  return (
    <div className="header">
      <div className="header__layer-1">
        <ul>
          <li>Tentang Kami</li>
          <li>FAQ</li>
          <li>Karir</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="header__layer-2">
        <ul className="header__layer-2__left">
            <li><img src="/favicon.ico" alt="icon" /></li>
            <li>Informasi</li>
            <li>Cleaning</li>
            <li>Insurance</li>
        </ul>
        <ul className="header__layer-2__right">
            <li><OutlineButton label='Masuk' className='outline-button' /></li>
            <li><TextButton label='Ajukan Pembiayaan' className='text-button' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
