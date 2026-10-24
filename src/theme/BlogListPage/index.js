// src/theme/BlogListPage/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

/* 将 YYYY-MM-DD 格式化为「2026 年 9 月 28 日」 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.slice(0, 10).split('-');
  return `${y} 年 ${Number(m)} 月 ${Number(d)} 日`;
}

/* 生成分页链接 */
function getPagePath(basePath, page) {
  return page === 1 ? basePath : `${basePath}/page/${page}`;
}

/* 单个时间轴节点 */
function TimelineItem({ metadata, index }) {
  const isLeft = index % 2 === 0;
  return (
    <div className={`${styles.item} ${isLeft ? styles.left : styles.right}`}>
      <span className={styles.dot} aria-hidden="true" />
      <Link to={metadata.permalink} className={styles.cardLink}>
        <article className={styles.card}>
          <div className={styles.date}>{formatDate(metadata.date)}</div>
          <h3 className={styles.title}>{metadata.title}</h3>
          {metadata.description && (
            <p className={styles.desc}>{metadata.description}</p>
          )}
          {metadata.tags && metadata.tags.length > 0 && (
            <div className={styles.tags}>
              {metadata.tags.map((tag) => (
                <span key={tag.permalink} className={styles.tag}>
                  {tag.label}
                </span>
              ))}
            </div>
          )}
          <span className={styles.more}>阅读全文 →</span>
        </article>
      </Link>
    </div>
  );
}

export default function BlogListPage(props) {
  const { metadata, items } = props;

  // 从博客插件全局数据中获取博客根路径（默认 /blog）
  const blogData = usePluginData('docusaurus-plugin-content-blog');
  const basePath = blogData?.blogBasePath ?? '/blog';

  const { blogTitle, blogDescription, page: currentPage, totalPages } = metadata;

  return (
    <Layout title={blogTitle} description={blogDescription}>
      <div className={styles.pageWrapper}>
        {/* ===== 页面头部 ===== */}
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>{blogTitle}</h1>
          {blogDescription && (
            <p className={styles.pageDesc}>{blogDescription}</p>
          )}
          <div className={styles.headerLine} />
        </header>

        {/* ===== 时间轴 ===== */}
        {items.length === 0 ? (
          <p className={styles.empty}>暂无记录。</p>
        ) : (
          <div className={styles.timeline}>
            {items.map((item, index) => (
              <TimelineItem
                key={item.content.metadata.permalink}
                metadata={item.content.metadata}
                index={index}
              />
            ))}
          </div>
        )}

        {/* ===== 分页 ===== */}
        {totalPages > 1 && (
          <nav className={styles.pagination} aria-label="博客分页">
            {currentPage > 1 && (
              <Link
                to={getPagePath(basePath, currentPage - 1)}
                className={styles.pageLink}
              >
                ← 上一页
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                to={getPagePath(basePath, p)}
                className={
                  p === currentPage ? styles.pageActive : styles.pageLink
                }
                aria-current={p === currentPage ? 'page' : undefined}
              >
                {p}
              </Link>
            ))}

            {currentPage < totalPages && (
              <Link
                to={getPagePath(basePath, currentPage + 1)}
                className={styles.pageLink}
              >
                下一页 →
              </Link>
            )}
          </nav>
        )}
      </div>
    </Layout>
  );
}
