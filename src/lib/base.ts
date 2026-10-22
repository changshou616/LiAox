// EXPORTS: BASE
// 应用根路径前缀：发布后应用挂在 /app/app_xxx 子路径，本地开发为空。
// 手写的静态资源路径一律用 BASE 拼接，禁止裸根路径。
const rawBase = import.meta.env.MIAODA_CLIENT_BASE_PATH || '';
export const BASE = rawBase.replace(/\/$/, '') + '/';
