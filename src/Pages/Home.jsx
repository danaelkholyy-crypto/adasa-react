import React from 'react'
import { Link } from 'react-router-dom'
import { posts, categories } from '../data/posts.json'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'

export default function Home() {

  const categoryIcons = {
    'إضاءة': 'fa-sun',
    'بورتريه': 'fa-user',
    'مناظر طبيعية': 'fa-mountain-sun',
    'تقنيات': 'fa-sliders',
    'معدات': 'fa-gear',
  }

  const featured = posts.filter(post => post.featured)
  const latest = posts.filter(post => !post.featured).slice(0, 3)

  return (
    <div>
      <section className='home-hero text-center text-white'>
        <span className='home-badge'>
          <span className='dot dot-dim'></span>
          <span className='dot'></span>
          مرحباً بك في عدسة
        </span>
        <h1>اكتشف <span className='highlighted-title'>فن </span> <br />
          التصوير الفوتوغرافي</h1>
        <p className='mb-5'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
        <div className="hero-btns d-flex gap-3 justify-content-center mb-5">
          <Link to="/blog" className='explore-btn'>استكشف المقالات <i className="fa-solid fa-arrow-left"></i></Link>
          <Link to="/about" className='details-btn'><i className="fa-solid fa-circle-info"></i> اعرف المزيد</Link>
        </div>
        <div className="hero-stats d-flex flex-wrap justify-content-center gap-3">
          <div className="stats-item">
            <i className="fa-solid fa-book stats-icon"></i>
            <span className='stats-counts'>50+</span>
            <p>مقالة</p>
          </div>
          <div className="stats-item">
            <i className="stats-icon fa-solid fa-users"></i>
            <span className='stats-counts'>10+ الف</span>
            <p>قارئ</p>
          </div>
          <div className="stats-item">
            <i className="stats-icon fa-solid fa-folder-open"></i>
            <span className='stats-counts'>4</span>
            <p>تصنيفات</p>
          </div>
          <div className="stats-item">
            <i className="stats-icon fa-solid fa-pen-nib"></i>
            <span className='stats-counts'>6</span>
            <p>كاتب</p>
          </div>
        </div>
      </section>
      <section className='featured-section'>
        <div className="container">
          <span className="special-badge">
            <span className='dot dot-dim'></span>
            <span className='dot'></span>
            مميز
          </span>
          <h2>مقالات مختارة</h2>
          <div className='d-flex justify-content-between mb-5'>
            <p>محتوى منتقى لبدء رحلة تعلمك</p>
            <Link to="/blog" className='view-all-btn'>عرض الكل <i className="fa-solid fa-angle-left"></i></Link>
          </div>
          {featured.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="featured-card">
              <div className="featured-img">
                <img src={post.image} alt={post.title} />
                <span className="featured-tag"><i className="fa-solid fa-star"></i> مميز</span>
              </div>
              <div className="featured-body">
                <div className="featured-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-time"><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="featured-footer">
                  <div className="author">
                    <img src={post.author.avatar} alt={post.author.name} />
                    <div>
                      <strong>{post.author.name}</strong>
                      <small>{new Date(post.date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })}</small>
                    </div>
                  </div>
                  <span className="read-more">اقرأ المقال <i className="fa-solid fa-arrow-left"></i></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="cat-section text-center mb-5">
        <div className="container">
          <span className="cat-badge">
            <span className="dot dot-dim"></span>
            <span className="dot"></span>
            التصنيفات
          </span>
          <h2 className='mb-3'>استكشف حسب الموضوع</h2>
          <p className='mb-5'>اعثر على محتوى مصمم حسب اهتماماتك</p>
          <div className="row g-3">
            {categories.map(cat => (
              <div className="col-12 col-md-6 col-lg-3" key={cat.name}>
                <Link to={`/blog?category=${cat.name}`} className="category-card">
                  <span className="category-icon">
                    <i className={`fa-solid ${categoryIcons[cat.name]}`}></i>
                  </span>
                  <h3>{cat.name}</h3>
                  <small>{cat.count} مقالة</small>
                  <span className="category-arrow">
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='newest-blogs-section'>
        <div className="container">
          <span className="newest-badge">
            <span className="dot-dim dot"></span>
            <span className="dot"></span>
            الاحدث
          </span>
          <h2>أحدث المقالات</h2>
          <div className='d-flex justify-content-between'>
            <p className='mb-5'>محتوى جديد طازج من المطبعة</p>
            <Link className='view-all-link' to="/blog">عرض جميع المقالات <i className='fa-solid fa-arrow-left'></i></Link>
          </div>
          <div className="row g-4">
            {latest.map(post => (
              <div className='col-12 col-md-6 col-lg-4' key={post.id}>
                <Link to={`/blog/${post.slug}`} className="post-card">
                  <div className="post-card-img">
                    <img src={post.image} alt={post.title} />
                    <span className="post-card-tag">{post.category}</span>
                  </div>
                  <div className="post-card-body">
                    <div className="post-card-meta">
                      <span><i className='fa-regular fa-clock'></i> {post.readTime}</span>
                      <span className="meta-dot"></span>
                      <span>
                        {new Date(post.date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="post-card-footer">
                    <div className="author">
                      <img src={post.author.avatar} alt={post.author.name} />
                      <div>
                        <strong>{post.author.name}</strong>
                        <small>{post.author.role}</small>
                      </div>
                    </div>
                    <span className="card-arrow">
                      <i className="fa-solid fa-angle-left"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Newsletter section */}
      <section className="newsletter-section text-center">
        <div className="container">
          <div className="newsletter-card">
            <i className="fa-regular fa-envelope"></i>
            <h2>اشترك في <span className='highlighted-title'>نشرتنا</span> الإخبارية</h2>
            <p className='mb-5'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder='أدخل بريدك الإلكتروني' />
              <button className='subscribe-btn'>اشترك الأن</button>
            </form>
            <div className='meta'>
              <div className="avatars">
                <img src={avatar1} alt="" />
                <img src={avatar2} alt="" />
                <img src={avatar3} alt="" />
              </div>
              <span>انضم لـ <span className='highlighted-span'>+10,000 </span> مصور</span>
              <span className="meta-dot"></span>
              <span>بدون إزعاج</span>
              <span className="meta-dot"></span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
