// src/pages/resources/index.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import resourceGroups from '@site/src/data/resources';
import styles from './styles.module.css';

const totalResources = resourceGroups.reduce((acc, group) => acc + group.resources.length, 0);

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

function ResourceCard({ resource }) {
  const [imageError, setImageError] = useState(false);
  const showPlaceholder = !resource.avatar || imageError;

  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.card}>
        <div className={styles.avatarWrapper}>
          {showPlaceholder ? (
            <div className={`${styles.avatarPlaceholder} ${getAvatarShapeClass(resource.avatarShape)}`}>
              <Icon icon="lucide:box" width={24} height={24} />
            </div>
          ) : (
            <img
              src={resource.avatar}
              alt={resource.title}
              className={`${styles.avatar} ${getAvatarShapeClass(resource.avatarShape)}`}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{resource.title}</div>
          <div className={styles.cardDescription}>{resource.description}</div>
        </div>
      </div>
    </a>
  );
}

export default function Resources() {
  return (
    <Layout title="精选资源" description="河北正定中学 · 线上活动中心的精选资源">
      <div className="container margin-vert--lg">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              <span className={styles.titleBlack}>精选</span>
              <span className={styles.titleBlue}>资源</span>
            </h1>
            <p className={styles.description}>
              <Link to="/">河北正定中学 · 线上活动中心</Link>的精选资源
            </p>
          </div>
          <div className={styles.headerRight}>
            <a
              href="mailto:your-email@example.com?subject=申请添加资源&body=标题：%0A描述：%0A链接：%0A图标："
              className={styles.requestButton}
            >
              <Icon icon="lucide:plus-circle" width={14} height={14} />
              申请添加
            </a>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:folder" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>{resourceGroups.length}</span>
                  <span className={styles.statLabel}>分类</span>
                </div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:package" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>{totalResources}</span>
                  <span className={styles.statLabel}>资源</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {resourceGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.group}>
            <div className={styles.groupHeader}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              {group.description && (
                <p className={styles.groupDescription}>{group.description}</p>
              )}
            </div>
            <div className={styles.resourceList}>
              {group.resources.map((resource, resourceIndex) => (
                <ResourceCard key={resourceIndex} resource={resource} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
