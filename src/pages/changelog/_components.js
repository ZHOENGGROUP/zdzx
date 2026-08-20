import React, { useMemo } from 'react';
import { CHANGELOG_LIST, TYPE_LABEL } from '@site/src/data/changelog';

export function Changelog() {
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

  if (!grouped.length) {
    return <p>暂无更新日志。</p>;
  }

  return (
    <div>
      {grouped.map(({ year, months }) => (
        <section key={year}>
          <h2>{year}</h2>
          {months.map(({ month, items }) => (
            <section key={`${year}-${month}`}>
              <h3>{Number(month)} 月</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={`${item.date}-${item.type}-${index}`}>
                    <strong>{TYPE_LABEL[item.type] || '更新'}</strong>{' '}
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      ))}
    </div>
  );
}
