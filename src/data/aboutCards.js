const aboutCards = [
  {
    title: '河北正定中学',
    description: '河北正定中学官方网站',
    link: 'http://www.zhengzhong.cn/home.html',
    type: 'image',                    // 'icon' 或 'image'
    icon: 'lucide:school',            // 当 type='icon' 时使用
    src: '/img/zdzx.png',             // 当 type='image' 时使用
    shape: 'circle',                  // 'circle' | 'square' | 'rounded-square' | 'original'
  },
  {
    title: '中政集团',
    description: '中政集团官网',
    link: 'https://www.zhoeng.com.cn/',
    type: 'icon',
    icon: 'lucide:building-2',        // 黑色图标
    shape: 'rounded-square',
  },
  {
    title: 'GitHub',
    description: '代码托管与开源社区',
    link: 'https://github.com/ZHOENGGROUP/zdzx',
    type: 'icon',
    icon: 'lucide:github',
    shape: 'original',
  },
  {
    title: '帮助中心',
    description: '使用文档与常见问题',
    link: '/docs/help',
    type: 'icon',
    icon: 'lucide:book-open',
    shape: 'square',
  },
];

export default aboutCards;
