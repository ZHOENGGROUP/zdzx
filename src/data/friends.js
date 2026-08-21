// src/data/friends.js
const friendGroups = [
  {
    title: '河北正定中学',
    description: '河北正定中学官方网站',
    friends: [
      {
        title: '校本部',
        description: '河北正定中学官网 - 校本部',
        href: 'http://www.zhengzhong.cn/home.html',
        avatar: 'https://zdzx.zhoeng.com.cn/img/zdzx.png',
        avatarShape: 'original',      // 默认圆形，可改为 'square' 或 'original'
      },
      {
        title: '东校区',
        description: '河北正定中学官网 - 东校区',
        href: 'http://dongxiaoqu.zhengzhong.cn/',
        avatar: 'https://zdzx.zhoeng.com.cn/img/zdzx.png',
        avatarShape: 'original',
      },
      {
        title: '国际部',
        description: '河北正定中学官网 - 国际部',
        href: 'http://dongxiaoqu.zhengzhong.cn/intro/29.html',
        avatar: 'https://zdzx.zhoeng.com.cn/img/zdzx.png',
        avatarShape: 'original',
      },
    ],
  },
  {
    title: '中政集团',
    description: '中政集团官方网站',
    friends: [
      {
        title: '中政集团',
        description: '中政集团官网',
        href: 'https://www.zhoeng.com.cn/',
        avatar: '',
        avatarShape: 'circle',       // 无头像时显示默认占位图标
      },
    ],
  },
];

export default friendGroups;
