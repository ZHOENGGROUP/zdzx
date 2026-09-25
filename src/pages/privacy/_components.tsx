// src/pages/privacy/_components.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import styles from './styles.module.css';

/* ============ 联系框 ============ */
interface ContactBoxProps {
  email: string;
  text: string;
}

export function ContactBox({ email, text }: ContactBoxProps) {
  return (
    <a href={`mailto:${email}`} className={styles.contactBox}>
      <Icon
        icon="lucide:mail"
        className={styles.contactIcon}
        width={18}
        height={18}
      />
      <span className={styles.contactText}>{text}</span>
    </a>
  );
}

/* ============ 说明框 ============ */
interface InfoItem {
  icon: string;
  text: string;
}

const INFO_ITEMS: InfoItem[] = [
  { icon: 'lucide:info', text: '本政策说明我们如何收集与使用您的信息' },
  { icon: 'lucide:shield-check', text: '我们承诺严格保护您的个人隐私安全' },
  { icon: 'lucide:user-check', text: '您可以随时查阅、更正或删除您的信息' },
];

interface InfoBoxProps {
  lastUpdate: string;
}

export function InfoBox({ lastUpdate }: InfoBoxProps) {
  return (
    <div className={styles.infoBox}>
      <ul className={styles.infoList}>
        {INFO_ITEMS.map((item, idx) => (
          <li key={idx} className={styles.infoItem}>
            <Icon
              icon={item.icon}
              className={styles.infoIcon}
              width={16}
              height={16}
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      {/* 浅分割线，左右不挨边框 */}
      <div className={styles.divider} />

      {/* 最后更新时间 */}
      <div className={styles.lastUpdate}>
        <Icon
          icon="lucide:clock"
          className={styles.updateIcon}
          width={14}
          height={14}
        />
        <span>最后更新：{lastUpdate}</span>
      </div>
    </div>
  );
}

/* ============ 目录框 ============ */
export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TocBoxProps {
  toc: TocItem[];
  progress: number;
}

export function TocBox({ toc, progress }: TocBoxProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.tocBox}>
      <div className={styles.tocHeader}>
        <span className={styles.tocTitle}>目录</span>
        <span className={styles.tocProgressText}>{Math.round(progress)}%</span>
      </div>

      {/* 进度条 */}
      <div className={styles.tocProgressBar}>
        <div
          className={styles.tocProgressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 目录列表 */}
      <nav className={styles.tocNav}>
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`${styles.tocLink} ${
              styles[`tocLevel${item.level}`] || ''
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
