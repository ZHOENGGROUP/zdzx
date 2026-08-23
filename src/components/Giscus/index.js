import React, { useEffect } from 'react';

export default function Giscus() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'ZHOENGGROUP/zdzx');
    script.setAttribute('data-repo-id', 'R_kgDOT78qYQ');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOT78qYc4DD_bD');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'zh-CN');

    const container = document.getElementById('giscus-container');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return <div id="giscus-container" />;
}
