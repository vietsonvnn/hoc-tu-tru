# Hướng dẫn Setup Dự án Học Tứ Trụ

> Tài liệu chi tiết về cách setup dự án từ đầu, bao gồm GitHub và Cloudflare Pages deployment

## Mục lục
- [1. Setup Dự án Local](#1-setup-dự-án-local)
- [2. Cấu trúc Dự án](#2-cấu-trúc-dự-án)
- [3. Setup GitHub Repository](#3-setup-github-repository)
- [4. Deploy lên Cloudflare Pages](#4-deploy-lên-cloudflare-pages)
- [5. Troubleshooting](#5-troubleshooting)

---

## 1. Setup Dự án Local

### 1.1. Khởi tạo dự án Vite + React + TypeScript

```bash
# Tạo project mới
npm create vite@latest hoc-tu-tru -- --template react-ts

# Di chuyển vào thư mục project
cd hoc-tu-tru

# Cài đặt dependencies
npm install
```

### 1.2. Cài đặt Tailwind CSS v3

```bash
# Cài Tailwind và dependencies
npm install -D tailwindcss@^3 postcss autoprefixer

# Tạo config files
npx tailwindcss init -p
```

**Cấu hình `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kim: {
          DEFAULT: '#d1d1d1',
          dark: '#9e9e9e',
        },
        moc: {
          DEFAULT: '#4caf50',
          dark: '#388e3c',
        },
        thuy: {
          DEFAULT: '#03a9f4',
          dark: '#0277bd',
        },
        hoa: {
          DEFAULT: '#f44336',
          dark: '#d32f2f',
        },
        tho: {
          DEFAULT: '#ff9800',
          dark: '#f57c00',
        },
      },
    },
  },
  plugins: [],
}
```

**Cập nhật `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .perspective-1000 {
    perspective: 1000px;
  }

  .preserve-3d {
    transform-style: preserve-3d;
  }

  .backface-hidden {
    backface-visibility: hidden;
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-transparent;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-400 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500;
}
```

### 1.3. Cài đặt Framer Motion và Lucide Icons

```bash
# Animation library
npm install framer-motion

# Icon library
npm install lucide-react
```

### 1.4. Test chạy local

```bash
npm run dev
```

Mở browser tại `http://localhost:5173`

---

## 2. Cấu trúc Dự án

### 2.1. Folder Structure

```
hoc-tu-tru/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── NguHanhCard.tsx
│   │   ├── BonMuaGrid.tsx
│   │   └── QuanHeTable.tsx
│   ├── data/           # Data files
│   │   ├── nguHanh.ts
│   │   └── quanHeNguHanh.ts
│   ├── pages/          # Page components
│   │   └── Home.tsx
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── utils/          # Utility functions
│   │   ├── colors.ts
│   │   ├── localStorage.ts
│   │   └── nguHanhRelations.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── LY_THUYET_NGU_HANH.md
└── SETUP_GUIDE.md (file này)
```

### 2.2. TypeScript Configuration

**LƯU Ý QUAN TRỌNG**: Dùng `import type` cho type imports

```typescript
// ❌ SAI - Sẽ bị lỗi với verbatimModuleSyntax
import { NguHanhData } from '../types';

// ✅ ĐÚNG
import type { NguHanhData } from '../types';
```

---

## 3. Setup GitHub Repository

### 3.1. Tạo SSH Key (nếu chưa có)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add SSH key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
```

### 3.2. Add SSH Key vào GitHub

1. Copy nội dung từ `cat ~/.ssh/id_ed25519.pub`
2. Vào GitHub → Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste key và save

### 3.3. Khởi tạo Git Repository

```bash
# Khởi tạo git
git init

# Tạo .gitignore nếu chưa có
echo "node_modules
dist
.DS_Store
*.log" > .gitignore

# Add tất cả files
git add .

# Commit đầu tiên
git commit -m "Initial commit: Học Tứ Trụ project setup"
```

### 3.4. Tạo Repository trên GitHub

1. Vào GitHub → Click "New repository"
2. Đặt tên: `hoc-tu-tru`
3. **KHÔNG** tick "Initialize with README" (vì đã có local repo)
4. Click "Create repository"

### 3.5. Connect Local với GitHub

```bash
# Add remote origin (dùng SSH)
git remote add origin git@github.com:USERNAME/hoc-tu-tru.git

# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push lên GitHub
git push -u origin main
```

### 3.6. Verify

```bash
# Kiểm tra remote
git remote -v

# Kết quả mong đợi:
# origin  git@github.com:USERNAME/hoc-tu-tru.git (fetch)
# origin  git@github.com:USERNAME/hoc-tu-tru.git (push)
```

### 3.7. Workflow sau này

```bash
# Sau mỗi lần code
git add .
git commit -m "Your commit message"
git push

# Cloudflare sẽ tự động deploy khi push lên main branch
```

---

## 4. Deploy lên Cloudflare Pages

### 4.1. Tạo Cloudflare Pages Project

1. Login vào [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Vào **Workers & Pages**
3. Click **Create application**
4. Chọn tab **Pages**
5. Click **Connect to Git**

### 4.2. Connect GitHub Repository

1. Click **GitHub** → Authorize Cloudflare Pages
2. Chọn repository: `hoc-tu-tru`
3. Click **Begin setup**

### 4.3. Configure Build Settings

**⚠️ CỰC KỲ QUAN TRỌNG:**

```
Project name: hoc-tu-tru (hoặc tên bạn muốn)
Production branch: main
```

**Build settings:**
```
Framework preset: Vite
Build command: npm run build
Build output directory: /dist
Root directory: /  ← QUAN TRỌNG: Phải là root (/)!
```

**Environment variables:**
- Không cần set gì (dùng default Node version)

### 4.4. Deploy

1. Click **Save and Deploy**
2. Đợi build (~2-3 phút)
3. Sau khi build xong, sẽ có URL dạng: `https://hoc-tu-tru.pages.dev`

### 4.5. Setup Custom Domain

#### Bước 1: Add Custom Domain trong Cloudflare Pages

1. Vào Pages → **Settings** → **Custom domains**
2. Click **Setup a custom domain**
3. Nhập: `tutru.checkvarip.pro`
4. Click **Continue**

#### Bước 2: Add DNS Record

Cloudflare sẽ tự động hướng dẫn, nhưng về cơ bản:

1. Vào **DNS** → **Records** (trong Cloudflare Dashboard)
2. Add CNAME record:
   - **Type:** `CNAME`
   - **Name:** `tutru`
   - **Target:** `hoc-tu-tru.pages.dev`
   - **Proxy status:** Proxied (🟠 orange cloud)
   - **TTL:** Auto

3. Click **Save**

#### Bước 3: Verify

- Đợi DNS propagate (~5-10 phút, có thể nhanh hơn)
- Test bằng cách mở `https://tutru.checkvarip.pro`

### 4.6. Auto-Deploy Setup

✅ **Đã tự động setup!**

Mỗi lần bạn `git push` lên branch `main`:
- Cloudflare tự động detect changes
- Trigger build mới
- Deploy lên production

**Xem deploy history:**
- Pages → **Deployments** tab

---

## 5. Troubleshooting

### 5.1. ❌ Lỗi: TypeScript Import Error

**Lỗi:**
```
error TS1484: 'NguHanhData' is a type and must be imported using
a type-only import when 'verbatimModuleSyntax' is enabled
```

**Giải pháp:**
```typescript
// Đổi tất cả type imports từ:
import { NguHanhData } from '../types';

// Thành:
import type { NguHanhData } from '../types';
```

### 5.2. ❌ Lỗi: Tailwind CSS v4 Compatibility

**Lỗi:**
```
Cannot apply unknown utility class 'from-slate-50'
PostCSS plugin error
```

**Giải pháp:**
```bash
# Uninstall Tailwind v4
npm uninstall tailwindcss @tailwindcss/postcss

# Install Tailwind v3
npm install -D tailwindcss@^3

# Verify postcss.config.js
# Phải dùng 'tailwindcss' chứ không phải '@tailwindcss/postcss'
```

**File `postcss.config.js` đúng:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5.3. ❌ Lỗi: Cloudflare Build - ENOENT package.json

**Lỗi:**
```
npm error path /opt/buildhome/repo/package.json ENOENT
```

**Nguyên nhân:** Files nằm ở subfolder thay vì root

**Giải pháp:**
1. Move tất cả files từ subfolder lên root directory
2. Trong Cloudflare Pages Settings:
   - **Root directory:** `/` (không phải `/hoc-tu-tru`)
3. Redeploy

### 5.4. ❌ Lỗi: Git Authentication Failed

**Lỗi:**
```
fatal: could not read Username for 'https://github.com'
```

**Giải pháp:**

```bash
# Đổi từ HTTPS sang SSH
git remote set-url origin git@github.com:USERNAME/hoc-tu-tru.git

# Verify
git remote -v
```

### 5.5. ❌ Lỗi: Missing TypeScript Compiler

**Lỗi:**
```
Error: Cannot find module '../lib/tsc.js'
```

**Giải pháp:**
```bash
# Remove và reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### 5.6. ❌ Lỗi: Build thành công nhưng trang trắng

**Kiểm tra:**

1. **Routing issue:**
   - Vite dùng client-side routing
   - Cloudflare Pages cần `_redirects` file cho SPA

   **Tạo file `public/_redirects`:**
   ```
   /*    /index.html   200
   ```

2. **Base URL issue trong `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/', // Phải là '/' cho custom domain
     plugins: [react()],
   })
   ```

### 5.7. ⚠️ Lưu ý về Cache

**Sau khi deploy:**
- Nếu thấy trang cũ, hard refresh: `Ctrl + Shift + R` (Windows) hoặc `Cmd + Shift + R` (Mac)
- Hoặc clear browser cache

**Trong Cloudflare:**
- Vào **Caching** → **Purge Cache** → **Purge Everything** (nếu cần)

---

## 6. Commands Cheat Sheet

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Git
```bash
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to GitHub (auto-deploy)
git log --oneline    # View commit history
```

### Deployment
```bash
# Sau mỗi lần code:
git add .
git commit -m "Feature: description of changes"
git push

# Cloudflare tự động:
# 1. Detect push
# 2. Run npm install
# 3. Run npm run build
# 4. Deploy to production
# 5. Invalidate cache
```

---

## 7. Useful URLs

### Development
- Local dev: `http://localhost:5173`
- Vite docs: https://vitejs.dev/
- React docs: https://react.dev/
- Tailwind docs: https://tailwindcss.com/

### Production
- Production: `https://tutru.checkvarip.pro`
- Cloudflare Pages: `https://hoc-tu-tru.pages.dev`
- Cloudflare Dashboard: https://dash.cloudflare.com/

### Repository
- GitHub repo: `https://github.com/USERNAME/hoc-tu-tru`

---

## 8. Workflow Summary

```
┌─────────────────┐
│  1. Code Local  │
│   npm run dev   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   2. Git Add    │
│   git add .     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. Git Commit  │
│ git commit -m   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   4. Git Push   │
│    git push     │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│  5. Cloudflare Auto:    │
│  - Detect push          │
│  - npm install          │
│  - npm run build        │
│  - Deploy /dist         │
│  - Invalidate cache     │
│  - Live in ~2-3 mins    │
└─────────────────────────┘
```

---

## 9. Best Practices

### Code
- ✅ Luôn dùng `import type` cho TypeScript types
- ✅ Test local trước khi push: `npm run build && npm run preview`
- ✅ Giữ component nhỏ, dễ maintain
- ✅ Dùng TypeScript strict mode

### Git
- ✅ Commit messages rõ ràng: `Feature: add flashcard flip animation`
- ✅ Commit thường xuyên, mỗi feature một commit
- ✅ Push sau khi test kỹ local
- ✅ Không commit `node_modules`, `dist`, `.env`

### Deployment
- ✅ Verify build success trên Cloudflare dashboard
- ✅ Test production URL sau mỗi deploy
- ✅ Monitor deployment logs nếu có lỗi
- ✅ Dùng environment variables cho sensitive data (nếu có)

---

## 10. Tech Stack Summary

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Framework | React | 18 | UI library |
| Language | TypeScript | 5 | Type safety |
| Build Tool | Vite | 7 | Fast dev & build |
| Styling | Tailwind CSS | 3 | Utility-first CSS |
| Animation | Framer Motion | Latest | Smooth animations |
| Icons | Lucide React | Latest | Icon library |
| Hosting | Cloudflare Pages | - | Static hosting |
| Version Control | Git + GitHub | - | Code management |
| Domain | Cloudflare DNS | - | Custom domain |

---

## Kết luận

Setup này đảm bảo:
- ✅ Development environment ổn định
- ✅ TypeScript type-safe
- ✅ Git workflow rõ ràng
- ✅ Auto-deployment từ GitHub → Cloudflare
- ✅ Custom domain hoạt động
- ✅ Production-ready

**Mọi thay đổi chỉ cần:**
1. Code
2. Test local
3. Git push
4. Đợi 2-3 phút → Live!

---

*Tài liệu này được tạo cho dự án Học Tứ Trụ - Phase 1 (Ngũ Hành)*
*Cập nhật lần cuối: 2025-10-08*
