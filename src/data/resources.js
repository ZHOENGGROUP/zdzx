// src/data/resources.js
const resourceGroups = [
  {
    title: '学习平台',
    description: '在线学习与课程资源',
    resources: [
      {
        title: '河北正定中学官网',
        description: '学校官方网站，获取最新资讯',
        href: 'http://www.zhengzhong.cn/home.html',
        avatar: '/img/zdzx.png',
        avatarShape: 'circle',          // circle | rounded-square | square | original
      },
      {
        title: '中政集团',
        description: '中政集团官方网站',
        href: 'https://www.zhoeng.com.cn/',
        avatar: '',
        avatarShape: 'circle',
      },
      {
        title: '帮助中心',
        description: '使用文档与常见问题',
        href: '/docs/help',
        avatar: '',
        avatarShape: 'circle',
      },
    ],
  },
  {
    title: '开发工具',
    description: '常用开发与协作工具',
    resources: [
      {
        title: 'GitHub',
        description: '代码托管与开源社区',
        href: 'https://github.com/ZHOENGGROUP/zdzx',
        avatar: '',
        avatarShape: 'circle',
      },
      {
        title: 'Docusaurus',
        description: '静态站点生成器',
        href: 'https://docusaurus.io/',
        avatar: '',
        avatarShape: 'circle',
      },
    ],
  },
];

export default resourceGroups;
