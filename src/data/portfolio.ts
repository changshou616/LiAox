// EXPORTS:
//   IProject{id,reel,title,titleEn,category,ratio,poster,video?,duration,year,playCount,desc}
//   IStrength{id,no,icon,title,titleEn,desc}
//   IStat{value,label,note}
//   IContactItem{id,label,value,type}
//   NAV_ITEMS, PROJECTS, STRENGTHS, STATS, CONTACTS, HERO_STATS
import { BASE } from '@/lib/base';

export interface IProject {
  id: number;
  reel: string;
  title: string;
  titleEn: string;
  category: string;
  ratio: '9:16' | '16:9';
  poster: string;
  video?: string;
  duration: string;
  year: string;
  playCount: string;
  desc: string;
}

export interface IStrength {
  id: number;
  no: string;
  icon: string;
  title: string;
  titleEn: string;
  desc: string;
}

export interface IStat {
  value: string;
  label: string;
}

export interface IContactItem {
  id: string;
  label: string;
  value: string;
  type: 'mail' | 'wechat' | 'douyin' | 'bilibili';
}

export const NAV_ITEMS = [
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'strengths', label: 'STRENGTHS' },
  { id: 'contact', label: 'CONTACT' },
] as const;

// REEL 01-03 已替换为用户真实作品（曲线变速教程 / 世界地标旅行混剪 / 从雪山到海边），
// 其中 REEL 01 带抖音后台真实数据；其余项目、统计数字与联系方式仍为示例占位，待用户提供真实资料后替换。
export const HERO_STATS: IStat[] = [
  { value: '200+', label: '作品' },
  { value: '8000W+', label: '累计播放' },
  { value: '120+', label: '服务客户' },
  { value: '50+', label: '百万爆款' },
];

export const STATS: IStat[] = [
  { value: '200+', label: '完成项目' },
  { value: '8000W+', label: '全网播放' },
  { value: '120+', label: '合作品牌' },
  { value: '50+', label: '百万爆款' },
];

export const PROJECTS: IProject[] = [
  {
    id: 1,
    reel: 'REEL 01',
    title: '曲线变速高级玩法',
    titleEn: 'SPEED RAMP MASTERCLASS',
    category: '剪辑技巧教程',
    ratio: '9:16',
    poster: `${BASE}images/poster-speedramp.jpg`,
    video: `${BASE}videos/project-speedramp.mp4`,
    duration: '30"',
    year: '2026',
    playCount: '10.9W 播放',
    desc: '抖音爆款剪辑教程：从曲线变速到蒙太奇节奏，新手一看就懂。单支作品 10.9W 播放 · 2197 赞 · 1872 收藏，完播率 4.2%，获 8.6 万流量激励。',
  },
  {
    id: 2,
    reel: 'REEL 02',
    title: '世界漫游',
    titleEn: 'WANDER WORLD',
    category: '旅行混剪',
    ratio: '16:9',
    poster: `${BASE}images/poster-wander.jpg`,
    video: `${BASE}videos/project-wander.mp4`,
    duration: '30"',
    year: '2026',
    playCount: '新作',
    desc: '用自己搜集的图片生成的世界地标旅行混剪：巴黎埃菲尔铁塔、纽约自由女神像与郊野公路，把静态照片变成流动的电影。',
  },
  {
    id: 3,
    reel: 'REEL 03',
    title: '从雪山到海边',
    titleEn: 'SNOW TO SEA',
    category: '旅行短片',
    ratio: '16:9',
    poster: `${BASE}images/poster-snowtosea.jpg`,
    video: `${BASE}videos/project-snowtosea.mp4`,
    duration: '56"',
    year: '2026',
    playCount: '新作',
    desc: '一场说走就走的旅行：从雪山脚下出发，穿过覆雪小镇与山峦，一路抵达海边。用提供的素材制作完成的叙事短片。',
  },
  {
    id: 4,
    reel: 'REEL 04',
    title: '霓虹驰行',
    titleEn: 'NEON DRIVE',
    category: '汽车品牌广告',
    ratio: '16:9',
    poster: `${BASE}images/poster-neoncar.jpg`,
    video: `${BASE}videos/project-neoncar.mp4`,
    duration: '45"',
    year: '2025',
    playCount: '2100W+ 播放',
    desc: '赛博都市夜行跑车广告，低机位跟拍与湿路霓虹反射，暗调高对比的视觉锤。',
  },
  {
    id: 5,
    reel: 'REEL 05',
    title: '东方新序',
    titleEn: 'EASTERN SEQUENCE',
    category: '新中式品牌片',
    ratio: '9:16',
    poster: `${BASE}images/poster-fashion.jpg`,
    duration: '60"',
    year: '2024',
    playCount: '1800W+ 播放',
    desc: '新中式服饰品牌片，竹林逆光与米白立领的克制美学，建立高级品牌记忆点。',
  },
  {
    id: 6,
    reel: 'REEL 06',
    title: '山湖之间',
    titleEn: 'BETWEEN HILLS',
    category: '旅行风光 Vlog',
    ratio: '16:9',
    poster: `${BASE}images/poster-lake.jpg`,
    video: `${BASE}videos/project-lake.mp4`,
    duration: '3\'20"',
    year: '2024',
    playCount: '1500W+ 播放',
    desc: '晨雾山湖的横屏旅行片，金色光束洒向湖面的自然光运镜，低饱和电影质感。',
  },
  {
    id: 7,
    reel: 'REEL 07',
    title: '深夜食堂',
    titleEn: 'MIDNIGHT RAMEN',
    category: '美食短片',
    ratio: '16:9',
    poster: `${BASE}images/poster-noodles.jpg`,
    duration: '40"',
    year: '2024',
    playCount: '2600W+ 播放',
    desc: '暗调餐厅里的一碗热汤面，蒸汽与暖光特写，把食欲拍成电影。',
  },
  {
    id: 8,
    reel: 'REEL 08',
    title: '雨夜独行',
    titleEn: 'WALK IN RAIN',
    category: '剧情短片',
    ratio: '9:16',
    poster: `${BASE}images/poster-rain.jpg`,
    duration: '2\'10"',
    year: '2023',
    playCount: '980W+ 播放',
    desc: '霓虹雨夜的撑伞剪影，橙蓝冷暖对撞的竖屏情绪短片。',
  },
];

export const STRENGTHS: IStrength[] = [
  {
    id: 1,
    no: '01',
    icon: 'clapperboard',
    title: '创意策划',
    titleEn: 'CREATIVE',
    desc: '从选题、脚本到分镜，把「能让人停下来」的钩子写进第一秒。',
  },
  {
    id: 2,
    no: '02',
    icon: 'cpu',
    title: 'AI 全流程工具链',
    titleEn: 'AI WORKFLOW',
    desc: '即梦、剪映、Seedance、Libtv 的组合打法，单兵也能跑完整条产线。',
  },
  {
    id: 3,
    no: '03',
    icon: 'trending',
    title: '短视频运营',
    titleEn: 'OPERATIONS',
    desc: '账号矩阵、选题库与发布节奏管理，让爆款从偶然变成可复制。',
  },
  {
    id: 4,
    no: '04',
    icon: 'video',
    title: '导演与调度',
    titleEn: 'DIRECTION',
    desc: '现场导演、灯光与演员沟通，小团队一样能拍出大制作感。',
  },
  {
    id: 5,
    no: '05',
    icon: 'scissors',
    title: '后期与调色',
    titleEn: 'POST & COLOR',
    desc: '剪辑节奏、声音设计与电影感调色，成片质感始终在线。',
  },
  {
    id: 6,
    no: '06',
    icon: 'chart',
    title: '数据驱动迭代',
    titleEn: 'DATA-DRIVEN',
    desc: '完播率、转化与 A/B 测试复盘，用数据说话，为下一支片提速。',
  },
];

export const CONTACTS: IContactItem[] = [
  { id: 'mail', label: '邮箱', value: '3105627431@qq.com', type: 'mail' },
  { id: 'wechat', label: '微信', value: 'Li_October-Sco28', type: 'wechat' },
  { id: 'douyin', label: '抖音', value: '53385042245', type: 'douyin' },
  { id: 'bilibili', label: '哔哩哔哩', value: '@AI编导', type: 'bilibili' },
];

export interface IJob {
  id: number;
  company: string;
  position: string;
  period: string;
}

export interface IInfoItem {
  label: string;
  value: string;
}

// 第二屏「个人经历」数据：身份/服务方向/联系方式与数据为真实信息；标签与工作经历为占位，待用户补充真实信息。
export const ABOUT_INFO: IInfoItem[] = [
  { label: '当前身份', value: 'AI编导' },
  { label: '服务方向', value: '视频剪辑 / 短视频运营' },
  { label: '联系电话', value: '189 0394 7109' },
  { label: '邮箱', value: '3105627431@qq.com' },
];

export const ABOUT_STATS: IStat[] = [
  { value: '3+', label: '年经验' },
  { value: '30+', label: '服务项目' },
  { value: '500+', label: '合作客户' },
];

export const TAGS: string[] = ['AI 编导', '短视频运营', 'AIGC 全流程', '电影感调色', '数据驱动'];

// 工作经历时间线（占位：公司/职位/时间待用户提供真实信息替换）
export const WORK_EXPERIENCE: IJob[] = [
  { id: 1, company: '公司名称一', position: '职位', period: '2025.01 — 至今' },
  { id: 2, company: '公司名称二', position: '职位', period: '2023.06 — 2024.12' },
  { id: 3, company: '公司名称三', position: '职位', period: '2022.07 — 2023.05' },
];
