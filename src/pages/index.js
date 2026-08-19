// test 0.0.4
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
        {/* 左上角校徽组合图标，大一些 */}
        <img
          src="/img/zdzx_c.png"
          alt="校徽校名组合"
          className={styles.heroLogo}
          width="240"
          height="66"
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

  // 轮播配置（保留高级轮播效果）
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
    { id: 1, src: '/img/zdzx_gate_t.jpg', alt: '校园风光 1' },
    { id: 2, src: '/img/zdzx_qhm_t.jpg', alt: '校园风光 2' },
    { id: 3, src: '/img/zdzx_xtl_t.jpg', alt: '校园风光 3' },
    { id: 4, src: '/img/zdzx_zwy_t.jpg', alt: '校园风光 4' },
    { id: 5, src: '/img/zdzx_all_t.jpg', alt: '校园风光 5' },
  ];

  // 链接卡片数据
  const linkCards = [
    {
      id: 1,
      title: '学校概况',
      desc: '了解学校历史、办学理念与校园文化',
      icon: '🏛️',
      link: '/about',
    },
    {
      id: 2,
      title: '招生信息',
      desc: '最新招生政策、专业设置与报考指南',
      icon: '📝',
      link: '/admissions',
    },
    {
      id: 3,
      title: '教学科研',
      desc: '师资力量、学科建设与科研成果展示',
      icon: '🔬',
      link: '/academics',
    },
    {
      id: 4,
      title: '校园生活',
      desc: '丰富多彩的校园活动与学生社团风采',
      icon: '🎉',
      link: '/campus-life',
    },
    {
      id: 5,
      title: '新闻中心',
      desc: '学校最新动态、通知公告与媒体报道',
      icon: '📰',
      link: '/news',
    },
    {
      id: 6,
      title: '校友之家',
      desc: '校友风采、校友活动与捐赠支持',
      icon: '🤝',
      link: '/alumni',
    },
  ];

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />

      <main>
        {/* ===== 宣传图轮播（无链接） ===== */}
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

        {/* ===== 特色宣传区（1000x700） ===== */}
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
                  学校秉承"立德树人、知行合一"的办学理念，
                  致力于培养具有创新精神和社会责任感的优秀人才。
                  在这里，每一个梦想都被珍视，每一份努力都被看见。
                </p>
                <div className={styles.featureButtons}>
                  <Link to="/about" className={styles.btnPrimary}>
                    了解详情
                  </Link>
                  <Link to="/admissions" className={styles.btnOutline}>
                    加入我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 链接卡片区 ===== */}
        <section className={styles.cardsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>快速导航</h2>
            <p className={styles.sectionSubtitle}>一键直达您关心的内容</p>
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
