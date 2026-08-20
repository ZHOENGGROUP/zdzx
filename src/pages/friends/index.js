// src/pages/friends/index.js
import React from 'react';
import Layout from '@theme/Layout';
import friendGroups from '@site/src/data/friends';
import styles from './styles.module.css';

export default function Friends() {
  return (
    <Layout title="友链" description="友情链接">
      <div className="container margin-vert--lg">
        {/* 页面头部 */}
        <div className={styles.header}>
          <h1 className={styles.title}>网站<b>友链</b></h1>
          <p className={styles.description}>
            <Link to="/">河北正定中学 · 线上活动中心</Link>的友情链接
          </p>
        </div>

        {/* 遍历所有分组 */}
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
                    {/* 如果有头像可以展示 */}
                    {/* {friend.avatar && <img src={friend.avatar} alt={friend.title} className={styles.avatar} />} */}
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
