# 多语言功能使用指南 / Multi-Language Guide

## 功能概述 / Overview

你的网站现在支持 **三种语言**:
- **英文 (English)** - 默认语言
- **中文 (简体中文)**
- **马来语 (Bahasa Melayu)**

## URL 结构 / URL Structure

```
https://justintan.my           → 英文 (默认)
https://justintan.my/zh        → 中文
https://justintan.my/ms        → 马来语
```

## 已实现的功能 / Implemented Features

### ✅ 1. 语言切换器 (Language Switcher)
- 位置:导航栏右上角的地球图标
- 支持:桌面端和移动端
- 功能:点击即可在三种语言间切换

### ✅ 2. 自动路由 (Automatic Routing)
- 中间件会根据用户浏览器语言自动重定向
- URL 结构清晰:默认语言不显示前缀,其他语言显示语言代码

### ✅ 3. SEO 优化 (SEO Optimization)
每种语言都有独立的 SEO 元数据:
- **标题 (Title)** - 针对每种语言优化
- **描述 (Description)** - 本地化内容
- **Open Graph** - 社交媒体分享优化
- **hreflang 标签** - 帮助搜索引擎识别语言版本

### ✅ 4. 已翻译的内容区域
- 导航菜单
- Hero Section (标题和副标题)
- 价值主张 (Value Proposition)
- 服务介绍 (Services)
- 技能、经验、项目、博客标题
- 联系部分
- Footer

## 文件结构 / File Structure

```
/
├── i18n.ts                          # i18n 配置
├── middleware.ts                    # 语言路由中间件
├── messages/
│   ├── en.json                      # 英文翻译
│   ├── zh.json                      # 中文翻译
│   └── ms.json                      # 马来语翻译
├── app/
│   └── [locale]/                    # 动态语言路由
│       ├── layout.tsx               # 多语言 Layout
│       └── page.tsx                 # 主页
└── components/
    ├── LanguageSwitcher.tsx         # 语言切换器组件
    └── Portfolio.tsx                # 已更新支持多语言

```

## 如何添加新翻译 / How to Add New Translations

### 步骤 1: 编辑翻译文件

在 `messages/` 目录下找到对应语言的 JSON 文件:

**`messages/en.json`** (英文)
```json
{
  "nav": {
    "about": "About",
    "experience": "Experience"
  },
  "hero": {
    "title": "Building High-Performance Digital Solutions"
  }
}
```

**`messages/zh.json`** (中文)
```json
{
  "nav": {
    "about": "关于",
    "experience": "经验"
  },
  "hero": {
    "title": "打造高性能数字化解决方案"
  }
}
```

**`messages/ms.json`** (马来语)
```json
{
  "nav": {
    "about": "Tentang",
    "experience": "Pengalaman"
  },
  "hero": {
    "title": "Membina Penyelesaian Digital Berprestasi Tinggi"
  }
}
```

### 步骤 2: 在组件中使用翻译

```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

## 如何添加新语言 / How to Add a New Language

### 1. 更新 `i18n.ts`
```typescript
export const locales = ['en', 'zh', 'ms', 'id'] as const; // 添加印尼语
```

### 2. 创建翻译文件
创建 `messages/id.json` 并添加所有翻译

### 3. 更新 `LanguageSwitcher.tsx`
```typescript
const languageNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ms: "Bahasa Melayu",
  id: "Bahasa Indonesia" // 新增
};

const languageFlags: Record<Locale, string> = {
  en: "🇬🇧",
  zh: "🇨🇳",
  ms: "🇲🇾",
  id: "🇮🇩" // 新增
};
```

### 4. 更新 SEO 元数据
在 `app/[locale]/layout.tsx` 的 `metadataByLocale` 中添加新语言的 SEO 配置

## SEO 关键词策略 / SEO Keyword Strategy

### 英文 (English)
- AI-Integrated App Development Malaysia
- AI-Powered Web Developer Singapore
- ChatGPT Integration iOS Developer
- Next.js AI-Enhanced Development Services
- Rapid Prototyping Developer with AI Tools

### 中文 (简体中文)
- 马来西亚 AI 集成应用开发
- 新加坡 AI 驱动 Web 开发者
- iOS ChatGPT 集成开发
- Next.js AI 增强开发服务
- AI 工具快速原型开发

### 马来语 (Bahasa Melayu)
- Pembangunan Aplikasi AI Malaysia
- Pembangun Web AI Singapura
- Integrasi ChatGPT iOS
- Perkhidmatan Pembangunan Next.js AI
- Prototaip Pantas dengan Alat AI

## 测试清单 / Testing Checklist

- [ ] 访问 `http://localhost:3000` 查看英文版本
- [ ] 访问 `http://localhost:3000/zh` 查看中文版本
- [ ] 访问 `http://localhost:3000/ms` 查看马来语版本
- [ ] 使用语言切换器在三种语言间切换
- [ ] 检查每个页面的 SEO 元数据
- [ ] 测试移动端语言切换器
- [ ] 验证所有翻译是否正确显示

## 部署注意事项 / Deployment Notes

### Vercel 部署 (推荐)
Vercel 会自动识别 next-intl 配置,无需额外设置。

### 其他平台
确保以下环境变量正确配置:
- `NODE_ENV=production`
- 确保 `middleware.ts` 正确部署

## 性能优化 / Performance Optimization

1. **翻译文件分离加载**: 每种语言的翻译文件只在需要时加载
2. **服务端渲染 (SSR)**: SEO 友好,首屏加载速度快
3. **静态生成 (SSG)**: 可以为每种语言预渲染静态页面

## 故障排查 / Troubleshooting

### 问题 1: 翻译不显示
**解决方案**: 检查 JSON 文件格式是否正确,键名是否匹配

### 问题 2: 语言切换失败
**解决方案**: 清除浏览器缓存,检查 middleware.ts 配置

### 问题 3: SEO 元数据未更新
**解决方案**: 检查 `app/[locale]/layout.tsx` 的 `generateMetadata` 函数

## 下一步建议 / Next Steps

1. **添加动态内容翻译**: 为项目描述、博客文章等内容添加多语言支持
2. **用户偏好记忆**: 使用 Cookie 记住用户的语言选择
3. **RTL 支持**: 如需支持阿拉伯语等 RTL 语言,需额外配置
4. **内容管理系统 (CMS)**: 集成 Contentful 或 Strapi 管理多语言内容

## 联系支持 / Contact Support

如有问题,请查看 [next-intl 官方文档](https://next-intl-docs.vercel.app/)

---

**制作者**: Claude Code
**版本**: 1.0.0
**最后更新**: 2025-11-19
