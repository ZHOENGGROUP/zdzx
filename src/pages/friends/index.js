// src/pages/friends/index.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import friendGroups from '@site/src/data/friends';
import styles from './styles.module.css';

const totalFriends = friendGroups.reduce((acc, group) => acc + group.friends.length, 0);

// 根据 avatarShape 返回对应的 CSS 类名
const getAvatarShapeClass = (shape) => {
  switch (shape) {
    case 'square':
      return styles.squareAvatar;
    case 'original':
      return styles.originalAvatar;
    case 'rounded-square':
      return styles.roundedSquareAvatar;
    case 'circle':
    default:
      return styles.circleAvatar;
  }
};

/**
 * 单个卡片组件
 * 使用状态管理图片加载失败的情况：只有图片缺失或失败时才显示占位符
 */
function FriendCard({ friend }) {
  const [imageError, setImageError] = useState(false);
  const showPlaceholder = !friend.avatar || imageError;

  return (
    <a
      href={friend.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.card}>
        <div className={styles.avatarWrapper}>
          {showPlaceholder ? (
            <div className={`${styles.avatarPlaceholder} ${getAvatarShapeClass(friend.avatarShape)}`}>
              <Icon icon="lucide:user" width={24} height={24} />
            </div>
          ) : (
            <img
              src={friend.avatar}
              alt={friend.title}
              className={`${styles.avatar} ${getAvatarShapeClass(friend.avatarShape)}`}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{friend.title}</div>
          <div className={styles.cardDescription}>{friend.description}</div>
        </div>
      </div>
    </a>
  );
}

export default function Friends() {
  return (
    <Layout title="友链" description="友情链接">
      <div className="container margin-vert--lg">
        {/* 页面头部 */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              <span className={styles.titleBlack}>网站</span>
              <span className={styles.titleBlue}>友链</span>
            </h1>
            <p className={styles.description}>
              <Link to="/">河北正定中学 · 线上活动中心</Link>的友情链接
            </p>
          </div>
          <div className={styles.headerRight}>
            <a
              href="mailto:your-email@example.com?subject=申请友链&body=标题：%0A描述：%0A链接：%0A头像："
              className={styles.requestButton}
            >
              <Icon icon="lucide:link-2" width={14} height={14} />
              申请友链
            </a>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:folder" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>{friendGroups.length}</span>
                  <span className={styles.statLabel}>分类</span>
                </div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:users" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>{totalFriends}</span>
                  <span className={styles.statLabel}>友链</span>
                </div>
              </div>
            </div>
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
                <FriendCard key={friendIndex} friend={friend} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
