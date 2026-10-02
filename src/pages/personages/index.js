// src/pages/personages/index.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import peopleGroups from '@site/src/data/personages';
import styles from './styles.module.css';

const totalPeople = peopleGroups.reduce(
  (acc, group) => acc + group.people.length,
  0
);

/* ============ 头像组件 ============ */
function Avatar({ src, alt, name }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // 图片能否显示：有 src、未失败、且已加载完成
  const showImage = src && !failed && loaded;
  // 是否需要显示占位图标：无 src、失败、或尚未加载完成
  const showPlaceholder = !showImage;

  return (
    <div className={styles.avatarWrapper}>
      {/* 图片：始终渲染，用 opacity 控制可见，确保能触发 onLoad */}
      {src && !failed && (
        <img
          src={src}
          alt={alt || name}
          className={styles.avatar}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      )}

      {/* 占位图标：显示在图片上层，加载成功后自动卸载 */}
      {showPlaceholder && (
        <div className={styles.defaultAvatar}>
          <Icon icon="lucide:user" width={32} height={32} />
        </div>
      )}
    </div>
  );
}

/* ============ 个人名片组件 ============ */
function ProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileItems}>
        {profile.items.map((item, i) => (
          <div key={i} className={styles.profileItem}>
            <span className={styles.profileIconBox}>
              <Icon
                icon={item.icon}
                width={16}
                height={16}
                className={styles.profileIcon}
              />
            </span>
            <span className={styles.profileLabel}>{item.label}</span>
            <span className={styles.profileValue}>{item.value}</span>
          </div>
        ))}
      </div>

      {profile.tags && profile.tags.length > 0 && (
        <div className={styles.profileTags}>
          {profile.tags.map((tag, i) => (
            <span key={i} className={styles.profileTag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============ 页面主组件 ============ */
export default function Personages() {
  return (
    <Layout
      title="名誉人物"
      description="河北正定中学 · 线上活动中心的名誉人物"
    >
      <div className="container margin-vert--lg">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              <span className={styles.titleBlack}>名誉</span>
              <span className={styles.titleBlue}>人物</span>
            </h1>
            <p className={styles.description}>
              <Link to="/">河北正定中学 · 线上活动中心</Link>的名誉人物
            </p>
          </div>
          <div className={styles.headerRight}>
            <a
              href="mailto:contact@zhoeng.com.cn?subject=申请加入名誉人物&body=姓名：%0A称号：%0A座右铭：%0A简介：%0A头像："
              className={styles.requestButton}
            >
              <Icon icon="lucide:link-2" width={14} height={14} />
              申请加入
            </a>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:folder" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>
                    {peopleGroups.length}
                  </span>
                  <span className={styles.statLabel}>分类</span>
                </div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:user-star" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>{totalPeople}</span>
                  <span className={styles.statLabel}>人物</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {peopleGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.group}>
            <div className={styles.groupHeader}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              {group.description && (
                <p className={styles.groupDescription}>
                  {group.description}
                </p>
              )}
            </div>
            <div className={styles.personList}>
              {group.people.map((person, personIndex) => (
                <div key={personIndex} className={styles.personCard}>
                  <div className={styles.personLeft}>
                    <div className={styles.personHeader}>
                      <Avatar
                        src={person.avatar}
                        alt={person.name}
                        name={person.name}
                      />
                      <div className={styles.personInfo}>
                        <h3 className={styles.personName}>{person.name}</h3>
                        <p className={styles.personTitle}>{person.title}</p>
                      </div>
                    </div>

                    {person.motto && (
                      <div className={styles.personMotto}>
                        <Icon
                          icon="lucide:quote"
                          width={14}
                          height={14}
                          className={styles.mottoIcon}
                        />
                        <span>{person.motto}</span>
                      </div>
                    )}

                    {person.descriptions &&
                      person.descriptions.length > 0 && (
                        <ul className={styles.personDescriptions}>
                          {person.descriptions.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      )}
                  </div>

                  <div className={styles.personRight}>
                    <ProfileCard profile={person.profile} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
