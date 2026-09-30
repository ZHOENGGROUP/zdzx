// src/data/people.js
const peopleGroups = [
  {
    title: '名誉顾问',
    description: '为活动中心提供长期指导与支持',
    people: [
      {
        name: '张明远',
        title: '名誉顾问 · 创始人',
        avatar: '', // 留空则显示默认头像
        motto: '行胜于言，知行合一。',
        descriptions: [
          '长期从事基础教育工作，对青少年成长有深刻理解。',
          '曾主持多项教育创新项目，成果获省级表彰。',
          '现任活动中心名誉顾问，参与重大决策与规划。',
        ],
      },
      {
        name: '李静怡',
        title: '名誉顾问 · 学术指导',
        avatar: 'https://zdzx.zhoeng.com.cn/img/zdzx.png',
        motto: '教之以事，喻之以德。',
        descriptions: [
          '河北正定中学校友，长期关注母校发展。',
          '在高校从事教育学研究，发表论文数十篇。',
          '为活动中心提供学术方向与课程设计指导。',
        ],
      },
    ],
  },
  {
    title: '名誉成员',
    description: '为活动中心做出突出贡献的伙伴',
    people: [
      {
        name: '王思远',
        title: '名誉成员 · 技术顾问',
        avatar: '',
        motto: '让技术成为连接你我的桥梁。',
        descriptions: [
          '主导活动中心网站及线上平台的架构与开发。',
          '推动多项开源项目在校内的落地应用。',
          '持续为线上活动提供技术支持与优化建议。',
        ],
      },
      {
        name: '陈佳琪',
        title: '名誉成员 · 活动策划',
        avatar: '',
        motto: '每一次相聚，都值得被认真对待。',
        descriptions: [
          '策划并执行多场线上线下融合活动。',
          '擅长活动流程设计与用户互动体验优化。',
          '为活动中心建立了一套完整的活动运营规范。',
        ],
      },
    ],
  },
];

export default peopleGroups;
