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
            这里是关于我们的介绍文字。你可以编辑此部分，加入学校的介绍、历史、办学理念等内容。
          </p>
          <p className={styles.paragraph}>
            我们致力于提供丰富的线上活动与帮助资源，欢迎访问我们的网站和友链。
          </p>

          {/* 图片（宽度与内容区对齐） */}
          <img
            src="/img/zdzx_c.png"
            alt="校徽校名组合"
            className={styles.fullWidthImage}
            loading="lazy"
          />

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
                      <Icon icon={card.icon} className={styles.iconBlack} width={24} height={24} />
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
