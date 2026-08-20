// Release 1.0.0
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        {/* 校徽校名组合图标 */}
        <img
          src="/img/zdzx_c.png"
          alt="校徽校名组合"
          className={styles.heroLogo}
          width="260"
          height="72"
          loading="eager"
        />
        <div className={styles.heroText}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // 轮播配置
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // 宣传图数据（5张 2128x846）
  const banners = [
    { id: 1, src: '/img/zdzx_gate_t.jpg', alt: '校门带文字' },
    { id: 2, src: '/img/zdzx_qhm_t.jpg', alt: '清华门带文字' },
    { id: 3, src: '/img/zdzx_xtl_t.jpg', alt: '香桐楼带文字' },
    { id: 4, src: '/img/zdzx_zwy_t.jpg', alt: '尊闻园带文字' },
    { id: 5, src: '/img/zdzx_all_t.jpg', alt: '鸟瞰图带文字' },
  ];

  // 链接卡片数据
  const linkCards = [
    { id: 1, title: '帮助中心', desc: '网站协议、公告通知与服务指南', icon: '📚', link: '/docs/help' },
    { id: 2, title: '新闻中心', desc: '官方动态、校园新闻与媒体报道', icon: '📰', link: '/docs/news' },
    { id: 3, title: '文章中心', desc: '学术成果、论文专著与创新博客', icon: '📝', link: '/docs/article' },
    { id: 4, title: '活动中心', desc: '社团风采、文体赛事与校园节日', icon: '🎉', link: '/docs/activity' },
    { id: 5, title: '校园中心', desc: '学校概况、校园资源与文化氛围', icon: '🏫', link: '/docs/campus' },
    { id: 6, title: '科技中心', desc: '科技创新、实验平台与技术前沿', icon: '💻', link: '/docs/technology' },
    { id: 7, title: '竞赛中心', desc: '竞赛规则、学习平台与奖项荣誉', icon: '🏆', link: '/docs/contest' },
    { id: 8, title: '校友中心', desc: '校友风采、联络活动与捐赠支持', icon: '🎓', link: '/docs/alumni' },
  ];

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />

      <main>
        {/* 宣传图轮播 */}
        <section className={styles.carouselSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>校园风采</h2>
            <p className={styles.sectionSubtitle}>感受魅力校园，见证精彩瞬间</p>
            <div className={styles.carouselWrapper}>
              <Slider {...sliderSettings}>
                {banners.map((item) => (
                  <div key={item.id} className={styles.slideItem}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={styles.slideImage}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* 特色宣传区 */}
        <section className={styles.featureSection}>
          <div className={styles.container}>
            <div className={styles.featureCard}>
              <div className={styles.featureImageWrapper}>
                <img
                  src="/img/zdzx_kql.jpg"
                  alt="特色宣传"
                  className={styles.featureImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>筑梦未来 · 扬帆起航</h3>
                <p className={styles.featureDesc}>
                  河北正定中学秉承“明德、笃学、强身、报国”的校训，
                  弘扬“身正心定，闳中博学”的精神，
                  以“为提升国民素质助力，为学生终身发展奠基”为办学理念，
                  始终坚持立德树人、五育并举，
                  致力于培养有思想、有能力、有情怀、有担当的时代新人。
                  在这里，每一个梦想都被珍视，每一份努力都被看见。
                </p>
                <div className={styles.featureButtons}>
                  <Link to="/docs/about" className={styles.btnPrimary}>了解详情</Link>
                  <Link to="/docs/about/join" className={styles.btnOutline}>加入我们</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 链接卡片区 */}
        <section className={styles.cardsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>快速导航</h2>
            <p className={styles.sectionSubtitle}>河北正定中学 · 线上活动中心</p>
            <div className={styles.cardsGrid}>
              {linkCards.map((card) => (
                <Link key={card.id} to={card.link} className={styles.cardLink}>
                  <div className={styles.card}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                    <p className={styles.cardDesc}>{card.desc}</p>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
