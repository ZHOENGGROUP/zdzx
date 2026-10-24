// src/theme/BlogPostPage/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'; // ✅ 新路径
import { PageMetadata } from '@docusaurus/theme-common';
import styles from './styles.module.css';

function BlogPostPageMetadata() {
  const { assets, metadata, frontMatter } = useBlogPost();
  return (
    <PageMetadata
      title={metadata.title}
      description={metadata.description || frontMatter.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
}

export default function BlogPostPage(props) {
  const { content: BlogPostContents } = props;
  const { metadata } = useBlogPost();

  return (
    <Layout>
      <BlogPostPageMetadata />

      <div className={styles.pageWrapper}>
        {/* ===== 返回时间轴按钮 ===== */}
        <div className={styles.topBar}>
          <Link to="/blog" className={styles.backButton}>
            <span className={styles.backArrow}>←</span>
            返回时间轴
          </Link>
        </div>

        {/* ===== 文章正文 ===== */}
        <article className={styles.articleWrapper}>
          <BlogPostItem>
            <BlogPostContents />
          </BlogPostItem>

          {(metadata.nextItem || metadata.prevItem) && (
            <BlogPostPaginator
              nextItem={metadata.nextItem}
              prevItem={metadata.prevItem}
            />
          )}
        </article>
      </div>
    </Layout>
  );
}
