import React from 'react';
import Layout from '@theme/Layout';
import { Icon } from '@iconify/react';
import aboutCards from '@site/src/data/aboutCards';
import Giscus from '@site/src/components/Giscus';
import styles from './styles.module.css';

// 根据形状返回对应的 CSS 类名
const getShapeClass = (shape) => {
  switch (shape) {
    case 'square':
      return styles.square;
    case 'rounded-square':
      return styles.roundedSquare;
    case 'original':
      return styles.original;
    case 'circle':
    default:
      return styles.circle;
  }
};

export default function About() {
  return (
    <Layout title="关于" description="关于我们">
      <div className={styles.pageWrapper}>
        {/* 顶部欢迎语：emoji 保持本色，文字渐变 */}
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>
            <span className={styles.emoji}>🎉</span>{' '}
            <span className={styles.gradientText}>Welcome to Zhengzhong</span>{' '}
            <span className={styles.emoji}>🥳</span>
          </h1>
        </div>

        {/* 主内容区 */}
        <main className={styles.content}>
          <h2 className={styles.title}>关于我们</h2>
          <p className={styles.paragraph}>
            河北正定中学肇始于1902年，坐落于国家历史文化名城正定，是一所享誉燕赵的百年名校。学校秉承“明德、笃学、强身、报国”校训，以严谨教风和深厚底蕴著称，连续多年高考成绩卓著，堪称国内基础教育界的典范。
          </p>
          <p className={styles.paragraph}>
            校园内古柏参天，文脉悠长，与现代教学设施交相辉映。学校注重学生全面发展，既传袭国学精粹，又力倡创新实践。数千学子在此砺志修身，每年大批毕业生升入顶尖高校，其育人成果广受社会赞誉，实为莘莘学子向往之求学圣地。
          </p>

          {/* 图片（宽度与内容区对齐） */}
          <img
            src="/img/zdzx_c.png"
            alt="校徽校名组合"
            className={styles.fullWidthImage}
            loading="lazy"
          />

          <h2 className={styles.title}>网站简介</h2>
          <p className={styles.paragraph}>
            河北正定中学 · 线上活动中心，由中政集团 · 中政科技承建，于 2026 年 8 月正式设立。其前身为“中政集团 · 河北正定中学办事处”（2026.4-2026.8）。
          </p>
          <p className={styles.paragraph}>
            河北正定中学 · 线上活动中心，旨在为广大学子构筑丰盈而多彩的网络成长空间，融学术思辨于云端对话，助科技创新在交互中迸发，并致力打造开放共享、协同共进的智慧资源平台，让每一次线上相聚都成为青春与未来的深刻链接。
          </p>

          {/* 链接卡片区 */}
          <div className={styles.cardsGrid}>
            {aboutCards.map((card, idx) => (
              <a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <div className={styles.cardLeft}>
                    <div className={styles.cardTitle}>{card.title}</div>
                    <div className={styles.cardDescription}>{card.description}</div>
                  </div>
                  <div className={styles.cardRight}>
                    {card.type === 'icon' ? (
                      <Icon
                        icon={card.icon}
                        className={styles.iconBlack}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <img
                        src={card.src}
                        alt={card.title}
                        className={`${styles.cardImage} ${getShapeClass(card.shape)}`}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Giscus 评论区 */}
          <div className={styles.comments}>
            <h2>评论</h2>
            <Giscus />
          </div>
        </main>
      </div>
    </Layout>
  );
}
