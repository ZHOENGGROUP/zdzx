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

/* ============ 说明框：标题 + 描述 ============ */
interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

const INFO_ITEMS: InfoItem[] = [
  {
    icon: 'lucide:info',
    title: '信息收集说明',
    description: '本政策说明我们如何收集与使用您的信息',
  },
  {
    icon: 'lucide:shield-check',
    title: '隐私安全承诺',
    description: '我们承诺严格保护您的个人隐私安全',
  },
  {
    icon: 'lucide:user-check',
    title: '您的权利',
    description: '您可以随时查阅、更正或删除您的信息',
  },
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
              width={20}
              height={20}
            />
            <div className={styles.infoText}>
              <div className={styles.infoTitle}>{item.title}</div>
              <div className={styles.infoDescription}>{item.description}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.divider} />

      <div className={styles.lastUpdate}>
        <Icon
          icon="lucide:clock"
          className={styles.updateIcon}
          width={16}
          height={16}
        />
        <div className={styles.updateText}>
          <div className={styles.updateLabel}>最后更新</div>
          <div className={styles.updateDate}>{lastUpdate}</div>
        </div>
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
  activeId: string;
}

export function TocBox({ toc, progress, activeId }: TocBoxProps) {
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

      <div className={styles.tocProgressBar}>
        <div
          className={styles.tocProgressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className={styles.tocNav}>
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={[
              styles.tocLink,
              styles[`tocLevel${item.level}`] || '',
              item.id === activeId ? styles.tocLinkActive : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
