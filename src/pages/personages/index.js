// src/pages/personages/index.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import { useColorMode } from '@docusaurus/theme-common';
import peopleGroups from '@site/src/data/personages';
import styles from './styles.module.css';

const totalPeople = peopleGroups.reduce(
  (acc, group) => acc + group.people.length,
  0
);

/* ==========================================================
   头像组件：分层方案
   ========================================================== */
function Avatar({ src, alt, name }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.defaultAvatar}>
        <Icon icon="lucide:user" width={32} height={32} />
      </div>
      {src && !failed && (
        <img
          src={src}
          alt={alt || name}
          className={styles.avatar}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ==========================================================
   个人名片组件
   - 使用 useColorMode 获取当前实际生效的主题
   - 根据主题切换使用不同的 API 地址
   - 外层有固定比例的占位框，加载前后大小不变
   ========================================================== */
function ApiBox({ apiUrlLight, apiUrlDark }) {
  const { colorMode } = useColorMode();   // 'light' 或 'dark'，自动处理跟随系统
  const [timestamp, setTimestamp] = useState(Date.now());

  const refresh = () => setTimestamp(Date.now());

  const baseUrl = colorMode === 'dark' ? apiUrlDark : apiUrlLight;
  // 时间戳防止缓存
  const urlWithTs = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}_t=${timestamp}`;

  return (
    <div className={styles.apiBox}>
      <div className={styles.apiHeader}>
        <Icon
          icon="lucide:quote"
          width={16}
          height={16}
          className={styles.apiIcon}
        />
        <span>个人名片</span>
        <button
          className={styles.apiRefresh}
          onClick={refresh}
          aria-label="刷新"
          type="button"
        >
          <Icon icon="lucide:refresh-cw" width={14} height={14} />
        </button>
      </div>
      <div className={styles.apiContent}>
        {/* 占位框：固定比例，图片绝对定位铺满 */}
        <div className={styles.apiImageWrapper}>
          <img
            key={urlWithTs}
            src={urlWithTs}
            alt="个人名片"
            className={styles.apiImage}
            loading="lazy"
          />
        </div>
      </div>
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
        {/* ===== 页面头部 ===== */}
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
              href="mailto:contact@zhoeng.com.cn?subject=申请参选名誉人物&body=姓名：%0A称号：%0A座右铭：%0A简介：%0A头像："
              className={styles.requestButton}
            >
              <Icon icon="lucide:link-2" width={14} height={14} />
              申请参选
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

        {/* ===== 分组列表 ===== */}
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
                    <ApiBox
                      apiUrlLight={person.apiUrlLight}
                      apiUrlDark={person.apiUrlDark}
                    />
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
