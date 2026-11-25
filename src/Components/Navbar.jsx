import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/image.png'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg container py-3">
        <Link to="/" className="brand d-flex align-items-center gap-2 text-decoration-none">
          <img src={logo} alt="شعار العدسة" className='brand-logo' />
          <span className="brand-text">
            <strong>عدسة</strong>
            <small>عالم التصوير الفوتوغرافي</small>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between align-items-center" id="mainNav">
          <ul className="nav-pill navbar-nav mx-auto my-3 my-lg-0">
            <li><NavLink to="/" end className="pill-link">الرئيسية</NavLink></li>
            <li><NavLink to="/blog" className="pill-link">المدونة</NavLink></li>
            <li><NavLink to="/about" className="pill-link">من نحن</NavLink></li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link to="/blog" className="icon-btn" aria-label="بحث">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
              </svg>
            </Link>
            <Link to="/blog" className="cta-btn">ابدأ القراءة</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}