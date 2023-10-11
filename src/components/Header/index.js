import './index.css'

const Header = () => (
  <nav className="header-nav-container">
    <div className="header-control-container">
      <img
        src="https://patcoproductions.com/static/media/main-logo.4a0c6870c1196606138f.png"
        alt="logo"
        className="header-img"
      />
      <div>
        <ul type="none" className="unordered-list">
          <li className="list-items">HOME</li>
          <li className="list-items">ABOUT US</li>
          <li className="list-items">OUR WORK</li>
          <li className="list-items">SERVICES</li>
          <li className="list-items">CONTACT US</li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
