# 旅行相册维护说明

相册页面由 `src/content/albums` 里的 YAML 文件生成。图片可以放在仓库的
`public/gallery` 中，也可以使用阿里云 OSS 的公开图片地址。

## 新建一个摄影系列

复制 `src/content/albums/zhejiang-west-lake.yaml`，修改省份、标题和图片列表。
文件中的 `province.adcode` 必须使用对应省级行政区的行政区划代码；地图会根据
这个字段自动点亮省份。

```yaml
title: 西湖散步
slug: west-lake
province:
  name: 浙江省
  slug: zhejiang
  adcode: 330000
city: 杭州
description: 相册介绍
cover: https://img.lticket.top/zhejiang/west-lake/cover.jpg
publishedAt: 2026-08-31
photos:
  - src: https://img.lticket.top/zhejiang/west-lake/001.jpg
    width: 2400
    height: 1600
    alt: 西湖傍晚的水面
    caption: 风从北山街吹过来
    takenAt: 2026-08-20
    location: 杭州 · 西湖
```

`width` 和 `height` 要填写图片的真实像素尺寸，PhotoSwipe 会使用它们计算灯箱
布局。上传公开照片前建议移除不希望暴露的 GPS EXIF 信息。

## OSS 建议目录

```text
zhejiang/
└── west-lake/
    ├── cover.jpg
    ├── 001.jpg
    └── 002.jpg
```

完成 YAML 修改后运行 `npm run build`；构建成功再提交即可。
