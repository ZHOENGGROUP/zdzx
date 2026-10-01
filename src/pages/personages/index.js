// src/pages/personages/index.js
import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import peopleGroups from '@site/src/data/personages';
import styles from './styles.module.css';

const totalPeople = peopleGroups.reduce(
  (acc, group) => acc + group.people.length,
  0
);

/* ============ 头像组件（修复重叠问题） ============ */
function Avatar({ src, alt, name }) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'

  useEffect(() => {
    // 每次 src 变化时重置状态
    setStatus(src ? 'loading' : 'error');
  }, [src]);

  if (!src || status === 'error') {
    return (
      <div className={styles.defaultAvatar}>
        <Icon icon="lucide:user" width={32} height={32} />
      </div>
    );
  }

  return (
    <>
      <img
        key={src} // 确保切换图片时重新渲染
        src={src}
        alt={alt || name}
        className={styles.avatar}
        style={{ display: status === 'loaded' ? 'block' : 'none' }}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
      {status === 'loading' && (
        <div className={styles.defaultAvatar}>
          <Icon icon="lucide:user" width={32} height={32} />
        </div>
      )}
    </>
  );
}

/* ============ API 框组件（接收每人链接） ============ */
function ApiBox({ apiUrl }) {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    fetch(apiUrl)
      .then((r) => r.json())
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch(() => {
        setQuote(null);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, [apiUrl]);

  const textContent =
    typeof quote === 'string'
      ? quote
      : quote?.text || quote?.hitokoto || quote?.content || '';

  const fromContent = quote?.from || quote?.source || '';

  return (
    <div className={styles.apiBox}>
      <div className={styles.apiHeader}>
        <Icon
          icon="lucide:quote"
          width={16}
          height={16}
          className={styles.apiIcon}
        />
        <span>每日一言</span>
        <button
          className={styles.apiRefresh}
          onClick={fetchQuote}
          aria-label="刷新"
        >
          <Icon icon="lucide:refresh-cw" width={14} height={14} />
        </button>
      </div>
      <div className={styles.apiContent}>
        {loading ? (
          <span className={styles.apiLoading}>加载中…</span>
        ) : textContent ? (
          <>
            <p className={styles.apiText}>{textContent}</p>
            {fromContent && (
              <p className={styles.apiFrom}>—— {fromContent}</p>
            )}
          </>
        ) : (
          <p className={styles.apiText}>暂无法加载内容</p>
        )}
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
                      <div className={styles.avatarWrapper}>
                        <Avatar
                          src={person.avatar}
                          alt={person.name}
                          name={person.name}
                        />
                      </div>
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
                    <ApiBox apiUrl={person.apiUrl} />
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
