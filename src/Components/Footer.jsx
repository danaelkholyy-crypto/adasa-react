import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-5">

          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-brand">
              <span className="footer-logo">ع</span>
              <strong>عدسة</strong>
            </div>
            <p className="footer-desc">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* استكشف */}
          <div className="col-6 col-lg-3">
            <h4 className="footer-title">استكشف</h4>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

          {/* التصنيفات */}
          <div className="col-6 col-lg-3">
            <h4 className="footer-title">التصنيفات</h4>
            <ul className="footer-links">
              <li><Link to="/blog">إضاءة</Link></li>
              <li><Link to="/blog">بورتريه</Link></li>
              <li><Link to="/blog">مناظر طبيعية</Link></li>
              <li><Link to="/blog">تقنيات</Link></li>
            </ul>
          </div>

          {/* النشرة */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="footer-title">ابقى على اطلاع</h4>
            <p className="footer-desc">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="أدخل بريدك الإلكتروني" required />
              <button type="submit">اشترك</button>
            </form>
          </div>

        </div>

        {/* الشريط السفلي */}
        <div className="footer-bottom">
          <span>
            © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart"></i> جميع الحقوق محفوظة.
          </span>
          <div className="footer-legal">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}