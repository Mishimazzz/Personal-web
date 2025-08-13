//local host will be commented out

/** @type {import('next').NextConfig} */
module.exports = {
    output: 'export',
    images: { unoptimized: true }, // 用到 next/image 必加
    // 确保没有 basePath/assetPrefix 自定义前缀
};
