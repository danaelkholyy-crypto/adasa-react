import React, { useState } from 'react'
import data from '../data/posts.json'

const posts = data.posts
const POSTS_PER_PAGE = 6
const categories = ['جميع المقالات', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات']

export default function Blog() {

  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('جميع المقالات')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  const filtered = posts.filter((p) => {
    const matchCat = activeCat === 'جميع المقالات' || p.category === activeCat
    const q = search.trim()
    const matchSearch = !q || p.title.includes(q) || p.excerpt.includes(q)
    return matchCat && matchSearch
  })

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const start = (page - 1) * POSTS_PER_PAGE
  const currentPosts = filtered.slice(start, start + POSTS_PER_PAGE)

  const goToPage = (n) => {
    setPage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className='blog-hero'>
        <div className="blog-badge">
          <span className="dot dot-dim"></span>
          <span className="dot"></span>
          <i className="fa-solid fa-book"></i>
          مدونتنا
        </div>
        <h1>استكشف <span className='highlighted-title'>مقالاتنا </span></h1>
        <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
      </section>

      <div className="filter-bar">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            />
          </div>
          <div className="cat-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cat-pill ${activeCat === cat ? 'active' : ''}`}
                onClick={() => { setActiveCat(cat); setPage(1) }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* posts */}
      <section className="blog-posts">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <span className="results-counts">
              عرض <b>{filtered.length}</b> مقالات
            </span>
            <div className="view-toggle">
              <button
                type="button"
                className={view === 'grid' ? 'active' : ''}
                onClick={() => setView('grid')}
                aria-label="عرض شبكي"
              >
                <i className="fa-solid fa-table-cells-large"></i>
              </button>
              <button
                type="button"
                className={view === 'list' ? 'active' : ''}
                onClick={() => setView('list')}
                aria-label="عرض قائمة"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
          <div className={`row g-4 ${view === 'list' ? 'posts-list' : ''}`}>
            {currentPosts.map((p) => (
              <div key={p.id} className={view === 'grid' ? 'col-md-6 col-lg-4' : 'col-12'}>
                <a href={`/blog/${p.id}`} className="post-card">
                  <div className="post-card-img">
                    <img src={p.image} alt={p.title} />
                    <span className="post-card-tag">{p.category}</span>
                  </div>

                  <div className="post-card-body">
                    <div className="post-card-meta">
                      <i className="fa-regular fa-clock"></i>
                      <span>{p.readTime}</span>
                      <span className="meta-dot"></span>
                      <span>{p.date}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                  </div>
                  <div className="post-card-footer">
                    <div className="author">
                      <img src={p.author.avatar} alt={p.author.name} />
                      <div>
                        <strong>{p.author.name}</strong>
                        <small>{p.author.role}</small>
                      </div>
                    </div>
                    <span className="card-arrow">
                      <i className="fa-solid fa-angle-left"></i>
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-secondary py-5">مفيش مقالات مطابقة للبحث</p>
          )}

          {totalPages > 1 && (
            <nav className="pagination-bar" aria-label="التنقل بين الصفحات">
              <button
                type="button"
                className="page-btn"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="الصفحة السابقة"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`page-btn ${page === n ? 'active' : ''}`}
                  onClick={() => goToPage(n)}
                  aria-current={page === n ? 'page' : undefined}
                >
                  {n}
                </button>
              ))}

              <button
                type="button"
                className="page-btn"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="الصفحة التالية"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  )
}
