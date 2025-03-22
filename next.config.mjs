/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true, // 启用 CSS 优化
    },
    env: {
        NEXT_FONT_GOOGLE_IGNORE: "true", // 忽略 Google Fonts
    },
    output: "export", // 强制静态导出
    distDir: "out", // 导出到 `out/` 目录
    images: {
        unoptimized: true, // 让 Next.js 图片支持 GitHub Pages
    },
    reactStrictMode: true,
};
module.exports = nextConfig;
export default nextConfig;