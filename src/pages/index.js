//test 0.0.1
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css';

/**
 * 首页组件
 * 包含：校徽横幅、宣传图轮播、特色宣传区、链接卡片
 */
export default function Home() {
  // 轮播配置
  const sliderSettings = {
    dots: true,                 // 显示指示点
    infinite: true,             // 无限循环
    speed: 800,                 // 切换速度 (ms)
    slidesToShow: 1,            // 每次显示1张
    slidesToScroll: 1,          // 每次滚动1张
    autoplay: true,             // 自动播放
    autoplaySpeed: 4000,        // 自动播放间隔 (ms)
    pauseOnHover: true,         // 悬停暂停
    arrows: true,               // 显示箭头
    fade: true,                 // 淡入淡出效果
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,        // 小屏幕隐藏箭头
          dots: true,
        },
      },
    ],
  };

  // 宣传图数据（5张 2128x846）
  const banners = [
    { id: 1, src: '/img/zdzx_gate_t.jpg', alt: '校园风光 1', link: '/news' },
    { id: 2, src: '/img/zdzx_qhm_t.jpg', alt: '校园风光 2', link: '/about' },
    { id: 3, src: '/img/zdzx_xtl_t.jpg', alt: '校园风光 3', link: '/academics' },
    { id: 4, src: '/img/zdzx_zwy_t.jpg', alt: '校园风光 4', link: '/admissions' },
    { id: 5, src: '/img/zdzx_all_t.jpg', alt: '校园风光 5', link: '/campus-life' },
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
      title="首页"
      description="欢迎访问我们的学校官网"
    >
      {/* ===== 1. 校徽校名横幅 ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <img
            src="/img/zdzx_c.png"
            alt="校徽校名组合"
            className={styles.heroImage}
            width="1602"
            height="442"
            loading="eager"
          />
        </div>
      </section>

      {/* ===== 2. 宣传图轮播 ===== */}
      <section className={styles.carouselSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>校园风采</h2>
          <p className={styles.sectionSubtitle}>感受魅力校园，见证精彩瞬间</p>
          <div className={styles.carouselWrapper}>
            <Slider {...sliderSettings}>
              {banners.map((item) => (
                <div key={item.id} className={styles.slideItem}>
                  <Link to={item.link} className={styles.slideLink}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={styles.slideImage}
                      loading="lazy"
                    />
                    <div className={styles.slideOverlay}>
                      <span className={styles.slideLabel}>点击了解更多</span>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ===== 3. 特色宣传区（1000x700） ===== */}
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

      {/* ===== 4. 链接卡片区 ===== */}
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
    </Layout>
  );
}
