// src/pages/privacy/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Content from './_content.mdx';
import { ContactBox, InfoBox, TocBox, TocItem } from './_components';
import styles from './styles.module.css';

const LAST_UPDATE = '2026-09-25';
const CONTACT_EMAIL = 'privacy@zhoeng.com.cn';

export default function PrivacyPolicy() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState('');

  // 从渲染后的正文中提取 h1/h2/h3 生成目录
  useEffect(() => {
    if (!contentRef.current) return;

    const headings = contentRef.current.querySelectorAll('h1, h2, h3');
    const items: TocItem[] = Array.from(headings).map((h, i) => {
      const el = h as HTMLElement;
      if (!el.id) {
        el.id = `privacy-heading-${i}`;
      }
      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.slice(1), 10),
      };
    });
    setToc(items);
  }, []);

  // 监听滚动：计算进度 + 高亮当前标题
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const el = contentRef.current;
      const rect = el.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const articleHeight = el.offsetHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      const pct = ((viewportBottom - articleTop) / articleHeight) * 100;
      setProgress(Math.max(0, Math.min(100, pct)));

      // 找出当前位于视口顶部附近的标题
      const headings = el.querySelectorAll('h1, h2, h3');
      let current = '';
      headings.forEach((h) => {
        const hRect = h.getBoundingClientRect();
        if (hRect.top <= 120) {
          current = h.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Layout
      title="隐私政策"
      description="河北正定中学 · 线上活动中心的隐私政策"
    >
      <div className="container margin-vert--lg">
        {/* ===== 页面头部 ===== */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              <span className={styles.titleBlack}>隐私</span>
              <span className={styles.titleBlue}>政策</span>
            </h1>
            <p className={styles.description}>
              <Link to="/">河北正定中学 · 线上活动中心</Link>的隐私政策
            </p>
          </div>
          <div className={styles.headerRight}>
            <ContactBox email={CONTACT_EMAIL} text="隐私相关联系" />
          </div>
        </div>

        {/* ===== 两栏主布局 ===== */}
        <div className={styles.mainLayout}>
          <div ref={contentRef} className={styles.contentBody}>
            <Content />
          </div>

          <aside className={styles.sidebar}>
            <InfoBox lastUpdate={LAST_UPDATE} />
            <TocBox toc={toc} progress={progress} activeId={activeId} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
