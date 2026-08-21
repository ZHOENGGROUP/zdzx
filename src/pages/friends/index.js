// src/pages/friends/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import friendGroups from '@site/src/data/friends';
import styles from './styles.module.css';

const totalFriends = friendGroups.reduce((acc, group) => acc + group.friends.length, 0);

export default function Friends() {
  return (
    <Layout title="友链" description="友情链接">
      <div className="container margin-vert--lg">
        {/* 页面头部 */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              网站<b>友链</b>
            </h1>
            <p className={styles.description}>
              <Link to="/">河北正定中学 · 线上活动中心</Link>的友情链接
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{friendGroups.length}</span>
                <span className={styles.statLabel}>分类</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{totalFriends}</span>
                <span className={styles.statLabel}>友链</span>
              </div>
            </div>
          </div>
          <div className={styles.headerRight}>
            <a
              href="mailto:your-email@example.com?subject=申请友链&body=标题：%0A描述：%0A链接：%0A头像："
              className={styles.requestButton}
            >
              <Icon icon="lucide:link-2" width={16} height={16} />
              申请友链
            </a>
          </div>
        </div>

        {/* 分组列表 */}
        {friendGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.group}>
            <div className={styles.groupHeader}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              {group.description && (
                <p className={styles.groupDescription}>{group.description}</p>
              )}
            </div>
            <div className={styles.friendList}>
              {group.friends.map((friend, friendIndex) => (
                <a
                  href={friend.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={friendIndex}
                  className={styles.cardLink}
                >
                  <div className={styles.card}>
                    <div className={styles.avatarWrapper}>
                      {/* 占位图标（始终显示，当图片加载成功后被覆盖） */}
                      <div className={styles.avatarPlaceholder}>
                        <Icon icon="lucide:user" width={24} height={24} />
                      </div>
                      {/* 头像图片（如果有 avatar 才渲染） */}
                      {friend.avatar && (
                        <img
                          src={friend.avatar}
                          alt={friend.title}
                          className={styles.avatar}
                          onError={(e) => {
                            // 图片加载失败时隐藏 img，占位图标会自动显示
                            e.target.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTitle}>{friend.title}</div>
                      <div className={styles.cardDescription}>{friend.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
