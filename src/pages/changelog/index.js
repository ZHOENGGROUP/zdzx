// src/pages/changelog/index.js
import React, { useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import { CHANGELOG_LIST, TYPE_LABEL, TYPE_COLOR } from '@site/src/data/changelog';
import styles from './styles.module.css';

export default function ChangelogPage() {
  // 按年份、月份分组并按时间倒序排列
  const grouped = useMemo(() => {
    const sorted = [...CHANGELOG_LIST].sort((a, b) => b.date.localeCompare(a.date));
    const map = {};
    for (const item of sorted) {
      const [year, month] = item.date.split('-');
      if (!map[year]) map[year] = {};
      if (!map[year][month]) map[year][month] = [];
      map[year][month].push(item);
    }
    return Object.keys(map)
      .sort((a, b) => b.localeCompare(a))
      .map((year) => ({
        year,
        months: Object.keys(map[year])
          .sort((a, b) => b.localeCompare(a))
          .map((month) => ({
            month,
            items: map[year][month],
          })),
      }));
  }, []);

  return (
    <Layout title="更新日志" description="河北正定中学 · 线上活动中心的更新日志">
      <div className="container margin-vert--lg">
        {/* 页面头部（仿友链样式） */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              <span className={styles.titleBlack}>更新</span>
              <span className={styles.titleBlue}>日志</span>
            </h1>
            <p className={styles.description}>
              <Link to="/">河北正定中学 · 线上活动中心</Link>的更新日志
            </p>
          </div>
          <div className={styles.headerRight}>
            {/* 仅保留一个统计框（记录日志条数） */}
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statIcon}>
                  <Icon icon="lucide:file-text" width={22} height={22} />
                </span>
                <div className={styles.statText}>
                  <span className={styles.statNumber}>{CHANGELOG_LIST.length}</span>
                  <span className={styles.statLabel}>日志</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 更新日志内容（宽度较窄） */}
        <div className={styles.content}>
          {grouped.map(({ year, months }) => (
            <section key={year} className={styles.yearSection}>
              <h2 className={styles.yearTitle}>{year}</h2>
              {months.map(({ month, items }) => (
                <section key={`${year}-${month}`} className={styles.monthSection}>
                  <h3 className={styles.monthTitle}>{Number(month)} 月</h3>
                  <ul className={styles.changelogList}>
                    {items.map((item, index) => (
                      <li
                        key={`${item.date}-${item.type}-${index}`}
                        className={styles.changelogItem}
                      >
                        <span
                          className={`${styles.tag} ${
                            styles[TYPE_COLOR[item.type] || 'blue']
                          }`}
                        >
                          【{TYPE_LABEL[item.type] || '更新'}】
                        </span>
                        <span
                          className={styles.changelogContent}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
