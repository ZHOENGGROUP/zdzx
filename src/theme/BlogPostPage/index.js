// src/theme/BlogPostPage/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client'; // ✅ 必须同时导入 Provider 和 Hook
import { PageMetadata } from '@docusaurus/theme-common';
import styles from './styles.module.css';

/* ============ 元数据（标题、描述等） ============ */
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

/* ============ 实际渲染内容的子组件 ============ */
function BlogPostPageContent({ children }) {
  const { metadata } = useBlogPost();

  return (
    <div className={styles.pageWrapper}>
      {/* 返回时间轴按钮 */}
      <div className={styles.topBar}>
        <Link to="/blog" className={styles.backButton}>
          <span className={styles.backArrow}>←</span>
          返回时间轴
        </Link>
      </div>

      {/* 文章正文 */}
      <article className={styles.articleWrapper}>
        <BlogPostItem>{children}</BlogPostItem>

        {(metadata.nextItem || metadata.prevItem) && (
          <BlogPostPaginator
            nextItem={metadata.nextItem}
            prevItem={metadata.prevItem}
          />
        )}
      </article>
    </div>
  );
}

/* ============ 页面入口（关键：用 Provider 包裹） ============ */
export default function BlogPostPage(props) {
  const { content: BlogPostContent } = props;

  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <Layout>
        <BlogPostPageMetadata />
        <BlogPostPageContent>
          <BlogPostContent />
        </BlogPostPageContent>
      </Layout>
    </BlogPostProvider>
  );
}
